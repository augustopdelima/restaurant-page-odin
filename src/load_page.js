

/**
 * 
 * @param {HTMLElement[]} contentElements 
 */


export function loadPage(contentElements) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    contentElements.forEach((element) => {
        content.appendChild(element);
    });
}