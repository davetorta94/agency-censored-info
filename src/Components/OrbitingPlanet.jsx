import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const OrbitingPlanet = () => {
  const planetControls = useAnimation();

  useEffect(() => {
    const orbitAnimation = {
      from: 0,
      to: 360,
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    };

    planetControls.start(orbitAnimation);
  }, [planetControls]);

  return (
    <div>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="10" fill="yellow" />

        <motion.circle
          cx="100"
          cy="30"
          r="5"
          fill="blue"
          initial={{ opacity: 0 }}
          animate={planetControls}
        />
      </svg>
    </div>
  );
};

export default OrbitingPlanet;