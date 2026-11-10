#!/usr/bin/env node

const { Client } = require('pg');

const SQL = `
DROP TABLE IF EXISTS messages;
CREATE TABLE messages ( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, username VARCHAR(255), added TIMESTAMP DEFAULT NOW() );

INSERT INTO messages (text, username) 
VALUES
  ('Test message 1.', 'AmadoDev'),
  ('Test message 2.', 'CharlesDoe1995'),
  ('Test message 3.', 'CosimusVII');
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
