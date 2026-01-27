function MovieCard({ movie, onClick }) {
  return (
    <div
      style={styles.card}
      onClick={() => onClick(movie)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={styles.image}
      />
    </div>
  )
}

const styles = {
  card: {
    cursor: "pointer",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    aspectRatio: "2 / 3",
    objectFit: "cover",
    display: "block",
  },
}

export default MovieCard

  