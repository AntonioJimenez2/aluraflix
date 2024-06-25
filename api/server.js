const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Asegúrate de que la ruta es correcta
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
