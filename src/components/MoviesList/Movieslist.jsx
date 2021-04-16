import { Link, withRouter, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';
import unnamed from '../../images/unnamed.jpg';

const MoviesList = ({ movies, query = '' }) => {
  const location = useLocation();
  return (
    <>
      <ul className={styles.list}>
        {movies.map(({ id, title, name, poster_path }) => {
          const imgUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : unnamed;
          return (
            <li key={id} className={styles.card}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location, query },
                }}
              >
                <img src={imgUrl} alt={title} />
                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default withRouter(MoviesList);
