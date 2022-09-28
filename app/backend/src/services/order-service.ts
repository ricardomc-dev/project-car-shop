import Order from "../database/models/Order";
import User from "../database/models/User";
import { IOrder, IOrderBody } from "../interfaces/IOrder";
import { IOrderService } from "../interfaces/IOrderService";

class OrderService implements IOrderService {
  constructor(private orderValidator: any) {
    this.orderValidator = orderValidator;
  }

  async createOrder(userId: number | undefined, data: IOrderBody): Promise<object> {
    this.orderValidator.valid(data)

    const seller = await User.findOne({ where: { name: data.sellerName } });
    const sellerId = seller?.id;

    const { id, vehicleId, status } = await Order.create({
      userId,
      sellerId,
      vehicleId: data.vehicleId,
      status: data.status,
    });
    
    const newOrder = {
      id,
      userId,
      sellerId,
      vehicleId,
      status,
    }

    return newOrder;
  }

  async readOrders(): Promise<object[]> {
    const orders = await Order.findAll();
    return orders;
  }

  async readOneOrder(id: string): Promise<object | null> {
    const order = await Order.findOne({ where: { id }});
    if (!order) throw new Error('OrderNotFound');
    return order;
  }

  async updateOrder(id: string, data: IOrder): Promise<void> {
    const [updateOrder] = await Order.update(
      { status: data.status },
      { where: { id } }
    )

    if (!updateOrder) throw new Error('OrderNotFound');
  }
}

export default OrderService;
