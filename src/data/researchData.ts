import { ResearchPaper } from '../types';

export const featuredResearch: ResearchPaper = {
  id: 'zijlweg-viaduct-bayesian-reliability',
  title:
    'Bayesian Updating of Bridge Structural Reliability Using Monitoring Data, Stop Criteria, and Proof Load Testing: A Case Study of the Zijlweg Viaduct',
  author: 'Neguse Solomon Mekonnen',
  type: "Master's Dissertation",
  year: 2026,
  institution: 'Universitat Politècnica de Catalunya (UPC)',
  program: 'Erasmus Mundus Master in Risk Assessment and Management of Civil Infrastructures (NoRISK)',
  summary:
    'This research investigates the quantitative integration of proof-load testing, structural health monitoring data, and engineering stop criteria into the probabilistic reliability assessment of existing highway bridge infrastructure. By formulating Bayesian updating models, prior uncertainty regarding resistance and dead load is conditioned on survival evidence and measured deformation thresholds, resulting in updated reliability indices (β) and informed infrastructure asset management.',
  keyContributions: [
    'Formulation of probabilistic limit-state functions conditioned on proof-load test evidence',
    'Quantification of the effect of deformation-based stop criteria on posterior failure probabilities',
    'Application to the Zijlweg Viaduct, demonstrating numerical reliability updating under operational constraints',
    'Development of computational workflows that connect monitoring time-series directly to probabilistic safety metrics',
  ],
  caseStudy: 'Zijlweg Viaduct (Netherlands) — Proof Load Testing & Diagnostic Monitoring Assessment',
  statusText: 'Academic dissertation completed; manuscript repository registration and preprint link in preparation.',
  pdfAvailable: false,
};

export const researchAreas = [
  {
    title: 'Structural Reliability',
    summary:
      'Quantifying the probability that an engineering structure satisfies target limit states over its service lifetime under stochastic loading and material variability.',
    description:
      'We formulate limit-state equations $g(X) \\le 0$ representing failure modes (such as flexure, shear, or fatigue). Using numerical approximation and reliability theory, we compute failure probabilities $P_f = \\Phi(-\\beta)$ without relying exclusively on empirical safety factors.',
  },
  {
    title: 'Bayesian Inference & Updating',
    summary:
      'Systematically incorporating inspection results, sensor readings, and proof-load survival data into prior engineering belief distributions.',
    description:
      'Through Bayes’ theorem $P(\\theta | D) \\propto P(D | \\theta) P(\\theta)$, we update uncertainty parameters $\\theta$ based on observational data $D$. This permits continuous safety reassessment as new physical evidence is collected.',
  },
  {
    title: 'Uncertainty Quantification (UQ)',
    summary:
      'Rigorous mathematical separation and propagation of aleatory randomness (inherent physical variation) and epistemic uncertainty (lack of knowledge or modeling error).',
    description:
      'We employ sensitivity analysis, variance decomposition, and surrogate modeling to identify which system variables drive failure risk, allowing engineers to focus monitoring resources where they reduce uncertainty most effectively.',
  },
  {
    title: 'Computational Mechanics',
    summary:
      'Developing fast, reproducible numerical solvers for stress, strain, dynamic response, and limit states in structural components.',
    description:
      'Our computational implementations focus on modular finite element abstractions, matrix formulation, and vectorized evaluation to support high-iteration Monte Carlo evaluations without computational stagnation.',
  },
  {
    title: 'Structural Health Monitoring (SHM)',
    summary:
      'Transforming high-frequency physical measurements (strain, displacement, acceleration) into interpretable indicators of structural integrity.',
    description:
      'We research feature extraction techniques, temperature compensation algorithms, and statistical anomaly detectors that isolate true mechanical degradation from harmless environmental fluctuations.',
  },
  {
    title: 'Scientific Software Engineering',
    summary:
      'Applying modern software architecture, automated testing, and reproducibility standards to computational science algorithms.',
    description:
      'Scientific software often suffers from lack of version control, unvalidated dependencies, and poor usability. We bridge the gap by packaging computational algorithms into tested, documented, and modular libraries with intuitive web interfaces.',
  },
];

export const researchWorkflow = [
  {
    stage: '01',
    name: 'Mathematical Formulation',
    detail: 'Derive structural limit states, physical governing equations, and probabilistic prior models.',
  },
  {
    stage: '02',
    name: 'Uncertainty Modeling',
    detail: 'Assign probability distributions to material parameters, geometry, and environmental loading.',
  },
  {
    stage: '03',
    name: 'Evidence Integration',
    detail: 'Structure likelihood functions from inspection measurements, proof loads, and sensor time-series.',
  },
  {
    stage: '04',
    name: 'Numerical Inference & Simulation',
    detail: 'Run Monte Carlo, subset simulation, or MCMC sampling with strict convergence verification.',
  },
  {
    stage: '05',
    name: 'Software Tool Implementation',
    detail: 'Translate validated computational routines into clean, tested, and accessible software components.',
  },
];
