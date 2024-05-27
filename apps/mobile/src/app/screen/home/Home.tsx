import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';

const MyHomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: '',
      };

      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        { headers }
      );

      if (response.status === 200) {
        setMovies(response.data.results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <MovieList movies={movies} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarTitle: {
    fontFamily: 'MadeTommy',
    fontWeight: '500',
  },
});

export default MyHomePage;
