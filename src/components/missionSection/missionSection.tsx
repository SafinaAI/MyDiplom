import React from "react";

const MissionSection = () => (
  // Третья секция
  <section className="third-section">
    <div className="third-section__container container">
      <p className="third-section__text-small text-small">Наша миссия</p>
      <p className="third-section__text-big text-big">
        Все питомцы заслуживают <span className="orange-word">любви</span>.{" "}
        <br />
        Мы помогаем им ее найти.
      </p>
      <div className="third-section__cards-box">
        <div className="third-section__cards-item cards-item icons_cards-item">
          <img
            src="/icons/section3_icon1.svg"
            alt=""
            className="cards-item__icon"
          />
          <p className="cards-item__textOrange textOrange">
            1млн+ домашних животных
          </p>
          <p className="cards-item__textBlack textBlack">
            никогда не найдут любящий дом
          </p>
        </div>
        <div className="third-section__cards-item cards-item icons_cards-item">
          <img
            src="/icons/section3_icon2.svg"
            alt=""
            className="cards-item__icon"
          />
          <p className="cards-item__textOrange textOrange">Многие</p>
          <p className="cards-item__textBlack textBlack">
            Домашние питомцы подвергаются ненужной эвтаназии без доступной
            ветеринарной помощи
          </p>
        </div>
        <div className="third-section__cards-item cards-item icons_cards-item">
          <img
            src="/icons/section3_icon3.svg"
            alt=""
            className="cards-item__icon"
          />
          <p className="cards-item__textOrange textOrange">1 из 3</p>
          <p className="cards-item__textBlack textBlack">
            Домашних питомцев пропадают, и многие из них никогда не возвращаются
            домой
          </p>
        </div>
        <div className="third-section__cards-item cards-item icons_cards-item">
          <img
            src="/icons/section3_icon4.svg"
            alt=""
            className="cards-item__icon"
          />
          <p className="cards-item__textOrange textOrange">
            Бесчисленное множество
          </p>
          <p className="cards-item__textBlack textBlack">
            приютов и организаций испытывают нехватку ресурсов
          </p>
        </div>
      </div>
      <hr className="secnd-section__line line" />
    </div>
  </section>
);

export default MissionSection;
