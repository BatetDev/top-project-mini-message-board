const path = require('node:path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const messages = [
  {
    text: "Just finished setting up my first Express server from scratch and honestly the feeling when that 'Server running on port 3000' line finally appeared was better than it had any right to be. Took me three tries, mostly because I kept forgetting to restart the process after editing app.js, and once because a stale node process from an hour earlier was still holding the port. If you are new to this: Ctrl+C before you edit, and check for stray processes before you start rewriting working code.",
    user: 'AmadoDev',
    added: new Date(),
  },
  {
    text: 'Anyone else find routing weirdly satisfying? You define a path, attach a function, and suddenly a URL does something. I spent twenty minutes yesterday just adding fake routes to watch them respond in the browser, none of which do anything useful. My app is basically a very confident hello world with delusions of grandeur. The part that actually surprised me was how much of the work is just ordering — middleware runs top to bottom, routes match in the order you register them, and a catch-all at the bottom will happily swallow everything above it if you are not paying attention. Small thing, big consequences.',
    user: 'CharlesDoe1995',
    added: new Date(),
  },
  {
    text: "Reminder to myself and anyone else new to this: read the error message before you start changing code. I spent half an hour rewriting a perfectly working route because the actual problem was a typo in a template filename. The stack trace told me exactly which file it could not find. I ignored it, assumed the route was broken, and made three unrelated changes before I went back and read the first line of the error. The lesson is not 'be smarter' — it is 'read the thing before you act on the thing'. Works for error messages, docs, and most of life honestly.",
    user: 'CosimusVII',
    added: new Date(),
  },
];

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { messages });
});
app.get('/new', (req, res) => res.render('form'));

app.post('/new', (req, res) => {
  const { username, message } = req.body;
  messages.push({
    text: message,
    user: username,
    added: new Date(),
  });
  res.redirect('/');
});

app.get('/message/:id', (req, res) => {
  const message = messages[Number(req.params.id)];
  res.render('message', { message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
