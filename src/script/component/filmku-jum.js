class jumfilmku extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `<div class="jumbotron">
        <h1 class="display-4">Welcome To FilmKu</h1>
        <p class="lead">FilmKu Adalah website untuk menemukan film favorit kamu apapun itu</p>
        <hr class="my-4">
        <p>Temukan Film Favorit kalian Disini</p>
      </div>`;
    }
}
customElements.define("filmku-jum", jumfilmku)