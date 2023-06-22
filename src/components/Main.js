import cardsImage1 from '../images/cards-image-1.jpg';
import cardsImage2 from '../images/cards-image-2.jpg';
import cardsImage3 from '../images/cards-image-3.jpg';
import cardsImage4 from '../images/cards-image-4.jpg';
import cardsImage5 from '../images/cards-image-5.jpg';
import cardsImage6 from '../images/cards-image-6.jpg';
import cardsImage7 from '../images/cards-image-7.jpg';
import cardsImage8 from '../images/cards-image-8.jpg';
import cardsImage9 from '../images/cards-image-9.jpg';
import cardsImage10 from '../images/cards-image-10.jpg';

function Main() {
  return (
    <main className="main">
      <section className="cards">
        <h1 className="cards__title">Все кроссовки</h1>
        <ul className="cards__list">
          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage1} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Blazer Mid Suede
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">12 999 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage2} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Air Max 270
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">12 999 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage3} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Blazer Mid Suede
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">8 499 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage4} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Кроссовки Puma X Aka Boku Future Rider
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">8 999 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage5} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Under Armour Curry 8
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">15 199 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage6} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Kyrie 7
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">11 299 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage7} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Jordan Air Jordan 11
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">10 799 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage8} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike LeBron XVIII
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">16 499 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage9} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Lebron XVIII Low
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">13 999 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage1} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Blazer Mid Suede
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">8 499 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img className="cards__image" src={cardsImage4} alt="Кроссовки" />
              <figcaption className="cards__caption">
                Кроссовки Puma X Aka Boku Future Rider
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">8 999 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>

          <li className="cards__item">
            <figure className="cards__figure">
              <img
                className="cards__image"
                src={cardsImage10}
                alt="Кроссовки"
              />
              <figcaption className="cards__caption">
                Мужские Кроссовки Nike Kyrie Flytrap IV
              </figcaption>
            </figure>
            <button
              className="cards__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <div className="cards__info">
              <div className="cards__price">
                <p className="cards__text">Цена:</p>
                <p className="cards__cost">11 299 руб.</p>
              </div>
              <button
                className="cards__add-button"
                type="button"
                aria-label="Добавить"
              ></button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default Main;
