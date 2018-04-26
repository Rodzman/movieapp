import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgModel, FormControlName } from '@angular/forms'
import { Genre } from '../movieapp.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm: FormGroup
  model: NgModel
  control: FormControlName
  input: any
  years: Array<any> = []
  genres = []

  constructor(private moviesListComponent: MoviesListComponent,
              private formBuilder: FormBuilder,
              private movieService: MovieappService) { }

  ngOnInit() {
    this.generateForm()
    this.setYears()
    this.setGenres()
  }

  filter(page:number, sort?:string, ano?:string, genre?:string){
    this.moviesListComponent.discoverMovies(page, sort, ano, genre)
  }

  generateForm(){
    this.filterForm = this.formBuilder.group({
      ano: this.formBuilder.control(''),
      ordenar: this.formBuilder.control(''),
      generos: this.formBuilder.control(''),
      palavras: this.formBuilder.control(''),
    })
  }

  setYears(){
    let year = new Date().getFullYear()
    for(let i=year; i>=1900; i--){
      this.years.push(i)
    }
  }

  setGenres(){
    this.movieService.getGenres().subscribe(genres => this.genres = genres.genres)
  }

}
