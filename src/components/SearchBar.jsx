function SearchBar({ searchText, setSearchText }) {
    return (
      <input
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "none",
          fontSize: "16px",
        }}
      />
    );
  }
  
  export default SearchBar;
  