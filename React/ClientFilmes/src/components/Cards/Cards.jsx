import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import styles from "./Cards.module.css";

const Cards = ({
  img,
  title,
  year,
  rating,
  description,
  isFavorite,
  isSelected,
}) => {
  return (
    <div className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.cardContent}>
        <div className={styles.posterContainer}>
          <img src={img} alt={`${title} poster`} className={styles.poster} />
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.titleSection}>
            <h3 className={styles.title}>
              {title} {year && `(${year})`}
            </h3>
          </div>

          <div className={styles.ratingSection}>
            <div className={styles.rating}>
              <FaStar className={styles.starIcon} />
              <span>{rating}</span>
            </div>

            <div className={styles.favoriteBtn}>
              <FaHeart
                className={`${styles.heartIcon} ${
                  isFavorite ? styles.favorited : ""
                }`}
              />
              <span>Favoritar</span>
            </div>
          </div>

          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
