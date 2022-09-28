import Vehicle from "../database/models/Vehicle";
import Color from "../database/models/Color";
import CarModel from "../database/models/CarModel";
import { IVehicle, IVehicleBody } from "../interfaces/IVehicle";
import { IVehicleService } from "../interfaces/IVehicleService";

class VehicleService implements IVehicleService {
  constructor(private vehicleValidator: any) {
    this.vehicleValidator = vehicleValidator;
  }

  async createVehicle(data: IVehicleBody): Promise<object> {
    this.vehicleValidator.valid(data)

    const color = await Color.findOne({ where: { colorName: data.colorName }})
    const colorId = color?.id;

    const carModel = await CarModel.findOne({ where: { carModelName: data.carModelName }})
    const carModelId = carModel?.id;

    const { licensePlate, chassi, renavam, year, mileage, price} = data;

    const { id } = await Vehicle.create({
      licensePlate,
      chassi,
      renavam,
      year,
      carModelId,
      colorId,
      mileage,
      price,
    })

    const newVehicle = {
      id,
      licensePlate,
      chassi,
      renavam,
      year,
      carModelId,
      colorId,
      mileage,
      price,
    }

    return newVehicle;
  }

  async readVehicles(): Promise<object[]> {
    const vehicles = await Vehicle.findAll();
    return vehicles;
  }

  async readOneVehicle(id: string): Promise<object | null> {
    const vehicle = await Vehicle.findOne({ where: { id }});
    if (!vehicle) throw new Error('VehicleNotFound')
    return vehicle;
  }

  async updateVehicle(id: string, data: object): Promise<void> {
    const [updateVehicle] = await Vehicle.update(
      { ...data },
      { where: { id } }
    )
    if (!updateVehicle) throw new Error('VehicleNotFound')
  }
}

export default VehicleService;