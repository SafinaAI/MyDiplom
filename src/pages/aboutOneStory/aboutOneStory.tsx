import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

const stories = [
  {
    id: 1,
    title: "Алия и Барки",
    text: "Я всегда мечтала о собаке. О таком друге, который будет встречать меня с работы, радоваться каждому моменту вместе и дарить свою безграничную любовь. Но я долго не решалась, потому что боялась, что не справлюсь, что не смогу найти 'того самого' питомца. И вот однажды я наткнулась на платформу LexVet. Сначала я просто листала страницы, читала истории собак, которые ищут дом. И тут я увидела его — Барки. Его фото с умными глазами и чуть висячим ухом сразу тронуло меня до глубины души. В описании говорилось, что он был найден на улице, но, несмотря на это, он очень добрый и ласковый. Я поняла, что это он — мой будущий друг. Процесс усыновления через LexVet оказался на удивление простым и прозрачным. Мне помогли на каждом этапе: от заполнения анкеты до первой встречи с Барки. Когда я приехала знакомиться, он сразу подбежал ко мне, виляя хвостом, как будто знал, что мы уже семья. Сейчас Барки живет со мной уже три месяца, и я не могу представить свою жизнь без него. Он всегда рядом: когда я работаю, он лежит у моих ног, когда я готовлю, он сидит на кухне и смотрит на меня с таким видом, будто я шеф-повар мирового уровня. А вечером мы обязательно гуляем в парке, где он бегает за мячиком и знакомится с другими собаками.",
    imgSrc: "/img/секция_6_фото_1.png",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
  },
  {
    id: 2,
    title: "Иван и Лекси",
    text: "Я всегда мечтала о собаке. О таком друге, который будет встречать меня с работы, радоваться каждому моменту вместе и дарить свою безграничную любовь. Но я долго не решалась, потому что боялась, что не справлюсь, что не смогу найти 'того самого' питомца. И вот однажды я наткнулась на платформу LexVet. Сначала я просто листала страницы, читала истории собак, которые ищут дом. И тут я увидела его — Барки. Его фото с умными глазами и чуть висячим ухом сразу тронуло меня до глубины души. В описании говорилось, что он был найден на улице, но, несмотря на это, он очень добрый и ласковый. Я поняла, что это он — мой будущий друг. Процесс усыновления через LexVet оказался на удивление простым и прозрачным. Мне помогли на каждом этапе: от заполнения анкеты до первой встречи с Барки. Когда я приехала знакомиться, он сразу подбежал ко мне, виляя хвостом, как будто знал, что мы уже семья. Сейчас Барки живет со мной уже три месяца, и я не могу представить свою жизнь без него. Он всегда рядом: когда я работаю, он лежит у моих ног, когда я готовлю, он сидит на кухне и смотрит на меня с таким видом, будто я шеф-повар мирового уровня. А вечером мы обязательно гуляем в парке, где он бегает за мячиком и знакомится с другими собаками.",
    imgSrc: "/img/секция_6_фото_2.png",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
  },
  {
    id: 3,
    title: "Мария и Пушок",
    text: "Я всегда мечтала о собаке. О таком друге, который будет встречать меня с работы, радоваться каждому моменту вместе и дарить свою безграничную любовь. Но я долго не решалась, потому что боялась, что не справлюсь, что не смогу найти 'того самого' питомца. И вот однажды я наткнулась на платформу LexVet. Сначала я просто листала страницы, читала истории собак, которые ищут дом. И тут я увидела его — Барки. Его фото с умными глазами и чуть висячим ухом сразу тронуло меня до глубины души. В описании говорилось, что он был найден на улице, но, несмотря на это, он очень добрый и ласковый. Я поняла, что это он — мой будущий друг. Процесс усыновления через LexVet оказался на удивление простым и прозрачным. Мне помогли на каждом этапе: от заполнения анкеты до первой встречи с Барки. Когда я приехала знакомиться, он сразу подбежал ко мне, виляя хвостом, как будто знал, что мы уже семья. Сейчас Барки живет со мной уже три месяца, и я не могу представить свою жизнь без него. Он всегда рядом: когда я работаю, он лежит у моих ног, когда я готовлю, он сидит на кухне и смотрит на меня с таким видом, будто я шеф-повар мирового уровня. А вечером мы обязательно гуляем в парке, где он бегает за мячиком и знакомится с другими собаками.",
    imgSrc: "/img/секция_6_фото_3.png",
    additionalImages: [
      "../public/img/adopt_sec_2_photo8.jpg",
      "../public/img/adopt_sec_2_photo8.jpg",
    ],
  },
];

const AboutOneStory = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!story) {
    return <p>История не найдена</p>;
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
              {" "}
              <a className="nav-menu__list-item-link" href="">усыновить</a>{" "}
            </li>
            <li className="nav-menu__list-item">
              {" "}
              <a className="nav-menu__list-item-link" href="">стать донором</a>{" "}
            </li>
            <li className="nav-menu__list-item">
              {" "}
              <a className="nav-menu__list-item-link" href="">о пожертвованиях</a>{" "}
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Мой питомец</button>
        </div>
      </div>
      <div className="container">
        <h1 className="aboutOneStory__title textBlack">{story.title}</h1>
        <img
          className="aboutOneStory__img"
          src={story.imgSrc}
          alt={story.title}
        />
        <p className="aboutOneStory__text">{story.text}</p>
        {/* Галерея изображений */}
        <div className="aboutPetForAdopt__images">
          {story.additionalImages.map((img, index) => (
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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedImage(null)}>
                &times;
              </span>
              <img src={selectedImage} alt="Увеличенное изображение" />
            </div>
          </div>
        )}
      </div>
      <Footer />
      <RightsSection />
    </>
  );
};

export default AboutOneStory;
