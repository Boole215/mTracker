import axios from "axios";
// todo: move this to a config/appConfig.js
const APP_CONFIG = {
  apiUrl: "https://api.mangadex.org/",
};

class MangadexAPI {
  constructor() {
    this.api = axios.create({
      baseURL: APP_CONFIG.apiUrl,
    });
  }

  /**
   * fetches all of the manga
   * @returns {Promise<[]>}
   */
  async fetchAllManga() {
    const response = await this.api.get("manga/");
    const { data } = response;

    return data;
  }

  /**
   * fetches a single manga by Id
   * @param {string} seriesId
   * @returns {Promise<Object>}
   */
  async fetchMangaById(seriesId) {
    const response = await this.api.get(`manga/${seriesId}`);
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
      `manga/${seriesId}/feed?translatedLanguage[]=en&order[chapter]=desc`
    );

    return response.data;
  }

  /**
   * fetches a cover by Id
   * @param coverId
   * @returns {Promise<any>}
   */
  async fetchCover(coverId) {
    const response = await this.api.get(`cover/${coverId}`);

    const { data } = response;

    return data;
  }
}

const instance = new MangadexAPI();

export default instance;
