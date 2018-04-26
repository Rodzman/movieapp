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
  nextPageLink: string
  prevPage:number
  prevPageLink: string
  @Input() searchText:string

  constructor(private movieService: MovieappService) { }

  ngOnInit() {
    this.discoverMovies(this.page)
    this.getPageLinks(this.page)
  }

  discoverMovies(page:number, sort?:string, year?:string, genre?:string){
    this.movieService.discover(page, sort, year, genre).subscribe(movies => {
      this.movies = movies
    })
    this.getPageLinks(page)
  }

  getPageLinks(page:number){
    this.nextPage = page + 1
    this.prevPage = page - 1
  }

}
