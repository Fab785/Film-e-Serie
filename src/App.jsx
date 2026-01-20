import { useState } from "react"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import MovieDetailModal from "./components/MovieDetailModal"
import movies from "./data/movies"
import tvShows from "./data/tvShows"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [modalType, setModalType] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const data =
    modalType === "movies" ? movies :
    modalType === "tv" ? tvShows :
    []

  return (
    <div style={styles.app}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <button onClick={() => setActiveSection("home")}>Home</button>
          <button onClick={() => setModalType("movies")}>Movies</button>
          <button onClick={() => setModalType("tv")}>TV Shows</button>
        </div>

        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.search}
        />
      </nav>

      {/* MAIN */}
      <main style={{ marginTop: "80px" }}>
        {activeSection === "home" && <Hero />}
      </main>

      {/* MOVIE LIST MODAL */}
      {modalType && (
        <div style={styles.overlay} onClick={() => setModalType(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>
              {modalType === "movies" ? "Movies" : "TV Shows"}
            </h2>

            <div style={styles.grid}>
              {data
                .filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <MovieCard
                    key={item.id}
                    movie={item}
                    onClick={setSelectedMovie}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

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
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    background: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    zIndex: 10,
  },
  navLeft: {
    display: "flex",
    gap: "20px",
  },
  search: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modal: {
    background: "#111",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "1000px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  grid: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
}

export default App






