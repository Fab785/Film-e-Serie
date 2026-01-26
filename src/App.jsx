import { useState } from "react"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import MovieDetailModal from "./components/MovieDetailModal"
import movies from "./data/movies"
import tvShows from "./data/tvShows"

function App() {
  const [page, setPage] = useState("home")
  const [search, setSearch] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)

  const data =
    page === "movies" ? movies :
    page === "tv" ? tvShows :
    []

  return (
    <div style={styles.app}>
      {/* NAVBAR – ALWAYS VISIBLE */}
      <nav style={styles.navbar}>
        <div style={styles.left}>
          <button style={styles.btn} onClick={() => setPage("home")}>Home</button>
          <button style={styles.btn} onClick={() => setPage("movies")}>Movies</button>
          <button style={styles.btn} onClick={() => setPage("tv")}>TV Shows</button>
        </div>

        {page !== "home" && (
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />
        )}
      </nav>

      {/* CONTENT */}
      <main style={styles.main}>
        {page === "home" && <Hero />}

        {page !== "home" && (
          <div style={styles.grid}>
            {data
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <MovieCard
                  key={item.id}
                  movie={item}
                  onClick={setSelectedMovie}
                />
              ))}
          </div>
        )}
      </main>

      {/* DETAIL MODAL */}
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  )
}

const styles = {
  app: {
    background: "#141414",
    minHeight: "100vh",
    color: "#fff",
    overflowX: "hidden",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    zIndex: 10,
  },
  left: {
    display: "flex",
    gap: "20px",
  },
  btn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  search: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
  },
  main: {
    marginTop: "80px",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
}

export default App






