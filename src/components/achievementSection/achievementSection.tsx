import React from "react";
import { achievementData } from "../../const";
// const achievementData = [
//   { icon: 'section3_icon1.svg', count: '500+', description: 'животных обрели свой дом' },
//   { icon: 'section3_icon2.svg', count: '200+', description: 'спасены от эвтаназии' },
//   { icon: 'section3_icon3.svg', count: '3млн+', description: 'вернулись домой' },
//   { icon: 'section3_icon4.svg', count: '1000000+', description: 'пожертвований' },

// ];



const AchievementSection = ({ achievements }) => (
  //  ПЯТАЯ СЕКЦИЯ Наши достижения
  <section className="fifth-section">
    <div className="fifth-section__container container">
      <p className="fifth-section__text-small text-small">Наши достижения</p>
      {/* карточки описания Достижений */}
      <div className="fifth-section__cards-box3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="fifth-section__box3-item box3-item icons_cards-item"
          >
            <img
              src={achievement.icon}
              alt={achievement.description}
              className="box3-item__icon"
            />
            <p className="box3-item__textMix">
              <span className="orange-word">{achievement.count}</span>
              <p>{achievement.description}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementSection;
