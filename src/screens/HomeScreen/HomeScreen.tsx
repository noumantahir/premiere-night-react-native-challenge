import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MovieCarousel} from '../../components/organisms';
import {colors} from '../../theme/colors';
import {Movie} from '../../types/movie';
import {SearchBar} from '../../components/molecules';
import {useCarousels, MovieCarouselData} from './hooks/useCarousels';
import {styles} from './HomeScreen.styles';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const {carousels, loading} = useCarousels(query);


  const handleMoviePress = (movie: Movie) => {
    navigation.navigate('Details', {movieId: movie.id});
  };


  const renderCarousel = ({item}: {item: MovieCarouselData}) => (
    <MovieCarousel
      title={item.title}
      movies={item.data}
      onMoviePress={handleMoviePress}
    />
  );


  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={carousels}
        renderItem={renderCarousel}
        keyExtractor={(item, index) => item.title + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

