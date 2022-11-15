import { IVehicleBody } from "./IVehicle";

export interface IVehicleService {
  createVehicle(obj: IVehicleBody): Promise<object>,
  readVehicles(): Promise<object[]>,
  readOneVehicle(_id: number): Promise<object | null>,
  updateVehicle(_id: number, obj: object): Promise<void>,
}
