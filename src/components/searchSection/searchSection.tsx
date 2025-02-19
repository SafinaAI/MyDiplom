import React from "react";

const SearchSection: React.FC = () => {
  return (
    <section className="searchSection">
      <div className="searchSection__container container">
        <div className="searchSection__wrapper">
          <h2 className="searchSection__title">
            Найдите того, кто подарит вашему хвостику заботу и любовь!
          </h2>
          <div className="searchSection__searchBoxContainer">
            <input
              type="text"
              className="searchSection__search-box"
              placeholder="Поиск специалиста ..."
              aria-label="Введите запрос для поиска специалиста"
            />
            <button className="searchSection__search-button" type="submit">
              <img src="../../public/icons/dog-paw.svg" className="" alt="Лапка" />
            </button>
          </div>
          <div className="searchSection__quick-search">
            <a href="#" data-profession="врачи">
              Врачи
            </a>
            <a href="#" data-profession="кинологи">
              Кинологи
            </a>
            <a href="#" data-profession="грумеры">
              Грумеры
            </a>
            <a href="#" data-profession="передержка">
              Передержка
            </a>
            <a href="#" data-profession="догситтеры">
              Догситтеры
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
