import { useEffect, useState } from "react"

const posters = [
  "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", // Wonder Woman
  "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", // Batman
  "https://image.tmdb.org/t/p/original/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg", // Spider-Man
  "https://image.tmdb.org/t/p/original/aw1TAKdfjl69fNvx4PfqyehcPNJ.jpg", // Superman
]

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div
      style={{
        ...styles.hero,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {posters.map((img, index) => (
        <div
          key={index}
          style={{
            ...styles.poster,
            backgroundImage: `url(${img})`, // 🔥 THIS WAS MISSING BEFORE
            height: isMobile ? "25vh" : "100%",
          }}
        />
      ))}

      <div style={styles.overlay} />

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
    gap: "5px",
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  poster: {
    flex: 1,
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

  
  
  

  
  
  