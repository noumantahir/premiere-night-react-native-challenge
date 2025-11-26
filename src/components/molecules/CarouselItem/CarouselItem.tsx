import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text } from '../../atoms';
import { Movie } from '../../../types/movie';
import { getImageUrl } from '../../../services/tmbd';
import { styles } from './CarouselItem.styles';

export interface CarouselItemProps {
    movie: Movie;
    onPress?: (movie: Movie) => void;
}

export function CarouselItem({
    movie,
    onPress,
}: CarouselItemProps) {
    const posterUrl = getImageUrl(movie.poster_path, 'w300');

    const handlePress = () => {
        onPress?.(movie);
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
            ]}
            onPress={handlePress}>
            <View style={styles.imageContainer}>
                {!!posterUrl ? (
                    <Image source={{ uri: posterUrl }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder} />
                )}
            </View>

            <Text preset="subheading" numberOfLines={2} style={styles.title}>
                {movie.title}
            </Text>

        </Pressable>
    );
}

