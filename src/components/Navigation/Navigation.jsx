import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
