import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Cases } from './components/Cases';
import { Support } from './components/Support';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { CookieBanner } from './components/CookieBanner';
import { SEO } from './components/SEO';
import { SpotlightTracker } from './components/SpotlightTracker';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070D] text-[#F7F9FC] font-sans selection:bg-[#1E6DFF] selection:text-white relative overflow-x-hidden">
      <SEO />
      <SpotlightTracker />

      {/* 1. Navbar */}
      <Navbar onOpenDiagnostic={() => setDiagnosticOpen(true)} />

      {/* Main Content Flow strictly matching approved layout order */}
      <main>
        {/* 2. Hero */}
        <Hero onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 3. Estatísticas */}
        <Stats />

        {/* 4. Serviços */}
        <Services onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 5. Empresas Parceiras */}
        <Partners />

        {/* 6. Metodologia / Processo */}
        <Process />

        {/* 7. Equipe */}
        <Team />

        {/* 8. Cases de Sucesso */}
        <Cases onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 9. Suporte Técnico */}
        <Support onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 10. CTA */}
        <CTASection onOpenDiagnostic={() => setDiagnosticOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* LGPD Cookie Consent Banner */}
      <CookieBanner />

      {/* Diagnostic Form Modal */}
      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Atendimento WhatsApp 24/7"
        title="Falar com Especialista no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 font-bold text-sm">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}
