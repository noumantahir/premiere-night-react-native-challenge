import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getNowPlaying} from '../services/tmbd/';
import {Text} from '../components/atoms';
import {CarouselItem} from '../components/molecules';
import {Movie} from '../types/movie';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    setLoading(true);
    const response = await getNowPlaying();
    setMovies(response.results);
    setLoading(false);
  };

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate('Details', {movieId: movie.id});
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text preset="heading">Now Playing</Text>
      </View>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <CarouselItem movie={item} onPress={handleMoviePress} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
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
  header: {
    padding: 16,
    paddingTop: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

