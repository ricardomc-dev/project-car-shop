import { Router, Request, Response, NextFunction } from 'express';
import VehicleService from '../services/vehicle-service';
import VehicleController from '../controllers/vehicle-controller';
import Token from '../middlewares/token';
import VehicleValidator from '../utils/vehicle-validator';

const vehicleValidator = new VehicleValidator();
const service = new VehicleService(vehicleValidator);
const controller = new VehicleController(service);

const token = new Token();

const vehiclesRoute = Router();

// Registra um veículo
vehiclesRoute.post('/', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createVehicle(req, res, next);
});

// Recupera todos os veículos 
vehiclesRoute.get('/', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readVehicles(req, res, next);
});

// Recupera dados de um veículo
vehiclesRoute.get('/:id', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readOneVehicle(req, res, next);
});

// Atualiza dados de um veículo
vehiclesRoute.put('/:id', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.updateVehicle(req, res, next);
});

export default vehiclesRoute;
