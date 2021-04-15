import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match, location }) => {
  const [inputquery, setInputQuery] = useState(location.state?.query || '');
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!inputquery) return;
    filmsApi.searchMovie(inputquery).then(query => {
      setMovies(query);
    });
  }, []);

  const handleChange = e => {
    setInputQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filmsApi.searchMovie(inputquery).then(query => {
      setMovies(query);
      history.push({ ...location, search: `?query=${inputquery}` });
      // setInputQuery('');
    });
  };
  return (
    <>
      <h1>Search your favourite movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputquery}
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 && <p>No results</p>}
      <MoviesList movies={movies} query={inputquery} from={match.path} />
    </>
  );
};

export default MoviesPage;
