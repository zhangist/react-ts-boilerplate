import axios from "axios";
import { RequestConfig } from "../interfaces/requestConfig";

/**
 * http service
 */
export class HttpService {
  /**
   * request
   */
  public static async request<T = any>(config: RequestConfig): Promise<T> {
    try {
      const response = await axios(config);
      return new Promise<T>(resolve => resolve(response.data));
    } catch (error) {
      return new Promise<T>((resolve, reject) => reject(error));
    }
  }

  private constructor() {}
}
