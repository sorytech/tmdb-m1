class Genre {
    id: number;
    name: string;
}

class Company {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

class Country {
    iso_3166_1: string;
    name: string;
}

class SLanguage {
    iso_639_1: string;
    name: string;
}

export class Film {
    adult: boolean;
    backdrop_path: string;
    belong_to_collection: Object;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: string;
    imdb_id: string; // minLength: 9 maxLength: 9 pattern: ^tt[0-9]{7}
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];
    production_countrie: Country[];
    release_date: string; // format: date
    revenue: number;
    runtime: number;
    spoken_languages: SLanguage[];
    status: string; // allows values: Rumored, Planned, In Production, Post Production, Released, Canceled
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export class Acteur {
    birthday: string;
    known_for_department: string;
    deathday: string;
    id: number;
    name: string;
    also_known_as: string;
    gender: number; // nim: 0 max: 2 default: 0
    biography: string;
    popularity: number;
    place_of_birth: string;
    profile_path: string;
    adult: boolean;
    imdb_id: string;
    homepage: string;
}

export class Tendance {
    page: number;
    Films: Film[];
    total_pages: number;
    total_results: number;
}
