import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service';
import { Genre } from '../movieapp.model';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: Genre

  constructor(private movieService: MovieappService) { }

  ngOnInit() {
    this.setGenres()
  }

  setGenres(){
    this.movieService.getGenres().subscribe(genres => this.genres = genres.genres)
  }

  filter(page:number, sort?:string, ano?:string, genre?:string){
    this.movieService.discoverMovies(page, sort, ano, genre)
  }

}
