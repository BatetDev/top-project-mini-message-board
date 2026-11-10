const path = require('node:path');
const express = require('express');

const app = express();

const pool = require('./db/pool');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id');
  res.render('index', { messages: rows });
});

app.get('/new', (req, res) => res.render('form'));

app.post('/new', async (req, res) => {
  const { username, message } = req.body;
  await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [
    message,
    username,
  ]);
  res.redirect('/');
});

app.get('/message/:id', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    req.params.id,
  ]);
  res.render('message', { message: rows[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
