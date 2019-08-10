import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'lucas teles',
    email: 'lucas_telles25@hotmail.com',
    password_hash: 'coelho5552',
  });

  return res.json(user);
});

export default routes;
