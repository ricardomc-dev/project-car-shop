import { IVehicleBody } from "./IVehicle";

export interface IVehicleService {
  createVehicle(obj: IVehicleBody): Promise<object>,
  readVehicles(): Promise<object[]>,
  readOneVehicle(_id: string): Promise<object | null>,
  updateVehicle(_id: string, obj: object): Promise<void>,
}
