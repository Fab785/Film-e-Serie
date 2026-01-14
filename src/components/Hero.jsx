const Hero = () => {
    return (
      <div style={styles.hero}>
        {/* Background Image */}
        <div style={styles.background} />
  
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
      position: "relative",
      height: "80vh",
      width: "100%",
      overflow: "hidden",
      borderRadius: "12px",
    },
  
    background: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "url(https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: "scale(1.05)",
    },
  
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
    },
  
    content: {
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "60px",
      color: "#fff",
    },
  
    title: {
      fontSize: "56px",
      marginBottom: "20px",
    },
  
    subtitle: {
      fontSize: "18px",
      lineHeight: "1.6",
      opacity: 0.9,
    },
  }
  
  export default Hero
  