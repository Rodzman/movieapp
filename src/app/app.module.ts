import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesUnitComponent } from './movies-list/movies-unit/movies-unit.component';
import { MovieappService } from './movieapp.service';
import { DetailsComponent } from './details/details.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MovieInfoComponent } from './details/movie-info/movie-info.component';
import { MovieCastComponent } from './details/movie-cast/movie-cast.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MoviesListComponent,
    FooterComponent,
    MoviesUnitComponent,
    FilterComponent,
    DetailsComponent,
    MovieInfoComponent,
    MovieCastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [MovieappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
