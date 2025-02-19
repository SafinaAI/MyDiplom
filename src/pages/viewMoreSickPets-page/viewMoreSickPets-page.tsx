import { JSX } from "react";
import Navigation from "../../components/Navigation/Navigation";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";
import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

const sickAnimals = [
  {
    id: 1,
    name: "Барсик",
    gender: "Мальчик",
    age: "2 года",
    city: "Москва",
    illness: "Перелом лапы",
    dangerLevel: "Низкая",
    image: "./public/img/adopt_sec_2_photo1.jpg",
  },
  {
    id: 2,
    name: "Луна",
    gender: "Девочка",
    age: "3 года",
    city: "Санкт-Петербург",
    illness: "Инфекция дыхательных путей",
    dangerLevel: "Средняя",
    image: "../public/img/adopt_sec_2_photo4.jpg",
  },
  {
    id: 3,
    name: "Рекс",
    gender: "Мальчик",
    age: "5 лет",
    city: "Казань",
    illness: "Проблемы с сердцем",
    dangerLevel: "Высокая",
    image: "../public/img/adopt_sec_2_photo2.jpg",
  },
  {
    id: 4,
    name: "Мурка",
    gender: "Девочка",
    age: "1,5 года",
    city: "Новосибирск",
    illness: "Травма глаза",
    dangerLevel: "Низкая срочность",
    image: "./public/img/adopt_sec_2_photo1.jpg",
  },
];

function ViewMoreSickPetsPage(): JSX.Element {
  return (
    <>
      <Navigation />
      {/* Основное меню */}
      <div className="section-header__container container">
        <a className="section-header__logo-link" href="./index.html">
          <img
            src="../public/icons/LOGO.svg"
            alt="Logo"
            className="section-header__logo"
          />
        </a>
        <nav className="section-header__nav nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__list-item">
              <a href="">найти специалиста</a>
            </li>
            <li className="nav-menu__list-item">
              <a href="">топ лучших</a>
            </li>
            <li className="nav-menu__list-item">
              <a href="">стать специалистом </a>
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Мой питомец</button>
        </div>
      </div>
      {/* Помогите животным выздороветь */}
      <section className="secnd-section-section adoptFriend-margin">
        <div className="adob-second-section__container container">
          <p className="adob-second-section__text-small text-small">
            Помогите животным выздороветь
          </p>
          <p className="adob-second-section__text-big text-big">
            Эти животные нуждаются в{" "}
            <span className="orange-word">лечении</span>
            <br />
            Поддержите их, помогите им{" "}
            <span className="orange-word">встать на лапы!</span>
          </p>
        </div>
        <hr className="secnd-section__line line" />
      </section>

      {/* СПАСИТЕ ЖИЗНЬ */}
      <section className="secnd-section">
        <div className="secnd-section__container container adoptFriend-container">
          <p className="secnd-section__text">
            Ваше доброе сердце может спасти жизнь!
          </p>
          <p className="secnd-section__title-text text-middle">
            Некоторым животным срочно требуется лечение. Даже небольшое
            пожертвование может помочь спасти их жизнь!
          </p>
          <div className="secnd-section__line line"></div>
        </div>
        <hr className="secnd-section__line line" />
      </section>

      {/* КАРТОЧКИ ЖИВОТНЫХ, НУЖДАЮЩИХСЯ В ЛЕЧЕНИИ */}
      <section className="adopt-cards-container container">
        {sickAnimals.map((animal) => (
          <div key={animal.id} className="adopt-card">
            <img
              src={animal.image}
              alt={animal.name}
              className="adopt-card__img"
            />
            <div className="adopt-card__text-wrapper">
              <h3 className="adopt-card__title textBlack">{animal.name}</h3>
              <p className="adopt-card__details textBlack">
                {animal.gender} / {animal.age} / {animal.city}
              </p>
              <p className="adopt-card__illness textBlack">
                <strong>Болезнь:</strong> {animal.illness}
              </p>
              <p className="adopt-card__danger textBlack">
                <strong>Срочность:</strong> {animal.dangerLevel}
              </p>
            </div>
            <button className="adopt-card__contact-btn">
              Помочь с лечением
            </button>
          </div>
        ))}
      </section>

      <UserStoriesSection />
      <SubscribeForm />
      <Footer />
      <RightsSection />
    </>
  );
}

export default ViewMoreSickPetsPage;
