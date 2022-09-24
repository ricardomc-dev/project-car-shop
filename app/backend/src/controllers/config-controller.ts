import { Request, Response, NextFunction } from 'express';
import { IConfigService } from '../interfaces/IConfigService';
import { IBrand } from '../interfaces/IBrand';
import { IGroup } from '../interfaces/IGroup';
import { IColor } from '../interfaces/IColor';
import { ICarModel } from '../interfaces/ICarModel';

class ConfigController {
  constructor(private configService: IConfigService) {
    this.configService = configService;
  }

  async createGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as IGroup;
      await this.configService.createGroup(data)
      return res.status(200).json({ message: 'Grupo cadastrado com sucesso!' })
    } catch (error) {
      next(error);
    }
  }

  async readGroups(_req: Request, res: Response, next: NextFunction) {
    try {
      const groups = await this.configService.readGroups();
      return res.status(200).json(groups);
    } catch (error) {
      next(error)
    }
  }

  async createBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as IBrand;
      await this.configService.createBrand(data)
      return res.status(200).json({ message: 'Marca cadastrada com sucesso!' })
    } catch (error) {
      next(error);
    }
  }

  async readBrands(_req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await this.configService.readBrands();
      return res.status(200).json(brands);
    } catch (error) {
      next(error)
    }
  }

  async createColor(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as IColor;
      await this.configService.createColor(data)
      return res.status(200).json({ message: 'Cor cadastrada com sucesso!' })
    } catch (error) {
      next(error);
    }
  }

  async readColors(_req: Request, res: Response, next: NextFunction) {
    try {
      const colors = await this.configService.readColors();
      return res.status(200).json(colors);
    } catch (error) {
      next(error)
    }
  }

  async createCarModel(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as ICarModel;
      await this.configService.createCarModel(data)
      return res.status(200).json({ message: 'Modelo cadastrado com sucesso!' })
    } catch (error) {
      next(error);
    }
  }

  async readCarModels(_req: Request, res: Response, next: NextFunction) {
    try {
      const carModels = await this.configService.readCarModels();
      return res.status(200).json(carModels);
    } catch (error) {
      next(error)
    }
  }
}

export default ConfigController;
