const moviesCollection = [
    {
        title: "El señor de los anillos",
        director: "Peter Jackson",
        seen: true
    },
    {
        title: "La liga de la justicia",
        director: "Zack Snider",
        seen: false
    },
    {
        title: "Los Vengadores - Endgame",
        director: "Joe Russo",
        seen: true
    },
    {
        title: "Batman vs Superman",
        director: "Zack Snyder",
        seen: false
    }
];

function filterSeenMovies(movies) {
    let movie_to_show;

    for (const movie of movies) {
        movie_to_show = `${movie.title} de ${movie.director}`

        if (movie.seen) {
            console.log("Ya has visto", movie_to_show);
        } else {
            console.log("Te falta por ver", movie_to_show);
        }
    }

    return movies;
}

filterSeenMovies(moviesCollection);