const http = require('http');
const app = require('./app.js');

PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server is running');
});
