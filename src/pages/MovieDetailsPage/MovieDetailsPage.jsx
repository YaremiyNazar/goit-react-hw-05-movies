import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieParams } from '../../helpers/api';
import { Link, Outlet } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './MovieDetailsPage.module.css';
import notFoundImg from "../../helpers/logo192.png"

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [error,setError] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const { data } = await getMovieParams(params.movieId);
        setDetails(data);
      } catch (error) {
        setError( Notify.failure(`Something went wrong. ${error.message}`));
      }
    };

    fetchParams();
  }, [params.movieId]);
  const { poster_path , title, overview, vote_average, genres = [] } = details;
  const genresName = genres.map(({ id, name }) => <li className={css.genre} key={id}>{name}</li>);

  const goBack = () => navigate(from);
  return (
    <>
      {error ? (
        <p>{error} </p>
      ) : (
        <div>
          <button className={css.button} onClick={goBack}>
            <div className={css.arrow}>Go back</div>
          </button>
          <div>
            <div className={css.wrapper}>
              <div className={css.box}>
                   <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    width="300"
                  />
                    {!poster_path && <img
                    src={notFoundImg}
                    alt={title}
                    width="300"
                  />}
              </div>
              <div className={css.box__text}>
                <h2>{title}</h2>
                <p className={css.text}>Raiting: {vote_average}</p>
                <h3>Overview</h3>
                <p className={css.text}>{overview}</p>
                <h4>Genres</h4>
                <ul className={css.list}>{genresName}</ul>
              </div>
            </div>
            <div className={css.box__link}>
              <p className={css.text}>Additional information</p>
              <ul className={css.list__link}>
                <li className={css.item}>
                  <Link className={css.btn} state={{ from }} to="cast">
                    Cast
                  </Link>
                </li>
                <li className={css.item}>
                  <Link className={css.btn} state={{ from }} to="reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
