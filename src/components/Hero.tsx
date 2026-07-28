import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, UserCheck, Cpu, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { HERO_HOLOGRAM_URL } from '../assets/images';
import { ParticlesBackground } from './ParticlesBackground';

interface HeroProps {
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#05070D]">
      {/* Interactive Cinematic Cyber Particles Canvas */}
      <ParticlesBackground />

      {/* Background Glow Orbs & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E6DFF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#4DB8FF]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-[#1E6DFF]/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#4DB8FF] animate-spin-slow" />
              <span>INTELIGÊNCIA ARTIFICIAL QUE IMPULSIONA NEGÓCIOS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7F9FC] leading-[1.15] tracking-tight mb-6">
              Transformamos tecnologia em{' '}
              <span className="bg-gradient-to-r from-[#1E6DFF] via-[#4DB8FF] to-[#F7F9FC] bg-clip-text text-transparent text-glow animate-aurora">
                vantagem competitiva.
              </span>
            </motion.h1>

            {/* Paragraph Text */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#C8D2E5] font-normal leading-relaxed mb-8 max-w-2xl">
              Soluções inteligentes em IA, automação e desenvolvimento para empresas que buscam escalar com eficiência, inovação e resultados reais.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#0052E0] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-xl shadow-xl shadow-[#1E6DFF]/30 hover:shadow-[#4DB8FF]/50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group hover:scale-[1.02]"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#F7F9FC] bg-[#0B1220] hover:bg-[#1E6DFF]/10 border border-[#4DB8FF]/30 hover:border-[#4DB8FF] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* 4 Feature Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#4DB8FF]/15 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8D2E5]">
                <UserCheck className="w-4 h-4 text-[#4DB8FF] shrink-0" />
                <span>Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8D2E5]">
                <Cpu className="w-4 h-4 text-[#4DB8FF] shrink-0" />
                <span>Soluções Personalizadas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8D2E5]">
                <Clock className="w-4 h-4 text-[#4DB8FF] shrink-0" />
                <span>Suporte Especializado 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8D2E5]">
                <ShieldCheck className="w-4 h-4 text-[#4DB8FF] shrink-0" />
                <span>Segurança e Performance</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Holographic AI Graphic Element with 3D Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Hologram Circle Glow Container */}
            <motion.div 
              whileHover={{ scale: 1.03, rotateY: 4, rotateX: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden glass-card p-3 border border-[#4DB8FF]/30 shadow-[0_0_60px_rgba(30,109,255,0.25)] group cursor-pointer"
            >
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-1000 animate-pulse-slow"></div>

              {/* Main Hologram Asset Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#05070D]">
                <img
                  src={HERO_HOLOGRAM_URL}
                  alt="LamarqueTech AI Hologram Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl filter brightness-110 contrast-105 animate-float"
                />

                {/* Floating Interactive Glass Nodes */}
                <div className="absolute top-6 left-6 px-3.5 py-2 rounded-xl glass-card border border-[#4DB8FF]/40 text-xs font-mono text-[#F7F9FC] flex items-center gap-2 shadow-xl animate-bounce-slow">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping"></span>
                  <span>AI CORE ACTIVE • 99.9% ACCURACY</span>
                </div>

                <div className="absolute bottom-6 right-6 px-4 py-2.5 rounded-xl glass-card border border-[#1E6DFF]/50 text-xs font-mono text-[#4DB8FF] flex items-center gap-2 shadow-xl">
                  <Sparkles className="w-4 h-4 text-[#4DB8FF]" />
                  <span>LT-NEURAL V4.2</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
