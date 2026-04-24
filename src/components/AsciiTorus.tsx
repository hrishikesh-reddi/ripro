import React, { useEffect, useRef } from 'react';

interface AsciiTorusProps {
  className?: string;
}

const AsciiTorus: React.FC<AsciiTorusProps> = ({ className }) => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const A = 1;
    const B = 1;
    let a = 0;
    let b = 0;

    const render = () => {
      const bArray: string[] = [];
      const zArray: number[] = [];
      
      // Configuration
      const width = 80; // Characters width
      const height = 40; // Characters height
      const R1 = 1;
      const R2 = 2;
      const K2 = 5;
      const K1 = width * K2 * 3 / (8 * (R1 + R2));

      // Initialize buffers
      for (let k = 0; k < width * height; k++) {
        bArray[k] = " ";
        zArray[k] = 0;
      }

      // Torus Math
      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(a);
          const f = Math.sin(j);
          const g = Math.cos(a);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(b);
          const n = Math.sin(b);
          const t = c * h * g - f * e;
          
          const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
          const o = x + width * y;
          const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

          if (height > y && y > 0 && x > 0 && width > x && D > zArray[o]) {
            zArray[o] = D;
            // Luminance characters
            const chars = ".,-~:;=!*#$@";
            bArray[o] = chars[Math.max(0, N)] || ".";
          }
        }
      }

      if (preRef.current) {
        // Construct the string
        let output = "";
        for (let k = 0; k < width * height; k++) {
          output += k % width === width - 1 ? "\n" : bArray[k];
        }
        preRef.current.innerText = output;
      }

      a += 0.04;
      b += 0.02;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`flex items-center justify-center overflow-hidden ${className}`}>
      <pre 
        ref={preRef} 
        className="font-mono text-[10px] leading-[10px] md:text-xs md:leading-3 text-terminal-green whitespace-pre select-none"
      />
    </div>
  );
};

export default AsciiTorus;
