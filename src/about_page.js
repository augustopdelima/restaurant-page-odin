export function AboutPage() {

    const section = document.createElement('section');
    section.classList.add('about-section');         

    const title = document.createElement('h1');
    title.textContent = 'About Us';
    title.classList.add('title');   
    
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('description-wrapper');
    
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'At Lo Restaurante, we are passionate about delivering an exceptional dining experience. Our team of talented chefs crafts each dish with the finest ingredients, ensuring a delightful blend of flavors that will tantalize your taste buds. Whether you are joining us for a romantic dinner, a family gathering, or a casual meal with friends, we strive to create a warm and inviting atmosphere where you can relax and enjoy our culinary creations. We are committed to providing excellent service and making every visit to Lo Restaurante a memorable one. Thank you for choosing us as your dining destination!';
    
    descriptionWrapper.appendChild(description);

    section.appendChild(title);
    section.appendChild(descriptionWrapper);

    return section;
}