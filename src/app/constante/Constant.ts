export class Constant {
    public static get baseURL(): string { return 'https://api.themoviedb.org/3/'; }
    public static get imageBaseURL(): string { return 'http://image.tmdb.org/t/p/w500/'; }
    public static get fireBaseKey(): string { return 'AIzaSyCz6cIbElxXg97m_pXixDMMOS4N2hlYqc4'; }
    public static get tmdbKey(): string { return '384da4d1d38ad08447d757fb4629fa6b'; }

    public static options : {label:string, value:string}[] =
         [
            {label: 'Action', value: 'Action'},
            {label: 'Drame', value: 'Drama'},
            {label: 'Comedy', value: 'Comedy'},
            {label: 'Sci-fy', value: 'Science Fiction'},
        ];
    
}