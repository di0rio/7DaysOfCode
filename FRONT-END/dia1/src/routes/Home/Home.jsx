import styles from "./Home.module.css";

import Header from "../../components/Header/Header";

import manchaAmarela from "../../assets/manchaAmarela.png";
import Info from "../../components/Info/Info";
import SubInfo from "../../components/SubInfo/SubInfo";
import Offers from "../../components/Offers/Offers";

const Home = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.mancha}>
            <img
              src={manchaAmarela}
              alt="Mancha amarela decorativa"
              className={styles.yellowBlobImage}
            ></img>
          </div>
          <Header />
        </div>
        <div className={styles.info}>
          <Info />
        </div>
        <div className={styles.subInfo}>
          <SubInfo />
        </div>
        <div className={styles.Offers}>
          <Offers />
        </div>
      </div>
    </div>
  );
};

export default Home;
