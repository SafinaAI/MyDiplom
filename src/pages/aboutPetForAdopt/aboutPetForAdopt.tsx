import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

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
    description:
      "Очень добрый и игривый пёс, ищет заботливого хозяина.Его нашли замёрзшим, бездвижным и беспомощным. Очень хороший, нежный пес, совсем чуточку особенный и очень душевный.",
    additionalImages: [
      "../public/img/adopt_sec_2_photo1.jpg",
      "../public/img/adopt_sec_2_photo1.jpg",
    ],
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
    description:
      "Просто золотой, обоятельный мальчик. Ласковый и добрый нрав, но свою территорию охраняет",
    additionalImages: [
      "../public/img/adopt_sec_2_photo2.jpg",
      "../public/img/adopt_sec_2_photo1.jpg",
    ],
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
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
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
    age: "3 года",
    city: "Альметьевск",
    image: "../public/img/adopt_sec_2_photo4.jpg",
    curator: "89033064444",
    hospice: "Человек собаке друг",
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
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
    description:
      "С ласковым характером и нежным голоском. Очень любит помурчать на руках у хозяйки, да и поболтать не против..",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
  },
];

function AboutPetForAdopt() {
  const { id } = useParams();
  const pet = animals.find((animal) => animal.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  interface Pet {
    name: string;
    image: string;
    type: string;
    gender: string;
    age: string;
    city: string;
    curator: string;
    hospice: string;
    description: string;
    additionalImages: string[];
  }

  if (!pet) {
    return <h2>Питомец не найден</h2>;
  }

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
              <a href="">куратор</a>
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
              src={pet.image}
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
            </div>
          </div>
          <p className="aboutPetForAdopt aboutPetForAdopt__desc textBlack">
            Описание: {pet.description}
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
    </>
  );
}

export default AboutPetForAdopt;
