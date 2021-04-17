import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputquery, setInputQuery] = useState(location?.state?.query || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchdata = async () => {
    try {
      const moviesRes = await filmsApi.searchMovie(inputquery);
      setMovies(moviesRes);
      setError(false);
      history.push({ ...location, search: `?query=${inputquery}` });
    } catch (err) {
      setError(`${err}`);
    }
  };

  useEffect(() => {
    if (!inputquery) return;
    fetchdata();
  }, []);

  const handleChange = e => {
    setInputQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchdata();
  };
  return (
    <>
      <h1>Search your favourite movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputquery}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {error && <p>Oops, something went wrong... {error}</p>}
      {movies.length === 0 && <p>No results</p>}
      <MoviesList movies={movies} query={inputquery} />
    </>
  );
};

export default MoviesPage;
