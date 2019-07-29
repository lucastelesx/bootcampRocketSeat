const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ messsage: 'vaiqdeu'});

})

module.exports = routes;