import { Router, Request, Response } from 'express';
import UserService from '../services/user-service';
import UserController from '../controllers/user-controller';
import UserValidator from '../utils/user-validator';
import TokenGenerator from '../utils/token-generator';

const emailValidator = new UserValidator();
const tokenGenerator = new TokenGenerator();
const service = new UserService(emailValidator, tokenGenerator);
const controller = new UserController(service);

const registerRoute = Router();
const loginRoute = Router();

registerRoute.post('/', (req: Request, res: Response) => {
  controller.register(req, res);
});

loginRoute.post('/', (req: Request, res: Response) => {
  controller.login(req, res);
});

export {
  registerRoute,
  loginRoute
};
