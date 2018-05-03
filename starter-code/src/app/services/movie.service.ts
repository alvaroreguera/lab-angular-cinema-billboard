import { Injectable } from '@angular/core';
import { Movie } from '../movie-interface';
import movies from '../../sample-movies';
@Injectable()
export class MovieService {
    movies: Array<Movie> = movies;
    newMovie: Movie;
    
    
    constructor() { }

    getMovies() {
      console.log(this.movies);
      return this.movies;       
    }
    getMovie(id) {  
    //   console.log(id);   
    //   return movies(id)
   

  }
}