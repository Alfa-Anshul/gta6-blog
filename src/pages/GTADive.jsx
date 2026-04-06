import { motion } from 'framer-motion';

export default function GTADive() {
  return (
    <div className="page-container container">
      <header className="article-header">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="article-title title-glow"
        >
          ANATOMY OF A <span className="text-blue">BEHEMOTH</span>
        </motion.h1>
        <div className="article-meta">
          <span>// ENGINE: RAGE 9</span>
          <span>// SCOPE: LEONIDA</span>
          <span>// TECH FOCUS: GLOBAL ILLUMINATION & DENSITY</span>
        </div>
      </header>

      <div className="content-block">
        <h2>THE RAGE EVOLUTION</h2>
        <p>
          Rockstar Advanced Game Engine (RAGE) has undergone its most significant rewrite since Red Dead Redemption 2. 
          The pivot to full ray-traced global illumination natively built into the pipeline means the sun-soaked beaches 
          of Vice City will react to light with unprecedented realism.
        </p>

        <div className="stat-box">
          <div className="stat-value">100+</div>
          <div className="stat-label">Average custom animations per NPC</div>
        </div>

        <h2>WATER PHYSICS & CAUSTICS</h2>
        <p>
          Water isn't just a surface texture anymore. Following the RDR2 snow physics, RAGE is introducing volume-based 
          liquid simulations. Vehicles crossing water will displace it volumetrically, and waves will have sheer force 
          affecting boats dynamically based on weather fronts.
        </p>

        <h2>THE DENSITY PARADIGM</h2>
        <p>
          We aren't just talking about "more pedestrians." The AI routines have shifted from simple state machines to 
          a needs-based AI economy. Traffic jams form organically. NPCs enter stores, interact with items, and leave. 
          This isn't smoke and mirrors; it's an algorithmic ant farm.
        </p>
      </div>
    </div>
  );
}
