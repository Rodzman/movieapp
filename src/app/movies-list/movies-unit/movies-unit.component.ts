import { Component, OnInit, Input } from '@angular/core';
import { DiscoverItem } from '../../movieapp.model';

@Component({
  selector: 'app-movies-unit',
  templateUrl: './movies-unit.component.html',
  styleUrls: ['./movies-unit.component.css']
})
export class MoviesUnitComponent implements OnInit {

  @Input() movie: DiscoverItem
  imageUrl:string = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
  poster:string


  constructor() { }

  ngOnInit() {
    this.getPosterUrl()
  }

  getPosterUrl(){
    this.poster = this.imageUrl + this.movie.poster_path
  }

}
