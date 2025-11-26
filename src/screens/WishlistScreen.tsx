import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWishlistStore } from '../stores/wishlistStore';
import { MovieHeader } from '../components/organisms';
import { getImageUrl } from '../services/tmbd';
import { WishlistEntry } from '../types/wishlist';

export function WishlistScreen() {
  const navigation = useNavigation<any>();
  const wishlist = useWishlistStore(state => state.wishlist);
  const wishlistArray = useMemo(() => Array.from(wishlist.values()), [wishlist]);

  const handleItemPress = (movieId: number) => {
    navigation.navigate('Details', { movieId });
  };


  const renderItem = ({ item }: { item: WishlistEntry }) => {
    const posterUrl = getImageUrl(item.poster_path || '', 'w500')
    const backdropUrl = getImageUrl(item.backdrop_path || '', 'w500')
    return (
      <Pressable onPress={() => handleItemPress(item.id)}>
        <MovieHeader title={item.title} posterUrl={posterUrl} backdropUrl={backdropUrl} />
      </Pressable>
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
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 16,
  },
});
