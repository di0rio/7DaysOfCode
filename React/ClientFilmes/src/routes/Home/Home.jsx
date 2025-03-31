import React from "react";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  const moviesData = [
    {
      img: "/path/to/avengers-endgame.jpg",
      title: "Avengers Endgame",
      year: "2019",
      rating: "9.2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: true,
      isSelected: false,
    },
    {
      img: "/path/to/batman.jpg",
      title: "Batman",
      year: "2022",
      rating: "9.4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: true,
      isSelected: true,
    },
    // outros filmes...
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <MoviesList movies={moviesData} />
      </div>
    </div>
  );
};

export default Home;
