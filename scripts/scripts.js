class Navbar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        fetch('components/navbar.html')
            .then(response => response.text())
            .then(data => {
                const template = document.createElement('template');
                template.innerHTML = data;
                const templateContent = template.content.querySelector('#navbar-template').content;
                shadowRoot.appendChild(templateContent.cloneNode(true));
            });

        fetch('styles/navbar.css')
            .then(response => response.text())
            .then(css => {
                const style = document.createElement('style');
                style.textContent = css;
                shadowRoot.appendChild(style);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('my-navbar', Navbar);
});

class Home extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        fetch('components/home.html')
            .then(response => response.text())
            .then(data => {
                const template = document.createElement('template');
                template.innerHTML = data;
                const templateContent = template.content.querySelector('#home-template').content;
                shadowRoot.appendChild(templateContent.cloneNode(true));
            });

        fetch('styles/home.css')
            .then(response => response.text())
            .then(css => {
                const style = document.createElement('style');
                style.textContent = css;
                shadowRoot.appendChild(style);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('my-home', Home);
});