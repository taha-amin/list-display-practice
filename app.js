import { books } from './books-data.js';
import { renderBookEl } from './render-books.js';

import { animals } from './animals-data.js';
import { renderAnimalEl } from './render-animals.js';

import { players } from './players-data.js';
import { renderPlayerEl } from './render-players.js';

const bookListEl = document.querySelector('.books-list');
const animalListEl = document.querySelector('.animals-list');
const playerListEl = document.querySelector('.players-list');

for (let book of books) {
    const bookEl = renderBookEl(book);

    bookListEl.append(bookEl);
}

for (let animal of animals) {
    const animalEl = renderAnimalEl(animal);

    animalListEl.append(animalEl);
}

for (let player of players) {
    const playerEl = renderPlayerEl(player);

    playerListEl.append(playerEl);
}