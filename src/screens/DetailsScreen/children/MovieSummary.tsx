import React from 'react';
import { View } from 'react-native';
import { MovieDetails } from '../../../types/movie';
import { Text } from '../../../components/atoms';
import { styles } from './MovieSummary.styles';

export interface MovieSummaryProps {
    movie: MovieDetails;
}

export function MovieSummary({ movie }: MovieSummaryProps) {
    return (
        <View style={styles.container}>
            {movie.overview && (
                <View style={styles.section}>
                    <Text preset="subheading" style={styles.sectionTitle}>
                        Overview
                    </Text>
                    <Text preset="body" style={styles.overview}>
                        {movie.overview}
                    </Text>
                </View>
            )}

            {movie.genres.length > 0 && (
                <View style={styles.genresContainer}>
                    {movie.genres.map(genre => (
                        <View key={genre.id} style={styles.pill}>
                            <Text preset="label" style={styles.pillText}>
                                {genre.name}
                            </Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

