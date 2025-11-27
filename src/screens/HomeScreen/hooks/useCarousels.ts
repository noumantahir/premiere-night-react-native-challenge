import {useState, useEffect, useMemo} from 'react';
import {getMoviesByCategory, MovieCategory} from '../../../services/tmbd';
import {Movie} from '../../../types/movie';

export interface MovieCarouselData {
  title: string;
  data: Movie[];
}

export function useCarousels(query: string) {
  const [carousels, setCarousels] = useState<MovieCarouselData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const [nowPlayingResponse, popularResponse, topRatedResponse] = await Promise.all([
        getMoviesByCategory(MovieCategory.NOW_PLAYING),
        getMoviesByCategory(MovieCategory.POPULAR),
        getMoviesByCategory(MovieCategory.TOP_RATED),
      ]);

      const movieCarousels: MovieCarouselData[] = [
        {
          title: 'Now Playing',
          data: nowPlayingResponse.results,
        },
        {
          title: 'Popular',
          data: popularResponse.results,
        },
        {
          title: 'Top Rated',
          data: topRatedResponse.results,
        },
      ];

      setCarousels(movieCarousels);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCarousels = useMemo(() => {
    if (!query.trim()) {
      return carousels;
    }

    //keeps the original carousel structure but filters the movies based on the query
    return carousels
      .map(carousel => ({
        ...carousel,
        data: carousel.data.filter(movie =>
          movie.search_indices.includes(query),
        ),
      }))
      .filter(carousel => carousel.data.length > 0);
  }, [carousels, query]);

  return {
    carousels: filteredCarousels,
    loading,
  };
}

