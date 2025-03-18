import styles from "./CardOffers.module.css";

const CardOffers = ({ img, alt, name, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={img} alt={alt} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.price}>R$ {price}</p>
        </div>
        <button className={styles.buyButton}>
          Comprar <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default CardOffers;
