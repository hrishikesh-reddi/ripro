import { motion } from 'motion/react';

interface RingPulseProps {
  className?: string;
}

export default function RingPulse({ className = "" }: RingPulseProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-terminal-green"
            style={{ width: 60, height: 60 }}
            animate={{
              scale: [1, 2],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 w-16 h-16 rounded-full bg-terminal-green/20 border border-terminal-green flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-terminal-green" />
      </div>
    </div>
  );
}