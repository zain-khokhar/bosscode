'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  variant = 'primary', // 'primary' | 'ghost' | 'outline' | 'navy' | 'white'
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.32;
    const y = (clientY - (top + height / 2)) * 0.32;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Variant styling (Adhering strictly to White + Deep Navy Blue)
  const variantStyles = {
    primary:
      'bg-[#000921] text-white border border-[#000921] hover:bg-[#001340] shadow-[0_10px_25px_-5px_rgba(0,9,33,0.3)]',
    navy:
      'bg-[#000921] text-white border border-[#000921]/20 hover:bg-[#001340] shadow-[0_8px_20px_-4px_rgba(0,9,33,0.35)]',
    white:
      'bg-white text-[#000921] border border-white hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.2)]',
    ghost:
      'bg-transparent text-[#000921] border border-[#000921]/15 hover:border-[#000921] hover:bg-[#000921]/5',
    ghostWhite:
      'bg-white/10 text-white border border-white/20 hover:border-white hover:bg-white/15 backdrop-blur-md',
    outline:
      'bg-transparent text-[#000921] border-b border-[#000921]/20 hover:border-[#000921] rounded-none px-0 py-1',
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-medium text-sm tracking-tight transition-all duration-300 shine-sweep cursor-pointer overflow-hidden group select-none';

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.15 }}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold">
        {children}
        {Icon && (
          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {/* Dynamic ambient hover glow */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block" data-cursor="magnetic">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block" data-cursor="magnetic">
      {content}
    </button>
  );
}
