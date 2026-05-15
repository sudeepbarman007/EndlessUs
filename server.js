const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const DATA_FILE = path.join(__dirname, 'notes.json');
const PORT = process.env.PORT || 5500;

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

wss.on('connection', (ws) => {
  // send current notes snapshot immediately
  try {
    ws.send(JSON.stringify({ type: 'update', notes: readNotes() }));
  } catch (e) {}

  ws.on('message', (msg) => {
    // no-op for now; reserved for future (pings/commands)
  });
});

function readNotes() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const s = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(s || '[]');
  } catch (e) {
    console.error('readNotes error', e);
    return [];
  }
}

function writeNotes(notes) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('writeNotes error', e);
    return false;
  }
}

// GET all notes
app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// POST a new note (body: note object)
app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (!note || !note.id || !note.msg) return res.status(400).json({ error: 'Invalid note' });
  const notes = readNotes();
  notes.push(note);
  // keep last 200
  const out = notes.length > 200 ? notes.slice(-200) : notes;
  if (!writeNotes(out)) return res.status(500).json({ error: 'Write failed' });
  // broadcast updated list to connected clients
  broadcast({ type: 'update', notes: out });
  res.json(out);
});

// DELETE a note by id (requires owner in body)
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const owner = req.body && req.body.owner;
  if (!id) return res.status(400).json({ error: 'Invalid id' });
  const notes = readNotes();
  const target = notes.find(n => n.id === id);
  if (!target) return res.status(404).json({ error: 'Not found' });
  if (!owner || target.owner !== owner) return res.status(403).json({ error: 'Not allowed' });
  const out = notes.filter(n => n.id !== id);
  if (!writeNotes(out)) return res.status(500).json({ error: 'Write failed' });
  // broadcast updated list to connected clients
  broadcast({ type: 'update', notes: out });
  res.json(out);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
