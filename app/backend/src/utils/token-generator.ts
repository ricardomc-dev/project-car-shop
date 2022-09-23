import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const jwtConfig:object = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

class TokenGenerator {
  generate(data: IUser): string {
    const token = jwt.sign({ id: data.id, role: data.role }, JWT_SECRET, jwtConfig);

    return token;
  }
}

export default TokenGenerator;
