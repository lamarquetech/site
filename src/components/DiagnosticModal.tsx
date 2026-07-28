import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { DiagnosticFormData } from '../types';

const diagnosticSchema = z.object({
  nome: z.string().min(3, 'Por favor, informe seu nome completo.'),
  empresa: z.string().min(2, 'Informe o nome da sua empresa ou projeto.'),
  telefone: z.string().min(10, 'Informe um telefone/WhatsApp válido com DDD.'),
  email: z.string().email('Por favor, informe um e-mail corporativo válido.'),
  mensagem: z.string().min(10, 'Descreva brevemente sua necessidade ou desafio.'),
});

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<DiagnosticFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormData>({
    resolver: zodResolver(diagnosticSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: DiagnosticFormData) => {
    // Simulate server submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLastSubmittedData(data);
    setSubmitted(true);
    reset();
  };

  const handleSendToWhatsApp = () => {
    if (!lastSubmittedData) return;
    const text = `*Solicitação de Diagnóstico - LamarqueTech*%0A%0A*Nome:* ${lastSubmittedData.nome}%0A*Empresa:* ${lastSubmittedData.empresa}%0A*E-mail:* ${lastSubmittedData.email}%0A*Telefone:* ${lastSubmittedData.telefone}%0A*Mensagem:* ${lastSubmittedData.mensagem}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0B1220] border border-[#4DB8FF]/40 rounded-3xl p-6 sm:p-8 shadow-2xl glass-card max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#05070D] text-[#C8D2E5] hover:text-white border border-[#4DB8FF]/20"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-[#1E6DFF]/20 border border-[#4DB8FF]/30 text-[#4DB8FF]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F7F9FC]">Solicitar Diagnóstico Gratuito</h3>
                <p className="text-xs text-[#C8D2E5]">Preencha o formulário e receba uma análise da nossa equipe em até 2 horas.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alberto Lamarque"
                  {...register('nome')}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-[#4DB8FF]/20 text-[#F7F9FC] placeholder-[#C8D2E5]/40 focus:border-[#4DB8FF] focus:ring-1 focus:ring-[#4DB8FF] outline-none text-sm transition"
                />
                {errors.nome && <p className="text-xs text-red-400 mt-1">{errors.nome.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    {...register('empresa')}
                    className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-[#4DB8FF]/20 text-[#F7F9FC] placeholder-[#C8D2E5]/40 focus:border-[#4DB8FF] focus:ring-1 focus:ring-[#4DB8FF] outline-none text-sm transition"
                  />
                  {errors.empresa && <p className="text-xs text-red-400 mt-1">{errors.empresa.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    placeholder="(81) 99999-9999"
                    {...register('telefone')}
                    className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-[#4DB8FF]/20 text-[#F7F9FC] placeholder-[#C8D2E5]/40 focus:border-[#4DB8FF] focus:ring-1 focus:ring-[#4DB8FF] outline-none text-sm transition"
                  />
                  {errors.telefone && <p className="text-xs text-red-400 mt-1">{errors.telefone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-1">
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  placeholder="seu.nome@empresa.com.br"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-[#4DB8FF]/20 text-[#F7F9FC] placeholder-[#C8D2E5]/40 focus:border-[#4DB8FF] focus:ring-1 focus:ring-[#4DB8FF] outline-none text-sm transition"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-1">
                  Como podemos ajudar? *
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva seu projeto, objetivo ou necessidade (ex: Agente de IA para suporte, novo site corporativo...)"
                  {...register('mensagem')}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070D] border border-[#4DB8FF]/20 text-[#F7F9FC] placeholder-[#C8D2E5]/40 focus:border-[#4DB8FF] focus:ring-1 focus:ring-[#4DB8FF] outline-none text-sm transition resize-none"
                ></textarea>
                {errors.mensagem && <p className="text-xs text-red-400 mt-1">{errors.mensagem.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-[#1E6DFF] to-[#4DB8FF] hover:from-[#4DB8FF] hover:to-[#1E6DFF] rounded-xl shadow-lg shadow-[#1E6DFF]/30 transition flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                {isSubmitting ? (
                  <span>Processando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação de Diagnóstico</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida com Sucesso!</h3>
            <p className="text-sm text-[#C8D2E5] mb-8 max-w-md">
              Obrigado pelo interesse na LamarqueTech. Nossos especialistas entrarão em contato em breve.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 py-3.5 px-5 font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar pelo WhatsApp Agora</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3.5 px-5 font-bold text-[#C8D2E5] bg-[#05070D] border border-[#4DB8FF]/20 rounded-xl hover:text-white transition cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
