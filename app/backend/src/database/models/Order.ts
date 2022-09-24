import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IOrder } from '../../interfaces/IOrder';

class Order extends Model implements IOrder {
  public id!: number;
  public userId!: number;
  public sellerId!: number;
  public vehicleId!: number;
  public status!: string;
}

Order.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    sellerId: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    vehicleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING(100),
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'orders',
  },
);

export default Order;
