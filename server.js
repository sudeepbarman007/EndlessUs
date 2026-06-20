const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 5500;
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const notesCollection = db.collection('notes');

const app = express();
app.use(cors());
app.use(express.json());

// serve static site
app.use(express.static(path.join(__dirname)));

// create HTTP server so we can attach WebSocket server to same port
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/ws' });

function broadcast(msg) {
  const s = typeof msg === 'string' ? msg : JSON.stringify(msg);
  wss.clients.forEach((c) => {
    if (c.readyState === WebSocket.OPEN) {
      try { c.send(s); } catch (e) {}
    }
  });
}

wss.on('connection', async (ws) => {
  try {
    const notes = await readNotes();
    ws.send(JSON.stringify({ type: 'update', notes }));
  } catch (e) {
    console.error(e);
  }

  ws.on('message', () => {});
});

async function readNotes() {
  try {
    const snapshot = await notesCollection.orderBy('ts', 'asc').get();
    return snapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.error('readNotes error', e);
    return [];
  }
}


// GET all notes
app.get('/api/notes', async (req, res) => {
  const notes = await readNotes();
  res.json(notes);
});

// POST a new note (body: note object)
app.post('/api/notes', async (req, res) => {
  const note = req.body;

  if (!note || !note.id || !note.msg) {
    return res.status(400).json({ error: 'Invalid note' });
  }
  try {
    await notesCollection.doc(String(note.id)).set(note);
    const notes = await readNotes();
    broadcast({ type: 'update', notes });
    res.json(notes);
  } catch (e) {
    console.error('POST /api/notes error', e);
    res.status(500).json({ error: 'Write failed' });
  }
});

// DELETE a note by id (requires owner in body)
app.delete('/api/notes/:id', async (req, res) => {
  const id = String(req.params.id);
  const owner = req.body && req.body.owner;

  if (!id) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  try {
    const docRef = notesCollection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Not found' });
    }

    const target = doc.data();

    if (!owner || target.owner !== owner) {
      return res.status(403).json({ error: 'Not allowed' });
    }

    await docRef.delete();

    const notes = await readNotes();
    broadcast({ type: 'update', notes });

    res.json(notes);
  } catch (e) {
    console.error('DELETE /api/notes/:id error', e);
    res.status(500).json({ error: 'Delete failed' });
  }
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
