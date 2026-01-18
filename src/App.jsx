import { useState } from "react"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"

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
    title: "Only Murders in the Building",
    image: "https://image.tmdb.org/t/p/w1280/1yjFVQZuW8aofZ5Cgol8iImsVFp.jpg",
  },
]

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  return (
    <div style={styles.app}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <button
            style={activeSection === "home" ? styles.activeBtn : styles.btn}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>

          <button style={styles.btn} onClick={() => openModal("movies")}>
            Movies
          </button>

          <button style={styles.btn} onClick={() => openModal("tv")}>
            TV Shows
          </button>
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
        />
      </nav>

      {/* MAIN */}
      <main style={styles.main}>
        {activeSection === "home" && <Hero />}
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div
          style={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={styles.modalTitle}>
              {modalType === "movies" ? "Movies" : "TV Shows"}
            </h2>

            <div style={styles.grid}>
              {(modalType === "movies" ? movies : tvShows)
                .filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <MovieCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                  />
                ))}
            </div>

            <button
              style={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  app: {
    background: "#141414",
    color: "#fff",
    minHeight: "100vh",
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
    padding: "0 40px",
    zIndex: 10,
  },

  navLeft: {
    display: "flex",
    gap: "30px",
  },

  btn: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "18px",
    cursor: "pointer",
  },

  activeBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  searchBar: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  main: {
    marginTop: "80px",
  },

  /* MODAL */
  modalOverlay: {
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
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "1000px",
    maxHeight: "80vh",
    overflowY: "auto",
  },

  modalTitle: {
    marginBottom: "20px",
    fontSize: "26px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },

  closeBtn: {
    marginTop: "25px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
}

export default App





