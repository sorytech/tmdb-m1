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
}