import { NextFunction, Request, Response } from 'express';

class UserController {
  constructor(private service: any) {
    this.service = service;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.register(req.body);

      return res.status(201).json(user);
    } catch (error) {
      next(error)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.service.login(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      next(error)
    }
  }
}

export default UserController;
