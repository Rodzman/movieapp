import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesUnitComponent } from './movies-list/movies-unit/movies-unit.component';
import { MovieappService } from './movieapp.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MoviesListComponent,
    FooterComponent,
    MoviesUnitComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MovieappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
