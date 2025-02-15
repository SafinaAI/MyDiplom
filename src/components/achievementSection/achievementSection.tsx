import React from "react";

const AchievementSection = () => (
  //  ПЯТАЯ СЕКЦИЯ Наши достижения
  <section className="fifth-section">
    <div className="fifth-section__container container">
      <p className="fifth-section__text-small text-small">Наши достижения</p>
      {/* карточки описания Достижений */}
      <div className="fifth-section__cards-box3">
        {/* карточка 1 */}
        <div className="fifth-section__box3-item box3-item icons_cards-item">
          <img
            src="/icons/section3_icon1.svg"
            alt=""
            className="box3-item__icon"
          />
          {/* текст внутри карточки */}
          <p className="box3-item__textMix">
            <span className="orange-word">Более 500</span>
            <br />
            животных <br />
            обрели свой <br />
            дом
          </p>
        </div>
        {/* карточка 2 */}
        <div className="fifth-section__box3-item box3-item icons_cards-item">
          <img
            src="/icons/section3_icon2.svg"
            alt=""
            className="box3-item__icon"
          />
          <p className="box3-item__textMix">
            <span className="orange-word">100+ животных</span>
            <br />
            спасены от <br />
            эвтаназии
          </p>
        </div>
        {/* карточка 3 */}
        <div className="fifth-section__box3-item box3-item icons_cards-item">
          <img
            src="/icons/section3_icon3.svg"
            alt=""
            className="box3-item__icon"
          />
          <p className="box3-item__textMix">
            <span className="orange-word">1т+ животных</span>
            <br />
            вернулись <br />
            домой
          </p>
        </div>
        {/* карточка 4 */}
        <div className="fifth-section__box3-item box3-item icons_cards-item">
          <img
            src="/icons/section3_icon4.svg"
            alt=""
            className="box3-item__icon"
          />
          <p className="box3-item__textMix">
            <span className="orange-word">Более 2млн</span>
            <br />
            пожертвований
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AchievementSection;
