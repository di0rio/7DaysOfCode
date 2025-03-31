import styles from "./MoviesList.module.css";

import Cards from "../Cards/Cards";

const MoviesList = ({ movies }) => {
  return (
    <div className={styles.moviesContainer}>
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <Cards
            key={index}
            img={movie.img}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            description={movie.description}
            isFavorite={movie.isFavorite}
            isSelected={movie.isSelected}
          />
        ))
      ) : (
        <p className={styles.noMovies}>Nenhum filme encontrado</p>
      )}
    </div>
  );
};

export default MoviesList;
