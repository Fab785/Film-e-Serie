function Sidebar({ active, setActive }) {
    return (
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>🎬</h2>
  
        <button
          style={active === "movies" ? styles.activeBtn : styles.btn}
          onClick={() => setActive("movies")}
        >
          Movies
        </button>
  
        <button
          style={active === "tv" ? styles.activeBtn : styles.btn}
          onClick={() => setActive("tv")}
        >
          TV Shows
        </button>
      </div>
    )
  }
  
  const styles = {
    sidebar: {
      width: "180px",
      background: "#000",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    logo: {
      color: "red",
      marginBottom: "30px",
    },
    btn: {
      background: "none",
      border: "none",
      color: "#aaa",
      fontSize: "16px",
      textAlign: "left",
      cursor: "pointer",
    },
    activeBtn: {
      background: "none",
      border: "none",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "left",
      cursor: "pointer",
    },
  }
  
  export default Sidebar
  