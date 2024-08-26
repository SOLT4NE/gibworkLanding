import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, AnimationControls } from 'framer-motion';

const partners: string[] = [
  "Realms", "Solana", "76DEVS", "solana-labs", "anchor", "solanaciv",
  "PubKeyApp", "tokengator"
];

export const MovingPartners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const controls: AnimationControls = useAnimationControls();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: [-containerWidth / 2, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [containerWidth, controls]);

  return (
    <motion.div 
      className="bottom-0 left-0 right-0 bg-purple-800/50 py-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.h2 
          className="text-xl font-semibold text-purple-50 mb-4 pr-4 md:mb-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        > 
          Our latest Customers : 
        </motion.h2> 
        <motion.div 
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div 
            ref={containerRef}
            className="flex space-x-8 whitespace-nowrap"
            animate={controls}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.span 
                key={index} 
                className="text-lg font-semibold text-purple-200"
                whileHover={{ scale: 1.1, color: "#ffffff" }}
              >
                {partner}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MovingPartners;