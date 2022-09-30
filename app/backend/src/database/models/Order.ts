import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IOrder } from '../../interfaces/IOrder';
import User from './User';
import Vehicle from './Vehicle';

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
    // userId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
    // sellerId: {
    //   allowNull: false,
    //   unique: true,
    //   type: DataTypes.INTEGER,
    // },
    // vehicleId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
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

Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Order.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
Order.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

User.hasMany(Order, { foreignKey: 'userId', as: 'user' });
User.hasMany(Order, { foreignKey: 'sellerId', as: 'seller' });
Vehicle.hasOne(Order, { foreignKey: 'vehicleId', as: 'vehicle' });

export default Order;
