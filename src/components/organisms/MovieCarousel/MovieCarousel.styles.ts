import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    alignSelf:'flex-start',
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    marginLeft: -16,
  },
  carouselContent: {
    paddingHorizontal: 16,
  },
});

