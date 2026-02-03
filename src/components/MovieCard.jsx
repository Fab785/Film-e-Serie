function MovieCard({ movie, onClick }) {
  const borderColor = getBorderColor(movie.watchedBy)

  return (
    <div
      onClick={() => onClick && onClick(movie)}
      style={{
        ...styles.card,
        border: `4px solid ${borderColor}`,
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={styles.image}
      />

      {/* titolo sotto poster */}
      <div style={styles.title}>
        {movie.title}
      </div>
    </div>
  )
}

function getBorderColor(watchedBy = []) {
  if (watchedBy.includes("fabrizio") && watchedBy.includes("christian")) {
    return "limegreen"
  }
  if (watchedBy.includes("fabrizio")) return "crimson"
  if (watchedBy.includes("christian")) return "yellow"
  return "#333"
}

const styles = {
  card: {
    cursor: "pointer",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.2s",
    background: "#000",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    display: "block",
  },
  title: {
    padding: "8px",
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
    background: "#111",
  },
}

export default MovieCard

  