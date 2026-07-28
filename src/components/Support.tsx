import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SUPPORT_PILLARS } from '../data/companyData';
import { Activity, Wrench, ShieldCheck, MessageSquare, Server, TrendingUp, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

interface SupportProps {
  onOpenDiagnostic: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Support: React.FC<SupportProps> = ({ onOpenDiagnostic }) => {
  const getPillarIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#4DB8FF]' };
    switch (iconName) {
      case 'Activity': return <Activity {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Server': return <Server {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="suporte" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#1E6DFF]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Pillars Grid */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SUPORTE TÉCNICO ESPECIALIZADO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight mb-4">
                Sua operação sempre em <span className="text-[#4DB8FF] text-glow">boas mãos.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#C8D2E5] mb-10 max-w-2xl">
                Monitoramos, protegemos e evoluímos suas soluções para garantir estabilidade, segurança e alta performance 24 horas por dia.
              </p>
            </motion.div>

            {/* 6 Pillars Staggered Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              {SUPPORT_PILLARS.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  variants={pillarVariants}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-[#4DB8FF]/15 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#0B1220] border border-[#4DB8FF]/30 shrink-0">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F7F9FC] mb-1">{pillar.title}</h3>
                    <p className="text-xs text-[#C8D2E5] leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={onOpenDiagnostic}
              className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#0052E0] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-xl shadow-xl shadow-[#1E6DFF]/25 hover:shadow-[#4DB8FF]/40 transition-all cursor-pointer"
            >
              Conhecer Planos de Suporte
            </motion.button>
          </div>

          {/* Right Column Visual Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-sm glass-card p-8 rounded-3xl border border-[#4DB8FF]/30 text-center shadow-[0_0_50px_rgba(30,109,255,0.2)]">
              
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E6DFF] to-[#4DB8FF] p-0.5 mx-auto mb-6 shadow-xl animate-pulse-slow">
                <div className="w-full h-full bg-[#05070D] rounded-[14px] flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-[#4DB8FF]" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Garantia SLAs 99.9%</h3>
              <p className="text-xs text-[#C8D2E5] mb-6">Infraestrutura redundante com proteção contra ataques DDoS e backups automatizados.</p>

              <div className="space-y-3 text-left border-t border-[#4DB8FF]/15 pt-6 text-xs text-[#C8D2E5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Servidores Linux de alta performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Criptografia SSL de 256 bits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Monitoramento ativo de bugs</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
