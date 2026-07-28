import React from 'react';
import { PARTNERS_DATA } from '../data/companyData';
import { ShieldCheck, Award } from 'lucide-react';

export const Partners: React.FC = () => {
  // Double list for infinite seamless marquee loop
  const partnerList = [...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section className="py-16 bg-[#05070D] border-y border-[#4DB8FF]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#4DB8FF]/20 text-[#4DB8FF] text-xs font-semibold tracking-widest uppercase">
          <Award className="w-3.5 h-3.5 text-[#4DB8FF]" />
          <span>EMPRESAS QUE CONFIAM NA LAMARQUETECH</span>
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05070D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05070D] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {partnerList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0B1220]/40 border border-[#4DB8FF]/10 hover:border-[#4DB8FF]/40 transition-all duration-300 group cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1E6DFF]/10 border border-[#4DB8FF]/20 flex items-center justify-center font-mono font-bold text-[#C8D2E5] group-hover:text-[#4DB8FF] group-hover:bg-[#1E6DFF]/30 transition-all">
                {partner.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-wider text-[#C8D2E5] group-hover:text-[#F7F9FC] group-hover:text-glow transition-all">
                  {partner.name}
                </span>
                <span className="text-[10px] text-[#C8D2E5]/50 group-hover:text-[#4DB8FF] transition-colors">
                  {partner.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
