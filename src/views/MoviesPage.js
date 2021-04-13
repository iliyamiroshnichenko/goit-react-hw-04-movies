import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import filmsApi from '../services/films-api';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match }) => {
  const [inputquery, setInputQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setInputQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filmsApi.searchMovie(inputquery).then(query => {
      setMovies(query);
      setInputQuery('');
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
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
