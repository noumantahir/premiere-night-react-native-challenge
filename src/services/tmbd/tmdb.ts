import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { MoviesResponse, MovieDetails } from '../../types/movie';
import {
  convertMoviesResponse,
  convertMovieDetails,
} from './converters.tmbd';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const PATH_MOVIE = '/movie';

export enum MovieCategory {
  NOW_PLAYING = 'now_playing',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
}


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TMDB_API_KEY}`,
  },
});



const getEmptyMoviesResponse = (): MoviesResponse => ({
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
});




export const getMoviesByCategory = async (
  category: MovieCategory,
): Promise<MoviesResponse> => {
  try {
    const response = await api.get(`${PATH_MOVIE}/${category}`);
    return convertMoviesResponse(response.data);
  } catch (error: any) {
    console.warn(`Error fetching or parsing movies from ${category}:`, error);
    return getEmptyMoviesResponse();
  }
};



export const getMovieDetails = async (
  movieId: number,
): Promise<MovieDetails | null> => {
  try {
    const response = await api.get(`${PATH_MOVIE}/${movieId}`);
    return convertMovieDetails(response.data);
  } catch (error: any) {
    console.warn(
      `Error fetching or parsing movie details for ID ${movieId}:`,
      error,
    );
    return null;
  }
};


export const getImageUrl = (
  imagePath: string,
  size:
    | 'w92'
    | 'w154'
    | 'w185'
    | 'w300'
    | 'w342'
    | 'w500'
    | 'w780'
    | 'w1280'
    | 'original' = 'w500',
): string | null => {
  if (!imagePath) {
    return '';
  }
  return `${IMAGE_BASE_URL}/${size}${imagePath}`;
};
