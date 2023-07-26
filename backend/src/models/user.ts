import { Model, DataTypes, BelongsTo } from 'sequelize';
import { DB } from '../config/db';
import{ UserRole } from './userRole';
const sequelize = new DB().getSequelize();

export class User extends Model {
 
  public id!: number;
  public full_name!: string;
  public email!: string;
  public password!: string;
  public address!: string;
  public city!: string;
  public phone!: string;

  public readonly userRole?: UserRole; // Optional association
  public static associations: {
    userRole: BelongsTo<User, UserRole>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true,
      }
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    user_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: true,
  },
);

User.belongsTo(UserRole, { foreignKey: 'user_role_id', as: 'userRole' });

export async function syncUserModel(): Promise<void> {
  await User.sync({ force: true });
}