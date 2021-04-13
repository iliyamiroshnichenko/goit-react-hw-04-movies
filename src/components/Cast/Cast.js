import { useEffect, useState } from 'react';
import filmsApi from '../../services/films-api';

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
      <h5>инфо о касте</h5>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="120"
              />
            )}
            <span>{name} </span>as
            <span> {character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;

//    <p>Name: {name}</p>
//       <p>Character: {character}</p>
