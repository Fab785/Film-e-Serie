import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  return (
    <>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>MovieNight</h2>

        {/* Desktop menu */}
        <div className="desktop-menu" style={styles.links}>
          <button onClick={() => setModalType("movies")}>Movies</button>
          <button onClick={() => setModalType("tv")}>TV Shows</button>
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
          <button onClick={() => setModalType("movies")}>Movies</button>
          <button onClick={() => setModalType("tv")}>TV Shows</button>
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

export default Navbar
