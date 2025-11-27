import { MoviesResponse, MovieDetails, Movie } from '../../types/movie';

// Genre ID to name mapping (common TMDB genres)
// Prased from https://api.themoviedb.org/3/genre/movie/list 
const GENRE_MAP: Record<number, string> = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };
  
  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds
      .map(id => GENRE_MAP[id])
      .filter((name): name is string => !!name)
      .map(name => name.toLowerCase());
  };
  

const isValidMoviesResponse = (data: any): boolean => {
    return (
        data &&
        typeof data === 'object' &&
        Array.isArray(data.results) &&
        typeof data.page === 'number' &&
        typeof data.total_pages === 'number' &&
        typeof data.total_results === 'number'
    );
};

const isValidMovie = (movie: any): boolean => {
    return (
        movie &&
        typeof movie === 'object' &&
        typeof movie.id === 'number' &&
        movie.id > 0
    );
};

const isValidMovieDetails = (data: any): boolean => {
    return (
        data &&
        typeof data === 'object' &&
        typeof data.id === 'number' &&
        data.id > 0 &&
        typeof data.title === 'string'
    );
};





export const convertMoviesResponse = (data: any): MoviesResponse => {
    if (!isValidMoviesResponse(data)) {
        throw new Error('Invalid movies response structure');
    }

    return {
        page: data.page || 0,
        results: data.results.map(convertMovie),
        total_pages: data.total_pages || 0,
        total_results: data.total_results || 0,
    };

};



const convertMovie = (movie: any): Movie => {
    if (!isValidMovie(movie)) {
        throw new Error('Invalid movie structure');
    }

    const searchIndices = movie.title.toLowerCase() + ' ' + getGenreNames(movie.genre_ids).join(' ');

    return ({
        adult: movie.adult ?? false,
        backdrop_path: movie.backdrop_path || '',
        genre_ids: movie.genre_ids || [],
        id: movie.id || 0,
        original_language: movie.original_language || '',
        original_title: movie.original_title || '',
        overview: movie.overview || '',
        popularity: movie.popularity || 0,
        poster_path: movie.poster_path || '',
        release_date: movie.release_date || '',
        title: movie.title || '',
        video: movie.video ?? false,
        vote_average: movie.vote_average || 0,
        vote_count: movie.vote_count || 0,
        search_indices: searchIndices,
    });
};




export const convertMovieDetails = (data: any): MovieDetails => {
    if (!isValidMovieDetails(data)) {
        throw new Error('Invalid movie details structure');
    }

    return {
        adult: data.adult ?? false,
        backdrop_path: data.backdrop_path || '',
        belongs_to_collection: data.belongs_to_collection
            ? {
                id: data.belongs_to_collection.id || 0,
                name: data.belongs_to_collection.name || '',
                poster_path: data.belongs_to_collection.poster_path || '',
                backdrop_path: data.belongs_to_collection.backdrop_path || '',
            }
            : null,
        budget: data.budget || 0,
        genres: (data.genres || []).map((genre: any) => ({
            id: genre.id || 0,
            name: genre.name || '',
        })),
        homepage: data.homepage || '',
        id: data.id || 0,
        imdb_id: data.imdb_id || null,
        origin_country: data.origin_country || [],
        original_language: data.original_language || '',
        original_title: data.original_title || '',
        overview: data.overview || '',
        popularity: data.popularity || 0,
        poster_path: data.poster_path || '',
        production_companies: (data.production_companies || []).map(
            (company: any) => ({
                id: company.id || 0,
                logo_path: company.logo_path || '',
                name: company.name || '',
                origin_country: company.origin_country || '',
            }),
        ),
        production_countries: (data.production_countries || []).map(
            (country: any) => ({
                iso_3166_1: country.iso_3166_1 || '',
                name: country.name || '',
            }),
        ),
        release_date: data.release_date || '',
        revenue: data.revenue || 0,
        runtime: data.runtime || null,
        spoken_languages: (data.spoken_languages || []).map((lang: any) => ({
            english_name: lang.english_name || '',
            iso_639_1: lang.iso_639_1 || '',
            name: lang.name || '',
        })),
        status: data.status || '',
        tagline: data.tagline || '',
        title: data.title || '',
        video: data.video ?? false,
        vote_average: data.vote_average || 0,
        vote_count: data.vote_count || 0,
    };
};
