import { JSX } from "react";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";

import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";
import { useNavigate, useParams } from "react-router-dom";

const animals = [
  {
    id: 1,
    name: "Буся",
    type: "Собака",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    image: "../public/img/adopt_sec_2_photo1.jpg",
    curator: "89033064444",
    hospice: "Подари надежду",
  },
  {
    id: 2,
    name: "Алекс",
    type: "Собака",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    image: "../public/img/adopt_sec_2_photo2.jpg",
    curator: "89033064444",
    hospice: "Танин дом друзей",
  },
  {
    id: 3,
    name: "Маруся",
    type: "Кошка",
    gender: "Девочка",
    age: "11 месяцев",
    city: "Набережные Челны",
    image: "../public/img/adopt_sec_2_photo8.jpg",
    curator: "89033064444",
    hospice: "Собачья жизнь",
  },
  {
    id: 4,
    name: "Джиджи",
    type: "Собака",
    gender: "Девочка",
    age: "3 года",
    city: "Альметьевск",
    image: "../public/img/adopt_sec_2_photo4.jpg",
    curator: "89033064444",
    hospice: "Человек собаке друг",
  },
  {
    id: 5,
    name: "Рекс",
    type: "Собака",
    gender: "Мальчик",
    age: "4 года",
    city: "Набережные Челны",
    image: "../public/img/adopt_sec_2_photo3.jpg",
    curator: "89033064444",
    hospice: "Собачья жизнь",
  },
  {
    id: 6,
    name: "Мася",
    type: "Кошка",
    gender: "Девочка",
    age: "8 лет",
    city: "Альметьевск",
    image: "../public/img/adopt_sec_2_photo7.jpg",
    curator: "89033064444",
    hospice: "Танин дом друзей",
  },
  {
    id: 7,
    name: "Тайсон",
    type: "Собака",
    gender: "Мальчик",
    age: "2 года",
    city: "Нижнекамск",
    image: "../public/img/adopt_sec_2_photo10.jpg",
    curator: "89033064444",
    hospice: "Подари надежду",
  },
  {
    id: 8,
    name: "Пуся",
    type: "Собака",
    gender: "Девочка",
    age: "4 года",
    city: "Казань",
    image: "../public/img/adopt_sec_2_photo11.jpg",
    curator: "89033064444",
    hospice: "Подари надежду",
  },
];

const cities = ["Казань", "Набережные Челны", "Альметьевск", "Нижнекамск"];
const types = ["Собака", "Кошка", "Другое"];
const genders = ["Мальчик", "Девочка"];
const ages = ["До 1 года", "От 1 года до 7 лет", "От 7 лет и старше"];

function ViewMorePetsPage(): JSX.Element {
  const [filters, setFilters] = useState({
    type: "",
    gender: "",
    age: "",
    city: "",
  });

  const [dropdown, setDropdown] = useState("");

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDropdown("");
  };

  const parseAge = (age: string): number => {
    const match = age.match(/(\d+)\s*(год|года|лет|месяц|месяца|месяцев)/);
    if (!match) return 0;

    const value = parseInt(match[1]); // Извлекаем число
    const unit = match[2]; // Определяем единицу измерения

    return unit.startsWith("месяц") ? value / 12 : value; // Преобразуем месяцы в доли года
  };

  const filteredAnimals = animals.filter((animal) => {
    const animalAge = parseAge(animal.age);

    return (
      (!filters.type || animal.type === filters.type) &&
      (!filters.gender || animal.gender === filters.gender) &&
      (!filters.city || animal.city === filters.city) &&
      (!filters.age ||
        (filters.age === "До 1 года" && animalAge < 1) ||
        (filters.age === "От 1 года до 7 лет" &&
          animalAge >= 1 &&
          animalAge < 7) ||
        (filters.age === "От 7 лет и старше" && animalAge >= 7))
    );
  });

  // Функция сброса фильтров
  const resetFilters = () => {
    setFilters({
      type: "",
      gender: "",
      age: "",
      city: "",
    });
  };

  const navigate = useNavigate();

  const handleMoreInfo = (id: number) => {
    navigate(`/pet/${id}`);
  };


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
      <section className="secnd-section-section adoptFriend-margin">
        <div className="adob-second-section__container container">
          <p className="adob-second-section__text-small text-small">
            Найдите своего малыша
          </p>
          <p className="adob-second-section__text-big text-big">
            Эти животные готовы найти свой{" "}
            <span className="orange-word">дом</span>.
            <br />
            Здесь вы найдете своего лучшего друга, <br />
            который <span className="orange-word">ждет</span> именно вас.
          </p>
        </div>
        <hr className="secnd-section__line line" />
      </section>
      {/* Поднимите лапки */}
      <section className="secnd-section">
        <div className="secnd-section__container container adoptFriend-container">
          <p className="secnd-section__text">
            Поднимите лапки, если вы готовы нам помочь
          </p>
          <p className="secnd-section__title-text text-middle">
            В приютах живет много питомцев, каждый мечтает о доме. Подарите им
            свою любовь и заботу!
          </p>
          <div className="secnd-section__line line"></div>
        </div>
        <hr className="secnd-section__line line" />
      </section>

      {/* ФИЛЬТР ПО ЖИВОТНЫМ */}

      <section className="filter-section container">
        <div className="filter-buttons">
          {[
            { key: "type", label: "Вид", options: types },
            { key: "gender", label: "Пол", options: genders },
            { key: "age", label: "Возраст", options: ages },
            { key: "city", label: "Город", options: cities },
          ].map(({ key, label, options }) => (
            <div key={key} className="filter-wrapper">
              <button
                className={`filter-button ${dropdown === key ? "active" : ""}`}
                onClick={() => setDropdown(dropdown === key ? "" : key)}
              >
                {filters[key] || label}
              </button>
              {dropdown === key && (
                <ul className="filter-dropdown">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleFilterChange(key, option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={resetFilters}>
          Сбросить фильтр
        </button>
      </section>
      {/* КАРТОЧКИ ЖИВОТНЫХ ГОТОВЫХ К СЫНОВЛЕНИЮУ */}
      <section className="adopt-cards-container container">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="adopt-card">
            <img
              src={animal.image}
              alt={animal.name}
              className="adopt-card__img"
            />
            <h3 className="adopt-card__title text-black">{animal.name}</h3>
            <p className="adopt-card__details textBlack">
              {animal.gender} / {animal.age} / {animal.city}
            </p>
            <p className="adopt-card__details textBlack">
              Куратор - <span className="orange-word">{animal.curator}</span>
            </p>
            <p className="adopt-card__details textBlack">
              Приют - "{animal.hospice}"
            </p>
            <button
              className="adopt-card__more-btn button"
              onClick={() => handleMoreInfo(animal.id)}
            >
              Узнать больше
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
export default ViewMorePetsPage;
