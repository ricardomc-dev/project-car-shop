import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IUser } from '../../interfaces/IUser';

class User extends Model implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'users',
  },
);

export default User;