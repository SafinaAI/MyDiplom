import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../const";

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(
        `${AppRoute.ViewMoreServices}?query=${searchQuery.trim().toLowerCase()}`
      );
    }
  };

  const handleQuickSearch = (profession: string) => {
    navigate(`${AppRoute.ViewMoreServices}?query=${profession}`);
  };

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              className="searchSection__search-button"
              type="button"
              onClick={handleSearch}
            >
              <img
                src="../../public/icons/dog-paw.svg"
                className=""
                alt="Лапка"
              />
            </button>
          </div>
          <div className="searchSection__quick-search">
            {["врач", "кинолог", "грумер", "передержка", "догситтер"].map(
              (profession) => (
                <a
                  key={profession}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickSearch(profession);
                  }}
                >
                  {profession.charAt(0).toUpperCase() + profession.slice(1)}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
