import { Model, DataTypes } from 'sequelize';
import { DB } from '../config/db';
const sequelize = new DB().getSequelize();

export class UserRole extends Model {
  public id!: number;
  public role_type!: string;
  public is_active!: boolean;
}

UserRole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role_type: {
      type: DataTypes.ENUM,
      values: ['admin', 'user']
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: 'UserRole',
    tableName: 'user_roles',
    timestamps: false,
    underscored: true,
    paranoid: true,
  },
);


export async function syncUserModel(): Promise<void> {
  await UserRole.sync({ force: true });
}