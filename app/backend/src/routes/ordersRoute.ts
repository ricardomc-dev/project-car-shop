import { Router, Request, Response, NextFunction } from 'express';
import OrderService from '../services/order-service';
import OrderController from '../controllers/order-controller';
import Token from '../utils/token';
import OrderValidator from '../utils/order-validator';

const orderValidator = new OrderValidator();
const service = new OrderService(orderValidator);
const controller = new OrderController(service);

const token = new Token();

const ordersRoute = Router();

// Registra um pedido
ordersRoute.post('/', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.createOrder(req, res, next);
});

// Recupera todos os pedidos
ordersRoute.get('/', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readOrders(req, res, next);
});

// Recupera dados de um pedido
ordersRoute.get('/:id', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.readOneOrder(req, res, next);
});

// Atualiza dados de um pedido
ordersRoute.put('/:id', token.validate,
  (req: Request, res: Response, next: NextFunction) => {
  controller.updateOrder(req, res, next);
});

export default ordersRoute;
