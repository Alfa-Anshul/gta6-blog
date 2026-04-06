import { motion } from 'framer-motion';

export default function CompetitorAnalysis() {
  return (
    <div className="page-container container">
      <header className="article-header">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="article-title title-glow"
        >
          WHY THEY <span className="text-red">CANNOT</span> COMPETE
        </motion.h1>
      </header>

      <div className="content-block">
        <h2>UBISOFT'S COPY-PASTE SYNDROME</h2>
        <p>
          Ubisoft's entire engine architecture and studio pipeline is built around churning out massive, shallow maps. 
          The Anvil and Snowdrop engines are hyper-optimized for rapid asset placement, but fail spectacularly at 
          micro-interactions. You can build a 100km map in Anvil, but you can't easily program a completely unique 
          AI routine for a single hot dog vendor.
        </p>

        <div className="stat-box" style={{ borderColor: 'var(--accent-red)' }}>
          <div className="stat-value" style={{ color: 'var(--accent-red)' }}>STRUCTURAL</div>
          <div className="stat-label">The failure is at the engine architecture level</div>
        </div>

        <h2>EA AND THE FROSTBITE CURSE</h2>
        <p>
          EA mandated Frostbite for everything, an engine built specifically for first-person shooters. Even as they 
          move back to Unreal Engine 5 for some titles, their culture is risk-averse. A GTA competitor requires a 
          decade of R&D, half a billion dollars, and a tolerance for endless delays. EA's shareholder structure prevents 
          them from taking a 10-year gamble.
        </p>

        <h2>THE WATCH DOGS EXPERIMENT</h2>
        <p>
          Watch Dogs and Saints Row tried to compete and ultimately folded. Why? Because the "GTA Clone" requires 
          a mastery of driving physics, shooting mechanics, RPG elements, and dense AI systems simultaneously. Most 
          studios specialize in one. Rockstar specializes in all four.
        </p>
      </div>
    </div>
  );
}
