import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import casaVerde from "../../assets/casaVerde.png";

const navigation = [
  { componente: "/howto", name: "Como fazer" },
  { componente: "/offers", name: "Ofertas" },
  { componente: "/testimonials", name: "Depoimentos" },
  { componente: "/videos", name: "Vídeos" },
  { componente: "/mycart", name: "Meu carrinho" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.conjuntoLogo}>
          <img src={logo} alt="Logo Casa Verde" />
          <img src={casaVerde} alt="Casa Verde" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navigation.map((nav, index) => (
              <li key={nav.name} className={styles.navItem}>
                <Link to={nav.componente} className={styles.navLink}>
                  {nav.name}
                </Link>
                {index < navigation.length - 1 && (
                  <span className={styles.divider}>/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
