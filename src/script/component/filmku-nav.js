class filmku extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `<nav class="navbar navbar-light bg-light" > 
        <span class="navbar-brand mb-0 h1">FilmKu</span>
        </nav>`;
    }
}
customElements.define("filmku-nav", filmku)