import { IUser } from "./IUser";

export interface IAdminService {
  createUser(obj: IUser): Promise<object>,
  readUsers(): Promise<object[]>,
  deleteUser(_id: string): Promise<void>,
}
