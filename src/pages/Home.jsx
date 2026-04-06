import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="page-container">
      <div className="container">
        <section className="hero">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-title title-glow"
          >
            THE NEW ERA<br/><span className="text-gold">STARTS IN VICE</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            Explore the technical bleeding edge, the cultural impact, and the competitors trying to stay relevant in a post-GTA 6 world.
          </motion.p>
        </section>

        <div className="ticker-wrap">
          <div className="ticker">
            <span className="ticker-item">LEONIDA STATE</span>
            <span className="ticker-item">//</span>
            <span className="ticker-item">ROCKSTAR ADVANCED GAME ENGINE</span>
            <span className="ticker-item">//</span>
            <span className="ticker-item">CULTURAL RESET</span>
            <span className="ticker-item">//</span>
            <span className="ticker-item">GENERATION 9 DEFINING</span>
            <span className="ticker-item">//</span>
            <span className="ticker-item">LEONIDA STATE</span>
            <span className="ticker-item">//</span>
            <span className="ticker-item">ROCKSTAR ADVANCED GAME ENGINE</span>
            <span className="ticker-item">//</span>
          </div>
        </div>

        <section className="article-header">
          <h2 className="title-glow text-red" style={{ fontSize: '3rem', marginBottom: '2rem' }}>FEATURED INTEL</h2>
          <div className="grid-auto">
            <a href="/gta6" className="card">
              <h3>THE DIVE</h3>
              <p>Everything confirmed about the technical leaps in GTA 6. Density, physics, and AI.</p>
            </a>
            <a href="/competitors" className="card">
              <h3>THE COMPETITION</h3>
              <p>Why Ubisoft and EA are structurally incapable of matching Rockstar's output.</p>
            </a>
            <a href="/post-era" className="card">
              <h3>POST-ERA GAMING</h3>
              <p>What happens to the industry when one game eats the entire market?</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
