const express = require('express');
const { validateTask, errorHandlers } = require('./middleware');
const { taskController } = require('./controllers');

const app = express();

app.use(express.json());

//create task
app.post('/task', validateTask.validateOnCreate, taskController.createTask);

app
  .route('/tasks/:taskId')
  .get(taskController.getTask) //read task
  .patch(validateTask.validateOnUpdate, taskController.updateTask) //update task
  .delete(taskController.removeTask); //delete task

//read tasks
//http://localhost:3000/tasks/20
app.route('/tasks').get(taskController.getAllTasks);

app.get('/user/*/*', (req, res) => {
  console.log('req.params[0]: ', req.params[0]);
  console.log('req.params[0]: ', req.params[1]);
});

//error handler
app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

module.exports = app;
