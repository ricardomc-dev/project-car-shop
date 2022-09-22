import { Request, Response } from 'express';

class UserController {
  constructor(private service: any) {
    this.service = service;
  }

  async register(req: Request, res: Response) {
    try {
      const user = await this.service.register(req.body);

      return res.status(201).json(user);
    } catch (error) {
      const newError = error as Error;
      return res.status(400).json({ error: newError.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const token = await this.service.login(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      const newError = error as Error;

      return res.status(400).json({ error: newError.message });
    }
  }
}

export default UserController;
