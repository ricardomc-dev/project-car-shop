import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IVehicle } from '../../interfaces/IVehicle';
import CarModel from './CarModel';
import Color from './Color';

class Vehicle extends Model implements IVehicle {
  public id!: number;
  public license_plate!: string;
  public chassi!: string;
  public renavam!: number;
  public year!: number;
  public mileage!: number;
  public price!: number;
}

Vehicle.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    license_plate: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    chassi: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    renavam: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    mileage: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'vehicles',
  },
);

Vehicle.hasMany(CarModel, { foreignKey: 'car_model_id', as: 'car_model' });
Vehicle.hasMany(Color, { foreignKey: 'color_id', as: 'color' });

export default Vehicle;
