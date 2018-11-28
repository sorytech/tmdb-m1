<<<<<<< HEAD
import {Option} from '../tmdb-data/Movie';

export class Constant {
    public static get baseURL(): string {
        return 'https://api.themoviedb.org/3/';
    }

    public static get imageBaseURL(): string {
        return 'http://image.tmdb.org/t/p/w500/';
    }

    public static get fireBaseKey(): string {
        return 'AIzaSyCz6cIbElxXg97m_pXixDMMOS4N2hlYqc4';
    }

    public static get tmdbKey(): string {
        return '384da4d1d38ad08447d757fb4629fa6b';
    }

    public static get youtubeURL(): string {
        return 'https://www.youtube.com/embed/';
    }


    public static get getGenres(): Option[] {
        const options: Option[] =
            [
                {id: 28, label: 'Action', checked: false},
                {id: 18, label: 'Drame', checked: false},
                {id: 35, label: 'Comedy', checked: false},
                {id: 878, label: 'Sci-fy', checked: false},
            ];
        return options;
    }
=======
export class Constant {
    public static get baseURL(): string { return 'https://api.themoviedb.org/3/'; }
    public static get imageBaseURL(): string { return 'http://image.tmdb.org/t/p/w500/'; }
    public static get fireBaseKey(): string { return 'AIzaSyCz6cIbElxXg97m_pXixDMMOS4N2hlYqc4'; }
    public static get tmdbKey(): string { return '384da4d1d38ad08447d757fb4629fa6b'; }

    public static options : {label:string, value:string, checked: boolean}[] =
         [
            {label: 'Action', value: 'Action', checked: false},
            {label: 'Drame', value: 'Drama', checked: false},
            {label: 'Comedy', value: 'Comedy', checked: false},
            {label: 'Sci-fy', value: 'Science Fiction', checked : false},
        ];
    
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}