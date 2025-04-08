import styles from "./Offers.module.css";

import CardOffers from "../CardOffers/CardOffers";

import prod1 from "../../assets/produto-1.png";
import prod2 from "../../assets/produto-2.png";
import prod3 from "../../assets/produto-3.png";
import prod4 from "../../assets/produto-4.png";
import prod5 from "../../assets/produto-5.png";
import prod6 from "../../assets/produto-6.png";

const Offers = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <p>Conheça nossas</p>
        <h1>Ofertas</h1>
      </div>
      <div className={styles.Produtos}>
        <div className={styles.Fileira1}>
          <CardOffers img={prod1} name={"Ajugaeptans"} price={"20,00"} />
          <CardOffers img={prod2} name={"Cordylinefruticosa"} price={"20,00"} />
          <CardOffers img={prod3} name={"Crassulaovata"} price={"20,00"} />
        </div>
        <div className={styles.Fileira2}>
          <CardOffers img={prod4} name={"Cyperusrotundus"} price={"20,00"} />
          <CardOffers img={prod5} name={"Delaireaodorata"} price={"20,00"} />
          <CardOffers img={prod6} name={"Daturametel"} price={"20,00"} />
        </div>
      </div>
    </div>
  );
};

export default Offers;
