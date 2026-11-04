# Mini Message Board

<div align="center">

A small message board built with Express and EJS. Post a message, read others, open any message for its full text.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![EJS](https://img.shields.io/badge/EJS-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=white)

[Live Demo](https://top-project-mini-message-board.onrender.com/) - [View Code](https://github.com/BatetDev/top-project-mini-message-board)

</div>

## 📖 About

A message board where visitors post a message with their name and read what others have written. Built as part of The Odin Project's Node curriculum to practice Express routing, middleware, route parameters, and server-side templating.

## 🛠️ Built With

- [Node.js](https://nodejs.org/) as the runtime
- [Express](https://expressjs.com/) for routing and middleware
- [EJS](https://ejs.co/) for server-rendered templates
- JavaScript (ES6+), CommonJS modules

## 🚀 Getting Started

```bash
git clone https://github.com/BatetDev/top-project-mini-message-board.git
cd top-project-mini-message-board
npm install
npm start
```

Runs on http://localhost:3000. Use npm run dev to auto-restart on file changes.

## ⚠️ Data Persistence

Messages live in an in-memory array — no database. Restarting the server resets the board to its three sample messages, and on Render's free tier posts are lost when the service sleeps.

## 📜 Credits

- Original project by: [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)
