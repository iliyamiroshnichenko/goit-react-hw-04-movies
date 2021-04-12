// import { Route, NavLink, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import filmsApi from './services/films-api';
import Container from './components/Container';

function App() {
  useEffect(() => {
    filmsApi.fetchTrendingMovies();
    filmsApi.searchMovie();
  }, []);

  return (
    <Container>
      <div className="App"></div>
    </Container>
  );
}

export default App;
