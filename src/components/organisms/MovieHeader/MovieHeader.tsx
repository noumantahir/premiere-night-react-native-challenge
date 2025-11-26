import React from 'react';
import {View, Image} from 'react-native';
import {MovieDetails} from '../../../types/movie';
import {getImageUrl} from '../../../services/tmbd';
import {Text} from '../../atoms';
import {styles} from './MovieHeader.styles';

export interface MovieHeaderProps {
  movie: MovieDetails;
}

export function MovieHeader({movie}: MovieHeaderProps) {
  const posterUrl = getImageUrl(movie.poster_path, 'w500');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {posterUrl && (
          <Image source={{uri: posterUrl}} style={styles.poster} />
        )}
        <View style={styles.headerInfo}>
          <View style={styles.titleSection}>
            <Text preset="subheading" style={styles.title}>
              {movie.title}
            </Text>
            {movie.tagline && (
              <Text preset="body" style={styles.tagline}>
                {movie.tagline}
              </Text>
            )}
          </View>
          <View style={styles.metaRow}>
            <Text preset="label">⭐ {movie.vote_average.toFixed(1)}</Text>
            <Text preset="label" style={styles.metaSpacer}>
              📅 {movie.release_date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

