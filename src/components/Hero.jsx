// Hero.jsx
const posters = [
    "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    "https://image.tmdb.org/t/p/original/9O1Iy9od7xw9GJ8WZc0bJwZb1YF.jpg",
    "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  ]
  
  const Hero = () => {
    return (
      <div style={styles.hero}>
        {/* Posters side by side */}
        {posters.map((img, index) => (
          <div
            key={index}
            style={{
              ...styles.poster,
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
  
        {/* Overlay */}
        <div style={styles.overlay} />
  
        {/* Content */}
        <div style={styles.content}>
          <h1 style={styles.title}>Tonight’s Picks</h1>
          <p style={styles.subtitle}>
            Random movies & shows<br />
            just for the vibe 🍿
          </p>
        </div>
      </div>
    )
  }
  
  const styles = {
    hero: {
      display: "flex",
      height: "100vh",       // full viewport height
      width: "100vw",        // full viewport width
      position: "fixed",     // ignore parent padding
      top: 0,
      left: 0,
      zIndex: 0,
    },
    poster: {
      flex: 1,
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
      zIndex: 1,
    },
    content: {
      position: "absolute",
      left: "40px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "#fff",
    },
    title: {
      fontSize: "56px",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "20px",
    },
  }
  
  export default Hero
  

  
  
  