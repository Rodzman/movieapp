import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchText: EventEmitter<string> = new EventEmitter()

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });
    this.searchControl.valueChanges
      .subscribe(text => {
        this.searchText.emit(text)
      })
  }

}
