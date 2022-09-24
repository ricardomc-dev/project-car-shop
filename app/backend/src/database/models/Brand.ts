import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IBrand } from '../../interfaces/IBrand';

class Brand extends Model implements IBrand {
  public id!: number;
  public brandName!: string;
}

Brand.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    brandName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'brands',
  },
);

export default Brand;