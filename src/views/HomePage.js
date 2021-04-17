import { useState, useEffect } from 'react';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchdata = async () => {
    try {
      const moviesRes = await filmsApi.fetchTrendingMovies();
      setMovies(moviesRes);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h1 className="Homepage-title">The most popular movies today</h1>
      {error && <p>Oops, something went wrong... {error}</p>}
      <p></p>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
