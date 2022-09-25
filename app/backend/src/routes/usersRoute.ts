import { Router, Request, Response } from 'express';
import UserService from '../services/user-service';
import UserController from '../controllers/user-controller';
import UserValidator from '../utils/user-validator';
import Token from '../middlewares/token';

const emailValidator = new UserValidator();
const token = new Token();
const service = new UserService(emailValidator, token);
const controller = new UserController(service);

const registerRoute = Router();
const loginRoute = Router();

// Registra um usuário
registerRoute.post('/', (req: Request, res: Response) => {
  controller.register(req, res);
});

// Registra login de usuário
loginRoute.post('/', (req: Request, res: Response) => {
  controller.login(req, res);
});

export {
  registerRoute,
  loginRoute
};
