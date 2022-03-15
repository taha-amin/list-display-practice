import { books } from './books-data.js';
import { renderBookEl } from './render-books.js';

const bookListEl = document.querySelector('.books-list');

for (let book of books) {
    const bookEl = renderBookEl(book);

    bookListEl.append(bookEl);
}

import { animals } from './animals-data.js';
import { renderAnimalEl } from './render-animals.js';

const animalListEl = document.querySelector('.animals-list');

for (let animal of animals) {
    const animalEl = renderAnimalEl(animal);

    animalListEl.append(animalEl);
}