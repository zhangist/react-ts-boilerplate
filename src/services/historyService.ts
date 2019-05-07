import { createBrowserHistory } from "history";

const history = createBrowserHistory();

/**
 * history service
 */
export class HistoryService {
  /**
   * get history
   */
  public static getHistory() {
    return this.history;
  }

  private static history = history;
  private constructor() {}
}
