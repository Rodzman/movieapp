import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import { MovieappService } from '../movieapp.service';
import { Movie, Discover } from '../movieapp.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // @Output() searchText: EventEmitter<string> = new EventEmitter()

  searchForm: FormGroup;
  searchControl: FormControl;
  movies: Discover;
  show:boolean = false;

  constructor(private fb: FormBuilder, private movieService: MovieappService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.movieService.searchMovie(searchTerm)
        .catch(error => Observable.from([])))
      .subscribe(movies => {
        this.movies = movies
        this.show = true
      })
  }

  toggle() {
    this.show = false
    this.searchControl.setValue('')
  }


}
