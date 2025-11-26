import { StyleSheet } from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.backgroundSecondary,
    overflow: 'hidden',
  },

  content: {
    flexDirection: 'row',
    padding: 16,
    overflow: 'hidden',
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  poster: {
    width: 90,
    height: 140,
    borderRadius: 8,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  titleSection: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
  },
  titleWithBackdrop: {
    backgroundColor: colors.backgroundSecondary,
    opacity: 0.8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-end',
  },
  tagline: {
    opacity: 0.7,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    marginRight: 4,
  },
  metaSpacer: {
    marginLeft: 16,
  },
});

