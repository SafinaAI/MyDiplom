import React from "react";

const RightsSection = () => (
  //   ДЕВЯТАЯ СЕКЦИЯ - ПРАВА ЗАЩИЩЕНЫ
  <section className="ninth-section">
    <div className="ninth-section__container container">
      <div className="ninth-section__greyLine"></div>
      <div className="ninth-section__wrapper">
        <p className="ninth-section__left-text text-superSmall">
          Использование этого сервиса, веб-сайта или приложения означает
          принятие всех условий, перечисленных выше. LexVet и связанные с ним
          логотипы являются товарными знаками LexVet Animal Supplies,
          Inc.™ 2024 , LexVet Love | LexVet Animal Supplies, Inc. Все права
          защищены.
        </p>
        <div className="ninth-section__right-text right-text">
          <p className="right-text__privacyPolicy text-superSmall">
            Политика конфиденциальности
          </p>
          <div className="right-text__line demarcationLine"></div>
          <p className="right-text__termsOfService text-superSmall">
            Условия обслуживания
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RightsSection;
