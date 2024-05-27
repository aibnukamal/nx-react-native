import { StyleSheet } from 'react-native';

export const font = StyleSheet.create({
  movieContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    display: 'flex',
    flexDirection: 'row',
  },
  movieImage: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  movieTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieOverview: {
    fontSize: 14,
    marginTop: 8,
  },
});
