
export class mangadexAPI {

    // this works!
    static async fetchManga(seriesID) {
        const requestURL = `http://localhost:3001?query=manga&ID=${seriesID}`

        console.log(seriesID)
        console.log(requestURL)

        return fetch(requestURL,{method:'GET'} ).then( response => response.json())


    }

    static async fetchCover(coverID){
        const requestURL = `http://localhost:3001?query=cover&ID=${coverID}`

        console.log(coverID)
        console.log(requestURL)

        return fetch(requestURL, {method:'GET'}).then( response => response.json())


    }

    static async fetchChap(seriesID){
        // https://api.mangadex.org/manga/d86cf65b-5f6c-437d-a0af-19a31f94ec55/feed?translatedLanguage[]=en
        // this works ^
        console.log("in fetch chapters")
        const requestURL = `http://localhost:3001?query=manga&subquery=feed&ID=${seriesID}`

        console.log(seriesID)
        console.log(requestURL)

        return fetch(requestURL, {method:'GET'}).then( response => response.json())
        //console.log(response)

    }

    static async fetchAuthor(authorID){

        const requestURL =`http://localhost:3001?query=author&ID=${authorID}`

        console.log(authorID)
        console.log(requestURL)

        return fetch(requestURL, {method:'GET'}).then( response => response.json())
        //console.log(response)


    }

    // put in package.json scripts maybe
    // "proxy": "lcp -- proxyURL https://api.mangadex.org",
   /* static async fetchManga(seriesID){
        const requestURL = `http://api.mangadex.org/manga/${seriesID}`

        const response = fetch(requestURL, {headers:{"Access-Control-Allow-Origin":"*"}}).then( response => response.json())
    }*/

    static fetchChapters(seriesID) {
        return undefined;
    }
}