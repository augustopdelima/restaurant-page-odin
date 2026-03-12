
export function HomePage() {

    const section = document.createElement('section');
    section.classList.add('home-section');

    const title = document.createElement('h1');
    title.textContent = 'Lo Restaurante';
    title.classList.add('title');

    const subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Welcome to Our Restaurant';


    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Discover our delicious menu and cozy atmosphere';

    const button = document.createElement('a');
    button.classList.add('button-menu', 'navigate-link');
    button.textContent = 'View our menu';
    button.setAttribute('href', '/menu');

    section.appendChild(title);
    section.appendChild(subtitle);
    section.appendChild(slogan);
    section.appendChild(button);

    return section;
}