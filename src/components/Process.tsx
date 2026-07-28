import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/companyData';
import { Sparkles, ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 bg-[#0B1220]/40 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4DB8FF]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOSSO PROCESSO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight mb-4">
            Metodologia que entrega <span className="text-[#4DB8FF] text-glow">resultados.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C8D2E5]">
            Nossa jornada de desenvolvimento segue processos ágeis e estruturados, garantindo entregas no prazo e máxima eficiência.
          </p>
        </div>

        {/* 6 Step Horizontal/Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#1E6DFF]/20 via-[#4DB8FF] to-[#1E6DFF]/20 z-0"></div>

          {PROCESS_STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-[#4DB8FF]/15 flex flex-col justify-between relative z-10 group"
            >
              <div>
                {/* Step Circle Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E6DFF] to-[#0B1220] border border-[#4DB8FF] text-[#F7F9FC] font-mono font-extrabold text-base flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-[#4DB8FF]/50 transition-all duration-300">
                  {stepItem.step}
                </div>

                <h3 className="text-lg font-bold text-[#F7F9FC] mb-2 group-hover:text-[#4DB8FF] transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-[#C8D2E5] leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              <div className="text-[11px] text-[#C8D2E5]/70 pt-3 border-t border-[#4DB8FF]/10 flex items-center gap-1.5 font-sans">
                <CheckCircle className="w-3.5 h-3.5 text-[#4DB8FF] shrink-0" />
                <span>{stepItem.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
