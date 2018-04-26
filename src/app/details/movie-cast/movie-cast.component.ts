import { Component, OnInit, Input } from '@angular/core';
import { Credits } from '../../movieapp.model';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent implements OnInit {

  @Input() credits: Credits

  constructor() { }

  ngOnInit() {
  }

}
