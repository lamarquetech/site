import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Globe, Target, PenTool, Code, Cpu, Brain, Headphones, ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenDiagnostic: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenDiagnostic }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7 text-[#4DB8FF]' };
    switch (iconName) {
      case 'Bot': return <Bot {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Target': return <Target {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1E6DFF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NOSSAS SOLUÇÕES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight">
              Soluções completas para o <span className="text-[#4DB8FF] text-glow">seu negócio</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#C8D2E5] max-w-xl">
            Da estratégia à execução, oferecemos soluções tecnológicas personalizadas para impulsionar sua empresa para o futuro.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover p-7 rounded-2xl flex flex-col justify-between border border-[#4DB8FF]/15 group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#0B1220] border border-[#4DB8FF]/30 flex items-center justify-center mb-6 group-hover:bg-[#1E6DFF] group-hover:border-[#4DB8FF] transition-all duration-300 shadow-md">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F7F9FC] mb-3 group-hover:text-[#4DB8FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#C8D2E5] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-[#4DB8FF] group-hover:translate-x-1.5 transition-transform">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1E6DFF]/10 rounded-full blur-xl group-hover:bg-[#4DB8FF]/20 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0B1220] border border-[#4DB8FF]/40 rounded-3xl p-8 shadow-2xl glass-card">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#05070D] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#1E6DFF]/20 border border-[#4DB8FF]/40">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-xs text-[#4DB8FF] font-mono uppercase tracking-wider">LamarqueTech Solution</p>
              </div>
            </div>

            <p className="text-base text-[#C8D2E5] mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-8 bg-[#05070D]/60 p-5 rounded-xl border border-[#4DB8FF]/10">
              <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">O que está incluído nesta solução:</h4>
              {selectedService.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#C8D2E5]">
                  <CheckCircle2 className="w-5 h-5 text-[#4DB8FF] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenDiagnostic();
                }}
                className="flex-1 py-3.5 px-6 font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] rounded-xl text-center shadow-lg hover:shadow-[#1E6DFF]/40 transition-all cursor-pointer"
              >
                Solicitar Orçamento para {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
