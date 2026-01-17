function Modal({ type, onClose }) {
    const movies = ["Batman", "Wonder Woman", "Spider-Man", "Superman"]
    const tvShows = ["Breaking Bad", "The Boys", "Dark", "Loki"]
  
    const list = type === "movies" ? movies : tvShows
  
    return (
      <div style={styles.backdrop} onClick={onClose}>
        <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2>{type === "movies" ? "Movies" : "TV Shows"}</h2>
  
          <ul>
            {list.map((item, i) => (
              <li key={i} style={styles.item}>{item}</li>
            ))}
          </ul>
  
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }
  
  const styles = {
    backdrop: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 100,
    },
    modal: {
      background: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "320px",
      margin: "100px auto",
    },
    item: {
      padding: "10px 0",
      borderBottom: "1px solid #333",
    },
  }
  
  export default Modal
  