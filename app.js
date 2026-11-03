const express = require('express');
const app = express();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amado',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'Greetings Mars!',
    user: 'Cosimus',
    added: new Date(),
  },
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { messages });
});
app.get('/new', (req, res) => res.render('new'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
