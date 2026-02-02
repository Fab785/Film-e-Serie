function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={() => onClick(movie)}
      style={styles.card}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={styles.image}
      />

      <div style={styles.title}>
        {movie.title}
      </div>
    </div>
  )
}

const styles = {
  card: {
    cursor: "pointer",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.2s",
    background: "#111",
  },

  image: {
    width: "100%",
    height: "270px",
    objectFit: "cover",
    display: "block",
  },

  title: {
    padding: "10px 8px",
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
    lineHeight: "1.2",
  },
}

export default MovieCard

  