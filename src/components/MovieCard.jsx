function MovieCard({ title, image, genre, description }) {
    return (
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <h3>{title}</h3>
        <p style={styles.genre}>{genre}</p>
        <p style={styles.description}>{description}</p>
      </div>
    )
  }
  
  const styles = {
    card: {
      width: "200px",
      background: "#1f1f1f",
      padding: "10px",
      borderRadius: "8px",
    },
    image: {
      width: "100%",
      borderRadius: "6px",
    },
    genre: {
      color: "#999",
      fontSize: "12px",
    },
    description: {
      fontSize: "13px",
    },
  }
  
  export default MovieCard
  