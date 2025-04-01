import styles from "./Filter.module.css";

import { useState } from "react";

import {
  Filter as FilterIcon,
  Heart,
  Star,
  Calendar,
  Clock,
} from "lucide-react";

const Filter = ({ onFilterChange, onFavoritesToggle, showFavorites }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) onFilterChange(filter);
    setIsDropdownOpen(false);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    // Poderia chamar uma função de callback aqui também
    setIsDropdownOpen(false);
  };

  const handleFavoritesToggle = () => {
    if (onFavoritesToggle) onFavoritesToggle(!showFavorites);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filterDropdown}>
          <button
            className={styles.filterButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FilterIcon size={16} className={styles.filterIcon} />
            <span>Filtrar</span>
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownSection}>
                <h4 className={styles.dropdownTitle}>Categorias</h4>
                <ul className={styles.filterList}>
                  <li
                    className={`${styles.filterItem} ${
                      activeFilter === "all" ? styles.active : ""
                    }`}
                    onClick={() => handleFilterChange("all")}
                  >
                    <span>Todos os filmes</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      activeFilter === "action" ? styles.active : ""
                    }`}
                    onClick={() => handleFilterChange("action")}
                  >
                    <span>Ação</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      activeFilter === "comedy" ? styles.active : ""
                    }`}
                    onClick={() => handleFilterChange("comedy")}
                  >
                    <span>Comédia</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      activeFilter === "drama" ? styles.active : ""
                    }`}
                    onClick={() => handleFilterChange("drama")}
                  >
                    <span>Drama</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      activeFilter === "scifi" ? styles.active : ""
                    }`}
                    onClick={() => handleFilterChange("scifi")}
                  >
                    <span>Ficção Científica</span>
                  </li>
                </ul>
              </div>

              <div className={styles.dropdownDivider}></div>

              <div className={styles.dropdownSection}>
                <h4 className={styles.dropdownTitle}>Ordenar por</h4>
                <ul className={styles.filterList}>
                  <li
                    className={`${styles.filterItem} ${
                      sortBy === "popularity" ? styles.active : ""
                    }`}
                    onClick={() => handleSortChange("popularity")}
                  >
                    <Star size={14} className={styles.itemIcon} />
                    <span>Popularidade</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      sortBy === "newest" ? styles.active : ""
                    }`}
                    onClick={() => handleSortChange("newest")}
                  >
                    <Calendar size={14} className={styles.itemIcon} />
                    <span>Mais recentes</span>
                  </li>
                  <li
                    className={`${styles.filterItem} ${
                      sortBy === "duration" ? styles.active : ""
                    }`}
                    onClick={() => handleSortChange("duration")}
                  >
                    <Clock size={14} className={styles.itemIcon} />
                    <span>Duração</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.favoritesToggle}>
        <label className={styles.toggleLabel}>
          <div className={styles.toggleWrapper}>
            <input
              type="checkbox"
              className={styles.toggleInput}
              checked={showFavorites}
              onChange={handleFavoritesToggle}
            />
            <div className={styles.toggle}>
              <div className={styles.toggleThumb}>
                {showFavorites && (
                  <Heart size={10} className={styles.heartIcon} />
                )}
              </div>
            </div>
          </div>
          <span className={styles.toggleText}>
            Mostrar meus filmes favoritos apenas
          </span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
