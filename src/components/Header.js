import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.png';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <div className="header__intro">
          <img
            className="header__logo"
            src={headerLogo}
            alt="React Sneakers"
            lang="en"
          />
          <div className="header__info">
            <h2 className="header__title">React Sneakers</h2>
            <p className="header__text">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header__list">
        <li className="header__item">
          <button className="header__button" type="button" aria-label="Корзина">
            <div className="header__shopping-cart-icon"></div>
            1205 руб.
          </button>
        </li>
        <li className="header__item">
          <Link className="header__favorites-link" to="/favorites"></Link>
        </li>
        <li className="header__item">
          <Link className="header__user-link" to="/user"></Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
