// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}
function cleanDirectorsArray(moviesArray) {
    const directors = [];
    
    for (let movie of moviesArray) {
      if (!directors.includes(movie.director)) {
        directors.push(movie.director);
      }
    }
    
    return directors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")).length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const average = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0)/moviesArray.length
    return parseFloat(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie=> movie.genre.includes('Drama'))
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const yearSortedArray = moviesArray.slice().sort((a, b) => a.year - b.year)
  return yearSortedArray.sort((a,b)=>{
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
  })
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
    return sortedMovies
  });
  
  const sortedByTitle = sortedMovies.map(movie => movie.title);
  const top20Movies = sortedByTitle.slice(0, 20);
  if (sortedByTitle.length <20) {
    return sortedByTitle
  } else {
    return top20Movies
  }
  
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}
