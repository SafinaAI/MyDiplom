import React from "react";

const UserStoriesSection = () => (
  // ШЕСТАЯ СЕКЦИЯ Наши голоса
  <section className="sixth-section">
    <div className="sixth-section__container container">
      <p className="sixth-section__text-small text-small">Наши голоса</p>
      <p className="sixth-section__text-big text-big">
        <span className="orange-word">Счастливые</span> истории наших <br />
        подписчиков
      </p>
      <div className="sixth-section__cards-box4">
        {/* карточка 1 */}
        <div className="sixth-section__box4-item box4-item">
          <img
            className="box4-item__img"
            src="/img/секция_6_фото_1.png"
            alt="История владельца 1"
          />
          <p className="box4-item__text-title textBlack">Алия и Барки</p>
          <div className="box4-item__wrapper-textInfo">
            <p className="box4-item__text-info textBlack">
              Мой малыш пропал во время прогулки. Я боялась, что больше никогда
              не увижу его. Но многочисленные пользователи LexVet Lost...
            </p>
          </div>
          <button className="box4-item__btn button">Читать</button>
        </div>
        {/* карточка 2 */}
        <div className="sixth-section__box4-item box4-item">
          <img
            className="box4-item__img"
            src="/img/секция_6_фото_2.png"
            alt="История владельца 2"
          />
          <p className="box4-item__text-title textBlack">Иван и Лекси</p>
          <div className="box4-item__wrapper-textInfo">
            <p className="box4-item__text-info textBlack">
              моя собака пропала во время прогулки в парке. Он далеко убежал от
              меня, испугавшись детей. Я искал его 3 дня, пока соседи не
              рассказали мне о LexVet Поиск...
            </p>
          </div>
          <button className="box4-item__btn button">Читать</button>
        </div>
        {/* карточка 3 */}
        <div className="sixth-section__box4-item box4-item">
          <img
            className="box4-item__img"
            src="/img/секция_6_фото_3.png"
            alt="История владельца 2"
          />
          <p className="box4-item__text-title textBlack">Мария и Пушок</p>
          <div className="box4-item__wrapper-textInfo">
            <p className="box4-item__text-info textBlack">
              моя собака пропала во время прогулки в парке. Он далеко убежал от
              меня, испугавшись детей. Я искал его 3 дня, пока соседи не
              рассказали мне о LexVet Поиск...
            </p>
          </div>
          <button className="box4-item__btn button">Читать</button>
        </div>
      </div>
    </div>
  </section>
);

export default UserStoriesSection;
