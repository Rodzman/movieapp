import { StaticInjector } from "@angular/core/src/di/injector";

export interface Discover {
    page: number,
    total_results: number,
    total_pages: number,
    results: Array<DiscoverItem>
}

export interface DiscoverItem {
    vote_count: number,
    id: number,
    video: boolean,
    vote_average: number,
    title: string,
    popularity: string,
    poster_path: string,
    original_language: string,
    original_title: string,
    genre_ids: Array<any>,
    backdrop_path: string,
    adult: boolean,
    overview: string,
    release_date: string
}

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: string,
    genres: Array<any>,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    production_companies: Array<any>,
    production_countries: Array<any>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<any>,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface Genre {
    id: number,
    name: string
}

