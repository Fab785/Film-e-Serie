function GenreFilter({ genre, setGenre }) {
    const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fi", "Horror"];
  
    return (
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{
          padding: "10px",
          marginLeft: "10px",
          fontSize: "16px",
          borderRadius: "6px",
        }}
      >
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    );
  }
  
  export default GenreFilter;
  