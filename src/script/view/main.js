import '../component/filmku-list.js';
import '../component/search-bar.js';
import { DataSource, Main } from '../data/database.js';

const search = () => {
  const searchElement = document.querySelector('search-bar');
  const filmListElement = document.querySelector('film-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFilm(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    filmListElement.films = results;
  };

  const fallbackResult = message => {
    filmListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

const main = () => {
    const filmListElement = document.querySelector("film-list");

    const mainView = async () => {
        try {
            const result = await Main.fetchToprate();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        filmListElement.films = results;
    };

    const fallbackResult = message => {
        filmListElement.renderError(message);
    };

    mainView();
}


export {
    main,
    search
}