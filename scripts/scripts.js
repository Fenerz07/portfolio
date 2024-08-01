class Navbar extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('navbar-template').content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('my-navbar', Navbar);
});