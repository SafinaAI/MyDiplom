import { JSX } from "react";
import Navigation from "../../components/Navigation/Navigation";
import SearchSection from "../../components/searchSection/searchSection";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";
import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../const";
import { useNavigate } from "react-router-dom";

const specialists = [
  {
    id: 1,
    name: "Груммер Таня",
    image: "../public/img/груммер1 1.png",
    reviews: 150,
  },
  {
    id: 2,
    name: "Груммер Катя",
    image: "../public/img/груммер2.png",
    reviews: 120,
  },
  {
    id: 3,
    name: "Груммер Валерия",
    image: "../public/img/груммер3.png",
    reviews: 100,
  },
  {
    id: 4,
    name: "Хирург Иван",
    image: "../public/img/ветврач1.png",
    reviews: 90,
  },
  {
    id: 5,
    name: "Ортопед Дмитрий",
    image: "../public/img/ветврач2.png",
    reviews: 85,
  },
  {
    id: 6,
    name: "Терапевт Денис",
    image: "../public/img/ветврач3.png",
    reviews: 105,
  },
  {
    id: 7,
    name: "Догситтер Аня",
    image: "../public/img/груммер1 1.png",
    reviews: 113,
  },
  {
    id: 8,
    name: "Диетолог Василий",
    image: "../public/img/груммер1 1.png",
    reviews: 98,
  },
];

function ServicesPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      {/* Основное меню */}
      <div className="section-header__container container">
        <NavLink className="section-header__logo-link" to="/">
          <img
            src="/icons/LOGO.svg"
            alt="Logo"
            className="section-header__logo"
          />
        </NavLink>
        <nav className="section-header__nav nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__list-item">
              <a className="nav-menu__list-item-link" href="">
                Найти специалиста
              </a>
            </li>
            <li className="nav-menu__list-item">
              <a className="nav-menu__list-item-link" href="">
                Топ лучших
              </a>
            </li>
            <li className="nav-menu__list-item">
              <a className="nav-menu__list-item-link" href="">
                Стать специалистом{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Услуги</button>
        </div>
      </div>
      {/* СЕКЦИЯ ОДИН - ПРИВЕТСТВИЕ И ФОТО */}
      <section className="firstSec">
        <div className="firstSec__container container">
          <div className="leftWrapper">
            <h1 className="leftWrapper__title">
              Любимым хвостикам только проверенные специалисты!
            </h1>
            <h2 className="leftWrapper__text">
              Мы за то, чтобы животные получали качественные услуги
            </h2>
            <div className="leftWrapper__btn button">
              <button
                className="leftWrapper__btn-searchProf"
                onClick={() => navigate(AppRoute.ViewMoreServices)}
              >
                Найти специалиста
              </button>

              <button className="leftWrapper__btn-loadService">
                Выложить услугу
              </button>
            </div>
          </div>
          <div className="rightWrapper">
            {/* <img
              src="../public/img/carePageDog.png"
              alt="Фото_собаки"
              className="rightWrapper__img"
            /> */}
            <img
              src="../public/img/girlAndKorgi.png"
              alt="Фото_собаки"
              className="rightWrapper__img"
            />
          </div>
        </div>
      </section>
      <SearchSection />
      {/*    СЕКЦИЯ ТРИ - ВЫБОР СПЕЦИАЛИСТА    */}

      <section className="thirdSec">
        <div className="thirdSec__container container">
          <div className="thirdSec__wrapper">
            <h3 className="thirdSec__title">
              Это важно при выборе специалиста
            </h3>
            <p className="thirdSec__text">
              Выбирая специалиста, доверьтесь не только рейтингу, но и своему
              сердцу. Почитайте отзывы, посмотрите работы — важно, чтобы в них
              чувствовалась любовь к животным. Задайте пару вопросов, а если
              питомец останется у специалиста, уточните, сможет ли он присылать
              новости. Пусть ваш хвостик будет в заботливых и надёжных руках!
            </p>
          </div>
        </div>
      </section>
      {/* ТОП ЛУЧШИХ СПЕЦИАЛИСТОВ */}
      <section className="bestSpec">
        <div className="bestSpec__container container">
          <div className="bestSpec__wrapper">
            <h2 className="bestSpec__title">
              Лучшие из лучших — проверено <br />
              <span className="orange-word">любовью</span>!
            </h2>
            <div className="bestSpec__cards">
              {specialists.map((spec) => (
                <div key={spec.id} className="bestSpec__card">
                  <img
                    loading="lazy"
                    src={spec.image}
                    alt={spec.name}
                    className="bestSpec__cardImg"
                  />
                  <h3 className="bestSpec__cardName">{spec.name}</h3>
                  <div className="bestSpec__cardRating">
                    <span>★★★★★</span>
                  </div>
                  <p className="bestSpec__cardReviews">
                    {spec.reviews} отзывов
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ПРИСОЕДИНЯЙТЕ К НАМ И СТАНОВИТЕСЬ СПЕЦИАЛИСТОМ */}
      <section className="fourthSec">
        <div className="fourthSec__container container">
          <div className="fourthSec__wrapper">
            <div className="fourthSec__wrap">
              <div className="fourthSec__leftWrap">
                <h3 className="fourthSec__title">
                  Дарите <span className="orange-word">любовь</span> —
                  становитесь другом для хвостиков!
                </h3>
                <img
                  src="../public/img/LexVet_Care_кошка.png"
                  alt=""
                  className="fourthSec__img"
                />
              </div>
              <div className="fourthSec__rightWrap">
                <p className="fourthSec__text">
                  Любите животных и хотите дарить им заботу? Присоединяйтесь к
                  нашей тёплой команде специалистов! Расскажите о себе, своих
                  услугах и находите новых пушистых друзей. Давайте вместе
                  делать этот мир добрее —{" "}
                  <span className="orange-word">лапка к лапке!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifthSec">
        <div className="fifthSec__container container">
          <div className="fifthSec__wrapper">
            <h2 className="fifthSec__title">
              Поделитесь своей заботой — станьте
              <span className="orange-word">другом</span> для хвостиков!
            </h2>
            <button className="fifthSec__button button">Добавить резюме</button>
          </div>
        </div>
      </section>
      <UserStoriesSection />
      <SubscribeForm />
      <Footer />
      <RightsSection />
    </>
  );
}
export default ServicesPage;
