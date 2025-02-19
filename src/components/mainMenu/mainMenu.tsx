import React from "react";

const MainMenu = () => {
  const userLoggedIn = false; // Это временно, позже будет проверка, вошел ли пользователь

  return (
    <div className="section-header__container container">
      <a className="section-header__logo-link" href="./index.html">
        <img
          src="/icons/LOGO.svg"
          alt="Logo"
          className="section-header__logo"
        />
      </a>
      <nav className="section-header__nav nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__list-item">
            <a href="#">Кто мы</a>
          </li>
          <li className="nav-menu__list-item">
            <a href="#">Что мы делаем</a>
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
