import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../helpers/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../Cast/Cast.module.css';
import notFoundImg from '../../helpers/logo192.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getCast(params.movieId);
        setCast(data.cast);
      } catch (error) {
        Notify.failure(`Sorry something went wrong. ${error.message}`);
      }
    };
    fetchCast();
  }, [params.movieId]);

  const castMarkup = cast.map(({ profile_path, character, name, cast_id }) => (
    <li className={css.item} key={cast_id}>
      {profile_path && (
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={name}
          width="200"
        />)}
      {!profile_path && (
        <img className={css.img} src={notFoundImg} alt={name} width="200" />
      )}
      <p className={css.text}>{name}</p>
      <p className={css.text}>Character: {character}</p>
    </li>
  ));

  return <ul className={css.list}> {castMarkup}</ul>;
};
export default Cast;
