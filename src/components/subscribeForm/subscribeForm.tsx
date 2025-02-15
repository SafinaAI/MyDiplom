import React from "react";

const SubscribeForm = () => (
  // СЕДЬМАЯ СЕКЦИЯ Форма обратной связи
  <section className="seventh-section">
    <div className="seventh-section__container container">
      <div className="seventh-section__wrapper">
        <p className="seventh-section__text text-middle">
          Получайте <span className="orange-word">Любовь</span> на свой
          <br />
          почтовый ящик
        </p>
        <div className="seventh-section__subscription-form-container subscription-form">
          <form
            className="seventh-section__subscription-form subscription-form__formEmail"
            action="#"
            method="post"
          >
            <input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              required
            />
            <input type="submit" name="submit" value="Subscribe" />
          </form>
          <ul className="seventh-section__icons-box icons-box">
            <li className="icons-box__item">
              <img src="/icons/facebook.svg" alt="facebook" />
            </li>
            <li className="icons-box__item">
              <img src="/icons/instagramm.svg" alt="instagramm" />
            </li>
            <li className="icons-box__item">
              <img src="/icons/telegramm.svg" alt="telegramm" />
            </li>
            <li className="icons-box__item">
              <img src="/icons/vk.svg" alt="vk" />
            </li>
            <li className="icons-box__item">
              <img src="/icons/youtube.svg" alt="youtube" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SubscribeForm;
