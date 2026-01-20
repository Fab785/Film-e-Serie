function MovieDetailModal({ movie, onClose }) {
    if (!movie) return null
  
    return (
      <div style={styles.overlay} onClick={onClose}>
        <div
          style={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={movie.image}
            alt={movie.title}
            style={styles.image}
          />
  
          <h2>{movie.title}</h2>
  
          {movie.note && <p>📝 {movie.note}</p>}
          {movie.rating && <p>⭐ Rating: {movie.rating}</p>}
          {movie.watched && <p>✔ Watched</p>}
  
          <button style={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  }
  
  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 200,
    },
    modal: {
      background: "#111",
      padding: "25px",
      borderRadius: "14px",
      maxWidth: "400px",
      width: "90%",
      color: "#fff",
      textAlign: "center",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    closeBtn: {
      marginTop: "20px",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
  }
  
  export default MovieDetailModal
  