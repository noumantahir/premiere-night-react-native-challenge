import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  titleSection: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
  },
  tagline: {
    opacity: 0.7,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaSpacer: {
    marginLeft: 16,
  },
});

