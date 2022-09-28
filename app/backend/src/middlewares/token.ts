import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUser, RequestUser} from '../interfaces/IUser';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const jwtConfig:object = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

class Token {

  generate(data: IUser): string {
    const token = jwt.sign({ id: data.id, role: data.role }, JWT_SECRET, jwtConfig);

    return token;
  }

  validate = (req: RequestUser, _res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) throw new Error('invalid token');
      const secret = process.env.JWT_SECRET || 'secret_key';
      const decoded = jwt.verify(authorization, secret);
      req.user = decoded as IUser;
      next();
    } catch (error: any) {
      next(error);
    }
  }
}

export default Token;
