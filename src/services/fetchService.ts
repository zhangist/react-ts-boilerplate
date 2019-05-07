import { ApiResponse } from "../interfaces/fetchResponse";

/**
 * fetch service
 */
export class FetchService {
  /**
   * fetch
   * @param input RequestInfo
   * @param init RequestInit | undefined
   */
  public static async fetch<T>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<Response> {
    return fetch(input, init);
  }

  /**
   * fetch json
   * @param input RequestInfo
   * @param init RequestInit | undefined
   */
  public static async fetchJson<T>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<any> {
    try {
      const res = await this.fetch(input, init);
      const json = await res.json();
      return new Promise<any>(resolve => resolve(json));
    } catch (error) {
      return new Promise<any>((resolve, reject) => reject(error));
    }
  }

  /**
   * fetch text
   * @param input RequestInfo
   * @param init RequestInit | undefined
   */
  public static async fetchText(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<string> {
    try {
      const res = await this.fetch(input, init);
      const text = await res.text();
      return new Promise<string>(resolve => resolve(text));
    } catch (error) {
      return new Promise<string>((resolve, reject) => reject(error));
    }
  }

  /**
   * fetch api
   * @param input RequestInfo
   * @param init RequestInit | undefined
   */
  public static async fetchApi<T>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<T> {
    try {
      const res = await this.fetch(input, init);
      const json: ApiResponse<T> = await res.json();
      if (json.statusCode === 0) {
        return new Promise<T>(resolve => resolve(json.data));
      } else {
        return new Promise<T>((resolve, reject) => reject(json));
      }
    } catch (error) {
      return new Promise<T>((resolve, reject) =>
        reject({ statusCode: -1, message: "Network error", error }),
      );
    }
  }

  private constructor() {}
}
