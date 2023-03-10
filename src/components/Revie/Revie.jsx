import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../helpers/api';
import Loader from '../Loading/Loading';
import css from "../Revie/Revie.module.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviews(params.movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
        Notify.failure(`Sorry something went wrong. ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [params.movieId]);

  let review = [];
  if (reviews.length !== 0) {
    review = reviews.map(({ author, content, id }) => (
      <li className={css.item} key={id}>
        <h3 className={css.title}>{author}</h3>
        <p className={css.text__content}>{content}</p>
      </li>
    ));
  }
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      {reviews.length ? review : <p className={css.text}>We don't have any reviews for this movie</p>}
    </div>
  );
};
export default Reviews;
