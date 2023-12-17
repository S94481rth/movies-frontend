document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
});

async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/getMovies');
        const movies = await response.json();

        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.title;

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre}`;

    const releaseYear = document.createElement("p");
    releaseYear.textContent = `Release Year: ${movie.releaseYear}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(releaseYear);

    return card;
}

function displayMovies(movies) {
    const container = document.getElementById("movieContainer");

    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}