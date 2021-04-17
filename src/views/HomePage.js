import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchdata = async () => {
    setIsLoading(true);
    try {
      const moviesRes = await filmsApi.fetchTrendingMovies();
      setMovies(moviesRes);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    } finally {
      setIsLoading(false);
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
      <CSSTransition
        in={!isLoading}
        classNames="fade"
        unmountOnExit
        timeout={1500}
      >
        <MoviesList movies={movies} />
      </CSSTransition>
    </>
  );
};

export default HomePage;
