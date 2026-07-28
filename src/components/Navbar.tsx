import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Cases', href: '#cases' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Suporte', href: '#suporte' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 border-b border-[#4DB8FF]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl' : 'bg-gradient-to-b from-[#05070D]/80 via-[#05070D]/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" aria-label="LamarqueTech Inicio">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B1220]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#4DB8FF]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[#C8D2E5] hover:text-[#F7F9FC] hover:bg-[#1E6DFF]/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#C8D2E5] hover:text-[#4DB8FF] bg-[#0B1220] hover:bg-[#1E6DFF]/10 border border-[#4DB8FF]/20 rounded-full transition-all duration-200"
              title="Falar no WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDiagnostic}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#F7F9FC] bg-gradient-to-r from-[#1E6DFF] to-[#0052E0] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-full shadow-lg shadow-[#1E6DFF]/25 hover:shadow-[#4DB8FF]/40 transition-all duration-300 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#4DB8FF] animate-pulse" />
              <span>Solicitar Diagnóstico</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDiagnostic}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1E6DFF] rounded-full"
            >
              Diagnóstico
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C8D2E5] hover:text-white bg-[#0B1220] border border-[#4DB8FF]/20 rounded-lg"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070D]/95 backdrop-blur-xl border-b border-[#4DB8FF]/20 px-4 py-6 mt-2 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#C8D2E5] hover:text-[#F7F9FC] hover:bg-[#1E6DFF]/20 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#4DB8FF]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full py-3 px-5 text-center font-semibold text-white bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#1E6DFF]/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Diagnóstico Gratuito</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 text-center font-semibold text-[#4DB8FF] bg-[#0B1220] border border-[#4DB8FF]/30 rounded-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
