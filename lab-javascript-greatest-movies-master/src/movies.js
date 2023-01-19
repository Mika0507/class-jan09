// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Utilizar el método map para crear un nuevo array (directorsListRaw) de todos los directores de películas del array de entrada (películas)
// Utilizar el método filter para eliminar nombres duplicados del array directorsListRaw

function getAllDirectors(moviesArray) {
    let directorsListRaw = moviesArray.map(movies =>
        movies.director
    );
    let directorFilter = directorsListRaw.filter((director, index) =>
    directorsListRaw.indexOf(director) === index);

    // console.log(directorFilter);
    return directorFilter;
   
}

// Jarko approach
    // let directosFilteredAlt = [... new Set(directorsRaw)];
    // console.log(directosFilteredAlt);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Iteración 2:
// Utilizar el método filter para crear un nuevo array  (películas filtradas) que solo incluya películas dirigidas por “Steven Spielberg” y del género “drama”
// Utilizar la propiedad length para encontrar el número de películas en el array filteredMovies

function howManyMovies(movies) {

    const filmsSpielber = movies.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes ("Drama"));
    })
    // console.log(filmsSpielber.length);  
    return filmsSpielber.length;  
}



// Iteración 3:
// Utilizar el método reduce para calcular la puntuación total de todas las películas en el array de entrada (películas)
// Utilizar el método toFixed para dar formato a la puntuación promedio a 2 puntos decimales

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scoreMovie) {
    if(scoreMovie.length === 0) return 0;

    let sumScore = scoreMovie.reduce((accumulator, currentValue) => {
        if(currentValue.score){
            return accumulator + currentValue.score;
        }else{
            return accumulator;
        };
    }, 0);

    const average = (sumScore / scoreMovie.length).toFixed(2);
    
    // console.log(typeof average);
    // console.log(sumScore.toFixed(2));
    return Number(average);
}





// Utilizar el método filter para crear un nuevo array (dramaMoviesArray) que solo incluya películas del género “drama”
// Pasar el dramaMoviesArray a la función scoresAverage para encontrar la puntuación promedio de las películas de drama

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter((movie) => {
        return (movie.genre.includes ("Drama"));
    })
    // console.log(dramaMovies); 
    if(dramaMovies.length === 0) return 0;
    const sumScoreDrama = scoresAverage(dramaMovies);

    // console.log(sumScoreDrama);
    // console.log(sumScoreDrama.toFixed(2));
    return sumScoreDrama;
}



// Utilizar el método sort para ordenar el array de entrada (películas) por año en orden ascendente
// Hacer una copia del array antes de ordenar para evitar modificar el array original

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    let orderByYear2 = movies.map((movie) => movie );
 
    orderByYear2.sort((numOne, numTwo) => {
        if(numOne.year > numTwo.year) return numOne.year - numTwo.year;
        if(numOne.year < numTwo.year) return numOne.year - numTwo.year;
        else return numOne.title.localCompare(numTwo.title)
    });
   
    // console.log(ascend);
      return orderByYear2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    return movies.map((movie) => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
