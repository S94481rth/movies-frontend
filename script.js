
// Sample movie data
const movies = [
    { title: "Movie 1", genre: "Action", releaseYear: 2022, image: "movie1.jpg" },
    { title: "Movie 2", genre: "Drama", releaseYear: 2023, image: "movie2.jpg" },
    { title: "Movie 3", genre: "Romance", releaseYear: 2021, image: "movie3.jpg" },
    { title: "Movie 4", genre: "Crime", releaseYear: 2022, image: "movie4.jpg" },

    // Add more movie data as needed
];

// Function to create a movie card
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

// Function to display movie cards
function displayMovies() {
    const container = document.getElementById("movieContainer");

    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Display movies when the page is loaded
document.addEventListener("DOMContentLoaded", displayMovies);
