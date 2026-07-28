import { ServiceItem, TeamMember, CaseStudy, PartnerCompany, ProcessStep, SupportPillar } from '../types';
import { ALBERTO_LAMARQUE_IMAGE_URL } from '../assets/images';

export const COMPANY_INFO = {
  name: 'LamarqueTech',
  slogan: 'Inteligência Artificial que impulsiona negócios e transforma empresas.',
  website: 'www.lamarquetech.com.br',
  websiteUrl: 'https://www.lamarquetech.com.br',
  email: 'suporte@lamarquetech.com.br',
  phone: '(81) 98745-2648',
  whatsappNumber: '5581987452648',
  whatsappUrl: 'https://wa.me/5581987452648?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+diagn%C3%B3stico+gratuito+com+a+LamarqueTech.',
  instagram: '@lamarquetech',
  instagramUrl: 'https://instagram.com/lamarquetech',
  youtube: '@lamarquetech',
  youtubeUrl: 'https://youtube.com/@lamarquetech',
  location: 'Recife, PE - Atendimento Global',
};

export const STATS_DATA = [
  { id: 'projects', value: 150, prefix: '+', label: 'Projetos Entregues', sublabel: 'Soluções em IA e Web' },
  { id: 'clients', value: 98, suffix: '%', label: 'Clientes Satisfeitos', sublabel: 'NPS e retenção' },
  { id: 'support', value: '24/7', label: 'Suporte Especializado', sublabel: 'Monitoramento contínuo' },
  { id: 'productivity', value: 300, prefix: '+', suffix: '%', label: 'Aumento Médio de Produtividade', sublabel: 'Ganhos operacionais' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'Agentes de Inteligência Artificial',
    description: 'Agentes inteligentes que atendem, automatizam e geram resultados 24 horas por dia.',
    iconName: 'Bot',
    details: [
      'Atendimento automatizado multi-canal (WhatsApp, Web, E-mail)',
      'Qualificação inteligente de leads em tempo real',
      'Integração direta com seu CRM e banco de dados',
      'Processamento de linguagem natural adaptado ao seu negócio'
    ]
  },
  {
    id: 'corporate-websites',
    title: 'Websites Corporativos',
    description: 'Sites modernos, rápidos e otimizados para SEO que fortalecem sua presença digital.',
    iconName: 'Globe',
    details: [
      'Design exclusivo e alinhado à sua marca',
      'Otimização extrema para velocidade e SEO',
      'Painel intuitivo para gerenciamento de conteúdo',
      'Segurança avançada e certificado SSL incluso'
    ]
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão para transformar visitantes em clientes.',
    iconName: 'Target',
    details: [
      'Copywriting persuasivo e focado em vendas',
      'Design de alta conversão testado no mercado',
      'Integração com pixel do Facebook, Google e Analytics',
      'Carregamento ultra-rápido para reduzir taxa de rejeição'
    ]
  },
  {
    id: 'visual-identity',
    title: 'Identidade Visual',
    description: 'Marcas fortes, memoráveis e profissionais que comunicam valor e geram conexão.',
    iconName: 'PenTool',
    details: [
      'Criação de logotipo e manual completo da marca',
      'Paleta de cores, tipografia e elementos visuais',
      'Material impresso e digital personalizado',
      'Posicionamento de marca estratégico no mercado'
    ]
  },
  {
    id: 'custom-web-systems',
    title: 'Sistemas Web Customizados',
    description: 'Sistemas sob-medida para otimizar processos e centralizar informações da sua empresa.',
    iconName: 'Code',
    details: [
      'Arquitetura escalável em nuvem',
      'Dashboards interativos e relatórios em tempo real',
      'Portais do cliente, colaboradores e parceiros',
      'Segurança cibernética e controle de permissões'
    ]
  },
  {
    id: 'business-automation',
    title: 'Automação Empresarial',
    description: 'Automatizamos tarefas, integrações e fluxos para reduzir custos e aumentar eficiência.',
    iconName: 'Cpu',
    details: [
      'Conexão entre sistemas via API e webhooks',
      'Eliminação de erros manuais em processos repetitivos',
      'Fluxos automatizados de vendas e pós-venda',
      'Redução comprovada de até 60% em custos operacionais'
    ]
  },
  {
    id: 'ai-consulting',
    title: 'Consultoria em IA & Transformação',
    description: 'Estratégia, planejamento e implementação de IA para transformação digital.',
    iconName: 'Brain',
    details: [
      'Mapeamento de oportunidades de IA no seu setor',
      'Planejamento de adoção tecnológica segura',
      'Treinamento e aculturamento da sua equipe',
      'Métricas claras de ROI e acompanhamento de resultados'
    ]
  },
  {
    id: 'tech-support',
    title: 'Suporte Técnico Especializado',
    description: 'Suporte contínuo, monitoramento, manutenção e evolução para suas soluções.',
    iconName: 'Headphones',
    details: [
      'Monitoramento 24 horas por dia de servidores e sistemas',
      'Backups diários automatizados e segurança Linux',
      'Atendimento prioritário via WhatsApp e e-mail',
      'Atualizações preventivas e correção ágil de bugs'
    ]
  }
];

export const PARTNERS_DATA: PartnerCompany[] = [
  { id: '1', name: 'INOVATEC SOLUÇÕES', tagline: 'Tecnologia Industrial' },
  { id: '2', name: 'NEXORA', tagline: 'Plataforma SaaS' },
  { id: '3', name: 'ALPHATECH', tagline: 'Soluções Financeiras' },
  { id: '4', name: 'STRATEGY SOLUTIONS', tagline: 'Consultoria Estratégica' },
  { id: '5', name: 'VISIONARY GROUP', tagline: 'Investimentos & Inovação' },
  { id: '6', name: 'PRIME SYSTEMS', tagline: 'Engenharia de Software' },
  { id: '7', name: 'METRICS DIGITAL', tagline: 'Performance & Analytics' },
  { id: '8', name: 'CYBERFLOW', tagline: 'Segurança e Dados' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Entendemos seu negócio, desafios e oportunidades.',
    details: 'Mapeamos suas necessidades operacionais, infraestrutura atual e gargalos de conversão para traçar o mapa completo da solução.'
  },
  {
    step: '02',
    title: 'Planejamento',
    description: 'Criamos a estratégia e o plano de ação ideal.',
    details: 'Desenhamos a arquitetura do sistema ou agente de IA, cronograma de entregas, protótipos e métricas de sucesso (KPIs).'
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Construímos sua solução com tecnologia de ponta.',
    details: 'Codificação limpa, integração de IA, otimização de performance e rigorosos testes de qualidade e segurança cibernética.'
  },
  {
    step: '04',
    title: 'Implantação',
    description: 'Implementamos e integramos à sua operação.',
    details: 'Publicação em ambiente de produção de alta disponibilidade com tempo de inatividade zero e migração segura de dados.'
  },
  {
    step: '05',
    title: 'Treinamento',
    description: 'Capacitamos sua equipe para o uso eficiente.',
    details: 'Workshops práticos, manuais intuitivos e suporte direto para garantir rápida adaptação e extração máxima de valor.'
  },
  {
    step: '06',
    title: 'Suporte Contínuo',
    description: 'Acompanhamos, evoluímos e mantemos resultados.',
    details: 'Monitoramento 24/7, atualizações preventivas, melhorias contínuas e evolução contínua alinhada ao crescimento da empresa.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alberto-lamarque',
    name: 'Alberto Lamarque',
    role: 'Especialista em Inteligência Artificial',
    specialties: ['Especialista em Agentes de IA', 'Servidores Linux', 'Automação Inteligente', 'Arquitetura de Sistemas'],
    bio: 'Pioneiro em arquitetura de IA e servidores de alta performance, Alberto lidera a engenharia de agentes inteligentes e infraestrutura resiliente na LamarqueTech.',
    image: ALBERTO_LAMARQUE_IMAGE_URL,
    linkedin: 'https://linkedin.com/in/alberto-lamarque',
    email: 'alberto@lamarquetech.com.br',
    website: 'https://www.lamarquetech.com.br'
  },
  {
    id: 'adriano-medeiros',
    name: 'Adriano Medeiros',
    role: 'Desenvolvedor Senior & Cientista da Computação',
    specialties: ['Ciência da Computação', 'Full Stack Developer', 'Arquitetura de Software', 'Sistemas Web Customizados'],
    bio: 'Cientista da Computação apaixonado por código limpo, sistemas distribuídos e engenharia web de ponta, Adriano transforma requisitos complexos em sistemas fluidos.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com/in/adriano-medeiros',
    github: 'https://github.com/adrianomedeiros',
    email: 'adriano@lamarquetech.com.br'
  },
  {
    id: 'cristina-medeiros',
    name: 'Cristina Medeiros',
    role: 'Especialista em Marketing Digital & Gestora',
    specialties: ['Marketing Digital', 'Gestão de Projetos', 'Estratégia Digital', 'Branding & UX'],
    bio: 'Especialista em posicionamento estratégico de marcas e gestão ágil de projetos, Cristina garante que cada solução entregue traga valor de negócio mensurável.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com/in/cristina-medeiros',
    instagram: 'https://instagram.com/cristinamedeiros',
    email: 'cristina@lamarquetech.com.br'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'automacao-comercial',
    title: 'Automação Comercial',
    subtitle: 'Otimização de vendas e atendimento para rede de varejo',
    category: 'Automação & Agente IA',
    before: 'Processos manuais, atendimento demorado no WhatsApp, atraso na resposta de orçamentos e alta perda de oportunidades fora do horário comercial.',
    after: 'Atendimento inteligente automatizado com qualificação instantânea de leads, agendamento de reuniões e integração direta ao CRM da equipe.',
    kpis: [
      { label: 'Produtividade', value: '+320%', trend: 'up' },
      { label: 'Custos Operacionais', value: '-62%', trend: 'down' },
      { label: 'Taxa de Conversão', value: '+85%', trend: 'up' }
    ],
    description: 'Implementação de agente conversacional de IA com aprendizado sobre o catálogo de produtos e integração aos sistemas de pedidos.'
  },
  {
    id: 'portal-do-cliente',
    title: 'Portal do Cliente',
    subtitle: 'Sistema web completo para gestão de serviços e pagamentos',
    category: 'Sistema Web Customizado',
    before: 'Solicitações de suporte via mensagens informais, falta de visibilidade financeira para os clientes e gargalo de atendimento no suporte.',
    after: 'Plataforma web segura com autoatendimento 24/7, emissão de faturas automatizada e rastreabilidade total de chamados em tempo real.',
    kpis: [
      { label: 'Satisfação dos Clientes', value: '+180%', trend: 'up' },
      { label: 'Tempo de Atendimento', value: '-40%', trend: 'down' },
      { label: 'Retenção de Clientes', value: '+95%', trend: 'up' }
    ],
    description: 'Desenvolvimento de portal corporativo responsivo com autenticação segura, criptografia de ponta a ponta e relatórios executivos.'
  },
  {
    id: 'agente-de-ia',
    title: 'Agente de IA e Qualificação de Leads',
    subtitle: 'Qualificação em tempo real para empresa SaaS e B2B',
    category: 'Inteligência Artificial',
    before: 'Leads demoravam até 24h para serem contatados pelos vendedores. Equipe perdia tempo com contatos fora do perfil ideal de compra.',
    after: 'Agente de IA qualifica leads em menos de 10 segundos, coleta requisitos e direciona apenas reuniões pré-qualificadas para o time comercial.',
    kpis: [
      { label: 'Leads Qualificados', value: '+250%', trend: 'up' },
      { label: 'Tempo de Resposta', value: '-70%', trend: 'down' },
      { label: 'Disponibilidade', value: '24/7', trend: 'up' }
    ],
    description: 'Agente de IA treinado com a metodologia de vendas do cliente, conectado via API ao ecossistema do cliente.'
  }
];

export const SUPPORT_PILLARS: SupportPillar[] = [
  {
    id: 'monitoring',
    title: 'Monitoramento 24/7',
    description: 'Acompanhamento contínuo da sua operação com alertas preditivos para garantir tempo de atividade de 99.9%.',
    iconName: 'Activity'
  },
  {
    id: 'preventive-maintenance',
    title: 'Manutenção Preventiva',
    description: 'Atualizações periódicas, otimização de banco de dados e refinamento de código para evitar problemas futuros.',
    iconName: 'Wrench'
  },
  {
    id: 'backup-security',
    title: 'Backup e Segurança',
    description: 'Proteção cibernética rigorosa, auditoria de código, firewall ativo e backup diário automatizado de todos os dados.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'quick-support',
    title: 'Suporte Rápido',
    description: 'Atendimento humano ágil e prioritário via WhatsApp, e-mail e chamados com tempo médio de resposta inferior a 15 minutos.',
    iconName: 'MessageSquare'
  },
  {
    id: 'server-management',
    title: 'Gestão de Servidores',
    description: 'Administração especializada de infraestrutura Linux, containers Docker, Cloud e ambientes de alta disponibilidade.',
    iconName: 'Server'
  },
  {
    id: 'continuous-evolution',
    title: 'Evolução Contínua',
    description: 'Implementação de novas funcionalidades, ajustes de UX/UI e otimizações contínuas alinhadas aos seus objetivos.',
    iconName: 'TrendingUp'
  }
];
