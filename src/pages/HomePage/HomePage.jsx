import TrendingMovies from '../../components/Trending/Trending';
import css from './HomePage.module.css';

const Home = () => {
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <TrendingMovies />
    </>
  );
};

export default Home;
