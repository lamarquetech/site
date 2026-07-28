import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Instagram, Youtube, PhoneCall, Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-[#4DB8FF]/15 text-[#C8D2E5] pt-16 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <a href="#hero" className="mb-6">
              <Logo size="lg" />
            </a>

            <p className="text-sm text-[#C8D2E5] leading-relaxed mb-8 max-w-sm">
              {COMPANY_INFO.slogan}
            </p>

            {/* Social Networks Icons */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0B1220] border border-[#4DB8FF]/20 text-[#C8D2E5] hover:text-[#4DB8FF] hover:border-[#4DB8FF] transition-all"
                title="Instagram @lamarquetech"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0B1220] border border-[#4DB8FF]/20 text-[#C8D2E5] hover:text-[#4DB8FF] hover:border-[#4DB8FF] transition-all"
                title="YouTube @lamarquetech"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0B1220] border border-[#4DB8FF]/20 text-[#C8D2E5] hover:text-[#25D366] hover:border-[#25D366] transition-all"
                title="WhatsApp (81) 98745-2648"
              >
                <PhoneCall className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-2.5 rounded-full bg-[#0B1220] border border-[#4DB8FF]/20 text-[#C8D2E5] hover:text-[#4DB8FF] hover:border-[#4DB8FF] transition-all"
                title="E-mail de Suporte"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-[#F7F9FC] uppercase tracking-wider mb-5 font-mono">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-[#4DB8FF] transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Serviços</a></li>
              <li><a href="#solucoes" className="hover:text-[#4DB8FF] transition-colors">Soluções</a></li>
              <li><a href="#cases" className="hover:text-[#4DB8FF] transition-colors">Cases</a></li>
              <li><a href="#equipe" className="hover:text-[#4DB8FF] transition-colors">Equipe</a></li>
              <li><a href="#suporte" className="hover:text-[#4DB8FF] transition-colors">Suporte</a></li>
              <li><a href="#contato" className="hover:text-[#4DB8FF] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#F7F9FC] uppercase tracking-wider mb-5 font-mono">
              Soluções
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Agentes de IA</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Websites Corporativos</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Sistemas Web</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Automação Empresarial</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Consultoria em IA</a></li>
              <li><a href="#servicos" className="hover:text-[#4DB8FF] transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-[#F7F9FC] uppercase tracking-wider mb-5 font-mono">
              Contato
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#4DB8FF]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4DB8FF]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#4DB8FF]">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#4DB8FF]" />
                <a href={COMPANY_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#4DB8FF]">{COMPANY_INFO.website}</a>
              </div>
              <div className="pt-2 text-xs text-[#C8D2E5]/60">
                {COMPANY_INFO.location}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-[#4DB8FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C8D2E5]/70">
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0B1220] border border-[#4DB8FF]/20 text-[#C8D2E5] hover:text-white hover:border-[#4DB8FF] hover:bg-[#1E6DFF]/20 transition-all flex items-center justify-center cursor-pointer"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 text-[#4DB8FF]" />
            </button>

            <p>© 2026 LamarqueTech. Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#4DB8FF] transition-colors">Política de Privacidade</a>
            <a href="#terms" className="hover:text-[#4DB8FF] transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
