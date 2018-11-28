export interface PersonQuery {
    language?: string; // default "en-US"
}

export interface PersonResponse {
<<<<<<< HEAD
    birthday?: string;
    known_for_department?: string;
    deathday?: string;
    id?: number;
    name?: string;
    also_known_as?: string[];
    gender?: number; // 0, 1, 2, default 0
    biography?: string;
    popularity?: number;
    place_of_birth?: string;
    profile_path?: string;
    adult?: boolean;
    imdb_id?: string;
    homepage?: string;
    title_movie?: string;
=======
  birthday?: string;
  known_for_department?: string;
  deathday?: string;
  id?: number;
  name?: string;
  title_movie?: string;
  also_known_as?: string[];
  gender?: number; // 0, 1, 2, default 0
  biography?: string;
  popularity?: number;
  place_of_birth?: string;
  profile_path?: string;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string;
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}
