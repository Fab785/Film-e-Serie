function MovieDetailModal({ movie, onClose }) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={movie.title} style={styles.image} />
        <p>{movie.note}</p>
        <p>Rating: {movie.rating} ⭐</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

const styles = {
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
    maxWidth: "600px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    color: "#fff",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "15px",
  },
}

export default MovieDetailModal

