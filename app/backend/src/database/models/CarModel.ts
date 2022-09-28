import { DataTypes, Model } from 'sequelize';
import db from '.';
import { ICarModel } from '../../interfaces/ICarModel';
import Brand from './Brand';
import Group from './Group';

class CarModel extends Model implements ICarModel {
  public id!: number;
  public carModelName!: string;
  public brandId!: number;
  public groupId!: number;
  public urlImage!: string;
}

CarModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    carModelName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    brandId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    urlImage: {
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

// CarModel.hasMany(Brand, { foreignKey: 'brand_id', as: 'brand' });
// CarModel.hasMany(Group, { foreignKey: 'group_id', as: 'group' });

export default CarModel;