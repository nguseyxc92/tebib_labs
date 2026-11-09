import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Engineering',
    kicker: '01. SYSTEMS & ARCHITECTURE',
    category: 'Full-Stack Software Development',
    summary:
      'Web applications, APIs, internal tools, automation, and scalable software systems built with production discipline.',
    description:
      'We design and engineer bespoke software systems that solve real operational bottlenecks. From responsive web applications to robust backend services and micro-tools, our solutions emphasize clean architecture, high maintainability, and precise data handling.',
    capabilities: [
      'Web applications and modern user interfaces',
      'Backend services and RESTful / gRPC APIs',
      'Workflow automation and operational pipelines',
      'Internal engineering tools and administrative platforms',
      'System integrations and third-party API orchestration',
      'Legacy software modernization and refactoring',
    ],
    typicalProblems: [
      'Disjointed manual spreadsheets slowing down technical workflows',
      'Outdated internal systems that fail to scale with organizational growth',
      'Lack of intuitive web interfaces for complex computational backends',
      'Siloed engineering data that cannot be accessed by non-specialist teams',
    ],
    exampleDeliverables: [
      'Fully responsive, accessible React/TypeScript web applications',
      'High-performance Node.js / FastAPI backend architectures',
      'Automated batch ETL pipelines with robust error handling',
      'Comprehensive technical documentation and test suites',
    ],
    suitableTech: ['TypeScript', 'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    id: 'scientific-computing',
    title: 'Engineering & Scientific Computing',
    kicker: '02. COMPUTATIONAL MECHANICS',
    category: 'Numerical Simulation & Probabilistic Tools',
    summary:
      'Computational models, numerical simulation tools, uncertainty analysis, and engineering applications.',
    description:
      'Bridging mathematical theory with executable software, we develop computational tools for structural analysis, probabilistic risk, and numerical optimization. Every model is built with explicit assumptions, unit testing, and numerical verification.',
    capabilities: [
      'Numerical computing and custom scientific algorithms',
      'Probabilistic reliability models and failure probability calculation',
      'Uncertainty quantification (UQ) and sensitivity analysis',
      'Engineering data processing and signal filtering',
      'Technical visualization and limit-state curve plotting',
      'Model validation workflows and benchmark testing',
    ],
    typicalProblems: [
      'Commercial software packages that operate as untransparent "black boxes"',
      'Inability to incorporate probabilistic uncertainty into safety factors',
      'Bottlenecks in running large Monte Carlo simulation suites efficiently',
      'Difficulty converting academic mathematical papers into validated code',
    ],
    exampleDeliverables: [
      'Modular Python / C++ / WebAssembly computational calculation libraries',
      'Limit-state evaluation and reliability index calculation tools',
      'Interactive visualization panels for probability distributions and trends',
      'Verification benchmarks comparing against analytical reference solutions',
    ],
    suitableTech: ['Python', 'NumPy', 'SciPy', 'C++', 'WebAssembly', 'Matplotlib / SVG', 'Statistical Computing'],
  },
  {
    id: 'data-systems',
    title: 'Data & Analytical Applications',
    kicker: '03. ANALYTICAL PLATFORMS',
    category: 'Data Systems & Decision Support',
    summary:
      'Data processing, analytical dashboards, statistical modeling, and decision-support software.',
    description:
      'We turn dense technical datasets into clear, interpretable interfaces. Whether ingesting time-series telemetry or building statistical decision-support systems, we focus on clarity, reproducible data provenance, and user empowerment.',
    capabilities: [
      'End-to-end data pipelines and automated sanitization',
      'Analytical dashboards with interactive querying and filters',
      'Statistical model integration and automated analysis pipelines',
      'Predictive modeling prototypes for engineering metrics',
      'Decision-support interfaces for technical stakeholders',
      'Automated reporting and data export systems',
    ],
    typicalProblems: [
      'Overwhelming raw sensor feeds that engineers cannot inspect effectively',
      'Disconnect between data science scripts and production user interfaces',
      'Inconsistent data formatting across different measurement sensors',
      'Lack of automated anomaly detection for mission-critical metrics',
    ],
    exampleDeliverables: [
      'High-throughput interactive time-series monitoring dashboards',
      'Feature extraction and statistical anomaly detection modules',
      'Structured REST APIs serving cleaned analytical summaries',
      'Configurable alert and reporting triggers',
    ],
    suitableTech: ['Python', 'Pandas', 'TypeScript', 'Canvas / WebGL', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    id: 'applied-rd',
    title: 'Applied Research & Prototyping',
    kicker: '04. TECHNICAL EXPERIMENTATION',
    category: 'Research Implementation & PoCs',
    summary:
      'Research software, proof-of-concept systems, algorithm development, and technical experimentation.',
    description:
      'We partner with researchers, engineering firms, and technical innovators to explore novel computational ideas. We translate cutting-edge scientific literature into functioning proof-of-concept prototypes that prove feasibility and de-risk development.',
    capabilities: [
      'Technical feasibility studies and architectural roadmaps',
      'Proof-of-concept (PoC) software prototyping',
      'Translation of academic research into production software',
      'Algorithm development, benchmarking, and optimization',
      'Computational experiment design and reproducible runs',
      'Technical literature synthesis and technology evaluation',
    ],
    typicalProblems: [
      'High-potential research ideas stuck in non-reproducible academic scripts',
      'Uncertainty about whether a computational method is computationally viable',
      'Lack of dedicated software engineering expertise on research teams',
      'Need for a functional prototype to present to stakeholders or funding bodies',
    ],
    exampleDeliverables: [
      'Working interactive prototypes demonstrating theoretical concepts',
      'Comparative benchmarking reports with computational complexity metrics',
      'Documented algorithm implementations with reproducible test seeds',
      'Architecture transition plans from prototype to production',
    ],
    suitableTech: ['Python', 'TypeScript', 'NumPy', 'Docker', 'Scientific Python Stack', 'Git CI/CD'],
  },
];

export const engagementProcess = [
  {
    step: '01',
    title: 'Initial Discussion',
    summary: 'Understand the problem, domain constraints, technical objectives, and stakeholders.',
    detail: 'We review your engineering or software requirements, existing data, and success criteria in an exploratory technical meeting.',
  },
  {
    step: '02',
    title: 'Scope & Feasibility',
    summary: 'Evaluate mathematical models, technical feasibility, and architectural boundaries.',
    detail: 'We define the technical assumptions, data inputs, and algorithm constraints to verify that the proposed solution is sound.',
  },
  {
    step: '03',
    title: 'Proposal & Technical Plan',
    summary: 'Present architecture, milestones, deliverables, and validation methodology.',
    detail: 'You receive a clear scope document outlining the system architecture, milestone checkpoints, and transparent verification criteria.',
  },
  {
    step: '04',
    title: 'Development & Review',
    summary: 'Implement maintainable software with continuous testing, documentation, and iteration.',
    detail: 'We build modularly, providing regular demos, readable code, and benchmark verification throughout the sprint cycle.',
  },
  {
    step: '05',
    title: 'Delivery & Support',
    summary: 'Deploy, verify, document, and support seamless handover.',
    detail: 'We deliver clean codebases, comprehensive documentation, and onboarding assistance so your team can maintain or scale the software.',
  },
];
