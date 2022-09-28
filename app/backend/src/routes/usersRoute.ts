import { Router, Request, Response, NextFunction } from 'express';
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
registerRoute.post('/', (req: Request, res: Response, next: NextFunction) => {
  controller.register(req, res, next);
});

// Registra login de usuário
loginRoute.post('/', (req: Request, res: Response, next: NextFunction) => {
  controller.login(req, res, next);
});

export {
  registerRoute,
  loginRoute
};
