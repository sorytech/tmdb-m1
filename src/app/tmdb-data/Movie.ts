export interface MovieQuery {
    language?: string; // default "en-US"
}

export interface MovieGenre {
    id?: number;
    name?: string;
}

export interface ProductionCompany {
    name?: string;
    id?: number;
    logo_path?: string;
    origin_country?: string;
}

export interface ProductionCountry {
    iso_3166_1?: string;
    name?: string;
}

export interface SpokenLanguage {
    iso_639_1?: string;
    name?: string;
}

export interface MovieResponse {
<<<<<<< HEAD
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: Object;
    budget?: number;
    genres?: MovieGenre[];
    homepage?: string;
    id?: number;
    imdb_id?: string; // pattern: ^tt[0-9]{7}
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: string; // format: date
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    genre_ids?: number[];
}

export interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}

export interface Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string;
}

export interface MovieCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];
}

export interface MovieDetails {
    movieCredits: MovieCredits;
    movieResponse: MovieResponse;
    movieVideos: MovieVideos;
}

export interface Result {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}

export interface MovieVideos {
    id: number;
    results: Result[];
}

export interface Option {
    id: number;
    label: string;
    checked: boolean;
}
=======
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: Object;
  budget?: number;
  genres?: MovieGenre[];
  genre_ids?: number[];
  homepage?: string;
  id?: number;
  imdb_id?: string; // pattern: ^tt[0-9]{7}
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string; // format: date
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface Crew {
  credit_id: number;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

export interface MovieCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
