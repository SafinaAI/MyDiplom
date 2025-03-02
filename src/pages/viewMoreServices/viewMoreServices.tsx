import { JSX } from "react";
import { useLocation } from "react-router-dom";

const specialists = [
  {
    id: 1,
    name: "Груммер Таня",
    profession: "грумер",
    image: "/img/груммер1 1.png",
    reviews: 150,
  },
  {
    id: 2,
    name: "Груммер Катя",
    profession: "грумер",
    image: "/img/груммер2.png",
    reviews: 120,
  },
  {
    id: 3,
    name: "Груммер Валерия",
    profession: "грумер",
    image: "/img/груммер3.png",
    reviews: 100,
  },
  {
    id: 4,
    name: "Хирург Иван",
    profession: "врач",
    image: "/img/ветврач1.png",
    reviews: 90,
  },
  {
    id: 5,
    name: "Ортопед Дмитрий",
    profession: "врач",
    image: "/img/ветврач2.png",
    reviews: 85,
  },
  {
    id: 6,
    name: "Терапевт Денис",
    profession: "врач",
    image: "/img/ветврач3.png",
    reviews: 105,
  },
  {
    id: 7,
    name: "Догситтер Аня",
    profession: "догситтер",
    image: "/img/груммер1 1.png",
    reviews: 113,
  },
  {
    id: 8,
    name: "Диетолог Василий",
    profession: "диетолог",
    image: "/img/груммер1 1.png",
    reviews: 98,
  },
];

function ViewMoreServices(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredSpecialists = specialists.filter((spec) =>
    spec.profession.includes(query)
  );

  return (
    <div className="services-container">
      <h1>Результаты поиска: {query}</h1>
      {filteredSpecialists.length > 0 ? (
        <ul className="services-list">
          {filteredSpecialists.map((spec) => (
            <li key={spec.id} className="service-card">
              <img src={spec.image} alt={spec.name} />
              <h2>{spec.name}</h2>
              <p>Отзывы: {spec.reviews}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  );
}

export default ViewMoreServices;
