import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '../../atoms';
import {styles} from './MovieHeader.styles';

export interface MovieHeaderProps {
  title: string;
  posterUrl?: string | null;
  tagline?: string;
  vote_average?: number;
  release_date?: string;
}

export function MovieHeader({
  title,
  posterUrl,
  tagline,
  vote_average,
  release_date,
}: MovieHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {posterUrl && (
          <Image source={{uri: posterUrl}} style={styles.poster} />
        )}
        <View style={styles.headerInfo}>
          <View style={styles.titleSection}>
            <Text preset="subheading" style={styles.title}>
              {title}
            </Text>
            {tagline && (
              <Text preset="body" style={styles.tagline}>
                {tagline}
              </Text>
            )}
          </View>
          {(vote_average !== undefined || release_date) && (
            <View style={styles.metaRow}>
              {vote_average !== undefined && (
                <Text preset="label">⭐ {vote_average.toFixed(1)}</Text>
              )}
              {release_date && (
                <Text preset="label" style={styles.metaSpacer}>
                  📅 {release_date}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
