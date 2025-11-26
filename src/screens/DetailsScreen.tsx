import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getMovieDetails, getImageUrl} from '../services/tmbd/';
import {MovieDetails} from '../types/movie';
import {Text} from '../components/atoms';
import {MovieHeader} from '../components/organisms';

export function DetailsScreen() {
  const route = useRoute<any>();
  const movieId = route.params?.movieId;
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  const fetchMovieDetails = async () => {
    setLoading(true);
    const details = await getMovieDetails(movieId);
    setMovie(details);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.centerContainer}>
        <Text preset="body">Movie not found</Text>
      </View>
    );
  }

  const backdropUrl = getImageUrl(movie.backdrop_path, 'w1280');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {!!backdropUrl && (
        <View style={styles.backdropContainer}>
          <Image source={{uri: backdropUrl}} style={styles.backdrop} />
        </View>
      )}
      <MovieHeader movie={movie} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  backdrop: {
    height: 150,
    width: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
});
