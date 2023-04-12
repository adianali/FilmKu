class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div  class="input-group mb-3">
        <input id="searchElement" type="search" class="form-control" placeholder="Cari Film Favoritmu disini" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button id="searchButtonElement" class="btn btn-outline-info" type="submit">Button</button>
        </div>
      </div>
       `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);