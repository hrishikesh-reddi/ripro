import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "span" }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    scramble();

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Component className={`relative inline-block ${className}`}>
      {displayText}
    </Component>
  );
};

export default GlitchText;
