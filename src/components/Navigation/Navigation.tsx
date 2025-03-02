import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="section-header">
    <div className="section-header__firstNav firstNav firstNav__container">
      <ul className="firstNav__list">
        <li className="firstNav__list-item">
          <NavLink to="/adopt">LexVet Усыновление</NavLink>
        </li>
        <div className="firstNav__hr demarcationLine"></div>
        <li className="firstNav__list-item ">
          <NavLink to="/myPet" className="hard-orange-word">Мой питомец</NavLink>
        </li>
        <div className="firstNav__hr demarcationLine"></div>
        <li className="firstNav__list-item">
          <NavLink to="/services">LexVet Забота</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
