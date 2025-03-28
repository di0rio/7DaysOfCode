import styles from "./InputSearch.module.css";

import iconSearch from "../../assets/search-icon.png";

const InputSearch = () => {
  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        placeholder="Digite algum filme para pesquisar..."
      />
      <img className={styles.Icon} src={iconSearch} alt="Icone de pesquisa" />
    </div>
  );
};

export default InputSearch;
