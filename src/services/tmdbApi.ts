import axios from 'axios';
import {TMDB_API_KEY} from '@env';
import {MoviesResponse} from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const PATH_MOVIE = '/movie';
const PATH_MOVIE_NOW_PLAYING = `${PATH_MOVIE}/now_playing`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TMDB_API_KEY}`,
  },
});

export const getNowPlaying = async (): Promise<MoviesResponse> => {
  const response = await api.get(PATH_MOVIE_NOW_PLAYING);
  return response.data;
};

