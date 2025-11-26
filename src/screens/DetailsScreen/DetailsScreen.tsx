import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getMovieDetails } from '../../services/tmbd/';
import { MovieDetails } from '../../types/movie';
import { Text, ActionButton } from '../../components/atoms';
import { Backdrop, MovieSummary } from './children';
import { styles } from './DetailsScreen.styles';
import { MovieHeader } from '../../components/organisms';

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

    const handleAddToWishlist = () => {
        // TODO: Implement wishlist functionality
        console.log('Added to wishlist:', movie.title);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Backdrop movie={movie} />
            <MovieHeader movie={movie} />
            <MovieSummary movie={movie} />
            <ActionButton
                label="+ Add to Wishlist"
                isActive={false}
                onPress={handleAddToWishlist}
            />
        </ScrollView>
    );
}

