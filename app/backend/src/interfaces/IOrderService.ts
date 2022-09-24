import { IOrder } from "./IOrder";

export interface IOrderService {
  createOrder(_id: number | undefined, obj: IOrder): Promise<object>,
  readOrders(): Promise<object[]>,
  readOneOrder(_id: string): Promise<object | null>,
  updateOrder(_id: string, obj: object): Promise<void>,
}
