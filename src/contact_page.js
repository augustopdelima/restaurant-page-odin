export function ContactPage() {

    const section = document.createElement('section');
    section.classList.add('contact-section');

    const container = document.createElement('div');
    container.classList.add('contact-container');
    section.appendChild(container);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Contact Us';

    const contacts = [
        '📞 Phone: (123) 456-7890',
        '✉️ Email: info@restaurant.com',
        '📍 Address: 123 Main Street, New York, NY 10001',
    ];

    container.appendChild(title);

    contacts.forEach(text => {
        const p = document.createElement('p');
        p.classList.add('contact-info');
        p.textContent = text;
        container.appendChild(p);
    });



    return section;
}