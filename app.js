const express = require('express');

const app = express();

app.use(express.json());

//create task
app.post('/task');

//read task
app.get('/tasks/:taskId', (req, res) => {
  console.log('taskId: ', req.params.taskId);
});

//read tasks
//http://localhost:3000/tasks/20
app.get('tasks');

//update task
app.patch('/tasks/:taskId');

//delete task
app.delete('/tesks/taskId');

//error handler
app.use((error, req, res, next) => {
  res.status(error?.status ?? 500).send({
    message: error?.message ?? 'Enternal server error',
  });
});

module.exports = app;
