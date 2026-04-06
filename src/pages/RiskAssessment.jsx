import { motion } from 'framer-motion';

export default function RiskAssessment() {
  return (
    <div className="page-container container">
      <header className="article-header">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="article-title title-glow"
        >
          HOW IT COULD <span className="text-gold">DISAPPOINT</span>
        </motion.h1>
      </header>

      <div className="content-block">
        <h2>THE MONETIZATION TRAP</h2>
        <p>
          GTA Online makes Take-Two Interactive roughly $500M to $1B a year. The largest risk to GTA 6 isn't the graphics; 
          it's the monetization model. If the single-player campaign is artificially shortened or stripped to funnel players 
          to "GTA Online 2.0," the hardcore fanbase will revolt.
        </p>

        <div className="stat-box" style={{ borderColor: 'var(--accent-gold)' }}>
          <div className="stat-value" style={{ color: 'var(--accent-gold)' }}>30 FPS</div>
          <div className="stat-label">The likely cap for PS5 / Xbox Series X</div>
        </div>

        <h2>THE PERFORMANCE REALITY</h2>
        <p>
          You cannot have unparalleled density, ray-tracing, and complex AI processing while maintaining 60 FPS on current-gen 
          consoles. Players accustomed to the performance modes of the PS5 era may face a harsh reality check when GTA 6 
          launches with a hard 30 FPS cap. 
        </p>

        <h2>NARRATIVE DISSONANCE</h2>
        <p>
          With Dan Houser gone, the satirical bite of GTA might change. The world has changed drastically since 2013; parodying 
          modern internet culture is difficult when reality often outpaces satire. Will Jason and Lucia's Bonnie-and-Clyde dynamic 
          resonate the same way as Trevor's chaotic nihilism?
        </p>
      </div>
    </div>
  );
}
