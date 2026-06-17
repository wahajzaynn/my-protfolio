import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function AIEngineBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle, smoothed coordinates for background spotlight
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-30 bg-[#FAF7F2] overflow-hidden pointer-events-none select-none">
      
      {/* Dynamic Warm Ambient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF7F2] via-[#F4EFE6] to-[#EAE2D2] opacity-100" />

      {/* Interactive mouse magnetic glow spot */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-radial-gradient from-brand-accent/8 to-transparent blur-3xl transition-all duration-1000 ease-out hidden md:block"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Modern High-Performance Technical Microdot Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--color-brand-border-soft) 1.2px, transparent 1.2px),
            linear-gradient(to right, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
          backgroundPosition: '0 0, 12px 12px, 12px 12px'
        }}
      />

      {/* Left and Right Side subtle abstract lines mimicking diagram connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle geometric lines */}
        <line x1="10%" y1="15%" x2="40%" y2="15%" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="40%" y1="15%" x2="50%" y2="25%" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="5%" y1="60%" x2="25%" y2="60%" stroke="var(--color-brand-border)" strokeWidth="1" />
        <line x1="25%" y1="60%" x2="35%" y2="70%" stroke="var(--color-brand-border)" strokeWidth="1" />
        
        <circle cx="10%" cy="15%" r="3" fill="var(--color-brand-accent)" />
        <circle cx="40%" cy="15%" r="3" fill="var(--color-brand-text-muted)" />
        <circle cx="5%" cy="60%" r="3" fill="var(--color-brand-accent)" />

        <line x1="90%" y1="40%" x2="70%" y2="40%" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="70%" y1="40%" x2="60%" y2="60%" stroke="var(--color-brand-border)" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="90%" cy="40%" r="3.5" fill="var(--color-brand-accent)" />
        <circle cx="70%" cy="40%" r="2" fill="var(--color-brand-border)" />
      </svg>

      {/* Floating Network Nodes (Simulating real-time autonomous routing) */}
      <div className="absolute inset-0">
        
        {/* Hub Glow Node 1 - Top Left */}
        <motion.div
          animate={{
            y: [0, -30, 20, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[18%] left-[8%] w-52 h-52 rounded-full bg-brand-accent/4 border border-brand-accent/5 blur-2xl"
        />

        {/* Hub Glow Node 2 - Bottom Right */}
        <motion.div
          animate={{
            y: [0, 40, -20, 0],
            x: [0, -30, 15, 0],
            scale: [1, 0.92, 1.08, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[15%] right-[5%] w-72 h-72 rounded-full bg-amber-500/3 border border-amber-500/5 blur-3xl"
        />

        {/* Orange square type moving objects in the background responsive layers */}
        <motion.div
          animate={{
            y: [0, -60, 40, 0],
            x: [0, 30, -30, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[25%] left-[20%] w-6 h-6 bg-brand-accent/15 border border-brand-accent/35 rounded-sm"
        />

        <motion.div
          animate={{
            y: [0, 80, -40, 0],
            x: [0, -40, 40, 0],
            rotate: [360, 270, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[30%] right-[25%] w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-md"
        />

        <motion.div
          animate={{
            y: [0, -40, 60, 0],
            x: [0, -25, 25, 0],
            rotate: [45, 135, 225, 405],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[65%] left-[15%] w-4 h-4 bg-brand-accent/10 border border-brand-accent/25 rounded-sm"
        />

        <motion.div
          animate={{
            y: [0, 50, -50, 0],
            x: [0, 60, -60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[12%] right-[30%] w-8 h-8 bg-orange-600/5 border border-orange-600/20 rounded-md"
        />

        {/* Floating Code Network Particles */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[28%] right-[15%] text-[10px] font-mono text-brand-text-muted/20 select-none hidden md:block"
        >
          <pre>{`{
  status: "unattended",
  payload_SLA: "<2m"
}`}</pre>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[35%] left-[12%] text-[9px] font-mono text-brand-accent/20 select-none hidden md:block"
        >
          <pre>{`GET /api/v1/trigger?lead_score=94`}</pre>
        </motion.div>
      </div>

      {/* Decorative vertical and horizontal structural lines mirroring premium editorial design */}
      <div className="absolute top-0 bottom-0 left-[5%] md:left-[10%] w-[1px] bg-gradient-to-b from-brand-border/0 via-brand-border/20 to-brand-border/0" />
      <div className="absolute top-0 bottom-0 right-[5%] md:right-[10%] w-[1px] bg-gradient-to-b from-brand-border/0 via-brand-border/20 to-brand-border/0" />

      {/* Gradient Vignette overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-[#FAF7F2]/40" />
    </div>
  );
}
