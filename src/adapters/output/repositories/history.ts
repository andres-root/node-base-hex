import { History } from "../../../core/models";
import { HistoryInput, HistoryOutput } from "../../../core/models/history";
import { HistoryOutputPort } from "../../../ports/output/history";
import db from "../db/db";


export class HistoryRepository implements HistoryOutputPort {
  async createHistory(history: HistoryInput): Promise<HistoryOutput> {
    try {
      const result = await db.transaction(async (transaction) => {
        const newHistory = await History.create(history, {transaction});
        return newHistory;
      });

      return result;
    } catch (error) {
      console.log("transactin rolled back");
      throw error;
    }
  }

  async updateHistory(id: number, payload: Partial<HistoryInput>): Promise<HistoryOutput> {
    try {
      const result = await db.transaction(async (transaction) => {
        const history = await History.findByPk(id);
        if (!history) {
          throw new Error("history not found");
        }
        const updatedHistory = await (history as History).update(payload, {transaction});
        return updatedHistory;
      });

      return result;
    } catch (error) {
      console.log("transactin rolled back");
      throw error;
    }
  }

  async getHistoryById(id: number): Promise<HistoryOutput> {
    try {
      const history = await History.findByPk(id);
      if (!history) {
        throw new Error("history not found");
      }
      return history;
    } catch (error) {
      console.error('error fetching history:', error);
      throw error;
    }
  }

  async deleteHistoryById(id: number): Promise<boolean> {
    try {
      const deletedHistoryCount = await History.destroy({
        where: { id },
      });
      return !!deletedHistoryCount;
    } catch (error) {
      console.error('error deleting history:', error);
      throw error;
    }
  }

  async getAllHistory(): Promise<HistoryOutput[]> {
    try {
      const historys = await History.findAll();
      return historys;
    } catch (error) {
      console.error('error fetching history:', error);
      throw error;
    }
  }
}
