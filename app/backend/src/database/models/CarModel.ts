import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ICarModel } from '../../interfaces/ICarModel';
import Brand from './Brand';
import Group from './Group';

class CarModel extends Model implements ICarModel {
  public id!: number;
  public car_model_name!: string;
  public brand_id!: number;
  public group_id!: number;
  public url_image!: string;
}

CarModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    car_model_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'car-models',
  },
);

CarModel.hasMany(Brand, { foreignKey: 'brand_id', as: 'brand' });
CarModel.hasMany(Group, { foreignKey: 'group_id', as: 'group' });

export default CarModel;