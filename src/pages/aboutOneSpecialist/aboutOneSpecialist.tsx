import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import SpecialistMap from "../../components/specialistMap/specialistMap";
import RatingBlock from "../../components/ratingBlock/ratingBlock";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

const specialists = [
  {
    id: 1,
    name: "Груммер Таня",
    profession: "грумер",
    image: "/img/груммер1 1.png",
    reviews: 150,
    description:
      "Меня зовут Таня, и я профессиональный грумер с 5-летним опытом. Работаю с собаками и кошками разных пород и характеров. Моя цель – сделать процесс груминга комфортным для вашего любимца, а результат – безупречным!",
    additionalImages: [
      "/img/груммер2.png",
      "/img/груммер3.png",
      "/img/груммер1 1.png",
    ],
    services: [
      "✅ Стрижка и тримминг (модельные и гигиенические)",
      "✅ Купание с подбором профессиональной косметики",
      "✅ Вычёсывание колтунов и подшерстка",
      "✅ Чистка ушей и глаз, подстригание когтей",
      "✅ SPA-процедуры для шерсти",
    ],
    phone: "+7 (999) 123-45-67",
    address: "Казань, ул. Баумана, 15",
    location: { lat: 55.7887, lon: 49.1221 }, // Координаты специалиста
  },
  {
    id: 2,
    name: "Груммер Катя",
    profession: "грумер",
    image: "/img/груммер2.png",
    reviews: 120,
    description:
      "Профессиональный грумер. Использует только безопасные средства.",
    additionalImages: ["/img/груммер2_2.png", "/img/груммер2_3.png"],
  },
  {
    id: 3,
    name: "Груммер Валерия",
    profession: "грумер",
    image: "/img/груммер3.png",
    reviews: 100,
    description: "Обожает животных, поможет вашему питомцу выглядеть идеально!",
    additionalImages: ["/img/груммер3_2.png"],
  },
];

const sampleReviews = [
  {
    id: 1,
    avatar: "/img/груммер2.png",
    name: "Алексей",
    date: "15 февраля 2025",
    rating: 5,
    text: "Таня – настоящий профессионал! Мой шпиц всегда выходит от неё пушистым и ухоженным, а главное – спокойным. Раньше он боялся груминга, но с Таней всё проходит без стресса. Спасибо за заботу и терпение!",
    images: ["/img/груммер3.png", "/img/груммер3.png"],
  },
  {
    id: 2,
    avatar: "/img/груммер2.png",
    name: "Марина",
    date: "10 февраля 2025",
    rating: 4,
    text: "Очень хороший сервис, но записаться было сложно.",
    images: ["/img/груммер3.png"],
  },
];

function AboutOneSpecialist() {
  const { id } = useParams();
  const specialist = specialists.find((s) => s.id === Number(id));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [showPhone, setShowPhone] = useState(false);

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(true); // Заглушка для проверки авторизации

  if (!specialist) {
    return <p>Специалист не найден</p>;
  }

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmitReview = () => {
    if (!isAuthorized) {
      alert("Только зарегистрированные пользователи могут оставлять отзывы.");
      return;
    }
    if (rating === 0 || reviewText.trim() === "") {
      alert("Пожалуйста, выберите оценку и оставьте отзыв.");
      return;
    }

    console.log("Отзыв отправлен:", { rating, reviewText });
    setRating(0);
    setReviewText("");
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <h1 className="specialist__name">{specialist.name}</h1>
        <p className="specialist__profession text-black">
          Профессия: {specialist.profession}
        </p>

        {/* Главное изображение */}
        <div className="specialist__main-image">
          <img src={specialist.image} alt={specialist.name} />
        </div>

        {/* Галерея дополнительных изображений */}
        <div className="specialist__images">
          {specialist.additionalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Доп. фото ${index + 1}`}
              className="specialist__thumbnail"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Модальное окно с увеличенным изображением */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedImage(null)}>
                &times;
              </span>
              <img src={selectedImage} alt="Увеличенное изображение" />
            </div>
          </div>
        )}

        <p className="specialist__description-world ">Описание:</p>
        <p className="specialist__description text-black">
          {" "}
          {specialist.description}
        </p>
        {/* Блок "Что я предлагаю" */}
        {specialist.services && specialist.services.length > 0 && (
          <div className="specialist__services">
            <h3 className="specialist__services-title">Что я предлагаю:</h3>
            <ul className="specialist__services-list">
              {specialist.services.map((service, index) => (
                <li key={index} className="specialist__service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Кнопка "Показать телефон" */}
        <div className="specialist__phone">
          <button
            className="specialist__phone-button "
            onClick={() => setShowPhone(true)}
          >
            {showPhone ? specialist.phone : "Показать телефон"}
          </button>
        </div>
        {/* <p className="specialist__reviews text-black">Отзывы: {specialist.reviews}</p> */}
      </div>
      {/* Карта с местоположением специалиста */}
      <div className="specialist__map-container">
        <h3 className="specialist__map-title">Местоположение:</h3>
        <SpecialistMap
          location={specialist.location}
          address={specialist.address}
        />
      </div>
      <RatingBlock reviews={[5, 4, 5, 5, 3, 4, 5, 2, 5, 4, 3, 5, 1]} />

      <div className="review-container">
        <h3 className="review-container__title">Оставить отзыв</h3>
        <div className="rating-selection">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? "star selected" : "star"}
              onClick={() => handleStarClick(index)}
              style={{ cursor: "pointer", fontSize: "24px" }}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="review-text"
          placeholder="Оставьте свой отзыв..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="submit-review" onClick={handleSubmitReview}>
          Оставить отзыв
        </button>
      </div>

      <div className="reviews-section container">
        <h3 className="reviews-section__title">Отзывы</h3>
        {sampleReviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.avatar} alt="Аватар" className="review-avatar" />
            <div className="review-content">
              <h4>{review.name}</h4>
              <p className="review-date">{review.date}</p>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => "★")}
              </div>
              <p className="reviews-section__text">{review.text}</p>
              <div className="review-images">
                {review.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Отзыв"
                    className="review-thumbnail"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <RightsSection />
    </>
  );
}

export default AboutOneSpecialist;
