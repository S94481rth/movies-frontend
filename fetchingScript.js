document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
});

async function fetchMovies() {
    try {
        const response = await fetch('https://movie-crud-app-gbcf.onrender.com/api/getMovies');
        const movies = await response.json();

        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

async function deleteMovie(movie){
    fetch(`https://movie-crud-app-gbcf.onrender.com/api/deleteMovie/${movie}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        }
    }).then(() =>{
        console.log("deleted movie Successfully");
        location.reload();
    }).catch((e) => {
        console.log(`this is wrong ${e}`);
    })
}

async function editMovie(movie) {
    console.log("Who call me!");
    window.location.href = "./editMovie.html";
    localStorage.setItem("MovieName", movie.title);
    localStorage.setItem("MovieGenre", movie.genre);
    localStorage.setItem("MovieYear", movie.releaseYear);
    
    localStorage.setItem("movieID", movie._id);
}

function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "card";
    

    // const image = document.createElement("img");
    // image.src = movie.image;
    // image.alt = movie.title;
    console.log(movie._id);
    const title = document.createElement("h3");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre}`;

    const releaseYear = document.createElement("p");
    releaseYear.textContent = `Release Year: ${movie.releaseYear}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `Delete Movie`;
    deleteButton.onclick = () =>{
        deleteMovie(title.textContent);
    }
    
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = () =>{
        editMovie(movie);
    }
    // card.appendChild(image);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(releaseYear);
    card.appendChild(deleteButton);
    card.appendChild(editButton);

    return card;
}

function displayMovies(movies) {
    const container = document.getElementById("movieContainer");

    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}