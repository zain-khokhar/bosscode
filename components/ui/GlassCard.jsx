'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  tilt = true,
  glow = true,
  variant = 'light', // 'light' | 'navy'
  maxTilt = 8,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !tilt) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotation({ x: rotateX, y: rotateY });
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const baseStyles = variant === 'navy' ? 'glass-card-navy' : 'glass-card-light';

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 20,
          mass: 0.2,
        }}
        className={`${baseStyles} ${className} relative overflow-hidden transition-all duration-300`}
        style={{
          transformStyle: 'preserve-3d',
        }}
        {...props}
      >
        {/* Dynamic cursor spotlight glow sheen */}
        {glow && isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background:
                variant === 'navy'
                  ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 119, 255, 0.18), transparent 70%)`
                  : `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 9, 33, 0.06), transparent 70%)`,
            }}
          />
        )}

        {/* Content with Z-index separation for 3D depth */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
