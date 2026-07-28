import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/companyData';

interface TestimonialsProps {
  onOpenDiagnostic: () => void;
}

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenDiagnostic }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const activeIndex = Math.abs(page % TESTIMONIALS_DATA.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [page, isAutoplay]);

  const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-24 bg-[#0B1220]/70 border-y border-[#4DB8FF]/10 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1E6DFF]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05070D] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#4DB8FF]" />
            <span>DEPOIMENTOS DE CLIENTES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight mb-4 leading-tight">
            O que nossos parceiros dizem sobre a <span className="text-[#4DB8FF] text-glow">LamarqueTech</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C8D2E5]">
            Histórias reais de empresas que escalaram resultados com nossas soluções inteligentes em Inteligência Artificial e desenvolvimento.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-card p-8 sm:p-12 rounded-3xl border border-[#4DB8FF]/30 bg-[#05070D]/90 shadow-[0_0_50px_rgba(30,109,255,0.2)] relative overflow-hidden"
            >
              {/* Background Accent Quote Icon */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#1E6DFF]/10 pointer-events-none rotate-12" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top Badge & Rating */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6DFF]/15 border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4DB8FF]" />
                    <span>{currentTestimonial.highlight}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl text-[#F7F9FC] font-medium leading-relaxed italic mb-8">
                  "{currentTestimonial.quote}"
                </p>

                {/* Client Details */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#4DB8FF]/15">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E6DFF] to-[#0052E0] border border-[#4DB8FF]/40 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#1E6DFF]/30">
                    <Building2 className="w-6 h-6 text-[#4DB8FF]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F7F9FC] flex items-center gap-2">
                      {currentTestimonial.companyName}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C8D2E5]">
                      {currentTestimonial.clientName} • <span className="text-[#4DB8FF]">{currentTestimonial.role}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full glass-card border border-[#4DB8FF]/30 text-[#F7F9FC] hover:text-[#4DB8FF] hover:border-[#4DB8FF] hover:scale-110 transition-all cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const newDir = idx > activeIndex ? 1 : -1;
                  setPage([idx, newDir]);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] shadow-[0_0_12px_rgba(77,184,255,0.8)]'
                    : 'w-2.5 bg-[#4DB8FF]/20 hover:bg-[#4DB8FF]/50'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full glass-card border border-[#4DB8FF]/30 text-[#F7F9FC] hover:text-[#4DB8FF] hover:border-[#4DB8FF] hover:scale-110 transition-all cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Diagnostic Callout */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DB8FF] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Quer ter resultados semelhantes na sua empresa? Solenize seu diagnóstico gratuito</span>
            <Sparkles className="w-4 h-4 text-[#4DB8FF] group-hover:rotate-12 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
