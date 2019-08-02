<<<<<<< HEAD
import { Router } from 'express';
=======
const { Router } = require('express');
>>>>>>> 3f4e4501b9c7d22c167bd7fd15096cabca52b126

const routes = new Router();

routes.get('/', (req, res) => {
<<<<<<< HEAD
  return res.json({ message: 'hello man' });
});

export default routes;
=======
  return res.json({ messsage: 'vaiqdeu'});

})

module.exports = routes;
>>>>>>> 3f4e4501b9c7d22c167bd7fd15096cabca52b126
