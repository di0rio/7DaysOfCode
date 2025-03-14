import styles from "./Home.module.css";

import Header from "../../components/Header/Header";

import manchaAmarela from "../../assets/manchaAmarela.png";

const Home = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heroImage}>
            <img
              src={manchaAmarela}
              alt="Mancha amarela decorativa"
              className={styles.yellowBlobImage}
            ></img>
          </div>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
