import React from "react";
import OurDecisionCard from "../our-decision-card/our-decision-card";

const SolutionSection = () => (
  // Четвертая секция Наши решения
  <section className="fourth-section">
    <div className="fourth-section__container container">
      <p className="fourth-section__text-small text-small">Наши решения</p>
      {/* анатология к секции */}
      <p className="fourth-section__text-big text-big">
        Вместе высвобождаем <br />
        силу <span className="orange-word">любви</span>
      </p>
      {/* карточки описания Миссии */}
      <div className="fourth-section__cards-box2">
        {/* Удалила карточки решений, теперь они в отдельном компоненте our-decision-card.tsx */}
        {/* карточка 1 */}
        <OurDecisionCard />
        {/* карточка 2 */}
        <OurDecisionCard />
        {/* карточка 3 */}
        <OurDecisionCard />
      </div>
      <hr className="secnd-section__line line" />
    </div>
  </section>
);

export default SolutionSection;
