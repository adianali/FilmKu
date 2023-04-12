class filmItem extends HTMLElement {
    set film(film) {
        this._film = film;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="${this._film.id}" class="col-md-4 my-5">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this._film.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._film.poster_path : "https://i.pinimg.com/564x/fd/5a/e3/fd5ae37e4d7ed48d282ab52907f78b16.jpg"}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>${this._film.original_title}</strong></h5>
            <h6 class="card-subtitle mb-2 text-muted">${this._film.release_date ? this._film.release_date.substring(0,4) : ""}</h6>
            <p class="card-text" style="text-align: justify;">${this._film.overview}</p>
            <p class="card-text" style="text-align: justify;">Popularity <strong>${this._film.popularity}</strong></p>
              </div>
              </div>
          </div>`;
    }
}

customElements.define("film-item", filmItem);