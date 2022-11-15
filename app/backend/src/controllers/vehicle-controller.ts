import { Request, Response, NextFunction } from 'express';
import { IVehicleService } from '../interfaces/IVehicleService';
import { IVehicleBody } from '../interfaces/IVehicle';

class VehicleController {
  constructor(private vehicleService: IVehicleService) {
    this.vehicleService = vehicleService;
  }

  async createVehicle(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as IVehicleBody;
      const newVehicle = await this.vehicleService.createVehicle(data)
      return res.status(201).json(newVehicle)
    } catch (error) {
      next(error);
    }
  }

  async readVehicles(_req: Request, res: Response, next: NextFunction) {
    try {
      const vehicles = await this.vehicleService.readVehicles();
      return res.status(200).json(vehicles);
    } catch (error) {
      next(error)
    }
  }

  async readOneVehicle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const vehicle = await this.vehicleService.readOneVehicle(Number(id));
      return res.status(200).json(vehicle);
    } catch (error) {
      next(error)
    }
  }

  async updateVehicle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body as IVehicleBody;
      await this.vehicleService.updateVehicle(Number(id), data);
      return res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
    } catch (error) {
      next(error)
    }
  }

}

export default VehicleController;