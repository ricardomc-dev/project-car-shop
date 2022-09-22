import { Router, Request, Response } from 'express';
import UserService from '../services/user-service';
import UserController from '../controllers/user-controller';

const registerRoute = Router();
const loginRoute = Router();

registerRoute.post('/register', (req: Request, res: Response) => {
  new UserController(UserService).register(req, res);
});

loginRoute.post('/login', (req: Request, res: Response) => {
  new UserController(UserService).login(req, res);
});

export {
  registerRoute,
  loginRoute
};