export type ProjectStatus = 'In Development' | 'Planned' | 'Research Prototype' | 'Completed';

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  filterCategory: 'engineering' | 'research' | 'planned';
  status: ProjectStatus;
  summary: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  plannedRelease?: string;
  highlightMetric?: {
    value: string;
    label: string;
  };
}

export interface Service {
  id: string;
  title: string;
  kicker: string;
  category: string;
  summary: string;
  description: string;
  capabilities: string[];
  typicalProblems: string[];
  exampleDeliverables: string[];
  suitableTech: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  author: string;
  type: string;
  year: number;
  institution: string;
  program: string;
  summary: string;
  keyContributions: string[];
  caseStudy: string;
  statusText: string;
  pdfAvailable: boolean;
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: 'Engineering' | 'Software Development' | 'Research' | 'Computational Methods' | 'Company Updates';
  summary: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  tags: string[];
  isDraft?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization?: string;
  projectType: string;
  budget?: string;
  message: string;
  preferredContact: 'email' | 'video' | 'phone';
  consent: boolean;
}
