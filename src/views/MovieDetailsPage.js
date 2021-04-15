import { useEffect, useState } from 'react';
import { NavLink, Route, useHistory, useLocation } from 'react-router-dom';
import filmsApi from '../services/films-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieDetail from '../components/MovieDetail';
import routes from '../routes';

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({
    title: null,
    overview: null,
    poster_path: null,
    genres: null,
    release_date: '',
    vote_average: '',
  });
  const { state } = useLocation();
  const history = useHistory();

  const movieId = Number(match.params.movieId);

  useEffect(() => {
    async function fetchdata() {
      const movieInfo = await filmsApi.fetchhMovieInfo(movieId);
      const normalizedDate = await movieInfo.release_date
        .split('-')
        .reverse()
        .join('.');
      setMovie({ ...movieInfo, release_date: normalizedDate });
    }
    fetchdata();
  }, []);

  const handleGoBack = () => {
    history.push({
      pathname: state?.from.pathname || routes.home,
      search: state?.from.search,
      state,
    });
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie.poster_path ? (
        <MovieDetail movie={movie} />
      ) : (
        <h2>Sorry, details not found</h2>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Route path={`${match.path}/cast`} component={Cast} />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </>
  );
};

export default MovieDetailsPage;
