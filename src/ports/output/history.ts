import { HistoryInput, HistoryOutput } from "../../core/models/history";


export interface HistoryOutputPort {
  createHistory(history: HistoryInput): Promise<HistoryOutput>;
  updateHistory(id: number, payload: Partial<HistoryInput>): Promise<HistoryOutput>;
  getHistoryById(id: number): Promise<HistoryOutput>;
  deleteHistoryById(id: number): Promise<boolean>;
  getAllHistory(): Promise<HistoryOutput[]>;
}
