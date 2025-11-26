import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    margin: 16,
    backgroundColor: '#f2f2f2',
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

