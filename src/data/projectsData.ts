import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bayesian-reliability-engine',
    slug: 'bayesian-reliability-engine',
    name: 'Bayesian Reliability Updating Engine',
    category: 'Computational Engineering / Scientific Software',
    filterCategory: 'engineering',
    status: 'In Development',
    summary:
      'A computational software project focused on structural reliability analysis, uncertainty quantification, and Bayesian updating using engineering evidence.',
    description:
      'Traditional engineering assessments often rely on assumptions about structural resistance, dynamic loading, and model uncertainty. The Bayesian Reliability Updating Engine introduces a modular computational framework that assimilates diagnostic measurements—such as proof-load test results and continuous sensor time-series—to refine prior probabilistic distributions into posterior reliability indices with transparent mathematical rigor.',
    capabilities: [
      'Probabilistic random-variable modeling with custom prior distributions',
      'Structural limit-state function evaluation (ULS & SLS)',
      'Monte Carlo and Latin Hypercube simulation engines',
      'Bayesian inference via Markov Chain Monte Carlo (MCMC) and subset simulation',
      'Monitoring-data integration from proof-load testing and strain gauges',
      'Convergence diagnostics, posterior predictive checks, and reproducible reporting',
    ],
    techStack: ['Python', 'NumPy', 'SciPy', 'TypeScript', 'WebAssembly', 'React', 'Tailwind CSS'],
    plannedRelease: 'Q3 2026 (Research Preview)',
    highlightMetric: {
      value: 'β Index',
      label: 'Posterior Reliability Metric',
    },
  },
  {
    id: 'structural-health-monitoring',
    slug: 'structural-health-monitoring',
    name: 'Structural Health Monitoring Platform',
    category: 'Engineering Software / Data Systems',
    filterCategory: 'planned',
    status: 'Planned',
    summary:
      'A planned software platform for organizing, visualizing, and interpreting structural monitoring data, with a long-term goal of integrating probabilistic reliability assessment.',
    description:
      'Infrastructure owners and civil engineers capture gigabytes of sensor readings from bridges, tunnels, and buildings, yet bridging the gap between raw time-series measurements and actionable structural health decisions remains difficult. This planned platform standardizes ingestion, anomaly detection, vibration trend extraction, and future Bayesian safety index mapping.',
    capabilities: [
      'Multi-channel sensor-data ingestion (strain, displacement, acceleration, temperature)',
      'High-throughput interactive time-series visualization',
      'Structural response trend tracking and baseline anomaly detection',
      'Threshold monitoring with engineering-grounded alerts',
      'Interactive 3D/2D structural schematics and sensor spatial mapping',
      'Planned coupling with the Bayesian Reliability Updating Engine for real-time safety index updates',
    ],
    techStack: ['TypeScript', 'Node.js', 'FastAPI', 'Canvas / WebGL', 'Time-Series DB (Planned)', 'React'],
    plannedRelease: 'Concept Stage / Planned Architecture',
    highlightMetric: {
      value: 'Real-Time',
      label: 'Planned Ingestion Architecture',
    },
  },
];
