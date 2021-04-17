import { useEffect, useState } from 'react';
import filmsApi from '../../services/films-api';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const movieId = Number(match.params.movieId);

  const fetchdata = async () => {
    try {
      const movieReviews = await filmsApi.fetchhMovieReviews(movieId);
      setReviews(movieReviews);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <h5>Reviews</h5>
      {error && <p>Oops, something went wrong... {error}</p>}
      {reviews.length > 0 && !error ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
