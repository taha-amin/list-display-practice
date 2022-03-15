export function renderAnimalEl(animal) {
    const animalEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const dietEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const imgEl = document.createElement('img');

    animalEl.classList.add('animals');
    nameEl.textContent = animal.name;
    dietEl.textContent = animal.diet;
    ratingEl.textContent = animal.rating;
    imgEl.src = `assets/${animal.name}.png`;

    animalEl.append(nameEl, dietEl, ratingEl, imgEl);

    return animalEl;
}