import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CTASectionProps {
  onOpenDiagnostic: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="contato" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 sm:p-16 rounded-3xl border border-[#4DB8FF]/40 text-center relative overflow-hidden shadow-[0_0_80px_rgba(30,109,255,0.3)] bg-gradient-to-b from-[#0B1220] to-[#05070D]"
        >
          {/* Glowing Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#4DB8FF]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05070D] border border-[#4DB8FF]/40 text-[#4DB8FF] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xl">
              <Sparkles className="w-4 h-4 text-[#4DB8FF]" />
              <span>TRANSFORMAÇÃO DIGITAL IMEDIATA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight mb-6 leading-tight">
              Pronto para transformar sua <span className="text-[#4DB8FF] text-glow">empresa?</span>
            </h2>

            <p className="text-base sm:text-xl text-[#C8D2E5] mb-10 font-normal leading-relaxed">
              Agende uma consulta gratuita e descubra como a IA e soluções sob medida podem levar seu negócio ao próximo nível.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#0052E0] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-xl shadow-xl shadow-[#1E6DFF]/40 hover:shadow-[#4DB8FF]/60 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#F7F9FC] bg-[#05070D] hover:bg-[#1E6DFF]/20 border border-[#4DB8FF]/30 hover:border-[#4DB8FF] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
