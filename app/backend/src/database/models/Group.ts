import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IGroup } from '../../interfaces/IGroup';

class Group extends Model implements IGroup {
  public id!: number;
  public groupName!: string;
}

Group.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    groupName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'groups',
  },
);

export default Group;