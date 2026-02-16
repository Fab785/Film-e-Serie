import { useState } from "react"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import MovieDetailModal from "./components/MovieDetailModal"
import movies from "./data/movies"
import tvShows from "./data/tvShows"

function App() {

  const [page, setPage] = useState("home")
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("az")
  const [selectedMovie, setSelectedMovie] = useState(null)

  const data =
    page === "movies" ? movies :
    page === "tv" ? tvShows :
    []

  return (

    <div style={styles.app}>

      {/* NAVBAR */}
      <nav style={styles.navbar}>

        {/* LEFT SIDE */}
        <div style={styles.left}>

          <button style={styles.btn} onClick={() => setPage("home")}>
            Home
          </button>

          <button style={styles.btn} onClick={() => setPage("movies")}>
            Movies
          </button>

          <button style={styles.btn} onClick={() => setPage("tv")}>
            TV Shows
          </button>

        </div>


        {/* RIGHT SIDE */}
        {page !== "home" && (

          <div style={styles.right}>

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.search}
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={styles.sort}
            >

              <option value="az">
                A → Z
              </option>

              <option value="za">
                Z → A
              </option>

            </select>

          </div>

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

              .sort((a, b) =>
                sortOrder === "az"
                  ? a.title.localeCompare(b.title)
                  : b.title.localeCompare(a.title)
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


      {/* MODAL */}
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

    background: "#000",

    display: "flex",

    flexWrap: "wrap",

    alignItems: "center",

    justifyContent: "flex-start",

    gap: "15px",

    padding: "10px 15px",

    zIndex: 100,

  },


  left: {

    display: "flex",

    gap: "15px",

  },


  right: {

    display: "flex",

    gap: "10px",

    alignItems: "center",

    flexWrap: "wrap",

  },


  btn: {

    background: "none",

    border: "none",

    color: "#fff",

    fontSize: "16px",

    cursor: "pointer",

  },


  search: {

    padding: "7px 10px",

    borderRadius: "6px",

    border: "none",

    width: "140px",

  },


  sort: {

    padding: "7px",

    borderRadius: "6px",

    border: "none",

    background: "#111",

    color: "#fff",

    cursor: "pointer",

  },


  main: {

    marginTop: "90px",

    padding: "20px",

  },


  grid: {

    display: "grid",

    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",

    gap: "20px",

  },

}


export default App








