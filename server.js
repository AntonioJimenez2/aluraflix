const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Nombre del archivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
