export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  avatar?: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio?: string;
  image: string;
  linkedin: string;
  email?: string;
  github?: string;
  website?: string;
  instagram?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  before: string;
  after: string;
  kpis: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
  description: string;
}

export interface PartnerCompany {
  id: string;
  name: string;
  tagline: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface SupportPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DiagnosticFormData {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  mensagem: string;
}
