import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import {
  FaPaw,
  FaUtensils,
  FaBone,
  FaWalking,
  FaCalendarAlt,
  FaVenusMars,
  FaNotesMedical,
} from "react-icons/fa";

const PetCardPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("general");

  // Моковые данные для демонстрации
  const petData = {
    name: "Барсик",
    breed: "Сибирский кот",
    age: "3 года",
    gender: "Мужской",
    description:
      "Барсик — очень ласковый и игривый кот. Он любит играть с мячиками и всегда рядом, когда его зовут. Он привит и здоров.",
    careNeeds:
      "Барсик требует регулярного ухода за шерстью и ежедневных игр. Он также нуждается в определенном типе корма.",
    contact: "example@email.com",
    image: "../public/img/adopt_sec_2_photo8.jpg",
  };

  const feedingLog = [
    {
      date: "2024-05-20 08:00",
      type: "Сухой корм",
      name: "Royal Canin",
      amount: "150 г",
      reaction: "🍗",
    },
    {
      date: "2024-05-20 18:00",
      type: "Влажный корм",
      name: "Whiskas",
      amount: "100 г",
      reaction: "😊",
    },
  ];

  const forbiddenFoods = [
    {
      name: "Шоколад",
      danger: "Высокий",
      reason: "Теобромин",
      symptoms: "Рвота, тахикардия",
    },
    {
      name: "Лук",
      danger: "Высокий",
      reason: "Тиосульфаты",
      symptoms: "Анемия",
    },
  ];

  const growthData = [
    {
      date: "2024-01-15",
      weight: "2.5 кг",
      height: "25 см",
      notes: "Норма для возраста",
    },
    {
      date: "2024-04-15",
      weight: "3.2 кг",
      height: "28 см",
      notes: "Хороший рост",
    },
  ];

  const walks = [
    {
      date: "2024-05-19",
      duration: "45 мин",
      distance: "1.2 км",
      notes: "Играл с мячом",
    },
    {
      date: "2024-05-18",
      duration: "30 мин",
      distance: "0.8 км",
      notes: "Короткая прогулка",
    },
  ];

  const vetVisits = [
    {
      date: "2024-04-10",
      reason: "Ежегодный осмотр",
      diagnosis: "Здоров",
      nextVisit: "2024-10-10",
    },
    {
      date: "2024-01-15",
      reason: "Вакцинация",
      diagnosis: "Прививка от бешенства",
      nextVisit: "2025-01-15",
    },
  ];

  const heatCycles = [
    {
      startDate: "2024-03-15",
      endDate: "2024-03-20",
      symptoms: "Метки, беспокойство",
      nextExpected: "2024-05-15",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="pet-card-wrapper">
        {/* Декор элементы */}
        <div className="pet-card-decor">
          <img
            src="../public/img/paw1PetCard.svg"
            className="paw-zigzag paw-1"
            alt="paw"
          />
          <img
            src="../public/img/paw1PetCard.svg"
            className="paw-zigzag paw-2"
            alt="paw"
          />
          <img
            src="../public/img/paw1PetCard.svg"
            className="paw-zigzag paw-3"
            alt="paw"
          />
          <img
            src="../public/img/paw1PetCard.svg"
            className="paw-zigzag paw-4"
            alt="paw"
          />
          <img
            src="../public/img/paw1PetCard.svg"
            className="paw-zigzag paw-5"
            alt="paw"
          />
          <img
            src="../public/img/dog1PetCard.png"
            className="dog dog-1"
            alt="dog"
          />
          <img
            src="../public/img/cat1PetCard.png"
            className="cat cat-1"
            alt="cat face"
          />
          <img
            src="../public/img/cat2PetCard.png"
            className="cat cat-2"
            alt="cat face"
          />
        </div>

        <div className="pet-card">
          {/* Основная информация о питомце */}
          <div className="pet-card-header">
            <img src={petData.image} alt="Pet" className="pet-card-image" />
            <div className="pet-card-info">
              <h2 className="pet-name">{petData.name}</h2>
              <p className="pet-breed">Порода: {petData.breed}</p>
              <p className="pet-age">Возраст: {petData.age}</p>
              <p className="pet-gender">Пол: {petData.gender}</p>
            </div>
          </div>

          {/* Навигация по разделам */}
          <div className="pet-tabs">
            <button
              className={`tab-button ${
                activeTab === "general" ? "active" : ""
              }`}
              onClick={() => setActiveTab("general")}
            >
              <FaPaw /> Общее
            </button>
            <button
              className={`tab-button ${
                activeTab === "feeding" ? "active" : ""
              }`}
              onClick={() => setActiveTab("feeding")}
            >
              <FaUtensils /> Питание
            </button>
            <button
              className={`tab-button ${activeTab === "growth" ? "active" : ""}`}
              onClick={() => setActiveTab("growth")}
            >
              <FaBone /> Рост
            </button>
            <button
              className={`tab-button ${activeTab === "walks" ? "active" : ""}`}
              onClick={() => setActiveTab("walks")}
            >
              <FaWalking /> Прогулки
            </button>
            <button
              className={`tab-button ${activeTab === "vet" ? "active" : ""}`}
              onClick={() => setActiveTab("vet")}
            >
              <FaNotesMedical /> Ветеринар
            </button>
            <button
              className={`tab-button ${activeTab === "heat" ? "active" : ""}`}
              onClick={() => setActiveTab("heat")}
            >
              <FaVenusMars /> Течки
            </button>
          </div>

          {/* Содержимое активного раздела */}
          <div className="tab-content">
            {activeTab === "general" && (
              <>
                <div className="info-section">
                  <h3>О питомце</h3>
                  <p className="pet-description">{petData.description}</p>
                </div>

                <div className="info-section">
                  <h3>Уход и потребности</h3>
                  <p>{petData.careNeeds}</p>
                </div>

                <div className="info-section">
                  <h3>Контактная информация</h3>
                  <p>
                    С владельцем можно связаться через почту:{" "}
                    <span className="contact-info">{petData.contact}</span>
                  </p>
                </div>
              </>
            )}

            {activeTab === "feeding" && (
              <>
                <div className="info-section">
                  <h3>Дневник кормления</h3>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Дата</th>
                          <th>Тип</th>
                          <th>Корм</th>
                          <th>Количество</th>
                          <th>Реакция</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feedingLog.map((item, index) => (
                          <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.reaction}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button className="add-button">+ Добавить запись</button>
                </div>

                <div className="info-section">
                  <h3>Запрещённые продукты</h3>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Продукт</th>
                          <th>Опасность</th>
                          <th>Токсичное вещество</th>
                          <th>Симптомы</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forbiddenFoods.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td
                              className={`danger-${item.danger.toLowerCase()}`}
                            >
                              {item.danger}
                            </td>
                            <td>{item.reason}</td>
                            <td>{item.symptoms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === "growth" && (
              <div className="info-section">
                <h3>График роста</h3>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Вес</th>
                        <th>Высота</th>
                        <th>Примечания</th>
                      </tr>
                    </thead>
                    <tbody>
                      {growthData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.weight}</td>
                          <td>{item.height}</td>
                          <td>{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="growth-chart">
                  {/* Здесь будет график роста */}
                  <p className="chart-placeholder">
                    График роста будет отображаться здесь
                  </p>
                </div>
                <button className="add-button">+ Добавить замер</button>
              </div>
            )}

            {activeTab === "walks" && (
              <div className="info-section">
                <h3>Трекер прогулок</h3>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Длительность</th>
                        <th>Дистанция</th>
                        <th>Примечания</th>
                      </tr>
                    </thead>
                    <tbody>
                      {walks.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.duration}</td>
                          <td>{item.distance}</td>
                          <td>{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="stats-container">
                  <div className="stat-box">
                    <h4>Всего прогулок</h4>
                    <p className="stat-value">24</p>
                  </div>
                  <div className="stat-box">
                    <h4>Средняя дистанция</h4>
                    <p className="stat-value">1.5 км</p>
                  </div>
                  <div className="stat-box">
                    <h4>Последняя прогулка</h4>
                    <p className="stat-value">19.05.2024</p>
                  </div>
                </div>
                <button className="add-button">+ Добавить прогулку</button>
              </div>
            )}

            {activeTab === "vet" && (
              <div className="info-section">
                <h3>Календарь ветеринара</h3>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Причина</th>
                        <th>Диагноз</th>
                        <th>Следующий визит</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vetVisits.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.reason}</td>
                          <td>{item.diagnosis}</td>
                          <td>{item.nextVisit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="reminder-box">
                  <h4>Ближайший визит</h4>
                  <p className="next-visit">10.10.2024 - Ежегодный осмотр</p>
                  <button className="reminder-button">Напомнить мне</button>
                </div>
                <button className="add-button">+ Добавить визит</button>
              </div>
            )}

            {activeTab === "heat" && (
              <div className="info-section">
                <h3>Календарь течек</h3>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Начало</th>
                        <th>Конец</th>
                        <th>Симптомы</th>
                        <th>Следующая ожидается</th>
                      </tr>
                    </thead>
                    <tbody>
                      {heatCycles.map((item, index) => (
                        <tr key={index}>
                          <td>{item.startDate}</td>
                          <td>{item.endDate}</td>
                          <td>{item.symptoms}</td>
                          <td>{item.nextExpected}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="heat-info">
                  <h4>Следующая течка ожидается: 15.05.2024</h4>
                  <p>Примерно через 25 дней</p>
                </div>
                <button className="add-button">+ Добавить цикл</button>
              </div>
            )}
          </div>

          <div className="pet-actions">
            <button className="edit-button">Редактировать</button>
            <button className="share-button">Поделиться</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCardPage;
