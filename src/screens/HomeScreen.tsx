import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getNowPlaying, getPopular} from '../services/tmbd/';
import {MovieCarousel} from '../components/organisms';
import {Movie} from '../types/movie';

interface MovieCarouselData {
  id: string;
  title: string;
  data: Movie[];
}

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [carousels, setCarousels] = useState<MovieCarouselData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const [nowPlayingResponse, popularResponse] = await Promise.all([
        getNowPlaying(),
        getPopular(),
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
      ];

      setCarousels(movieCarousels);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

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
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carousels}
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
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 16,
  },
});

