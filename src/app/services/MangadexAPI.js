import axios from "axios";
import rateLimit from "axios-rate-limit";
import appConfig from "../../appConfig";
// todo: move this to a config/appConfig.js
class MangadexAPI {
  constructor() {
    this.axiosInst = axios.create({
      baseURL: appConfig.proxyUrl,
    });
    this.api = rateLimit(this.axiosInst, {
      maxRPS: 5,
    });
  }

  /**
   * fetches all of the manga
   * @returns {Promise<[]>}
   */
  async fetchAllManga() {
    const response = await this.api.get("/manga/");

    //const myUrl = `${APP_CONFIG.apiUrl}/manga/`;
    //const response = await this.api.get(`?url=${encodeURIComponent(myUrl)}`);
    const { data } = response;
    return data;
  }

  /**
   * fetches a single manga by Id
   * @param {string} seriesId
   * @returns {Promise<Object>}
   */
  async fetchMangaById(seriesId) {
    const response = await this.api.get(`/manga/${seriesId}`);
    //const myUrl = `${APP_CONFIG.apiUrl}/manga/${seriesId}`;
    //const response = await this.api.get(`?url=${encodeURIComponent(myUrl)}`);
    const { data } = response;
    return data;
  }

  /**
   * fetches a manga's chapters using the manga's Id
   * @param seriesId
   * @returns {Promise<any>}
   */
  async fetchChapter(seriesId) {
    const response = await this.api.get(
      `/manga/${seriesId}/feed?translatedLanguage[]=en&order[chapter]=desc`
    );
    //const myUrl = `${APP_CONFIG.apiURl}/manga/${seriesId}/feed?translatedLanguage[]=en&order[chapter]=desc`;
    //const response = await this.api.get(`?url=${encodeURIComponent(myUrl)}`);
    return response.data;
  }

  /**
   * fetches a cover by Id
   * @param coverId
   * @returns {Promise<any>}
   */
  async fetchCover(coverId) {
    //const myUrl = `${APP_CONFIG.apiURl}/cover/${coverId}/`;
    //const response = await this.api.get(`?url=${encodeURIComponent(myUrl)}`);
    const response = await this.api.get(`/cover/${coverId}`);
    const { data } = response;

    return data;
  }
}

const instance = new MangadexAPI();

export default instance;
