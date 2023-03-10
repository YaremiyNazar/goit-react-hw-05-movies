
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Revie/Revie'));
const Loading = lazy(() => import('../components/Loading/Loading'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
