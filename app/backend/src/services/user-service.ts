import UserModel from '../database/models/User';

class UserService {
  
  constructor(private userValidator: any, private token: any) {
    this.userValidator = userValidator;
    this.token = token;
  }

  async register(body: any) {
    this.userValidator.valid(body);

    const validEmail = await UserModel.findOne({ where: { email: body.email } });

    if (validEmail) {
      throw new Error('email is used');
    }

    const user = await UserModel.create(body);

    return user;
  }

  async login({ email, password }: any) {
    
    const user = await UserModel
      .findOne({ where: { email, password }, attributes: { exclude: ['password'] } });

    if (!user) {
      throw new Error('Invalid User');
    }

    const token = this.token.generate({ id: user.id, role: user.role });

    return token;
  }
}

export default UserService;
