import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/companyData';
import { Linkedin, Github, Mail, Globe, Sparkles, Instagram, Award } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#4DB8FF]/30 text-[#4DB8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOSSA EQUIPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight mb-4">
            Especialistas que transformam ideias em <span className="text-[#4DB8FF] text-glow">resultados.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C8D2E5]">
            Nossa liderança combina ciência da computação, engenharia de IA e inteligência de mercado para entregar soluções de impacto.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-[#4DB8FF]/20 flex flex-col items-center text-center relative group"
            >
              {/* Circular Photo with Glowing Border */}
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] rounded-full blur group-hover:opacity-100 opacity-60 transition duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 rounded-full object-cover relative z-10 border-2 border-[#05070D] shadow-2xl"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-[#F7F9FC] mb-1 group-hover:text-[#4DB8FF] transition-colors">
                {member.name}
              </h3>
              
              <div className="text-xs font-semibold font-mono text-[#4DB8FF] uppercase tracking-wider mb-4">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-xs text-[#C8D2E5] leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Specialties Pills */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-8">
                {member.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-[#05070D]/80 border border-[#4DB8FF]/15 text-[11px] font-medium text-[#C8D2E5]"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#4DB8FF]/15 w-full mt-auto">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#05070D] hover:bg-[#1E6DFF] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#05070D] hover:bg-[#1E6DFF] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 transition-all duration-200"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#05070D] hover:bg-[#1E6DFF] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 transition-all duration-200"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}

                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#05070D] hover:bg-[#1E6DFF] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 transition-all duration-200"
                    title="Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2.5 rounded-full bg-[#05070D] hover:bg-[#1E6DFF] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20 transition-all duration-200"
                    title="Enviar E-mail"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
