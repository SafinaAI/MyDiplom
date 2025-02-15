import React, { JSX } from "react";
import ReactDOM from "react-dom/client";

function OurDecisionCard(): JSX.Element {
  return (
    <div className="fourth-section__box2-item box2-item">
      <img
        className="box2-item__img"
        src="./img/section4_img1.png"
        alt="Усыновите питомца"
      />
      {/* враппер для текста карточки, чтобы текст равнялся по левому краю */}
      <div className="box2-item__wrapper-text">
        <p className="box2-item__text-superSmall text-superSmall">
          Создание семьи
        </p>
        <p className="box2-item__textOrange textOrange">LexVet - Усыновление</p>
        <p className="box2-item__textBlack textBlack">
          Возьмите себе питомца. Увеличьте свою семью. Наполните свой дом
          любовью. С LexVet - усыновление легко найти друга по душе
        </p>
        <button className="box2-item__btn button">
          Посетите LexVet Усыновление
        </button>
      </div>
    </div>
  );
}
export default OurDecisionCard;
