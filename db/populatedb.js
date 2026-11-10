#!/usr/bin/env node

const { Client } = require('pg');

const SQL = `
DROP TABLE IF EXISTS messages;
CREATE TABLE messages ( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, username VARCHAR(255), added TIMESTAMP DEFAULT NOW() );

INSERT INTO messages (text, username) 
VALUES
  ('Just got my first Express route responding. Small thing, big moment.', 'AmadoDev'),
  ('Spent 20 minutes chasing a bug that was a missing await. Read the stack trace, past me.', 'CharlesDoe1995'),
  ('Deployed to Render, waited 40 seconds for the free tier to wake up, and it worked.', 'CosimusVII');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
