import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"

// 🔹 Manual data (easy to add new items)
const movies = [
  {
    id: 1,
    title: "Batman",
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
  },
  {
    id: 2,
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
  },
]

const tvShows = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Stranger Things",
    image: "https://m.media-amazon.com/images/I/81vG7JYFZKL._AC_SL1500_.jpg",
  },
]

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div style={styles.app}>
      <Sidebar active={activeSection} setActive={setActiveSection} />

      <main style={styles.main}>
        {activeSection === "home" && <Hero />}

        {activeSection === "movies" && (
          <>
            <h2 style={styles.title}>Movies</h2>
            <div style={styles.grid}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  image={movie.image}
                />
              ))}
            </div>
          </>
        )}

        {activeSection === "tv" && (
          <>
            <h2 style={styles.title}>TV Shows</h2>
            <div style={styles.grid}>
              {tvShows.map((show) => (
                <MovieCard
                  key={show.id}
                  title={show.title}
                  image={show.image}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#141414",
    color: "#fff",
  },
  main: {
    flex: 1,
    padding: "30px",
  },
  title: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
}

export default App

