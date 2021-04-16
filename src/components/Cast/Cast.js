import { useEffect, useState } from 'react';
import filmsApi from '../../services/films-api';
import styles from './Cast.module.css';
import defaultAvatar from '../../images/default-avatar.png';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);
  const movieId = Number(match.params.movieId);

  useEffect(() => {
    async function fetchdata() {
      const movieCast = await filmsApi.fetchhMovieCast(movieId);
      setCast(movieCast);
    }
    fetchdata();
  }, []);
  return (
    <>
      <h5>Cast: </h5>
      <ul className={styles.flex}>
        {cast.map(({ id, name, character, profile_path }) => {
          const imgUrl = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultAvatar;
          return (
            <li key={id} className={styles.card}>
              <img src={imgUrl} alt={name} />
              <div>
                <p>{name} </p>
                <p> {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
