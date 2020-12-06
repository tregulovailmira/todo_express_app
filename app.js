const express = require('express');
const { validateTask } = require('./middleware');
const { taskController } = require('./controllers');

const app = express();

app.use(express.json());

//create task
app.post('/task', validateTask.validateOnCreate, taskController.createTask);

app
  .route('/tasks/:taskId')
  .get() //read task
  .patch(validateTask.validateOnUpdate) //update task
  .delete(); //delete task

//read tasks
//http://localhost:3000/tasks/20
app.get('tasks');

app.get('/user/*/*', (req, res) => {
  console.log('req.params[0]: ', req.params[0]);
  console.log('req.params[0]: ', req.params[1]);
});

//error handler
app.use((error, req, res, next) => {
  res.status(error?.status ?? 500).send({
    message: error?.message ?? 'Enternal server error',
  });
});

module.exports = app;
