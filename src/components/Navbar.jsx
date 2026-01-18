import { useState } from "react"
import Modal from "./Modal"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const openModal = (type) => {
    setModalType(type)
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>🎬 MovieNight</h2>

        {/* Desktop menu */}
        <div style={styles.desktopMenu}>
          <button style={styles.link} onClick={() => openModal("movies")}>
            Movies
          </button>
          <button style={styles.link} onClick={() => openModal("tv")}>
            TV Shows
          </button>
        </div>

        {/* Mobile burger */}
        <button
          style={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.mobileLink} onClick={() => openModal("movies")}>
            Movies
          </button>
          <button style={styles.mobileLink} onClick={() => openModal("tv")}>
            TV Shows
          </button>
        </div>
      )}

      {/* Modal */}
      {modalType && (
        <Modal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </>
  )
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    zIndex: 100,
  },
  logo: {
    color: "#fff",
    fontSize: "22px",
  },
  desktopMenu: {
    display: "flex",
    gap: "30px",
  },
  link: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  burger: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "28px",
    cursor: "pointer",
    display: "none",
  },
  mobileMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    width: "100%",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    zIndex: 99,
  },
  mobileLink: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    textAlign: "left",
    cursor: "pointer",
  },
}

export default Navbar

