import React from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  {
    id: 1,
    title: "Алия и Барки",
    text: "Мой малыш пропал во время прогулки. Я боялась, что больше никогда не увижу его. Но многочисленные пользователи LexVet Lost...",
    imgSrc: "/img/секция_6_фото_1.png",
  },
  {
    id: 2,
    title: "Иван и Лекси",
    text: "Моя собака пропала во время прогулки в парке. Он далеко убежал от меня, испугавшись детей. Я искал его 3 дня...",
    imgSrc: "/img/секция_6_фото_2.png",
  },
  {
    id: 3,
    title: "Мария и Пушок",
    text: "Моя собака пропала во время прогулки в парке. Он далеко убежал от меня, испугавшись детей. Я искал его 3 дня...",
    imgSrc: "/img/секция_6_фото_3.png",
  },
];

const UserStoriesSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id: number) => {
    navigate(`/story/${id}`);
  };

  return (
    <section className="sixth-section">
      <div className="sixth-section__container container">
        <p className="sixth-section__text-small text-small">Наши голоса</p>
        <p className="sixth-section__text-big text-big">
          <span className="orange-word">Счастливые</span> истории наших <br />
          подписчиков
        </p>
        <div className="sixth-section__cards-box4">
          {stories.map((story) => (
            <div key={story.id} className="sixth-section__box4-item box4-item">
              <img
                className="box4-item__img"
                src={story.imgSrc}
                alt={story.title}
              />
              <p className="box4-item__text-title textBlack">{story.title}</p>
              <div className="box4-item__wrapper-textInfo">
                <p className="box4-item__text-info textBlack">{story.text}</p>
              </div>
              <button
                className="box4-item__btn button"
                onClick={() => handleReadMore(story.id)}
              >
                Читать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;

// const UserStoriesSection = () => (
//   // ШЕСТАЯ СЕКЦИЯ Наши голоса
//   <section className="sixth-section">
//     <div className="sixth-section__container container">
//       <p className="sixth-section__text-small text-small">Наши голоса</p>
//       <p className="sixth-section__text-big text-big">
//         <span className="orange-word">Счастливые</span> истории наших <br />
//         подписчиков
//       </p>
//       <div className="sixth-section__cards-box4">
//         {/* карточка 1 */}
//         <div className="sixth-section__box4-item box4-item">
//           <img
//             className="box4-item__img"
//             src="/img/секция_6_фото_1.png"
//             alt="История владельца 1"
//           />
//           <p className="box4-item__text-title textBlack">Алия и Барки</p>
//           <div className="box4-item__wrapper-textInfo">
//             <p className="box4-item__text-info textBlack">
//               Мой малыш пропал во время прогулки. Я боялась, что больше никогда
//               не увижу его. Но многочисленные пользователи LexVet Lost...
//             </p>
//           </div>
//           <button className="box4-item__btn button">Читать</button>
//         </div>
//         {/* карточка 2 */}
//         <div className="sixth-section__box4-item box4-item">
//           <img
//             className="box4-item__img"
//             src="/img/секция_6_фото_2.png"
//             alt="История владельца 2"
//           />
//           <p className="box4-item__text-title textBlack">Иван и Лекси</p>
//           <div className="box4-item__wrapper-textInfo">
//             <p className="box4-item__text-info textBlack">
//               моя собака пропала во время прогулки в парке. Он далеко убежал от
//               меня, испугавшись детей. Я искал его 3 дня, пока соседи не
//               рассказали мне о LexVet Поиск...
//             </p>
//           </div>
//           <button className="box4-item__btn button">Читать</button>
//         </div>
//         {/* карточка 3 */}
//         <div className="sixth-section__box4-item box4-item">
//           <img
//             className="box4-item__img"
//             src="/img/секция_6_фото_3.png"
//             alt="История владельца 2"
//           />
//           <p className="box4-item__text-title textBlack">Мария и Пушок</p>
//           <div className="box4-item__wrapper-textInfo">
//             <p className="box4-item__text-info textBlack">
//               моя собака пропала во время прогулки в парке. Он далеко убежал от
//               меня, испугавшись детей. Я искал его 3 дня, пока соседи не
//               рассказали мне о LexVet Поиск...
//             </p>
//           </div>
//           <button className="box4-item__btn button">Читать</button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

//export default UserStoriesSection;
