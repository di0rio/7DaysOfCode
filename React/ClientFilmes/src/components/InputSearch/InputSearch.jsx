import { useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./InputSearch.module.css";

const InputSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm("");
    if (onSearch) onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div
        className={`${styles.inputWrapper} ${isFocused ? styles.focused : ""} ${
          searchTerm ? styles.hasValue : ""
        }`}
      >
        <div className={styles.searchIcon}>
          <Search size={20} strokeWidth={2.5} />
        </div>

        <input
          className={styles.input}
          type="text"
          placeholder="Digite algum filme para pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {searchTerm && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearSearch}
            aria-label="Limpar pesquisa"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
};

export default InputSearch;
