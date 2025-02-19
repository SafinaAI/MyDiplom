import { JSX } from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../../components/Navigation/Navigation";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";
import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

const animals = [
  {
    id: 1,
    name: "Буся",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adopt_sec_2_photo1.jpg",
  },
  {
    id: 2,
    name: "Алекс",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adopt_sec_2_photo2.jpg",
  },
  {
    id: 3,
    name: "Маруся",
    gender: "Девочка",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adopt_sec_2_photo3.jpg",
  },
  {
    id: 4,
    name: "Джиджи",
    gender: "Девочка",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adopt_sec_2_photo4.jpg",
  },
];

const animalsNeedingHelp = [
  {
    id: 1,
    name: "Буся",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart1.jfif",
  },
  {
    id: 2,
    name: "Алекс",
    gender: "Мальчик",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart2.jfif",
  },
  {
    id: 3,
    name: "Маруся",
    gender: "Девочка",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart3.jfif",
  },
  {
    id: 4,
    name: "Джиджи",
    gender: "Девочка",
    age: "1 год",
    city: "Казань",
    imgSrc: "../public/img/adob_third_section_cart4.jfif",
  },
];

function AdoptPage(): JSX.Element {
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
              {" "}
              <a href="">усыновить</a>{" "}
            </li>
            <li className="nav-menu__list-item">
              {" "}
              <a href="">стать донором</a>{" "}
            </li>
            <li className="nav-menu__list-item">
              {" "}
              <a href="">о пожертвованиях</a>{" "}
            </li>
          </ul>
        </nav>
        <div className="section-header__btns buttons">
          <button className="buttons__LogIn">Регистрация</button>
          <button className="buttons__LogUp">Мой питомец</button>
        </div>
      </div>
      {/* СЕКЦИЯ 1 */}
      <section className="adob-first-section">
        <div className="adob-first-section__container container">
          {/* <img
      src="./src/img/try3.png"
      alt="фото фона"
      className="first-section__background-img"
    /> */}
          <div className="adob-first-section__background-img">
            <div className="adob-first-section__text-wrapper">
              <h2 className="adob-first-section__title text-big">
                Твой друг ждет тебя тут!
              </h2>
              <p className="adob-first-section__text text-small">
                Уже более 500 животных нашли себе новых хозяев
              </p>
              <div className="adob-first-section__btns button">
                <button className="adob-first-section__btns-animals">
                  Наши животные
                </button>
                <button className="adob-first-section__btns-donat">
                  Пожертвовать
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* СЕКЦИЯ 2 - ЖИВОТНЫЕ ГОТОВЫЕ К УСЫНОВЛЕНИЮ */}
      <section className="adob-second-section">
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

          {/* карточки с животными, готовые к усыновлению */}
          <div className="adob-second-section__adob-cards-box1">
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="adob-second-section__adob-box1-item adob-box1-item"
              >
                <img
                  src={animal.imgSrc}
                  alt={`фото питомца ${animal.name}`}
                  className="adob-box1-item__img"
                />
                <p className="adob-box1-item__pet-name textBlack">
                  {animal.name}
                </p>
                <p className="adob-box1-item__pet-age text-superSmall">
                  {animal.gender} / {animal.age}
                </p>
                <p className="adob-box1-item__pet-city text-superSmall">
                  {animal.city}
                </p>
              </div>
            ))}
          </div>

          <button className="adob-second-section__btn button">
            Узнать больше
          </button>
          <hr className="adob-second-section__line line" />
        </div>
      </section>
      {/* СЕКЦИЯ 3 - ЖИВОТНЫЕ нуждающиеся в помощи */}
      <section className="adob-third-section">
        <div className="adob-third-section__container container">
          <p className="adob-third-section__text-small text-small">
            Они нуждаются в вашей помощи
          </p>
          <p className="adob-third-section__text-big text-big">
            Эти животные находятся на лечении. <br />
            Вы можете внести свой вклад в их скорейшее выздоровление,
            <span className="orange-word"> пожертвовав любую сумму</span>.
          </p>

          {/* Карточки животных, нуждающихся в помощи */}
          <div className="adob-third-section__adob-cards-box2">
            {animalsNeedingHelp.map((animal) => (
              <div
                key={animal.id}
                className="adob-third-section__adob-box2-item adob-box2-item"
              >
                <img
                  src={animal.imgSrc}
                  alt={`фото питомца ${animal.name}`}
                  className="adob-box2-item__img"
                />
                <p className="adob-box2-item__pet-name textBlack">
                  {animal.name}
                </p>
                <p className="adob-box2-item__pet-age text-superSmall">
                  {animal.gender} / {animal.age}
                </p>
                <p className="adob-box2-item__pet-city text-superSmall">
                  {animal.city}
                </p>
                <button className="adob-box2-item__pet-btn button">
                  Пожертвовать
                </button>
              </div>
            ))}
          </div>

          <button className="adob-third-section__btn button">
            Узнать больше
          </button>
          <hr className="adob-third-section__line line" />
        </div>
      </section>
      {/* <!-- СЧАСТЛИВЫЕ ИСТОРИИ ПОДПИСЧИКОВ --> */}
      <UserStoriesSection />

      {/* КУДА УЙДУТ ДЕНЬГИ С ПОЖЕРТВОВАНИЙ */}
      <section className="adob-fifth-section">
        <div className="adob-fifth-section__container container">
          <div className="adob-fifth-section__color-wrap">
            <p className="adob-fifth-section__text-small text-small">
              Любая сумма важна
            </p>
            <p className="adob-fifth-section__text-big text-big">
              Приютам не хватает денег на обеспечение всех питомцев. Вы можете
              подарить <span className="orange-word">любовь</span> хвостикам,
              пожертвовав любую сумму любому приюту.
            </p>
          </div>
          <p className="adob-fifth-section__text-descript text-small">
            Деньги с пожертвований пойдут на
          </p>

          {/* Карточки описания способов помощи */}
          <div className="adob-fifth-section__adob-cards-box4">
            {/* Карточка 1 */}
            <div className="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item">
              <img
                src="../public/icons/adob_sec_4_icon1.svg"
                alt="Картинка Покупка корма и инвентаря"
                className="adob-box4-item__icon"
              />
              <p className="adob-box4-item__textOrange textOrange">
                Покупку корма и инвентаря
              </p>
              <p className="adob-box4-item__textBlack textBlack">
                Приютам необходимо покупать много корма для питомцев. Помимо
                этого, они нуждаются в обновлении инвентаря и амуниции (ведра,
                швабры, лежанки, когтеточки). <br />
                Ваши пожертвования помогут вовремя обновлять инвентарь.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item">
              <img
                src="../public/icons/adob_sec_4_icon2.svg"
                alt="Картинка Покупка лекарств"
                className="adob-box4-item__icon"
              />
              <p className="adob-box4-item__textOrange textOrange">
                Покупку лекарств и вакцин
              </p>
              <p className="adob-box4-item__textBlack textBlack">
                Все животные в приютах нуждаются в обработке от гельминтов и
                клещей. Также многим пожизненно необходимы лекарства. <br />
                Вы можете помочь приютам приобрести необходимые медикаменты.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item">
              <img
                src="../public/icons/adob_sec_4_icon3.svg"
                alt="Картинка Лечение животных"
                className="adob-box4-item__icon"
              />
              <p className="adob-box4-item__textOrange textOrange">
                Лечение животных
              </p>
              <p className="adob-box4-item__textBlack textBlack">
                В приютах живет много животных. Очень многим требуется лечение в
                вет.клиниках. <br />
                Ваше пожертвование может спасти жизнь!
              </p>
            </div>

            {/* Карточка 4 */}
            <div className="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item">
              <img
                src="../public/icons/adob_sec_4_icon4.svg"
                alt="Картинка улучшение условий жизни"
                className="adob-box4-item__icon"
              />
              <p className="adob-box4-item__textOrange textOrange">
                Улучшение условий жизни
              </p>
              <p className="adob-box4-item__textBlack textBlack">
                Многим приютам нужны средства, чтобы починить или утеплить
                вольеры, поменять полы, закупиться новым оборудованием и
                игрушками. <br />
                Ваше пожертвование поможет приютам купить необходимые материалы
                и подготовиться к знойному лету или холодной зиме.
              </p>
            </div>
          </div>

          <button className="adob-fifth-section__btn button">
            Пожертвовать
          </button>
        </div>
        <hr className="adob-fifth-section__line line" />
      </section>
      <SubscribeForm />
      <Footer />
      <RightsSection />
    </>
  );
}
export default AdoptPage;
