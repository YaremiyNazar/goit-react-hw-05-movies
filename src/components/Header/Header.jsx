import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.header}>
      <NavLink className={css.header__link} to="/">
        Home
      </NavLink>
      <NavLink className={css.header__link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
