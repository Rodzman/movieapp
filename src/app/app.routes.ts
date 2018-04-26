import { Routes } from '@angular/router'
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DetailsComponent } from './details/details.component';

export const ROUTES: Routes = [
    {path: '', component: MoviesListComponent},
    {path: ':id', component: DetailsComponent}
]
