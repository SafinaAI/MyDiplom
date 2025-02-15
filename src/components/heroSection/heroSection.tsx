import React from "react";

const HeroSection = () => (
  <section className="main-section">
    <div className="main-section__container container">
      <div className="left-wrapper">
        <img
          src="/img/dog1.png"
          alt="Фото собачки"
          className="left-wrapper__img"
        />
      </div>
      <div className="right-wrapper">
        <h1 className="right-wrapper__title title">
          AlexVet главный помощник четвероногих друзей
        </h1>
        <p className="right-wrapper__text">
          Мы помогаем вернуть потерянных животных домой благодаря удобной карте
          поиска. Мы поддерживаем приюты, чтобы каждая собака и кошка нашли свою
          семью. Получайте полезные советы по уходу за питомцами и находите
          специалистов в нашей платформе. <br />
          <br />
          Присоединяйтесь к нам и подарите любовь четвероногим друзьям!
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
