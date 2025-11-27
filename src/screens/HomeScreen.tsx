import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getMoviesByCategory, MovieCategory} from '../services/tmbd/';
import {MovieCarousel} from '../components/organisms';
import {colors} from '../theme/colors';
import {Movie} from '../types/movie';
import { SearchBar } from '../components/molecules';

interface MovieCarouselData {
  id: string;
  title: string;
  data: Movie[];
}

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [carousels, setCarousels] = useState<MovieCarouselData[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const [nowPlayingResponse, popularResponse, topRatedResponse] = await Promise.all([
        getMoviesByCategory(MovieCategory.NOW_PLAYING),
        getMoviesByCategory(MovieCategory.POPULAR),
        getMoviesByCategory(MovieCategory.TOP_RATED)
      ]);

      const movieCarousels: MovieCarouselData[] = [
        {
          id: 'now-playing',
          title: 'Now Playing',
          data: nowPlayingResponse.results,
        },
        {
          id: 'popular',
          title: 'Popular',
          data: popularResponse.results,
        },
        {
          id: 'top-rated',
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
    
    const lowerQuery = query.toLowerCase();

    //keeps the original carousel structure but filters the movies based on the query
    return carousels
      .map(carousel => ({
        ...carousel,
        data: carousel.data.filter(movie =>
          movie.title.toLowerCase().includes(lowerQuery)
        ),
      }))
      .filter(carousel => carousel.data.length > 0);
  }, [carousels, query]);


  const handleMoviePress = (movie: Movie) => {
    navigation.navigate('Details', {movieId: movie.id});
  };



  const renderCarousel = ({item}: {item: MovieCarouselData}) => (
    <MovieCarousel
      title={item.title}
      movies={item.data}
      onMoviePress={handleMoviePress}
    />
  );


  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={filteredCarousels}
        renderItem={renderCarousel}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});

