const express = require("express");
const server = express();
const link = "localhost:/3333";

server.use(express.json());

function checkProjectsInArray(req, res, next) {
  const project = projects[req.params.index];
  if (!project) {
    return res.status(400).json({ error: "project does not exist" });
  }
  //add new variable called userr
  req.user = user;

  return next();
}

const projects = {
  id: "1",
  title: "",
  tasks: []
};

//Middlewheres
server.use((req, res, next) => {
  console.log(`metodo: ${req.method} url: ${req.url}`);
  console.time("Request");

  //Execute next
  next();
  console.timeEnd("Request");
});

server.get("/projects", (req, res) => {});

server.post("", (req, res) => {});

server.post("", (req, res) => {});

server.delete("", (req, res) => {});

server.listen(3333, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
