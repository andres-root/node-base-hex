import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../adapters/output/db/db";


export interface JobAttributes {
  id: number;
  title?: string;
  description?: string;
  data: string;
  runAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface JobInput extends Optional<JobAttributes, "id" | "title"> {}
export interface JobOutput extends Required<JobAttributes> {}

class Job extends Model<JobAttributes, JobInput> implements JobAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public data!: string;
  public runAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "not-specified",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    runAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: true,
    paranoid: true,
  },
);

export default Job;
