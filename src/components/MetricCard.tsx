import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface MetricProps {
  target: number;
  label: string;
  suffix?: string;
}

export default function MetricCard({ target, label, suffix = "" }: MetricProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div 
      ref={ref}
      className="metric text-center p-4 md:p-6 rounded-xl bg-brand-panel-2/30 backdrop-blur-sm border border-brand-border-soft transition-all duration-300 hover:bg-brand-panel-2/50 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="metric-value text-3xl md:text-4xl font-display font-bold text-brand-accent mb-2 min-h-[44px] flex items-center justify-center">
        {count}
        {suffix}
      </div>
      <div className="metric-label text-[11px] md:text-xs font-mono text-brand-text-muted uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
}
