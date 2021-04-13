import { Route, NavLink, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import filmsApi from './services/films-api';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  useEffect(() => {
    // filmsApi.fetchhMovieReviews();
  }, []);

  return (
    <Container>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="Navlink"
            activeClassName="Navlink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="Navlink"
            activeClassName="Navlink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </Container>
  );
}

export default App;
