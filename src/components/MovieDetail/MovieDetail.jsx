import PropTypes from 'prop-types';
import styles from './MovieDetail.module.css';

const MovieDetail = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    genres,
    release_date,
    vote_average,
  } = movie;

  return (
    <>
      <div className={styles.flex}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="320"
        />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>Release date: {release_date}</p>
          <p>Rating: {vote_average}</p>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default MovieDetail;
