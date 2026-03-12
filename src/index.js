import "./styles/normalize.css";
import "./styles/styles.css";
import "./styles/home_page.css";
import "./styles/about_page.css";
import "./styles/menu_page.css";
import "./styles/contact_page.css";
import { HomePage } from "./home_page.js";
import { AboutPage } from "./about_page.js";
import { MenuPage } from "./menu_page.js";
import { ContactPage } from "./contact_page.js";
import { loadPage } from "./load_page.js";


const navButtonsContainer = document.getElementById('body');

navButtonsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('navigate-link')) {
        const path = target.getAttribute('href');
        loadPageContent(path);
    }
});

const links = {
    '/home': HomePage,
    '/about': AboutPage,
    '/menu': MenuPage,
    '/contact': ContactPage
}

function loadPageContent(path) {
    const page = links[path];
    if (page) {
        loadPage([page()]);
    } else {
        loadPage([HomePage()]);
    }
}

window.onload = loadPageContent('/home');
