import { motion } from 'framer-motion';

export default function PostEra() {
  return (
    <div className="page-container container">
      <header className="article-header">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="article-title title-glow"
        >
          THE <span className="text-blue">POST-GTA 6</span> ERA
        </motion.h1>
      </header>

      <div className="content-block">
        <h2>THE BLACK HOLE EFFECT</h2>
        <p>
          For 6 to 12 months after launch, GTA 6 will act as an event horizon. Other publishers are already internally 
          shifting their release schedules to avoid launching anywhere near it. Multi-player live service games will see 
          their player counts cannibalized as the entire gaming population migrates to Vice City. 
        </p>

        <div className="stat-box" style={{ borderColor: 'var(--accent-blue)' }}>
          <div className="stat-value" style={{ color: 'var(--accent-blue)' }}>$2 BILLION</div>
          <div className="stat-label">Projected opening weekend revenue</div>
        </div>

        <h2>A RISING BAR LIFTS NO BOATS</h2>
        <p>
          Just like Red Dead Redemption 2 made horse riding and snow physics in other games feel obsolete overnight, 
          GTA 6's dense AI economy will make standard open worlds feel dead. The "Ubisoft map" model will face existential 
          criticism from consumers who have now tasted true simulation.
        </p>

        <h2>WHO SURVIVES?</h2>
        <p>
          The games that survive the post-GTA 6 launch window will be anti-thetical to it. Hyper-focused, linear, 
          narrative-driven games (like a Naughty Dog title) or games with completely different design languages (Nintendo) 
          will be fine. Anyone trying to sell a "sprawling open-world crime game" is dead on arrival.
        </p>
      </div>
    </div>
  );
}
