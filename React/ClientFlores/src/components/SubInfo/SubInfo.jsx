// SubInfo.jsx
import styles from "./SubInfo.module.css";
import Planta from "../../assets/plantaMedia.png";

const SubInfo = () => {
  return (
    <div className={styles.subInfoContainer}>
      <div className={styles.imageContainer}>
        <img
          src={Planta}
          alt="Folha de Monstera"
          className={styles.plantImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.subTitle}>Como conseguir</h3>
        <h2 className={styles.title}>minha planta</h2>

        <ul className={styles.stepsList}>
          <li className={styles.step}>
            <div className={styles.stepCircle}></div>
            <span className={styles.stepText}>Escolha suas plantas</span>
          </li>
          <li className={styles.step}>
            <div className={styles.stepCircle}></div>
            <span className={styles.stepText}>Faça seu pedido</span>
          </li>
          <li className={styles.step}>
            <div className={styles.stepCircle}></div>
            <span className={styles.stepText}>Aguarde na sua casa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubInfo;
