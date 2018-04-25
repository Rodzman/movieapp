import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Discover, Genre } from './movieapp.model';

@Injectable()
export class MovieappService {

  APIKey = '87bdc5828b3c424d2a3697760f2e31aa';
  APIUrl = 'https://api.themoviedb.org/3';
  APILang = 'pt-BR';

  constructor(private http: HttpClient) { }

  discover(page:number, sort?:string, year?:string, genre?:string): Observable<Discover>{
    sort = !sort ? '' : `&sort_by=${sort}`
    year = !year ? '' : `&year=${year}`
    if(genre === '12'){console.log(genre)}else{console.log('aaa')}
    genre = !genre ? `/discover/movie` : `/genre/${genre}/movies`
    return this.http.get<Discover>(`${this.APIUrl}${genre}?api_key=${this.APIKey}&language=${this.APILang + sort}&page=${page + year}`)
  }

  getGenres(): Observable<any>{
    return this.http.get<any>(`${this.APIUrl}/genre/movie/list?api_key=${this.APIKey}&language=${this.APILang}`)
  }


}
