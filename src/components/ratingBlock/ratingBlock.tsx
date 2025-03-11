import { useMemo } from "react";


interface RatingBlockProps {
  reviews: number[];
}

const RatingBlock = ({ reviews }: RatingBlockProps) => {
  // Подсчет количества отзывов по звездам (1–5)
  const reviewCounts = useMemo(() => {
    const counts = [0, 0, 0, 0, 0]; // Индексы: [0] - 1 звезда, [4] - 5 звезд
    reviews.forEach((rating) => {
      counts[rating - 1]++;
    });
    return counts;
  }, [reviews]);

  // Общее число отзывов
  const totalReviews = reviews.length;

  // Средний рейтинг
  const averageRating = useMemo(() => {
    if (totalReviews === 0) return 0;
    return reviews.reduce((sum, rating) => sum + rating, 0) / totalReviews;
  }, [reviews]);

  // Округленный рейтинг для отображения звезд
  const roundedRating = Math.round(averageRating);

  return (
    <div className="rating-container ">
      <div className="rating-summary">
        <span className="rating-score">{averageRating.toFixed(1)}</span>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < roundedRating ? "gold" : ""}`}
            >
              &#9733;
            </span>
          ))}
        </div>
        <p className="review-count">На основании {totalReviews} оценок</p>
      </div>

      {/* Градация оценок */}
      <div className="rating-breakdown">
        {[5, 4, 3, 2, 1].map((star, index) => {
          const count = reviewCounts[5 - star]; // Количество отзывов на эту звезду
          const percentage = totalReviews ? (count / totalReviews) * 100 : 0;
          return (
            <div key={index} className="rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < star ? "gold" : ""}`}>
                    &#9733;
                  </span>
                ))}
              </div>
              <div className="rating-bar">
                <div className="fill" style={{ width: `${percentage}%` }}></div>
              </div>
              <span className="count">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBlock;
