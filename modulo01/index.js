const express = require("express");
const server = express();

//tells express to read json
server.use(express.json());

//CRUD - Create, Read, Update e Delete

//Method get localhost:3333/teste
//req = dados da requisição

//Query Params = ?teste=1
//Route Params = /user/1 | /user/:id
//Request Body = { message: "vai" }

const users = ["patricia", "adriano", "murilo"];

//Middlewheres
server.use((req, res, next) => {
  console.log(`metodo: ${req.method} url: ${req.url}`);
  console.time("Request");

  //Execute next
  next();
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is requ ired" });
  }
  return next();
}
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "user does not exist" });
  }
  //add new variable called userr
  req.user = user;

  return next();
}
//get all
server.get("/users", (req, res) => {
  return res.json(users);
});
//get a user
server.get("/users/:index", checkUserInArray, (req, res) => {
  //get object "id" of req.params
  /* const { index } = req.params;  not necessarios as checkUserInArrays tells "req.user" with his index*/
  return res.json(req.user);
});
//Cria usuario
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

//Adiciona usuário
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users.splice(index, 1);

  return res.json(users);
});
server.listen(3333);
