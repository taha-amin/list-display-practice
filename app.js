import { books } from './books-data.js';
import { renderBookEl } from './render-books.js';

// import functions and grab DOM elements
const bookListEl = document.querySelector('.books-list');

for (let book of books) {
    const bookEl = renderBookEl(book);

    bookListEl.append(bookEl);
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
