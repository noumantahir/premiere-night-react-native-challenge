import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { MoviesResponse, MovieDetails } from '../../types/movie';
import {
  convertMoviesResponse,
  convertMovieDetails,
} from './converters.tmbd';

const BASE_URL = 'https://api.themoviedb.org/3';
const PATH_MOVIE = '/movie';
const PATH_MOVIE_NOW_PLAYING = `${PATH_MOVIE}/now_playing`;
const PATH_MOVIE_POPULAR = `${PATH_MOVIE}/popular`;

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



export const getNowPlaying = async (): Promise<MoviesResponse> => {
  try {
    const response = await api.get(PATH_MOVIE_NOW_PLAYING);
    return convertMoviesResponse(response.data);
  } catch (error: any) {
    console.error('Error fetching or parsing now playing movies:', error);
    return getEmptyMoviesResponse();
  }
};



export const getPopular = async (): Promise<MoviesResponse> => {
  try {
    const response = await api.get(PATH_MOVIE_POPULAR);
    return convertMoviesResponse(response.data);
  } catch (error: any) {
    console.warn('Error fetching or parsing popular movies:', error);
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

