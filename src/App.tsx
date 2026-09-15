import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Cases } from './components/Cases';
import { Testimonials } from './components/Testimonials';
import { Support } from './components/Support';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { CookieBanner } from './components/CookieBanner';
import ChatWidget from './components/ChatWidget';
import { SEO } from './components/SEO';
import { SpotlightTracker } from './components/SpotlightTracker';
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

        {/* 8.5 Depoimentos de Clientes */}
        <Testimonials onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 9. Suporte Técnico */}
        <Support onOpenDiagnostic={() => setDiagnosticOpen(true)} />

        {/* 10. CTA */}
        <CTASection onOpenDiagnostic={() => setDiagnosticOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* LGPD Cookie Consent Banner */}
      <CookieBanner />
      <ChatWidget />

      {/* Diagnostic Form Modal */}
      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />

    </div>
  );
}
