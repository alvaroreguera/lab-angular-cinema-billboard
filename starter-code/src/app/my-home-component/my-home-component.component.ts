import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MovieService]
})
export class MyHomeComponentComponent implements OnInit {
  movies:Array<any>;

  constructor( private theMovie : MovieService, private router: Router ) { 
    this.movies = theMovie.movies;
  }

  ngOnInit() {
  }


}



