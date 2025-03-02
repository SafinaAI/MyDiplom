import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  const userLoggedIn = false; // Это временно, позже будет проверка, вошел ли пользователь

  return (
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
            <a className="nav-menu__list-item-link" href="#">Кто мы</a>
          </li>
          <li className="nav-menu__list-item">
            <a className="nav-menu__list-item-link" href="#">Что мы делаем</a>
          </li>
        </ul>
      </nav>
      <div className="section-header__btns buttons">
        <button className="buttons__LogIn">Регистрация</button>
        <button className="buttons__LogUp">Мой питомец</button>
      </div>
    </div>
  );
};

export default MainMenu;
