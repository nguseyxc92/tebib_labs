import { InsightArticle } from '../types';

export const insightsArticles: InsightArticle[] = [
  {
    slug: 'probabilistic-limit-state-formulation',
    title: 'Formulating Probabilistic Limit States for Structural Reliability Assessment',
    category: 'Computational Methods',
    summary:
      'A deep dive into how explicit random-variable modeling and limit-state formulation replace blunt safety factors with quantifiable failure probabilities.',
    publishedDate: 'October 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Neguse Solomon Mekonnen',
      role: 'Founder & Computational Engineer',
    },
    tags: ['Reliability', 'Limit State', 'Probability', 'Monte Carlo'],
    isDraft: false,
    content: [
      'In conventional structural engineering design codes, safety is enforced through partial safety factors applied to characteristic values of resistance and load. While practical for standard design, this deterministic framework struggles when evaluating existing, aging infrastructure where site-specific data is available.',
      'A probabilistic limit-state function g(X) separates the safe domain (g(X) > 0) from the failure domain (g(X) <= 0). The vector X represents random variables such as yield strength, concrete compressive strength, dead load, and traffic loading.',
      'The probability of failure is given by the multidimensional integral Pf = ∫...∫ f_X(x) dx over the failure domain g(x) <= 0. Because analytical evaluation is generally impossible for non-linear structures, numerical simulation methods such as Monte Carlo Simulation (MCS) or First-Order Reliability Methods (FORM) become essential.',
      'At Tebib Labs, our focus is structuring these computational routines into modular, verifiable software components where random variables, distributions, and limit states can be configured transparently without black-box assumptions.',
    ],
  },
  {
    slug: 'bayesian-updating-proof-load-testing',
    title: 'Why Bayesian Updating Matters for Proof-Load Testing of Existing Bridges',
    category: 'Research',
    summary:
      'How the survival of a target test load provides hard physical evidence that truncates the lower tail of resistance distributions, upgrading reliability estimates.',
    publishedDate: 'November 2, 2026',
    readTime: '8 min read',
    author: {
      name: 'Neguse Solomon Mekonnen',
      role: 'Founder & Computational Engineer',
    },
    tags: ['Bayesian Updating', 'Proof Load Testing', 'Bridges', 'Structural Health'],
    isDraft: false,
    content: [
      'Proof load testing is one of the most direct methods to demonstrate the load-bearing capacity of an existing bridge. A heavy vehicle or hydraulic loading rig applies a test load tp that exceeds maximum anticipated operational traffic.',
      'If the bridge withstands tp without reaching predetermined deformation or acoustic stop criteria, this survival constitutes strong engineering evidence: the true structural resistance R must be greater than tp.',
      'Bayes’ theorem allows engineers to mathematically condition the prior resistance distribution f_R(r) on this survival event. The updated posterior distribution f_R(r | R > tp) is truncated at tp and renormalized.',
      'As a direct consequence, the probability of failure under service loading drops, and the reliability index β increases. This paper explores how monitoring data gathered during the test informs stop criteria, preventing unintended damage during proof loading.',
    ],
  },
  {
    slug: 'architecting-reproducible-scientific-software',
    title: 'Architecting Reproducible Numerical Software in Modern TypeScript and Python',
    category: 'Software Development',
    summary:
      'Bridging scientific computing with modern web technologies: why strict typing, deterministic test seeds, and WebAssembly matter for engineering tools.',
    publishedDate: 'November 6, 2026',
    readTime: '5 min read',
    author: {
      name: 'Neguse Solomon Mekonnen',
      role: 'Founder & Computational Engineer',
    },
    tags: ['TypeScript', 'Python', 'WebAssembly', 'Software Architecture'],
    isDraft: false,
    content: [
      'Scientific computing has historically relied on isolated Python scripts, Jupyter notebooks, or compiled legacy FORTRAN routines. While effective for initial academic discovery, these tools frequently suffer from poor reproducibility, missing test coverage, and a steep learning curve for practitioners.',
      'Modern web standards allow us to bring high-performance computational solvers directly to browser environments using WebAssembly (Wasm) and typed TypeScript interfaces, backed by high-throughput FastAPI microservices.',
      'Key architectural patterns include separating the pure mathematical solver from state management, enforcing explicit unit dimensions in type definitions, and persisting random seed states for full stochastic reproducibility.',
      'By combining modern frontend design systems with rigorous numerical verification, we can empower practicing engineers to explore parameter spaces interactively without compromising calculation rigor.',
    ],
  },
  {
    slug: 'structural-health-monitoring-data-streams',
    title: 'Sensor Data Ingestion: From High-Frequency Strains to Actionable Safety Trends',
    category: 'Engineering',
    summary:
      'Examining the pipeline from strain gauge and accelerometer feeds to statistical baseline tracking and structural anomaly isolation.',
    publishedDate: 'November 7, 2026',
    readTime: '7 min read',
    author: {
      name: 'Neguse Solomon Mekonnen',
      role: 'Founder & Computational Engineer',
    },
    tags: ['Sensor Data', 'SHM', 'Time Series', 'Engineering'],
    isDraft: false,
    content: [
      'Continuous structural health monitoring installations can generate millions of data points each week. The challenge in modern infrastructure management is rarely data acquisition; it is filtering noise and distinguishing thermal expansion from real structural degradation.',
      'Daily temperature cycles cause bridge decks to expand, contract, and flex, producing strain oscillations that easily dwarf the effects of minor structural stiffness loss.',
      'Effective monitoring software must incorporate statistical temperature compensation models (such as principal component analysis or regression on ambient temperature sensors) to establish healthy operational baselines.',
      'Once environmental effects are normalized, automated threshold algorithms can flag genuine behavioral deviations, queuing probabilistic reliability checks before visual damage becomes visible to inspectors.',
    ],
  },
];
