import { Component, OnInit } from '@angular/core';
import { Movie, Credits } from '../movieapp.model';
import { MovieappService } from '../movieapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie:Movie
  credits: Credits

  constructor(private movieService: MovieappService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieService.getMovie(this.route.snapshot.params['id'])
      .subscribe(movie => this.movie = movie)
    this.movieService.getMovieCredits(this.route.snapshot.params['id'])
      .subscribe(credits => this.credits = credits)
  }

}
