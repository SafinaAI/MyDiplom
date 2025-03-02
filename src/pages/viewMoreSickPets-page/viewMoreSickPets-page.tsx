import { JSX } from "react";
import Navigation from "../../components/Navigation/Navigation";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";
import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const sickAnimals = [
  {
    id: 1,
    name: "Буся",
    type: "Кошка",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart1.jfif",
    urgency: "Высокая",
    illness: "Проблемы с сердцем",
  },
  {
    id: 2,
    name: "Алекс",
    type: "Собака",
    gender: "Мальчик",
    age: "1 год",
    city: "Набережные челны",
    imgSrc: "../public/img/adob_third_section_cart2.jfif",
    urgency: "Низкая",
    illness: "Перелом лапы",
  },
  {
    id: 3,
    name: "Маруся",
    type: "Кошка",
    gender: "Девочка",
    age: "1 год",
    city: "Набережные челны",
    imgSrc: "../public/img/adob_third_section_cart3.jfif",
    urgency: "Средняя",
    illness: "Инфекция дыхательных путей",
  },
  {
    id: 4,
    name: "Джиджи",
    type: "Собака",
    gender: "Девочка",
    age: "1 год",
    city: "Альметьевск",
    imgSrc: "../public/img/adob_third_section_cart4.jfif",
    urgency: "Средняя",
    illness: "Травма глаза",
  },
];

const cities = ["Казань", "Набережные Челны", "Альметьевск", "Нижнекамск"];
const types = ["Собака", "Кошка", "Другое"];
const genders = ["Мальчик", "Девочка"];
const ages = ["До 1 года", "От 1 года до 7 лет", "От 7 лет и старше"];

function ViewMoreSickPetsPage(): JSX.Element {
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

  const filteredAnimals = sickAnimals.filter((animal) => {
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

  return (
    <>
      <Navigation />
      {/* Основное меню */}
      {/* <div className="section-header__container container">
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
              <a className="nav-menu__list-item-link" href="">найти специалиста</a>
            </li>
            <li className="nav-menu__list-item">
              <a className="nav-menu__list-item-link" href="">топ лучших</a>
            </li>
            <li className="nav-menu__list-item">
              <a className="nav-menu__list-item-link" href="">стать специалистом </a>
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Мой питомец</button>
        </div>
      </div> */}
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

      {/* КАРТОЧКИ ЖИВОТНЫХ, НУЖДАЮЩИХСЯ В ЛЕЧЕНИИ */}
      <section className="adopt-cards-container container">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="adopt-card">
            <img
              src={animal.imgSrc}
              alt={animal.name}
              className="adopt-card__img"
            />
            <div className="adopt-card__text-wrapper">
              <h3 className="adopt-card__title textBlack">
                {animal.name} / {animal.type}
              </h3>
              <p className="adopt-card__details textBlack">
                {animal.gender} / {animal.age} / {animal.city}
              </p>
              <p className="adopt-card__illness textBlack">
                <strong>Болезнь:</strong> {animal.illness}
              </p>
              <p className="adopt-card__danger textBlack">
                <strong>Срочность:</strong> {animal.urgency}
              </p>
            </div>
            <button
              className="adopt-card__contact-btn"
              onClick={() => navigate(`/sick-pet/${animal.id}`)}
            >
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
