import React, { useEffect, useRef, useState } from 'react';

interface AsciiFluidProps {
  className?: string;
}

const AsciiFluid: React.FC<AsciiFluidProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Font settings
    const fontSize = 14;
    const charWidth = fontSize * 0.6;
    const columns = Math.ceil(dimensions.width / charWidth);
    const rows = Math.ceil(dimensions.height / fontSize);

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Characters sorted by density
    const chars = " .:-=+*#%@";
    
    // Noise/Flow field state
    let time = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'top';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          // Create a flowing wave pattern using sine waves
          const normalizedX = x / columns;
          const normalizedY = y / rows;
          
          // Complex wave function
          const v1 = Math.sin(normalizedX * 10 + time);
          const v2 = Math.sin(normalizedY * 10 + time * 0.5);
          const v3 = Math.sin((normalizedX + normalizedY) * 5 + time * 1.5);
          
          const value = (v1 + v2 + v3) / 3; // -1 to 1
          
          // Map to character index
          const index = Math.floor(((value + 1) / 2) * (chars.length - 1));
          const char = chars[Math.max(0, Math.min(chars.length - 1, index))];
          
          // Only draw if not empty to save performance
          if (char !== ' ') {
             // Add some color variation
             const alpha = (value + 1) / 2;
             // Use a mix of white and green for that "matrix" feel
             if (Math.random() > 0.95) {
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
             } else {
                ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
             }
             ctx.fillText(char, x * charWidth, y * fontSize);
          }
        }
      }

      time += 0.02;
      requestAnimationFrame(render);
    };

    const animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [dimensions]);

  return (
    <div className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default AsciiFluid;
