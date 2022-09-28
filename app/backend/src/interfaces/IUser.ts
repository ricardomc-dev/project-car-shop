import { Request } from 'express';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface RequestUser extends Request {
  user?: IUser;
}
