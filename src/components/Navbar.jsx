import { useState } from "react"

function Navbar({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  setPage,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.nav}>

        {/* LEFT */}
        <div style={styles.left}>
          <h2 style={styles.logo}>🎬 MovieNight</h2>

          {/* Desktop buttons */}
          <div style={styles.desktopOnly}>
            <button
              style={styles.link}
              onClick={() => setPage("movies")}
            >
              Movies
            </button>

            <button
              style={styles.link}
              onClick={() => setPage("tv")}
            >
              TV Shows
            </button>
          </div>
        </div>


        {/* RIGHT DESKTOP */}
        <div style={styles.rightDesktop}>

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
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

        </div>


        {/* BURGER */}
        <button
          style={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>


      {/* MOBILE MENU */}
      {menuOpen && (

        <div style={styles.mobileMenu}>

          <button
            style={styles.mobileLink}
            onClick={() => {
              setPage("movies")
              setMenuOpen(false)
            }}
          >
            Movies
          </button>

          <button
            style={styles.mobileLink}
            onClick={() => {
              setPage("tv")
              setMenuOpen(false)
            }}
          >
            TV Shows
          </button>


          {/* SEARCH MOBILE */}
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.mobileSearch}
          />


          {/* SORT MOBILE */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={styles.mobileSort}
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

        </div>

      )}

    </>
  )
}

export default Navbar


const styles = {

  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "70px",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    zIndex: 1000,
  },


  left: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },


  logo: {
    color: "#fff",
    fontSize: "20px",
  },


  link: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },


  rightDesktop: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },


  search: {
    padding: "6px",
  },


  sort: {
    padding: "6px",
  },


  burger: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "26px",
    cursor: "pointer",
  },


  mobileMenu: {
    position: "fixed",
    top: "70px",
    width: "100%",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
  },


  mobileLink: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    textAlign: "left",
  },


  mobileSearch: {
    padding: "10px",
    fontSize: "16px",
  },


  mobileSort: {
    padding: "10px",
    fontSize: "16px",
  },


  desktopOnly: {
    display: "flex",
    gap: "15px",
  },

}

