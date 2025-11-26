import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWishlistStore } from '../stores/wishlistStore';
import { MovieHeader } from '../components/organisms';
import { IconButton } from '../components/atoms';
import { colors } from '../theme/colors';
import { getImageUrl } from '../services/tmbd';
import { WishlistEntry } from '../types/wishlist';

export function WishlistScreen() {
  const navigation = useNavigation<any>();
  const wishlist = useWishlistStore(state => state.wishlist);
  const removeFromWishlist = useWishlistStore(state => state.removeFromWishlist);
  const wishlistArray = useMemo(() => Array.from(wishlist.values()), [wishlist]);

  const handleItemPress = (movieId: number) => {
    navigation.navigate('Details', { movieId });
  };

  const handleRemovePress = (movieId: number) => {
    removeFromWishlist(movieId);
  };

  const renderItem = ({ item }: { item: WishlistEntry }) => {
    const posterUrl = getImageUrl(item.poster_path || '', 'w500')
    const backdropUrl = getImageUrl(item.backdrop_path || '', 'w500')
    return (
      <View style={styles.itemContainer}>
        <Pressable onPress={() => handleItemPress(item.id)} style={styles.itemPressable}>
          <MovieHeader title={item.title} posterUrl={posterUrl} backdropUrl={backdropUrl} />
        </Pressable>
        <IconButton
          name="remove"
          size={24}
          containerStyle={styles.removeButton}
          onPress={() => handleRemovePress(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistArray}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    position: 'relative',
  },
  itemPressable: {
    flex: 1,
  },
  removeButton: {
    position: 'absolute',
    bottom: 8,
    right: 24,
    zIndex: 10,
    backgroundColor: colors.overlayLight,
    opacity: 0.5,
    borderRadius: 16,
    padding: 4,
    height: 32,
    width: 32,
  },
});
