// proxy-server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// เปิด CORS ให้ทุก origin
app.use(cors());
app.use(express.json());

// URL ของ Google Apps Script Web App
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxg9ttxqVghEFasKv3uPrAwKOEocL9l3AuschP5HCVrf2PFErUQ7VpU0LsGoWOB1hM2tg/exec';

// Proxy POST ไปยัง Google Apps Script
app.post('/api/song-request', async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.text();
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

// Proxy GET (สำหรับดึงข้อมูลเพลง)
app.get('/api/song-list', async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL);
    const data = await response.text();
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
}); 