import React from 'react';
import {View, Image} from 'react-native';
import {getImageUrl} from '../../../services/tmbd';
import {MovieDetails} from '../../../types/movie';
import {styles} from './Backdrop.styles';

export interface BackdropProps {
  movie: MovieDetails;
}

export function Backdrop({movie}: BackdropProps) {
  const backdropUrl = getImageUrl(movie.backdrop_path, 'w1280');

  if (!backdropUrl) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: backdropUrl}} style={styles.backdrop} />
    </View>
  );
}

