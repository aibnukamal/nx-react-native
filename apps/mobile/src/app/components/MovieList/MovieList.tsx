import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// Define the Movie component (assuming a similar structure as the Flutter Movie model)
const Movie = ({ title, overview, poster_path }: any) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={styles.movieContainer}>
      <Image source={{ uri: imageUrl }} style={styles.movieImage} />
      <View style={styles.movieTextContainer}>
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.movieOverview}>{overview}</Text>
      </View>
    </View>
  );
};

const MovieList = ({ movies }: any) => (
  <FlatList
    data={movies}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <Movie {...item} />}
  />
);

const styles = StyleSheet.create({
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
    fontFamily: 'MADE_TOMMY_Bold',
  },
  movieOverview: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'MADE_TOMMY_Regular',
  },
});

export default MovieList;
