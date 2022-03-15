export function renderPlayerEl(playerObject) {
    const playerEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const ageEl = document.createElement('p');
    const teamEl = document.createElement('p');

    playerEl.classList.add('player');

    nameEl.textContent = 'Name: ' + playerObject.name;
    ageEl.textContent = 'Age: ' + playerObject.age;
    teamEl.textContent = `Team: ${playerObject.team.name}. Stadium: ${playerObject.team.stadium}`;

    return playerEl;
}