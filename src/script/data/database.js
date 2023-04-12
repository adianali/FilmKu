const API_KEY = "ee551ea7d9d4d1996bc9222e526e4d7b";
const url = "https://api.themoviedb.org/3";

class DataSource {
    static searchFilm(keyword) {  
        return fetch(`${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                  return Promise.reject(`${keyword} is not found`);
                }
              });
        }
      }
class Main {
    static fetchToprate() {
        return fetch(`${url}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json()
                console.log(response);
            })
            .then(responseJson => {
                if (responseJson.results && responseJson.total_results !== 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`movies not found`)
                }
            })
    }
}

export {
    DataSource,
    Main
};