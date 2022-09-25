import UserModel from "../database/models/User";
import { IAdminService } from "../interfaces/IAdminService";
import { IUser } from "../interfaces/IUser";

class AdminService implements IAdminService {
  constructor(private userValidator: any) {
    this.userValidator = userValidator;
  }

  async createUser(data: any): Promise<object> {
    this.userValidator.valid(data)

    const validEmail = await UserModel.findOne({ where: { email: data.email } });

    if (validEmail) {
      throw new Error('email is used');
    }

    const user = await UserModel.create(data);

    return user;
  }

  async readUsers(): Promise<object[]> {
    const users = await UserModel.findAll();
    return users;
  }

  async deleteUser(id: string): Promise<void> {
    const deleteUser = await UserModel.destroy({
      where: { id }
    })

    if (!deleteUser) throw new Error('UserNotFound');
  }
}

export default AdminService;
