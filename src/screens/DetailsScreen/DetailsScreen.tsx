import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getMovieDetails } from '../../services/tmbd/';
import { MovieDetails } from '../../types/movie';
import { Text, ActionButton } from '../../components/atoms';
import { Backdrop, MovieSummary } from './children';
import { styles } from './DetailsScreen.styles';
import { MovieHeader } from '../../components/organisms';
import { useWishlistStore } from '../../stores/wishlistStore';
import { getImageUrl } from '../../services/tmbd';

export function DetailsScreen() {
    const route = useRoute<any>();
    const movieId = route.params?.movieId;
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const wishlist = useWishlistStore(state => state.wishlist);
    const addToWishlist = useWishlistStore(state => state.addToWishlist);
    const removeFromWishlist = useWishlistStore(state => state.removeFromWishlist);

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

    const handleToggleWishlist = () => {
        if (movie) {
            if (wishlist.has(movie.id)) {
                removeFromWishlist(movie.id);
            } else {
                addToWishlist(movie.id, movie.title, movie.poster_path, movie.backdrop_path);
            }
        }
    };

    const isMovieInWishlist = movie ? wishlist.has(movie.id) : false;

    const posterUrl = getImageUrl(movie.poster_path, 'w500');

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Backdrop movie={movie} />
            <MovieHeader
                title={movie.title}
                posterUrl={posterUrl}
                tagline={movie.tagline}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
            />
            <MovieSummary movie={movie} />
            <ActionButton
                label={isMovieInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
                icon={isMovieInWishlist ? 'check' : 'heart'}
                isActive={isMovieInWishlist}
                onPress={handleToggleWishlist}
            />
        </ScrollView>
    );
}

