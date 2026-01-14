// App.jsx
import { useState } from "react"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"

const movies = [
  { id: 1, title: "Batman", image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg" },
  { id: 2, title: "Inception", image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg" },
]

const tvShows = [
  { id: 1, title: "Breaking Bad", image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg" },
  { id: 2, title: "Stranger Things", image: "https://m.media-amazon.com/images/I/81vG7JYFZKL._AC_SL1500_.jpg" },
]

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <button
            style={activeSection === "home" ? styles.activeBtn : styles.btn}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>
          <button
            style={activeSection === "movies" ? styles.activeBtn : styles.btn}
            onClick={() => setActiveSection("movies")}
          >
            Movies
          </button>
          <button
            style={activeSection === "tv" ? styles.activeBtn : styles.btn}
            onClick={() => setActiveSection("tv")}
          >
            TV Shows
          </button>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
        />
      </nav>

      {/* Main content */}
      <main style={styles.main}>
        {activeSection === "home" && <Hero />}

        {activeSection === "movies" && (
          <div style={styles.grid}>
            {movies
              .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((movie) => (
                <MovieCard key={movie.id} title={movie.title} image={movie.image} />
              ))}
          </div>
        )}

        {activeSection === "tv" && (
          <div style={styles.grid}>
            {tvShows
              .filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((show) => (
                <MovieCard key={show.id} title={show.title} image={show.image} />
              ))}
          </div>
        )}
      </main>
    </div>
  )
}

const styles = {
  app: {
    background: "#141414",
    color: "#fff",
    margin: 0,
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#000",
    zIndex: 10,
  },
  navLeft: {
    display: "flex",
    gap: "40px",
  },
  btn: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "20px",
    cursor: "pointer",
  },
  activeBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  searchBar: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  },
  main: {
    marginTop: "80px", // push content below navbar
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
}

export default App




