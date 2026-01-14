function MovieCard({ title, image }) {
    return (
      <div>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        />
      </div>
    )
  }
  
  export default MovieCard