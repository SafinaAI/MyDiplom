import React from "react";

const Footer = () => (
  //   ВОСЬМАЯ СЕКЦИЯ Футтер
  <footer className="footer-section">
    <div className="footer-section__container container">
      <div className="footer-section__orangeLine"></div>
      {/* wrapper для того чтобы все последующие дивы можно было разделить флексом */}
      <div className="footer-section__wrapper">
        <div className="footer-section__fotter-item fotter-item">
          <img
            src="/icons/LOGO.svg"
            alt="LexVet Лого"
            className="fotter-item__logo"
          />
        </div>

        {/* СТОЛБЕЦ 1 - О НАС */}
        <div className="footer-section__fotter-item fotter-item">
          <p className="fotter-item__title textOrange">О НАС</p>
          <ul className="fotter-item__list footer-list">
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Кто мы
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Что мы делаем
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Финансы
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Наши партнеры
              </a>
            </li>
          </ul>
        </div>

        {/* СТОЛБЕЦ 2 - НАША СЕМЬЯ */}
        <div className="footer-section__fotter-item fotter-item">
          <p className="fotter-item__title textOrange">НАША СЕМЬЯ</p>
          <ul className="fotter-item__list footer-list">
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                LexVet Усыновление
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                LexVet Поиск
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                LexVet Забота
              </a>
            </li>
          </ul>
        </div>

        {/* СТОЛБЕЦ 3 - ПАРТНЕРЫ */}
        <div className="footer-section__fotter-item fotter-item">
          <p className="fotter-item__title textOrange">ПАРТНЕРЫ</p>
          <ul className="fotter-item__list footer-list">
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                RoyalConin
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Кот и Пес
              </a>
            </li>
          </ul>
        </div>

        {/* СТОЛБЕЦ 4 - БОЛЬШЕ */}
        <div className="footer-section__fotter-item fotter-item">
          <p className="fotter-item__title textOrange">БОЛЬШЕ</p>
          <ul className="fotter-item__list footer-list">
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Поддержка
              </a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="#">
                Pr - отдел
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
