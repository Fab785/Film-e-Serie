import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";

function App() {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState("All");

  const movies = [
    {
      id: 1,
      title: "Batman",
      genre: "Action",
      image:
        "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
      description: "Dark and intense story in Gotham City",
    },
    {
      id: 2,
      title: "Inception",
      genre: "Sci-Fi",
      image:
        "https://m.media-amazon.com/images/I/51sV6eDM8VL._AC_.jpg",
      description: "Dream within a dream heist.",
    },
    // add more sample movies here later
  ];

  const filteredMovies = movies.filter((movie) => {
    return (
      (genre === "All" || movie.genre === genre) &&
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div
      style={{
        background: "#141414",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ flexGrow: 1 }}>🎬 My Movie Catalog</h1>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <GenreFilter genre={genre} setGenre={setGenre} />
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;


