import { JSX } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import SearchSection from "../../components/searchSection/searchSection";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

const specialists = [
  { id: 1, name: "Груммер Таня", profession: "грумер", image: "/img/груммер1 1.png", reviews: 150 },
  { id: 2, name: "Груммер Катя", profession: "грумер", image: "/img/груммер2.png", reviews: 120 },
  { id: 3, name: "Груммер Валерия", profession: "грумер", image: "/img/груммер3.png", reviews: 100 },
  { id: 4, name: "Хирург Иван", profession: "врач", image: "/img/ветврач1.png", reviews: 90 },
  { id: 5, name: "Ортопед Дмитрий", profession: "врач", image: "/img/ветврач2.png", reviews: 85 },
  { id: 6, name: "Терапевт Денис", profession: "врач", image: "/img/ветврач3.png", reviews: 105 },
  { id: 7, name: "Догситтер Аня", profession: "догситтер", image: "/img/груммер1 1.png", reviews: 113 },
  { id: 8, name: "Диетолог Василий", profession: "диетолог", image: "/img/груммер1 1.png", reviews: 98 },
];

function ViewMoreServices(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Фильтрация специалистов по введенному запросу
  const filteredSpecialists = query
    ? specialists.filter((spec) => spec.profession.toLowerCase().includes(query))
    : specialists;

  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <div className="container">
        <h1 className="services__main-title">С заботой о хвостиках:</h1>

      </div>

      <SearchSection />

      <div className="container">
        {/* <h1 className="services__title">
          {query ? `Результаты поиска: ${query}` : "Наши специалисты"}
        </h1> */}

        <div className="services__list">
          {filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist) => (
              <div
                key={specialist.id}
                className={`services__card ${selectedSpecialist === specialist.id ? "active" : ""}`}
                onClick={() => setSelectedSpecialist(specialist.id)}
              >
                <img src={specialist.image} alt={specialist.name} className="services__image" />
                <p className="services__name">{specialist.name}</p>
                <div className="bestSpec__cardRating">
                  <span>★★★★★</span>
                </div>
                <p className="services__reviews">Отзывы: {specialist.reviews}</p>
              </div>
            ))
          ) : (
            <p className="services__not-found">Упс...Ничего не найдено</p>
          )}
        </div>
      </div>

      <Footer />
      <RightsSection />
    </>
  );
}

export default ViewMoreServices;
