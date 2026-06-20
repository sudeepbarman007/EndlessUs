const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 5500;
const serviceAccount = require('./endlessus-8e245-firebase-adminsdk-fbsvc-e07dccacbe.json');

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

async function writeNotes(notes) {
  try {
    const batch = db.batch();

    const existing = await notesCollection.get();
    existing.forEach(doc => batch.delete(doc.ref));

    notes.forEach(note => {
      const ref = notesCollection.doc(String(note.id));
      batch.set(ref, note);
    });

    await batch.commit();
    return true;
  } catch (e) {
    console.error('writeNotes error', e);
    return false;
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

  const notes = await readNotes();
  notes.push(note);

  const ok = await writeNotes(notes);

  if (!ok) {
    return res.status(500).json({ error: 'Write failed' });
  }

  broadcast({ type: 'update', notes });
  res.json(notes);
});

// DELETE a note by id (requires owner in body)
app.delete('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const owner = req.body && req.body.owner;

  if (!id) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  const notes = await readNotes();

  const target = notes.find(n => n.id === id);

  if (!target) {
    return res.status(404).json({ error: 'Not found' });
  }

  if (!owner || target.owner !== owner) {
    return res.status(403).json({ error: 'Not allowed' });
  }

  const out = notes.filter(n => n.id !== id);

  const ok = await writeNotes(out);

  if (!ok) {
    return res.status(500).json({ error: 'Write failed' });
  }

  broadcast({ type: 'update', notes: out });

  res.json(out);
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
