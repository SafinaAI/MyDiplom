import { JSX } from "react";
import ReactDOM from "react-dom/client";
import OurDecisionCard from "../../components/our-decision-card/our-decision-card";
import Navigation from "../../components/Navigation/Navigation";
import MainMenu from "../../components/mainMenu/mainMenu";
import HeroSection from "../../components/heroSection/heroSection";
import JoinCommunitySection from "../../components/joinCommunitySection/joinCommunitySection";
import MissionSection from "../../components/missionSection/missionSection";
import SolutionSection from "../../components/solutionSection/solutionSection";
import AchievementSection from "../../components/achievementSection/achievementSection";
import UserStoriesSection from "../../components/userStoriesSection/userStoriesSection";
import SubscribeForm from "../../components/subscribeForm/subscribeForm";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

// В этом фрагменте мы создаем компонент MainPage, который будет собирать все части страницы (компоненты) в одно целое. Это своего рода контейнер для всех элементов главной страницы. Т.е. мы создаем компонент, который рендерит все необходимые блоки, просто вызывая другие компоненты внутри себя.
const MainPage = () => (
  <div>
    <Navigation />
    <MainMenu />
    <HeroSection />
    <JoinCommunitySection />
    <MissionSection />
    <SolutionSection />
    <AchievementSection />
    <UserStoriesSection />
    <SubscribeForm />
    <Footer />
    <RightsSection />
  </div>
);

export default MainPage;

type MainPageProps = {
  rentalOffersCount: number;
};

// function MainPage(): JSX.Element {
//   return (
//     <>
//       <header className="section-header">
//         {/* Верхняя часть навигации */}
//         {/* <div className="section-header__firstNav firstNav firstNav__container">
//           <ul className="firstNav__list">
//             <li className="firstNav__list-item">
//               <a href="./LexVetAdopt.html"> LexVet Усыновление</a>
//             </li>
//             <div className="firstNav__hr demarcationLine"></div>
//             <li className="firstNav__list-item">
//               <a href="#">LexVet Поиск</a>
//             </li>
//             <div className="firstNav__hr demarcationLine"></div>
//             <li className="firstNav__list-item">
//               <a href="#">LexVet Забота</a>
//             </li>
//           </ul>
//         </div> */}

//         {/* Основное меню */}
//         {/* <div className="section-header__container container">
//           <a className="section-header__logo-link" href="./index.html">
//             <img
//               src="/icons/LOGO.svg"
//               alt="Logo"
//               className="section-header__logo"
//             />
//           </a>
//           <nav className="section-header__nav nav-menu">
//             <ul className="nav-menu__list">
//               <li className="nav-menu__list-item">
//                 <a href="#">Кто мы</a>
//               </li>
//               <li className="nav-menu__list-item">
//                 <a href="#">Что мы делаем</a>
//               </li>
//             </ul>
//           </nav>
//           <div className="section-header__btns buttons">
//             <button className="buttons__LogIn">Регистрация</button>
//             <button className="buttons__LogUp">Поддержать</button>
//           </div>
//         </div> */}
//       </header>

//       {/* Первая секция */}
//       {/* <section className="main-section">
//         <div className="main-section__container container">
//           <div className="left-wrapper">
//             <img
//               src="/img/dog1.png"
//               alt="Фото собачки"
//               className="left-wrapper__img"
//             />
//           </div>
//           <div className="right-wrapper">
//             <h1 className="right-wrapper__title title">
//               AlexVet главный помощник четвероногих друзей
//             </h1>
//             <p className="right-wrapper__text">
//               Мы помогаем вернуть потерянных животных домой благодаря удобной
//               карте поиска. Мы поддерживаем приюты, чтобы каждая собака и кошка
//               нашли свою семью. Получайте полезные советы по уходу за питомцами
//               и находите специалистов в нашей платформе. <br />
//               <br />
//               Присоединяйтесь к нам и подарите любовь четвероногим друзьям!
//             </p>
//           </div>
//         </div>
//       </section> */}

//       {/* Вторая секция */}
// <section className="secnd-section">
//   <div className="secnd-section__container container">
//     <p className="secnd-section__text">
//       Поднимите лапки, если вы готовы нам помочь
//     </p>
//     <p className="secnd-section__title-text text-middle">
//       Мы используем силу любви, чтобы сделать сообщества и семьи домашних
//       животных ближе, крепче и здоровее
//     </p>
//     <div className="secnd-section__line line"></div>
//   </div>
// </section>

// {/* Третья секция */}
// <section className="third-section">
//   <div className="third-section__container container">
//     <p className="third-section__text-small text-small">Наша миссия</p>
//     <p className="third-section__text-big text-big">
//       Все питомцы заслуживают <span className="orange-word">любви</span>.{" "}
//       <br />
//       Мы помогаем им ее найти.
//     </p>
//     <div className="third-section__cards-box">
//       <div className="third-section__cards-item cards-item icons_cards-item">
//         <img
//           src="/icons/section3_icon1.svg"
//           alt=""
//           className="cards-item__icon"
//         />
//         <p className="cards-item__textOrange textOrange">
//           1млн+ домашних животных
//         </p>
//         <p className="cards-item__textBlack textBlack">
//           никогда не найдут любящий дом
//         </p>
//       </div>
//       <div className="third-section__cards-item cards-item icons_cards-item">
//         <img
//           src="/icons/section3_icon2.svg"
//           alt=""
//           className="cards-item__icon"
//         />
//         <p className="cards-item__textOrange textOrange">Многие</p>
//         <p className="cards-item__textBlack textBlack">
//           Домашние питомцы подвергаются ненужной эвтаназии без доступной
//           ветеринарной помощи
//         </p>
//       </div>
//       <div className="third-section__cards-item cards-item icons_cards-item">
//         <img
//           src="/icons/section3_icon3.svg"
//           alt=""
//           className="cards-item__icon"
//         />
//         <p className="cards-item__textOrange textOrange">1 из 3</p>
//         <p className="cards-item__textBlack textBlack">
//           Домашних питомцев пропадают, и многие из них никогда не
//           возвращаются домой
//         </p>
//       </div>
//       <div className="third-section__cards-item cards-item icons_cards-item">
//         <img
//           src="/icons/section3_icon4.svg"
//           alt=""
//           className="cards-item__icon"
//         />
//         <p className="cards-item__textOrange textOrange">
//           Бесчисленное множество
//         </p>
//         <p className="cards-item__textBlack textBlack">
//           приютов и организаций испытывают нехватку ресурсов
//         </p>
//       </div>
//     </div>
//     <hr className="secnd-section__line line" />
//   </div>
// </section>

//       {/* Четвертая секция Наши решения */}
// <section className="fourth-section">
//   <div className="fourth-section__container container">
//     <p className="fourth-section__text-small text-small">Наши решения</p>
//     {/* анатология к секции */}
//     <p className="fourth-section__text-big text-big">
//       Вместе высвобождаем <br />
//       силу <span className="orange-word">любви</span>
//     </p>
//     {/* карточки описания Миссии */}
//     <div className="fourth-section__cards-box2">
//       {/* Удалила карточки решений, теперь они в отдельном компоненте our-decision-card.tsx */}
//       {/* карточка 1 */}
//       <OurDecisionCard />
//       {/* карточка 2 */}
//       <OurDecisionCard />
//       {/* карточка 3 */}
//       <OurDecisionCard />
//     </div>
//     <hr className="secnd-section__line line" />
//   </div>
// </section>

//       {/* ПЯТАЯ СЕКЦИЯ Наши достижения */}
// <section className="fifth-section">
//   <div className="fifth-section__container container">
//     <p className="fifth-section__text-small text-small">
//       Наши достижения
//     </p>
//     {/* карточки описания Достижений */}
//     <div className="fifth-section__cards-box3">
//       {/* карточка 1 */}
//       <div className="fifth-section__box3-item box3-item icons_cards-item">
//         <img
//           src="/icons/section3_icon1.svg"
//           alt=""
//           className="box3-item__icon"
//         />
//         {/* текст внутри карточки */}
//         <p className="box3-item__textMix">
//           <span className="orange-word">Более 500</span>
//           <br />
//           животных <br />
//           обрели свой <br />
//           дом
//         </p>
//       </div>
//       {/* карточка 2 */}
//       <div className="fifth-section__box3-item box3-item icons_cards-item">
//         <img
//           src="/icons/section3_icon2.svg"
//           alt=""
//           className="box3-item__icon"
//         />
//         <p className="box3-item__textMix">
//           <span className="orange-word">100+ животных</span>
//           <br />
//           спасены от <br />
//           эвтаназии
//         </p>
//       </div>
//       {/* карточка 3 */}
//       <div className="fifth-section__box3-item box3-item icons_cards-item">
//         <img
//           src="/icons/section3_icon3.svg"
//           alt=""
//           className="box3-item__icon"
//         />
//         <p className="box3-item__textMix">
//           <span className="orange-word">1т+ животных</span>
//           <br />
//           вернулись <br />
//           домой
//         </p>
//       </div>
//       {/* карточка 4 */}
//       <div className="fifth-section__box3-item box3-item icons_cards-item">
//         <img
//           src="/icons/section3_icon4.svg"
//           alt=""
//           className="box3-item__icon"
//         />
//         <p className="box3-item__textMix">
//           <span className="orange-word">Более 2млн</span>
//           <br />
//           пожертвований
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* ШЕСТАЯ СЕКЦИЯ Наши голоса */}
// <section className="sixth-section">
//   <div className="sixth-section__container container">
//     <p className="sixth-section__text-small text-small">Наши голоса</p>
//     <p className="sixth-section__text-big text-big">
//       <span className="orange-word">Счастливые</span> истории наших <br />
//       подписчиков
//     </p>
//     <div className="sixth-section__cards-box4">
//       {/* карточка 1 */}
//       <div className="sixth-section__box4-item box4-item">
//         <img
//           className="box4-item__img"
//           src="/img/секция_6_фото_1.png"
//           alt="История владельца 1"
//         />
//         <p className="box4-item__text-title textBlack">Алия и Барки</p>
//         <div className="box4-item__wrapper-textInfo">
//           <p className="box4-item__text-info textBlack">
//             Мой малыш пропал во время прогулки. Я боялась, что больше
//             никогда не увижу его. Но многочисленные пользователи LexVet
//             Lost...
//           </p>
//         </div>
//         <button className="box4-item__btn button">Читать</button>
//       </div>
//       {/* карточка 2 */}
//       <div className="sixth-section__box4-item box4-item">
//         <img
//           className="box4-item__img"
//           src="/img/секция_6_фото_2.png"
//           alt="История владельца 2"
//         />
//         <p className="box4-item__text-title textBlack">Иван и Лекси</p>
//         <div className="box4-item__wrapper-textInfo">
//           <p className="box4-item__text-info textBlack">
//             моя собака пропала во время прогулки в парке. Он далеко убежал
//             от меня, испугавшись детей. Я искал его 3 дня, пока соседи не
//             рассказали мне о LexVet Поиск...
//           </p>
//         </div>
//         <button className="box4-item__btn button">Читать</button>
//       </div>
//       {/* карточка 3 */}
//       <div className="sixth-section__box4-item box4-item">
//         <img
//           className="box4-item__img"
//           src="/img/секция_6_фото_3.png"
//           alt="История владельца 2"
//         />
//         <p className="box4-item__text-title textBlack">Мария и Пушок</p>
//         <div className="box4-item__wrapper-textInfo">
//           <p className="box4-item__text-info textBlack">
//             моя собака пропала во время прогулки в парке. Он далеко убежал
//             от меня, испугавшись детей. Я искал его 3 дня, пока соседи не
//             рассказали мне о LexVet Поиск...
//           </p>
//         </div>
//         <button className="box4-item__btn button">Читать</button>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* СЕДЬМАЯ СЕКЦИЯ Форма записи */}
// <section className="seventh-section">
//   <div className="seventh-section__container container">
//     <div className="seventh-section__wrapper">
//       <p className="seventh-section__text text-middle">
//         Получайте <span className="orange-word">Любовь</span> на свой
//         <br />
//         почтовый ящик
//       </p>
//       <div className="seventh-section__subscription-form-container subscription-form">
//         <form
//           className="seventh-section__subscription-form subscription-form__formEmail"
//           action="#"
//           method="post"
//         >
//           <input
//             type="email"
//             name="userEmail"
//             placeholder="Enter your email"
//             required
//           />
//           <input type="submit" name="submit" value="Subscribe" />
//         </form>
//         <ul className="seventh-section__icons-box icons-box">
//           <li className="icons-box__item">
//             <img src="/icons/facebook.svg" alt="facebook" />
//           </li>
//           <li className="icons-box__item">
//             <img src="/icons/instagramm.svg" alt="instagramm" />
//           </li>
//           <li className="icons-box__item">
//             <img src="/icons/telegramm.svg" alt="telegramm" />
//           </li>
//           <li className="icons-box__item">
//             <img src="/icons/vk.svg" alt="vk" />
//           </li>
//           <li className="icons-box__item">
//             <img src="/icons/youtube.svg" alt="youtube" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* ВОСЬМАЯ СЕКЦИЯ Футтер */}
//       {/* ВОСЬМАЯ СЕКЦИЯ Футтер */}
// <footer className="footer-section">
//   <div className="footer-section__container container">
//     <div className="footer-section__orangeLine"></div>
//     {/* wrapper для того чтобы все последующие дивы можно было разделить флексом */}
//     <div className="footer-section__wrapper">
//       <div className="footer-section__fotter-item fotter-item">
//         <img
//           src="/icons/LOGO.svg"
//           alt="LexVet Лого"
//           className="fotter-item__logo"
//         />
//       </div>

//       {/* СТОЛБЕЦ 1 - О НАС */}
//       <div className="footer-section__fotter-item fotter-item">
//         <p className="fotter-item__title textOrange">О НАС</p>
//         <ul className="fotter-item__list footer-list">
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Кто мы
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Что мы делаем
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Финансы
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Наши партнеры
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* СТОЛБЕЦ 2 - НАША СЕМЬЯ */}
//       <div className="footer-section__fotter-item fotter-item">
//         <p className="fotter-item__title textOrange">НАША СЕМЬЯ</p>
//         <ul className="fotter-item__list footer-list">
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               LexVet Усыновление
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               LexVet Поиск
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               LexVet Забота
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* СТОЛБЕЦ 3 - ПАРТНЕРЫ */}
//       <div className="footer-section__fotter-item fotter-item">
//         <p className="fotter-item__title textOrange">ПАРТНЕРЫ</p>
//         <ul className="fotter-item__list footer-list">
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               RoyalConin
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Кот и Пес
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* СТОЛБЕЦ 4 - БОЛЬШЕ */}
//       <div className="footer-section__fotter-item fotter-item">
//         <p className="fotter-item__title textOrange">БОЛЬШЕ</p>
//         <ul className="fotter-item__list footer-list">
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Поддержка
//             </a>
//           </li>
//           <li className="footer-list__item">
//             <a className="footer-list__link" href="#">
//               Pr - отдел
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </footer>

//       {/* ДЕВЯТАЯ СЕКЦИЯ - ПРАВА ЗАЩИЩЕНЫ */}
// <section className="ninth-section">
//   <div className="ninth-section__container container">
//     <div className="ninth-section__greyLine"></div>
//     <div className="ninth-section__wrapper">
//       <p className="ninth-section__left-text text-superSmall">
//         Использование этого сервиса, веб-сайта или приложения означает
//         принятие всех условий, перечисленных выше. LexVet и связанные с
//         ним логотипы являются товарными знаками LexVet Animal Supplies,
//         Inc.™ 2024 , LexVet Love | LexVet Animal Supplies, Inc. Все права
//         защищены.
//       </p>
//       <div className="ninth-section__right-text right-text">
//         <p className="right-text__privacyPolicy text-superSmall">
//           Политика конфиденциальности
//         </p>
//         <div className="right-text__line demarcationLine"></div>
//         <p className="right-text__termsOfService text-superSmall">
//           Условия обслуживания
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   );
// }
//export default MainPage;
