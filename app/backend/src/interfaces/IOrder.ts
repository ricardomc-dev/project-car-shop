export interface IOrder {
  userId?: number;
  sellerId?: number;
  vehicleId: number;
  status: string;
}

export interface IOrderBody extends IOrder {
  sellerName: string;
}
