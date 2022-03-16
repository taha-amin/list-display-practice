export function renderArtistsEl(artistObject) {
    const artistEl = document.createElement('div');
    const artistNameEl = document.createElement('h3');
    const albumNumberEl = document.createElement('p');
    //const songListEl = document.createElement('p');

    artistEl.classList.add('artist');

    artistNameEl.textContent = `Artist: ${artistObject.name}`;
    albumNumberEl.textContent = `Albums: ${artistObject.albums}`;

    artistEl.append(artistNameEl, albumNumberEl);


    for (let song of artistObject.songs) {
        const songListEl = document.createElement('p');
        songListEl.textContent = `Popular Songs: ${song}`;

        artistEl.append(songListEl);
    }

    return artistEl;
}