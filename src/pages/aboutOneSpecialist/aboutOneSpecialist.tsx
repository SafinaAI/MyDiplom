import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import SpecialistMap from "../../components/specialistMap/specialistMap";
import RatingBlock from "../../components/ratingBlock/ratingBlock";
import Footer from "../../components/footer/footer";
import RightsSection from "../../components/rightsSection/rightsSection";

// Определяем интерфейсы для типов данных
interface Review {
  id: number;
  avatar: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  images: string[];
}

interface Specialist {
  id: number;
  name: string;
  profession: string;
  image: string;
  reviews: number;
  price: number;
  description: string;
  additionalImages: string[];
  services: string[];
  phone: string;
  address: string;
  location: {
    lat: number;
    lon: number;
  };
}

const DEFAULT_AVATAR = "/img/Defolt-Avatar.jpg"; // Дефолтный аватар

// Типизированный массив специалистов
const specialists: Specialist[] = [
  {
    id: 1,
    name: "Груммер Таня",
    profession: "грумер",
    image: "/img/груммер1 1.png",
    reviews: 150,
    price: 1000,
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
    price: 1500,
    description:
      "Профессиональный грумер. Использует только безопасные средства.",
    additionalImages: ["/img/груммер2_2.png", "/img/груммер2_3.png"],
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
    id: 3,
    name: "Груммер Валерия",
    profession: "грумер",
    image: "/img/груммер3.png",
    reviews: 100,
    price: 2000,
    description: "Обожает животных, поможет вашему питомцу выглядеть идеально!",
    additionalImages: ["/img/груммер3_2.png"],
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
    id: 4,
    name: "Хирург Иван",
    profession: "Ветеринарный врач-хирург, офтальмолог, ратолог",
    image: "/img/ветврач1.png",
    reviews: 90,
    price: 1000,
    description:
      "С детства любил и нянчился с животными, но вот только по близости не было ветеринарных учебных учреждений я поступил в медицинский университет.⠀Став врачом и проработав несколько лет в одной из больниц, мечта из детства — спасать животных, все же пересилила и привела меня в Казань, где я выучилася на ветеринарного врача.⠀Моя специализация — офтальмология, ратология, хирургия. Настоящий ветеринар должен любить животных, и я не исключение.⠀Дома у меня живут пудель, золотистый ретривер и четыре кошки.",
    additionalImages: [
      "/img/ветврач1.png",
      "/img/adopt_sec_2_photo7.jpg",
      "/img/adopt_sec_2_photo6.jpg",
    ],
    services: [
      "✅ Кастрирование/стерилизация",
      "✅ Операции на позвоночник",
      "✅ Хирургические манипуляции любой сложности",
    ],
    phone: "+7 (999) 123-45-67",
    address: "Казань, ул. Баумана, 15",
    location: { lat: 55.7887, lon: 49.1221 }, // Координаты специалиста
  },
];

const initialReviews = [
  {
    id: 1,
    avatar: "/img/avatar_4-mark-gen.jpg",
    name: "Алексей",
    date: "15 февраля 2025",
    rating: 5,
    text: "Отличный специалист! Мой пес теперь выглядит великолепно!",
    images: ["/img/груммер3.png", "/img/груммер3.png"],
  },
  {
    id: 2,
    avatar: "/img/avatar_1-angelina_joly.jpg",
    name: "Марина",
    date: "10 февраля 2025",
    rating: 4,
    text: "Очень хороший сервис, но записаться было сложно.",
    images: ["/img/груммер3.png"],
  },
];

// Типизированные функции для работы с localStorage
const loadReviewsFromLocalStorage = (): Review[] => {
  const storedReviews = localStorage.getItem("reviews");
  return storedReviews ? JSON.parse(storedReviews) : [];
};

const saveReviewsToLocalStorage = (reviews: Review[]): void => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};

function AboutOneSpecialist() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const specialist = specialists.find((s) => s.id === Number(id));

  // Типизированные состояния
  const [reviews, setReviews] = useState<Review[]>(
    loadReviewsFromLocalStorage()
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showPhone, setShowPhone] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [reviewImages, setReviewImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    saveReviewsToLocalStorage(reviews);
  }, [reviews]);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReviewImages(Array.from(e.target.files));
    }
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

    const newReview: Review = {
      id: reviews.length + 1,
      avatar: DEFAULT_AVATAR,
      name: "Новый пользователь",
      date: new Date().toLocaleDateString(),
      rating,
      text: reviewText,
      images: reviewImages.map((file) => URL.createObjectURL(file)),
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setReviewText("");
    setReviewImages([]);
  };

  if (isLoading) return <div className="loader">Загрузка...</div>;

  if (!specialist) {
    return (
      <div className="not-found-container">
        <Navigation />
        <div className="container">
          <h2>Специалист не найден</h2>
          <button onClick={() => navigate(-1)} className="back-button">
            ← Назад
          </button>
        </div>
        <Footer />
        <RightsSection />
      </div>
    );
  }

  // Функция для удаления отзыва - расскомментруй - когда приголится
  //   const handleDeleteReview = (reviewId) => {
  //     const updatedReviews = reviews.filter((review) => review.id !== reviewId);
  //     setReviews(updatedReviews);
  //   };

  return (
    <>
      <Navigation />
      <div className="container">
        {/* Добавляем кнопку "Назад" */}
      <button 
        onClick={() => navigate(-1)}
        className="back-button"
        style={{ marginBottom: '20px' }}
      >
        ← Назад к списку
      </button>
        {/* Имя специалиста и цена */}
        <div className="specialist-header">
          <h1 className="specialist__name">{specialist.name}</h1>
          <span className="specialist__price">
            От {specialist.price} за услугу
          </span>
        </div>
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

      {/* Оставить отзыв */}
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
        <input type="file" multiple onChange={handleImageUpload} />
        <button className="submit-review" onClick={handleSubmitReview}>
          Оставить отзыв
        </button>
      </div>

      {/* Секция отзывов */}

      <div className="reviews-section container">
        <h3 className="reviews-section__title">Отзывы</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            {/* Если у отзыва нет аватара, используем дефолтный */}
            <img
              src={review.avatar || DEFAULT_AVATAR}
              alt="Аватар"
              className="review-avatar"
            />
            <div className="review-content">
              <div className="review-header">
                <h4>{review.name}</h4>
                <p className="review-date">{review.date}</p>
              </div>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? "star-filled" : "star-empty"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>{review.text}</p>
              {/* Можешь на создавать отзывов - потом раскомментируй блок и сможешь удалить ненужные */}
              {/* <button onClick={() => handleDeleteReview(review.id)} className="delete-review">
                  Удалить
                </button> */}
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
