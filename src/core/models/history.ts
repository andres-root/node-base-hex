import { Model, DataTypes, Optional } from 'sequelize';
import Job from "./job";
import db from "../../adapters/output/db/db";


export interface HistoryAttributes {
  id: number;
  jobId: number;
  status: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface HistoryInput extends Optional<HistoryAttributes, 'id'> {}
export interface HistoryOutput extends Required<HistoryAttributes> {}

class History extends Model<HistoryAttributes, HistoryInput> implements HistoryAttributes {
  public id!: number;
  public jobId!: number;
  public status!: string;
  public message!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      references: {
        model: Job,
        key: 'id',
      },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    timestamps: true,
    paranoid: true,

  }
);

Job.hasMany(History, { foreignKey: 'jobId', as: 'histories' });
History.belongsTo(Job, { foreignKey: 'jobId', as: 'job' });

export default History;
