import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import notFoundImg from "../../helpers/logo192.png"

const MovieList = ({ movies }) => {
  const location = useLocation();

  const moviesList = movies.map(({ id, title, poster_path }) => (
    <li className={css.item} key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {poster_path && <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="300"
        />}
          {!poster_path && <img
          className={css.img}
          src={notFoundImg}
          alt={title}
          width="300"
        />}
        <p className={css.title}>{title}</p>
      </Link>
    </li>
      
  ));
  return <ul className={css.list}>{moviesList}</ul>;

};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
