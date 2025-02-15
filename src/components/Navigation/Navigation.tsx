import React from "react";

const Navigation = () => (
  <div className="section-header">
    {/* Верхняя часть навигации */}
    <div className="section-header__firstNav firstNav firstNav__container">
      <ul className="firstNav__list">
        <li className="firstNav__list-item">
          <a href="./LexVetAdopt.html"> LexVet Усыновление</a>
        </li>
        <div className="firstNav__hr demarcationLine"></div>
        <li className="firstNav__list-item">
          <a href="#">LexVet Поиск</a>
        </li>
        <div className="firstNav__hr demarcationLine"></div>
        <li className="firstNav__list-item">
          <a href="#">LexVet Забота</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
