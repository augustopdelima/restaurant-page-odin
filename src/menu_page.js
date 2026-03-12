import margherita from './assets/margherita.jpg';
import carbonara from './assets/carbonara.jpg';
import caesar from './assets/caesar.jpg';
import tiramisu from './assets/tiramisu.jpg';   

export function MenuPage() {
    const section = document.createElement('section');
    section.classList.add('menu-section');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Our Menu';

    const menuItems = [
        { name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: '$12', image: margherita},
        { name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', price: '$15', image: carbonara },
        { name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan.', price: '$10', image: caesar },
        { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert with layers of ladyfingers and mascarpone.', price: '$8', image: tiramisu}
    ];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.classList.add('menu-description');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(description);
        menuItem.appendChild(price);

        menuContainer.appendChild(menuItem);
    })

    section.appendChild(title);

    section.appendChild(menuContainer);

    return section;
}