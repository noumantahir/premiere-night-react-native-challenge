import React from 'react';
import { View, Image } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
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


  const _renderInfo = (value: string | number, icon: string) => {
    return (
      <View style={styles.metaItem}>
        <Icon name={icon as any} size={14} color="#666" style={styles.metaIcon} />
        <Text preset="label">{value}</Text>
      </View>
    );
  };


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
              {vote_average !== undefined && _renderInfo(vote_average.toFixed(1), 'star')}
              {release_date && (
                <View style={styles.metaSpacer}>
                  {_renderInfo(release_date, 'calendar')}
                </View>
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
