import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Discover, Genre, Movie, Credits, Keywords } from './movieapp.model';

@Injectable()
export class MovieappService {

  APIKey = '87bdc5828b3c424d2a3697760f2e31aa';
  APIUrl = 'https://api.themoviedb.org/3';
  APILang = 'pt-BR';
  movies: Discover;
  nextPage:number
  nextPageLink: string
  prevPage:number
  prevPageLink: string

  'https://api.themoviedb.org/3/movie/500?api_key=87bdc5828b3c424d2a3697760f2e31aa&language=pt-BR'

  constructor(private http: HttpClient) { }

  discover(page:number, sort?:string, year?:string, genre?:string): Observable<Discover>{
    sort = !sort ? '' : `&sort_by=${sort}`
    year = !year ? '' : `&year=${year}`
    if(genre === '12'){console.log(genre)}else{console.log('aaa')}
    genre = !genre ? `/discover/movie` : `/genre/${genre}/movies`
    return this.http.get<Discover>(`${this.APIUrl}${genre}?api_key=${this.APIKey}&language=${this.APILang + sort}&page=${page + year}`)
  }

  discoverMovies(page:number, sort?:string, year?:string, genre?:string){
    this.discover(page, sort, year, genre).subscribe(movies => {
      this.movies = movies
    })
    this.getPageLinks(page)
  }

  getPageLinks(page:number){
    this.nextPage = page + 1
    this.prevPage = page - 1
  }

  getGenres(): Observable<any>{
    return this.http.get<any>(`${this.APIUrl}/genre/movie/list?api_key=${this.APIKey}&language=${this.APILang}`)
  }

  getMovie(movieId:number): Observable<Movie>{
    return this.http.get<Movie>(`${this.APIUrl}/movie/${movieId}?api_key=${this.APIKey}&language=${this.APILang}`)
  }

  getMovieCredits(movieId:number): Observable<Credits>{
    return this.http.get<Credits>(`${this.APIUrl}/movie/${movieId}/credits?api_key=${this.APIKey}`)    
  }

  getMovieInfo(movieId:number): Observable<Keywords>{
    return this.http.get<Keywords>(`${this.APIUrl}/movie/${movieId}/keywords?api_key=${this.APIKey}`) 
  }


}
