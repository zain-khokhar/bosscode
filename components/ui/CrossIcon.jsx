'use client';

export default function CrossIcon({ className = "w-4 h-4 text-[#000921]/20", size = 16 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
