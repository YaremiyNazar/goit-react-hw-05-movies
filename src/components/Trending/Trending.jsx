import { useState, useEffect } from 'react';
import { getTrending } from "../../helpers/api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MovieList from '../MovieList/MovieList';

const TrendingMovies = () => {
  const [trend, setTrend] = useState([]);
  const [error] = useState('');

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { data } = await getTrending();
        setTrend(data.results);
      } catch (error) {
       Notify.failure(`Sorry something went wrong. ${error.message}`);
      }
    };
    fetchTrend();
  }, []);

  return <>{error ? <p>{error}</p> : <MovieList movies={trend} />}</>;
};
export default TrendingMovies;