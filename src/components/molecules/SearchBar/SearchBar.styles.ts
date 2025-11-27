import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: Platform.select({ios: 8, android: 0}),
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    marginLeft: 12,
  },
});

