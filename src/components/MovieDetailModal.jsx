import { useRef, useState } from "react"

function MovieDetailModal({ movie, onClose }) {
  const startY = useRef(0)
  const [translateY, setTranslateY] = useState(0)

  // Touch start
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY
  }

  // Touch move
  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY
    const diff = currentY - startY.current

    if (diff > 0) {
      setTranslateY(diff)
    }
  }

  // Touch end
  const handleTouchEnd = () => {
    if (translateY > 120) {
      onClose()
    } else {
      setTranslateY(0)
    }
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={{
          ...styles.modal,
          transform: `translateY(${translateY}px)`,
          transition: translateY === 0 ? "transform 0.3s ease" : "none",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* swipe indicator */}
        <div style={styles.handle} />

        <img
          src={movie.image}
          alt={movie.title}
          style={styles.image}
        />

        <h2>{movie.title}</h2>

        {movie.note && <p>{movie.note}</p>}
        {movie.rating && <p>⭐ {movie.rating}/5</p>}
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
    alignItems: "flex-end",
    zIndex: 200,
  },

  modal: {
    background: "#111",
    width: "100%",
    maxHeight: "90vh",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    padding: "20px",
  },

  handle: {
    width: "40px",
    height: "5px",
    background: "#555",
    borderRadius: "5px",
    margin: "0 auto 15px",
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "15px",
  },
}

export default MovieDetailModal
