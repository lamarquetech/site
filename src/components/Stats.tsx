import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Rocket, Users, Headphones, TrendingUp } from 'lucide-react';
import { STATS_DATA } from '../data/companyData';

export const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const icons = [
    <Rocket className="w-8 h-8 text-[#4DB8FF]" />,
    <Users className="w-8 h-8 text-[#4DB8FF]" />,
    <Headphones className="w-8 h-8 text-[#4DB8FF]" />,
    <TrendingUp className="w-8 h-8 text-[#4DB8FF]" />,
  ];

  return (
    <section ref={ref} className="py-12 bg-[#0B1220]/60 border-y border-[#4DB8FF]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 border border-[#4DB8FF]/15 relative overflow-hidden group"
            >
              <div className="p-3.5 rounded-xl bg-[#1E6DFF]/10 border border-[#4DB8FF]/20 group-hover:border-[#4DB8FF] group-hover:scale-110 transition-all duration-300">
                {icons[index]}
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F7F9FC] font-mono tracking-tight flex items-center">
                  {stat.prefix && <span className="text-[#4DB8FF]">{stat.prefix}</span>}
                  <Counter target={stat.value} startAnimation={isInView} />
                  {stat.suffix && <span className="text-[#4DB8FF]">{stat.suffix}</span>}
                </div>
                <div className="text-sm font-semibold text-[#F7F9FC] mt-0.5">{stat.label}</div>
                <div className="text-xs text-[#C8D2E5]/70">{stat.sublabel}</div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E6DFF]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4DB8FF]/15 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter helper for smooth number animation
const Counter: React.FC<{ target: number | string; startAnimation: boolean }> = ({ target, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    if (typeof target === 'string') return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end)) || 20;

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, startAnimation]);

  if (typeof target === 'string') {
    return <span>{target}</span>;
  }

  return <span>{count}</span>;
};
