import InputSearch from "../InputSearch/InputSearch";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <div>
            <h1
              id={styles.Title}
              className="text-1xl md:text-4xl font-bold text-white"
            >
              Filmes Populares
            </h1>
          </div>
        </div>
      </div>
      <InputSearch />
    </div>
  );
};

export default Header;
