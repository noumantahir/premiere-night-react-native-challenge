import React from 'react';
import { View, Image, Alert } from 'react-native';
import { Text } from '../../atoms';
import { styles } from './MovieHeader.styles';

export interface MovieHeaderProps {
  title: string;
  backdropUrl?: string | null;
  posterUrl?: string | null;
  tagline?: string;
  vote_average?: number;
  release_date?: string;
}

export function MovieHeader({
  title,
  backdropUrl,
  posterUrl,
  tagline,
  vote_average,
  release_date,
}: MovieHeaderProps) {



  const _renderContent = () => {
    return (
      <View style={styles.content}>
        {posterUrl && (
          <Image source={{ uri: posterUrl }} style={styles.poster} />
        )}
        <View style={styles.headerInfo}>
          <View style={styles.titleSection}>
            <Text preset="subheading" style={[styles.title, backdropUrl && styles.titleWithBackdrop]} numberOfLines={2}>
              {title}
            </Text>
            {tagline && (
              <Text preset="body" style={styles.tagline} numberOfLines={2}>
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
    )
  }

  return (
    <View style={styles.container}>
      {!!backdropUrl && (
        <Image source={{ uri: backdropUrl }} style={styles.backdrop} />
      )}
      {_renderContent()}
    </View>

  );
}
