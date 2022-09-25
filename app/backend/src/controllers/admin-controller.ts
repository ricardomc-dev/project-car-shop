import { Request, Response, NextFunction } from 'express';
import { IAdminService } from '../interfaces/IAdminService';

class AdminController {
  constructor(private adminService: IAdminService) {
    this.adminService = adminService;
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.adminService.createUser(req.body);

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async readUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.adminService.readUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.adminService.deleteUser(id);
      return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}

export default AdminController;
