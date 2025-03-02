import { JSX } from "react";
import ReactDOM from "react-dom/client";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import PetMap from "../../components/petMap/petMap";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";


const animalsNeedingHelp = [
  {
    id: 1,
    name: "Буся",
    type: "Кошка",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart1.jfif",
    urgency: "Высокая",
    curator: "89033064444",
    hospice: "Танин дом друзей",
    illness: "Проблемы с сердцем",
    additionalImages: [
      "../public/img/adopt_sec_2_photo2.jpg",
      "../public/img/adopt_sec_2_photo1.jpg",
    ],
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
    curator: "89033064444",
    hospice: "Собачья жизнь",
    illness: "Перелом лапы",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    curator: "89033064444",
    hospice: "Собачья жизнь",
    illness: "Инфекция дыхательных путей",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    curator: "89033064444",
    hospice: "Человек собаке друг",
    illness: "Травма глаза",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
  },
];

function AboutSickPet() {
  const { id } = useParams();
  const pet = animalsNeedingHelp.find((animal) => animal.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!pet) {
    return <p>Питомец не найден</p>;
  }

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
              <a className="nav-menu__list-item-link" href="">куратор</a>
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Мой питомец</button>
        </div>
      </div>

      <div className="container">
        <div className="aboutPetForAdopt__wrapper">
          <h1 className="aboutPetForAdopt__title text-black">{pet.name}</h1>
          <div className="aboutPetForAdopt__content">
            <img
              src={pet.imgSrc}
              alt={pet.name}
              className="imgAboutPetForAdopt"
            />
            <div className="aboutPetForAdopt__info">
              <p className="aboutPetForAdopt textBlack">Вид: {pet.type}</p>
              <p className="aboutPetForAdopt textBlack">Пол: {pet.gender}</p>
              <p className="aboutPetForAdopt textBlack">Возраст: {pet.age}</p>
              <p className="aboutPetForAdopt textBlack">Город: {pet.city}</p>
              <p className="aboutPetForAdopt textBlack">
                Куратор: {pet.curator}
              </p>
              <p className="aboutPetForAdopt textBlack">Приют: {pet.hospice}</p>
              <p className="aboutPetForAdopt orangeText">
                Срочность: {pet.urgency}
              </p>
              <button className="adob-box2-item__pet-btn button">
                Пожертвовать
              </button>
            </div>
            {/* YANDEX MAP */}
            <div className="pet-map-container">
              <h3 className="pet-map__title textBlack">Приют на карте:</h3>
              <PetMap hospice={pet.hospice} />
            </div>
          </div>
          <p className="aboutPetForAdopt aboutPetForAdopt__desc textBlack">
            Описание: {pet.illness}
          </p>

          {/* Галерея изображений */}
          <div className="aboutPetForAdopt__images">
            {pet.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Доп. фото ${index + 1}`}
                className="imgAboutPetForAdopt img_aboutpet"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Модальное окно с увеличенным изображением */}
          {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={() => setSelectedImage(null)}>
                  &times;
                </span>
                <img src={selectedImage} alt="Увеличенное изображение" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <RightsSection />

      {/* <div>
      <h1>{pet.name}</h1>
      <img src={pet.imgSrc} alt={`фото питомца ${pet.name}`} />
      <p>
        {pet.gender} / {pet.age}
      </p>
      <p>Город: {pet.city}</p>
      <button className="button">Пожертвовать</button>
    </div> */}
    </>
  );
}

export default AboutSickPet;
