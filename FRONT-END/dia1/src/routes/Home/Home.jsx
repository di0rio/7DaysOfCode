import styles from "./Home.module.css";

import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
