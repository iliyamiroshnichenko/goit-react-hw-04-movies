import { useState, useEffect } from 'react';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const HomePage = ({ match }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const moviesRes = await filmsApi.fetchTrendingMovies();
      setMovies(moviesRes);
    }
    fetchdata();
  }, []);

  return (
    <>
      <h1 className="Homepage-title">The most popular movies today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
