import { Component, OnInit, Input } from '@angular/core';
import { MovieappService } from '../movieapp.service';
import { Movie, DiscoverItem, Discover } from '../movieapp.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Discover
  page = 1
  nextPage:number
  prevPage:number
  sort: string = ''
  year: string = ''
  genre: string = ''

  constructor(private movieService: MovieappService) { }

  ngOnInit() {
    this.discoverMovies(this.page)
    this.getPageLinks(this.page)
    this.movieService.discoverMovies(this.page)
    this.movies = this.movieService.movies
  }

  ngAfterContentInit() {
    this.movies = this.movieService.movies
  }

  discoverMovies(page:number, sort?:string, year?:string, genre?:string){
    this.sort = !sort ? this.sort : sort
    this.year = !year ? this.year : year
    this.genre = !genre ? this.genre : genre
    this.movieService.discover(page, this.sort, this.year, this.genre).subscribe(movies => {
      this.movies = movies
    })
    this.getPageLinks(page)
  }

  getPageLinks(page:number){
    this.nextPage = page + 1
    this.prevPage = page - 1
  }

}
