import { Router, Request, Response, NextFunction } from 'express';
import ConfigService from '../services/config-service';
import ConfigController from '../controllers/config-controller';
import ConfigValidator from '../utils/config-validator';
import Token from '../utils/token';

const configValidator = new ConfigValidator();
const service = new ConfigService(configValidator);
const controller = new ConfigController(service);

const token = new Token();

const configRoute = Router();

// Registra um grupo de veículos
configRoute.post('/groups', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createGroup(req, res, next);
});

// Recupera todos os grupos de veículos
configRoute.get('/groups', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readGroups(req, res, next);
});

// Registra uma marca de veículos
configRoute.post('/brands', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createBrand(req, res, next);
});

// Recupera todos as marcas de veículos
configRoute.get('/brands', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readBrands(req, res, next);
});

// Registra uma cor de veículos
configRoute.post('/colors', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createColor(req, res, next);
});

// Recupera todos as cores de veículos
configRoute.get('/colors', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readColors(req, res, next);
});

// Registra um modelo de veículos
configRoute.post('/models', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createCarModel(req, res, next);
});

// Recupera todos os modelos de veículos
configRoute.get('/models', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readCarModels(req, res, next);
});

export default configRoute;
