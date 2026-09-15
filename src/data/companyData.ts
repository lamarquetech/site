import { ServiceItem, TeamMember, CaseStudy, PartnerCompany, ProcessStep, SupportPillar, Testimonial } from '../types';

import {
  ALBERTO_LAMARQUE_IMAGE_URL,
  CRISTINA_MEDEIROS_IMAGE_URL
} from '../assets/images';


import {
  ALBERTO_LAMARQUE_IMAGE_URL,
  CRISTINA_MEDEIROS_IMAGE_URL
} from '../assets/images';

import fotoAdriano from '../assets/images/foto_adriano.png';


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
  { id: 'refugio-forte', name: 'POUSADA REFÚGIO DO FORTE', tagline: 'Hotelaria & Turismo' },
  { id: 'engefrance', name: 'ENGEFRANCE ENGENHARIA', tagline: 'Engenharia & Construção' },
  { id: 'composicao-contabil', name: 'COMPOSIÇÃO CONTÁBIL', tagline: 'Gestão Contábil & Financeira' },
  { id: '1', name: 'INOVATEC SOLUÇÕES', tagline: 'Tecnologia Industrial' },
  { id: '2', name: 'NEXORA', tagline: 'Plataforma SaaS' },
  { id: '3', name: 'ALPHATECH', tagline: 'Soluções Financeiras' },
  { id: '4', name: 'STRATEGY SOLUTIONS', tagline: 'Consultoria Estratégica' },
  { id: '5', name: 'VISIONARY GROUP', tagline: 'Investimentos & Inovação' },
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
    name: 'Lamarque',
    role: 'Especialista em Inteligência Artificial',
    specialties: [
      'Especialista em Agentes de IA',
      'Servidores Linux',
      'Automação Inteligente',
      'Arquitetura de Sistemas'
    ],
    bio: 'Pioneiro em arquitetura de IA e servidores de alta performance, Lamarque lidera a engenharia de agentes inteligentes e infraestrutura resiliente na LamarqueTech.',
    image: ALBERTO_LAMARQUE_IMAGE_URL,
    email: 'suporte@lamarquech.com.br',
    instagram: 'https://instagram.com/lamarquetech',
  },
  {
    id: 'adriano-medeiros',
    name: 'Adriano Medeiros',
    role: 'Desenvolvedor Sênior',
    specialties: [
      'Ciência da Computação',
      'Full Stack Developer',
      'Arquitetura de Software',
      'Sistemas Web Customizados'
    ],
    bio: 'Cientista da Computação apaixonado por código limpo, sistemas distribuídos e engenharia web de ponta, Adriano transforma requisitos complexos em sistemas fluidos.',
    image: fotoAdriano,
  },
  {
    id: 'cristina-medeiros',
    name: 'Cristina Medeiros',
    role: 'Especialista em Marketing Digital & Gestora',
    specialties: [
      'Marketing Digital',
      'Gestão de Projetos',
      'Estratégia Digital',
      'Branding & UX'
    ],
    bio: 'Especialista em posicionamento estratégico de marcas e gestão ágil de projetos, Cristina garante que cada solução entregue traga valor de negócio mensurável.',
    image: CRISTINA_MEDEIROS_IMAGE_URL,
    instagram: 'https://instagram.com/cristmkt'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pousada-refugio-forte',
    title: 'Pousada Refúgio do Forte',
    subtitle: 'Automação de atendimento e reservas inteligentes via WhatsApp',
    category: 'Agente de IA & Hotelaria',
    before: 'Consultas sobre disponibilidade demoravam para ser respondidas fora do horário comercial, resultando em perda de reservas para concorrentes.',
    after: 'Agente de IA integrado que tira dúvidas, consulta disponibilidade, apresenta fotos dos quartos e auxilia no fechamento das reservas 24h por dia.',
    kpis: [
      { label: 'Conversão de Reservas', value: '+240%', trend: 'up' },
      { label: 'Tempo de Resposta', value: 'Imediato', trend: 'down' },
      { label: 'Atendimento 24/7', value: '100%', trend: 'up' }
    ],
    description: 'Implementação de Inteligência Artificial para gestão de atendimento receptivo e conversão automática de hóspedes no segmento hoteleiro.'
  },
  {
    id: 'engefrance',
    title: 'Engefrance Engenharia',
    subtitle: 'Presença digital de alta performance e automação comercial',
    category: 'Website & Automação Corporativa',
    before: 'Apresentação de portfólio institucional defasada e fluxo manual de recebimento de cotações para grandes obras de engenharia.',
    after: 'Website corporativo moderno com SEO otimizado e formulários inteligentes de orçamento integrados diretamente com a equipe técnica.',
    kpis: [
      { label: 'Leads Qualificados', value: '+310%', trend: 'up' },
      { label: 'Velocidade de Carga', value: '< 1.2s', trend: 'up' },
      { label: 'Aumento de Propostas', value: '+85%', trend: 'up' }
    ],
    description: 'Desenvolvimento de ecossistema digital completo com posicionamento de marca e captura de oportunidades B2B para o setor da construção civil.'
  },
  {
    id: 'composicao-contabil',
    title: 'Composição Contábil',
    subtitle: 'Portal de serviços e automação de solicitações contábeis',
    category: 'Sistema Web & Agente IA',
    before: 'Alta demanda repetitiva de clientes solicitando guias, certidões e relatórios contábeis pelo canal de atendimento.',
    after: 'Agente inteligente que identifica o cliente, automatiza o envio de documentos essenciais e tria solicitações complexas para os contadores.',
    kpis: [
      { label: 'Redução de Chamados', value: '-65%', trend: 'down' },
      { label: 'Satisfação do Cliente', value: '99%', trend: 'up' },
      { label: 'Produtividade da Equipe', value: '+280%', trend: 'up' }
    ],
    description: 'Solução sob medida integrando Inteligência Artificial e automação de processos para escritórios de contabilidade.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'refugio-forte',
    clientName: 'Direção Executiva',
    companyName: 'Pousada Refúgio do Forte',
    role: 'Gestão Hoteleira',
    highlight: 'Aumento de 240% nas conversões diretas',
    quote: 'O agente de Inteligência Artificial criado pela LamarqueTech transformou completamente a nossa recepção. Hoje atendemos os hóspedes instantaneamente 24h por dia, tiramos dúvidas sobre os quartos e fechamos reservas sem perder nenhuma oportunidade!',
    rating: 5
  },
  {
    id: 'engefrance',
    clientName: 'Engenharia & Novos Negócios',
    companyName: 'Engefrance Engenharia',
    role: 'Direção Técnica',
    highlight: 'Posicionamento digital e novos contratos',
    quote: 'A LamarqueTech desenvolveu uma plataforma web moderna e otimizada que reflete exatamente a relevância técnica da Engefrance. O fluxo automatizado de cotações para obras triplicou nossas solicitações de orçamento qualificadas.',
    rating: 5
  },
  {
    id: 'composicao-contabil',
    clientName: 'Gestão Operacional',
    companyName: 'Composição Contábil',
    role: 'Coordenação Contábil',
    highlight: 'Redução de 65% nos chamados repetitivos',
    quote: 'A automação com IA permitiu que nossos clientes solicitem certidões e relatórios de forma autônoma e imediata. Reduzimos drasticamente as demandas operacionais repetitivas e nossa equipe focou na consultoria estratégica.',
    rating: 5
  },
  {
    id: 'inovatec',
    clientName: 'Gerência de Inovação',
    companyName: 'Inovatec Soluções',
    role: 'Direção de Operações',
    highlight: 'Eficiência operacional extrema',
    quote: 'Trabalhar com a equipe da LamarqueTech é ter a certeza de que a tecnologia será aplicada com foco total em resultados de negócios. A agilidade na entrega e a qualidade técnica superaram todas as nossas expectativas.',
    rating: 5
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
