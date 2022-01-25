import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Film Listesi";
  movies: Movie[];
  populerMovies: Movie[];
  movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.populerMovies = this.movieRepository.getPopulerMovies();
  }

  ngOnInit(): void {
  }


}
