import { Route, Switch, Redirect } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import routes from './routes';
import AppBar from './components/AppBar';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetail} component={MovieDetailsPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Container>
  );
}

export default App;
