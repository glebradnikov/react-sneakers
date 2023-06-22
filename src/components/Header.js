import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.png';
import headerShoppingCart from '../images/header-shopping-cart.svg';
import headerFavorites from '../images/header-favorites.svg';
import headerUser from '../images/header-user.svg';

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
            <img
              className="header__shopping-cart"
              src={headerShoppingCart}
              alt="Корзина"
            />
            1205 руб.
          </button>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/favorites">
            <img
              className="header__favorites"
              src={headerFavorites}
              alt="Избранное"
            />
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/user">
            <img className="header__user" src={headerUser} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
