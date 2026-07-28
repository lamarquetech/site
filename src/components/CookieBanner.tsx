import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lamarquetech_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lamarquetech_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('lamarquetech_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-50 glass-card p-5 rounded-2xl border border-[#4DB8FF]/30 bg-[#0B1220]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(30,109,255,0.25)] text-[#F7F9FC]"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#1E6DFF]/15 border border-[#4DB8FF]/30 text-[#4DB8FF]">
                <Cookie className="w-5 h-5 animate-pulse-slow" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F7F9FC] flex items-center gap-1.5">
                  Privacidade & LGPD
                  <ShieldCheck className="w-4 h-4 text-[#4DB8FF]" />
                </h3>
                <span className="text-[11px] text-[#4DB8FF] font-medium">LamarqueTech</span>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="p-1 rounded-lg text-[#C8D2E5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar e recusar cookies"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#C8D2E5] leading-relaxed mb-4">
            Utilizamos cookies essenciais para otimizar o desempenho do site e personalizar sua experiência de acordo com a <strong className="text-white font-semibold">LGPD</strong>.
          </p>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#0052E0] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-xl shadow-lg shadow-[#1E6DFF]/30 hover:shadow-[#4DB8FF]/40 transition-all duration-300 text-center cursor-pointer"
            >
              Aceitar Cookies
            </button>
            <button
              onClick={handleDecline}
              className="py-2.5 px-3 text-xs font-semibold text-[#C8D2E5] hover:text-white bg-[#05070D] hover:bg-[#05070D]/80 border border-[#4DB8FF]/20 hover:border-[#4DB8FF]/40 rounded-xl transition-all cursor-pointer"
            >
              Essenciais apenas
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
