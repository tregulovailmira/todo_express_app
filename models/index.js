module.exports.Task = require('./task.model');
const Task = require('./task.model');

const { Client } = require('pg');

const dbConfig = {
  database: 'todo_db',
  user: 'postgres',
  password: 'Bkmvbhf1995',
  host: '127.0.0.1',
  port: 5432,
};
const client = new Client(dbConfig);
Task.client = client;

client.connect(() => {
  console.log('Connected to PostgreSQL');
});

process.on('beforeExit', () => {
  client.end();
});

module.exports = Task;
