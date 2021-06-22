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
  async fetchChapter(seriesId) {
    const response = await this.api.get(
      `manga/${seriesId}/feed?translatedLanguage[]=en&order[chapter]=desc`
    );

    return response.data;
  }

  async fetchCover(coverId) {
    const response = await this.api.get(`cover/${coverId}`);

    const { data } = response;

    return data;
  }

  async fetchAuthor(authorID) {
    const requestURL = `http://localhost:3001?query=author&ID=${authorID}`;

    console.log(authorID);
    console.log(requestURL);

    return fetch(requestURL, { method: "GET" }).then((response) =>
      response.json()
    );
    //console.log(response)
  }

  // put in package.json scripts maybe
  // "proxy": "lcp -- proxyURL https://api.mangadex.org",
  /* async fetchManga(seriesID){
        const requestURL = `http://api.mangadex.org/manga/${seriesID}`

        const response = fetch(requestURL, {headers:{"Access-Control-Allow-Origin":"*"}}).then( response => response.json())
    }*/

  fetchChapters(seriesID) {
    return undefined;
  }
}

const instance = new MangadexAPI();

export default instance;
