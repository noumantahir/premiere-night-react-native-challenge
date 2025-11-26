import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    marginRight: 16,
    backgroundColor: '#fff',
  },
  pressed: {
    opacity: 0.8,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },

  title: {
    marginBottom: 4,
    marginTop: 4,
  },
});

