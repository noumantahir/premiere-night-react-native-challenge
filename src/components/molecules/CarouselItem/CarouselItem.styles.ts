import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    marginRight: 16,
    backgroundColor: colors.background,
  },
  pressed: {
    opacity: 0.8,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: colors.backgroundTertiary,
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
    backgroundColor: colors.gray500,
  },

  title: {
    marginBottom: 4,
    marginTop: 4,
  },
});

