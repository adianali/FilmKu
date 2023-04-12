class filmkuFott extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    render() {
        this.innerHTML = `<div class="sosial">
        <h4>Contact me at</h4>
        <a href="https://www.instagram.com/adianali_/"><i class="fa fa-camera-retro fa-2x" style="margin-top: 10px;"></i></a>
        <a href="https://www.linkedin.com/in/adian-ali-pratama-987a4b265/"><i class="fab fa-linkedin-in fa-2x" style="margin-left: 10px; margin-top: 10px;"></i></a>
        <a href="https://github.com/adianali"><i class="fab fa-github-square fa-2x" style="margin-left: 10px; margin-top: 10px;"></i> </a>
    </div>
    <div class="credit">
        <small>Copyright &copy; Adian Ali Pratama 2023.</small>
    </div>`;
    }
}
customElements.define("filmku-fott", filmkuFott)