import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import MoviesList from "../../components/MoviesList/MoviesList";

// import avengers from "../../assets/image 1.png";
// import estranho from "../../assets/image 2.png";
// import batman from "../../assets/image 3.png";
// import avatar from "../../assets/image 4.png";

const Home = () => {
  const moviesData = [
    {
      img: "https://imgs.search.brave.com/86MmgTAWZ71ZNYFM8vPexg3ftij_ATlBd4IwZMBN1WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2F2/ZW5nZXJzZW5kZ2Ft/ZV9sb2JfY3JkXzA1/LmpwZw",
      title: "Avengers Endgame",
      year: "2019",
      rating: "9.2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: true,
      isSelected: false,
    },
    {
      img: "https://imgs.search.brave.com/mtQUYSvJlX5PiSp48a3GO8GQHIJBkg7Ttk4ET3zKNq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1tVTVOR0ps/TXpBdE1HTm1PQzAw/WWpKakxUZ3lNelV0/TmpBeVltRTROamc1/WVdNeVhrRXlYa0Zx/Y0djQC5qcGc",
      title: "Batman",
      year: "2022",
      rating: "9.4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: true,
      isSelected: false,
    },
    {
      img: "https://imgs.search.brave.com/xp6pOFMz5Iug1e9mAZEsObzFTq5b08myrCcyh5dbrLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaXNu/ZXkuaW1hZ2VzLmVk/Z2UuYmFtZ3JpZC5j/b20vcmlwY3V0LWRl/bGl2ZXJ5L3YxL3Zh/cmlhbnQvZGlzbmV5/LzExOTAxOWFiLWUw/ZWMtNDM3NC05ODJm/LWRkYjQxOTVmMmNj/Mi9zY2FsZT9mb3Jt/YXQ9d2VicCZ3aWR0/aD0yODgw",
      title: "Avatar",
      year: "2019",
      rating: "9.2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: false,
      isSelected: false,
    },
    {
      img: "https://imgs.search.brave.com/bplA5Q7JpYVOI-ReTV30uxa6GpUjVJEq-JAz2VwGRqE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUZ3hZVEV6/TjJFdE5HVXdaaTAw/WldNMkxXRmxNbVl0/WVdNME9URTBNV1F5/TVdKa1hrRXlYa0Zx/Y0djQC5qcGc",
      title: "Dr estranho",
      year: "2022",
      rating: "9.4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorite: false,
      isSelected: false,
    },
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.Filter}>
        <Filter />
      </div>
      <div>
        <MoviesList movies={moviesData} />
      </div>
    </div>
  );
};

export default Home;
