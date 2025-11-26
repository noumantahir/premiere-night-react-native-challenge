import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '../../atoms';
import {CarouselItem} from '../../molecules';
import {Movie} from '../../../types/movie';
import {styles} from './MovieCarousel.styles';

export interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  onMoviePress: (movie: Movie) => void;
}

export function MovieCarousel({
  title,
  movies,
  onMoviePress,
}: MovieCarouselProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text preset="subheading" style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={movies}
        renderItem={({item: movie}) => (
          <CarouselItem movie={movie} onPress={onMoviePress} />
        )}
        keyExtractor={movie => movie.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
      />
    </View>
  );
}

