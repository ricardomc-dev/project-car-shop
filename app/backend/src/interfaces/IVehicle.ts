export interface IVehicle {
  id?: number;
  licensePlate: string;
  chassi: string;
  renavam: string;
  year: number;
  carModelId?: number;
  colorId?: number;
  mileage: number;
  price: number;
}

export interface IVehicleBody extends IVehicle {
  carModelName: string;
  colorName: string;
}
