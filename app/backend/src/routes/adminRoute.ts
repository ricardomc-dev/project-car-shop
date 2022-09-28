import { Router, Request, Response, NextFunction } from 'express';
import AdminService from '../services/admin-service';
import AdminController from '../controllers/admin-controller';
import Token from '../middlewares/token';
import UserValidator from '../utils/user-validator';

const userValidator = new UserValidator();
const service = new AdminService(userValidator);
const controller = new AdminController(service);

const token = new Token();

const adminRoute = Router();

// Registra um usuário
adminRoute.post('/manage', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createUser(req, res, next);
});

// Recupera todos os usuários
adminRoute.get('/manage', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readUsers(req, res, next);
});

// Deleta um usuário
adminRoute.delete('/manage/:id', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.deleteUser(req, res, next);
});

export default adminRoute;
