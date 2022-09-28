import { Response, NextFunction } from 'express';
import { IUser, RequestUser } from '../interfaces/IUser';
import { IOrderService } from '../interfaces/IOrderService';
import { IOrder, IOrderBody } from '../interfaces/IOrder';

class OrderController {
  constructor(private orderService: IOrderService) {
    this.orderService = orderService;
  }

  async createOrder(req: RequestUser, res: Response, next: NextFunction) {
    try {
      const customer = req.user as IUser;
      const userId: number | undefined = customer.id;
      const data = req.body as IOrderBody;
      const newOrder = await this.orderService.createOrder(userId, data)
      return res.status(200).json(newOrder)
    } catch (error) {
      next(error);
    }
  }

  async readOrders(_req: RequestUser, res: Response, next: NextFunction) {
    try {
      const orders = await this.orderService.readOrders();
      return res.status(200).json(orders);
    } catch (error) {
      next(error)
    }
  }

  async readOneOrder(req: RequestUser, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const order = await this.orderService.readOneOrder(id);
      return res.status(200).json(order);
    } catch (error) {
      next(error)
    }
  }

  async updateOrder(req: RequestUser, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body as IOrder;
      await this.orderService.updateOrder(id, data);
      return res.status(200).json({ message: 'Status atualizado com sucesso!' });
    } catch (error) {
      next(error)
    }
  }

}

export default OrderController;
