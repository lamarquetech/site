import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    scrolled
      ? "h-16 bg-[#05070D]/85 backdrop-blur-2xl border-b border-white/10"
      : "h-20 bg-[#05070D]/55 backdrop-blur-xl"
    }`}
    >

        <div className="max-w-7xl h-full mx-auto px-8">
        <div className="flex h-full items-center justify-between">
          <a href="#hero" aria-label="LamarqueTech Inicio">
            <Logo size="md" />
          </a>

            <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
              className="relative py-2 text-[15px] font-medium text-[#C8D2E5] hover:text-white transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4DB8FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
          <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-[#25D366]/25 bg-[#0B1220]/80 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:bg-[#25D366] hover:text-black shadow-lg shadow-[#25D366]/10"
          >
          <PhoneCall className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          <span>WhatsApp</span>
          </a>

  <button
    onClick={onOpenDiagnostic}
    className="rounded-full bg-gradient-to-r from-[#1E6DFF] via-[#3489ff] to-[#4DB8FF] px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-[#1E6DFF]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#4DB8FF]/50"
  >
    Solicitar Orçamento
  </button>

</div>


          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#C8D2E5]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070D]/95 backdrop-blur-xl border-b border-[#4DB8FF]/20 px-4 py-6 mt-2 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#C8D2E5] hover:text-[#F7F9FC] hover:bg-[#1E6DFF]/20 rounded-lg"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#4DB8FF]/10">
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
