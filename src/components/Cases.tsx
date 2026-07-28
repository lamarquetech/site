import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { CASE_STUDIES } from '../data/companyData';
import { Sparkles, ArrowRight, TrendingUp, TrendingDown, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface CasesProps {
  onOpenDiagnostic: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Cases: React.FC<CasesProps> = ({ onOpenDiagnostic }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section id="cases" className="py-24 bg-[#0B1220]/60 relative overflow-hidden border-y border-[#4DB8FF]/10">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#1E6DFF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05070D] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CASES DE SUCESSO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight">
              Resultados que falam por <span className="text-[#4DB8FF] text-glow">nós.</span>
            </h2>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevCase}
              className="p-3 rounded-xl bg-[#05070D] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 hover:border-[#4DB8FF] transition-all cursor-pointer"
              aria-label="Case Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCase}
              className="p-3 rounded-xl bg-[#05070D] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 hover:border-[#4DB8FF] transition-all cursor-pointer"
              aria-label="Próximo Case"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Featured Cases Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass-card p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                idx === activeIndex
                  ? 'border-[#4DB8FF] shadow-[0_0_40px_rgba(30,109,255,0.25)] bg-[#0B1220]'
                  : 'border-[#4DB8FF]/15 opacity-90 hover:opacity-100'
              }`}
            >
              <div>
                {/* Category & Title */}
                <div className="inline-block px-3 py-1 rounded-md bg-[#1E6DFF]/15 text-[#4DB8FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
                  {study.category}
                </div>

                <h3 className="text-2xl font-bold text-[#F7F9FC] mb-2">{study.title}</h3>
                <p className="text-xs text-[#C8D2E5] mb-6">{study.subtitle}</p>

                {/* ANTES vs DEPOIS Comparison Box */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#05070D] border border-red-500/20 text-xs">
                    <span className="font-bold text-red-400 block mb-1 font-mono uppercase tracking-wider">ANTES:</span>
                    <p className="text-[#C8D2E5]/80">{study.before}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#05070D] border border-[#25D366]/30 text-xs">
                    <span className="font-bold text-[#25D366] block mb-1 font-mono uppercase tracking-wider">DEPOIS (LAMARQUETECH):</span>
                    <p className="text-[#F7F9FC]">{study.after}</p>
                  </div>
                </div>

                {/* KPIs Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#4DB8FF]/15 mb-6">
                  {study.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="text-center p-2 rounded-xl bg-[#05070D]/60 border border-[#4DB8FF]/10">
                      <div className="text-lg sm:text-xl font-extrabold text-[#4DB8FF] font-mono">
                        {kpi.value}
                      </div>
                      <div className="text-[10px] text-[#C8D2E5] font-medium leading-tight">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-3 px-4 rounded-xl bg-[#1E6DFF]/10 hover:bg-[#1E6DFF] border border-[#4DB8FF]/30 text-[#4DB8FF] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Quero Resultados Semelhantes</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
