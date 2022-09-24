import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IColor } from '../../interfaces/IColor';

class Color extends Model implements IColor {
  public id!: number;
  public colorName!: string;
}

Color.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    colorName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'colors',
  },
);

export default Color;