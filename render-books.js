export function renderBookEl(bookData) {
    const titleEl = document.createElement('p');
    titleEl.classList.add('books');
    titleEl.textContent = bookData;

    return titleEl;
}