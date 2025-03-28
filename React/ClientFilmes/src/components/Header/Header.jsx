import styles from "./Header.module.css";

import InputSearch from "../InputSearch/InputSearch";

const Header = () => {
  return (
    <div className={styles.Container}>
      <div>
        <h1 id={styles.Title} className="text-[36px] font-semibold text-white">
          Filmes Populares
        </h1>
      </div>
      <InputSearch />
    </div>
  );
};

export default Header;
