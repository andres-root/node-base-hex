import { Job, History } from "../../../core/models";

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = async () => {
  try {
    await Job.sync({ force: isTest, alter: isDev || isTest });
    await History.sync({ force: isTest, alter: isDev || isTest });
  } catch (error) {
    console.error('error initializing db:', error);
    throw error;
  }
};
export default dbInit;
