import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Evita duplicar se React remontar (StrictMode em dev)
    if (document.getElementById('lam-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'lam-widget-script';
    script.src = 'https://api.lamarquetech.com.br/widget/embed.js';
    script.async = true;
    script.dataset.apiUrl = 'https://api.lamarquetech.com.br';
    script.dataset.primaryColor = '#0F62FE';
    script.dataset.accentColor = '#16A34A';
    script.dataset.title = 'Bia · Assistente';
    script.dataset.subtitle = 'Online · Resposta em segundos';
    script.dataset.welcome = 'Oi! Sou a Bia, assistente da Lamarque Tech.';
    script.dataset.position = 'bottom-right';
    document.body.appendChild(script);

    return () => {
      const el = document.getElementById('lam-widget-script');
      if (el) el.remove();
    };
  }, []);

  return null;
}
