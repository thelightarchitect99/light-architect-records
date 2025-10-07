export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <main style={styles.content}>
        <h1 style={styles.title}>The Light Architect Records</h1>
        <p style={styles.subtitle}>Cosmic Frequency • Divine Sound • Infinite Light</p>

        <div style={styles.albumSection}>
          <div style={styles.albumCard}>
            <img src="https://i.imgur.com/mtj6nGZ.png" style={styles.albumImg} alt="Album 1" />
            <h3 style={styles.albumTitle}>Sacred Vibes Vol.1</h3>
            <a href="https://distrokid.com" target="_blank" style={styles.link}>Listen</a>
          </div>

          <div style={styles.albumCard}>
            <img src="https://i.imgur.com/x8zO7Vh.png" style={styles.albumImg} alt="Album 2" />
            <h3 style={styles.albumTitle}>Cinematic Universe</h3>
            <a href="https://distrokid.com" target="_blank" style={styles.link}>Listen</a>
          </div>

          <div style={styles.albumCard}>
            <img src="https://i.imgur.com/m7W7xQK.png" style={styles.albumImg} alt="Album 3" />
            <h3 style={styles.albumTitle}>Sacred Vibes Vol.3</h3>
            <a href="https://distrokid.com" target="_blank" style={styles.link}>Listen</a>
          </div>
        </div>
      </main>
      <footer style={styles.footer}>© 2025 The Light Architect Records</footer>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000814, #001D3D, #003566)',
    overflow: 'hidden',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 20% 20%, rgba(255,215,0,0.15), transparent 70%)',
    animation: 'glow 10s infinite alternate',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    paddingTop: '120px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#FFD700',
    marginBottom: '50px',
  },
  albumSection: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '0 20px',
  },
  albumCard: {
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '12px',
    width: '250px',
    padding: '20px',
    transition: 'transform 0.3s ease',
  },
  albumImg: {
    width: '100%',
    borderRadius: '10px',
  },
  albumTitle: {
    marginTop: '15px',
    color: '#FFD700',
    fontSize: '1.1rem',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#fff',
    background: '#FFD700',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: '15px',
    width: '100%',
    color: '#aaa',
    fontSize: '0.8rem',
  },
};
