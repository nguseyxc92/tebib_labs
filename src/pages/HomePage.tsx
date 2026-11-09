import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Lightbulb,
} from 'lucide-react';
import { HeroMeshCanvas } from '../components/visualizations/HeroMeshCanvas';
import { BayesianCurveInteractive } from '../components/visualizations/BayesianCurveInteractive';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../data/siteConfig';
import { projects } from '../data/projectsData';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-8 pb-16 lg:py-20 overflow-hidden bg-[#050D0A]">
        {/* Subtle background ambient mesh */}
        <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#0E3524]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technical Kicker (Quiet unboxed text per constitution) */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F5A0] tracking-wider uppercase">
                <span>{siteConfig.subtagline}</span>
                <span aria-hidden="true" className="text-[#3A5D4E]">·</span>
                <span className="text-[#9EBAAC]">{siteConfig.slogan}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                Engineering Software.{' '}
                <span className="text-[#00F5A0] block mt-1">
                  Building What Matters.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#9EBAAC] max-w-2xl leading-relaxed">
                {siteConfig.description}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button to="/projects" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Our Work
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Start a Conversation
                </Button>
              </div>

              {/* Quick Trust / Technical Meta */}
              <div className="pt-6 border-t border-[#122A1E] flex flex-wrap items-center gap-6 text-xs text-[#7B998C] font-mono">
                <div>
                  <span className="text-white font-semibold">FOUNDED ON RIGOR:</span>{' '}
                  Civil & Computational Science
                </div>
                <div className="hidden sm:block text-[#274F3B]">|</div>
                <div>
                  <span className="text-white font-semibold">CORE SPECIALTY:</span>{' '}
                  Probabilistic Models & Numerical Systems
                </div>
              </div>
            </div>

            {/* Right Column: Original Computational Visualization */}
            <div className="lg:col-span-5 h-full">
              <div className="relative">
                <HeroMeshCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: INTRODUCTION ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#07130E]/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Thoughtful engineering. Practical technology.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9EBAAC] leading-relaxed">
              Tebib Labs is a software engineering and applied R&D company developing digital solutions
              across engineering, research, and business applications. We combine computational thinking,
              software architecture, and technical problem-solving to build technology designed for real use.
            </p>
          </div>

          {/* 3 Core Principles */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#0A1712] border border-[#163024] hover:border-[#00F5A0]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#11261D] flex items-center justify-center text-[#00F5A0] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Engineering Rigor</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Systems built with clear assumptions, careful implementation, and measurable quality.
                We reject opaque black boxes in favor of verifiable mathematical models and robust code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A1712] border border-[#163024] hover:border-[#00F5A0]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#11261D] flex items-center justify-center text-[#00F5A0] mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Practical Innovation</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Technology developed around meaningful problems and useful outcomes. We prioritize solutions
                that deliver tangible technical and operational value rather than chasing superficial trends.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A1712] border border-[#163024] hover:border-[#00F5A0]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#11261D] flex items-center justify-center text-[#00F5A0] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Continuous Learning</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Research, experimentation, and continuous improvement guide how we work. We actively test
                new computational paradigms, integrate user feedback, and refine our software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: WHAT WE DO (SERVICES) ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#050D0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
                CAPABILITIES & DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Software built with purpose.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00F5A0] hover:underline"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="p-7 rounded-xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0F261C] flex items-center justify-center text-[#00F5A0] mb-5 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                  Custom Software Engineering
                </h3>
                <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                  Web applications, APIs, internal tools, automation, and scalable software systems built with production discipline.
                </p>
                <div className="mt-4 pt-4 border-t border-[#12271D] flex flex-wrap gap-2 text-xs font-mono text-[#6A897B]">
                  <span>React</span>
                  <span aria-hidden="true">·</span>
                  <span>TypeScript</span>
                  <span aria-hidden="true">·</span>
                  <span>Node.js</span>
                  <span aria-hidden="true">·</span>
                  <span>FastAPI</span>
                </div>
              </div>
              <div className="mt-6 pt-3">
                <Link
                  to="/services#custom-software"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F5A0] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-7 rounded-xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0F261C] flex items-center justify-center text-[#00F5A0] mb-5 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                  Engineering & Scientific Computing
                </h3>
                <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                  Computational models, numerical simulation tools, uncertainty analysis, and engineering applications.
                </p>
                <div className="mt-4 pt-4 border-t border-[#12271D] flex flex-wrap gap-2 text-xs font-mono text-[#6A897B]">
                  <span>Python / NumPy</span>
                  <span aria-hidden="true">·</span>
                  <span>SciPy</span>
                  <span aria-hidden="true">·</span>
                  <span>Reliability Analysis</span>
                  <span aria-hidden="true">·</span>
                  <span>WebAssembly</span>
                </div>
              </div>
              <div className="mt-6 pt-3">
                <Link
                  to="/services#scientific-computing"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F5A0] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-7 rounded-xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0F261C] flex items-center justify-center text-[#00F5A0] mb-5 group-hover:scale-105 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                  Data Systems & Analytics
                </h3>
                <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                  Data processing, analytical dashboards, statistical modeling, and decision-support software.
                </p>
                <div className="mt-4 pt-4 border-t border-[#12271D] flex flex-wrap gap-2 text-xs font-mono text-[#6A897B]">
                  <span>Time-Series Ingestion</span>
                  <span aria-hidden="true">·</span>
                  <span>Anomaly Detection</span>
                  <span aria-hidden="true">·</span>
                  <span>Interactive Dashboards</span>
                </div>
              </div>
              <div className="mt-6 pt-3">
                <Link
                  to="/services#data-systems"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F5A0] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-7 rounded-xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0F261C] flex items-center justify-center text-[#00F5A0] mb-5 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                  Applied Research & Prototyping
                </h3>
                <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                  Research software, proof-of-concept systems, algorithm development, and technical experimentation.
                </p>
                <div className="mt-4 pt-4 border-t border-[#12271D] flex flex-wrap gap-2 text-xs font-mono text-[#6A897B]">
                  <span>Feasibility Studies</span>
                  <span aria-hidden="true">·</span>
                  <span>PoC Implementation</span>
                  <span aria-hidden="true">·</span>
                  <span>Bayesian Modeling</span>
                </div>
              </div>
              <div className="mt-6 pt-3">
                <Link
                  to="/services#applied-rd"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F5A0] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: FEATURED PROJECTS ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#07130E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              APPLIED R&D INITIATIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From research to working software.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9EBAAC]">
              We translate rigorous probabilistic theory and structural mechanics into modular computational software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROJECT 001 */}
            <div className="p-8 rounded-xl bg-[#091811] border border-[#163024] flex flex-col justify-between hover:border-[#00F5A0]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-[#00F5A0] font-semibold">PROJECT 001</span>
                  <span className="text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50">
                    In Development
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Bayesian Reliability Updating Engine
                </h3>
                <div className="text-xs font-mono text-[#7D9A8D] mt-1">
                  Computational Engineering / Scientific Software
                </div>

                <p className="mt-4 text-sm text-[#9EBAAC] leading-relaxed">
                  A computational software project focused on structural reliability analysis, uncertainty quantification,
                  and Bayesian updating using engineering evidence.
                </p>

                {/* Abstract technical visual for Project 001 */}
                <div className="mt-6 p-4 rounded-lg bg-[#050D0A] border border-[#12271D]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5A0] mb-2">
                    <span>BAYESIAN INFERENCE PIPELINE</span>
                    <span>P_f = Φ(-β)</span>
                  </div>
                  <div className="h-16 flex items-center justify-between gap-1 text-[10px] font-mono text-[#7E9C8E]">
                    <div className="p-2 rounded bg-[#0A1A13] border border-[#163024] flex-1 text-center">
                      Prior Distribution
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                    <div className="p-2 rounded bg-[#0A1A13] border border-[#163024] flex-1 text-center">
                      Proof Load Evidence
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                    <div className="p-2 rounded bg-[#10291D] border border-[#00F5A0]/40 text-[#00F5A0] flex-1 text-center">
                      Updated Posterior β
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-1.5 text-xs text-[#8BA497]">
                  <div className="font-semibold text-white mb-2">Planned Capabilities:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Probabilistic reliability analysis & Monte Carlo simulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Bayesian inference conditioned on proof-load test evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Monitoring-data integration & reproducible engineering reporting</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#122A1E]">
                <Button to="/projects/bayesian-reliability-engine" variant="primary" size="md">
                  Explore Project
                </Button>
              </div>
            </div>

            {/* PROJECT 002 */}
            <div className="p-8 rounded-xl bg-[#091811] border border-[#163024] flex flex-col justify-between hover:border-[#00F5A0]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-[#00F5A0] font-semibold">PROJECT 002</span>
                  <span className="text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/50">
                    Planned
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Structural Health Monitoring Platform
                </h3>
                <div className="text-xs font-mono text-[#7D9A8D] mt-1">
                  Engineering Software / Data Systems
                </div>

                <p className="mt-4 text-sm text-[#9EBAAC] leading-relaxed">
                  A planned software platform for organizing, visualizing, and interpreting structural monitoring data,
                  with a long-term goal of integrating probabilistic reliability assessment.
                </p>

                {/* Abstract technical visual for Project 002 */}
                <div className="mt-6 p-4 rounded-lg bg-[#050D0A] border border-[#12271D]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5A0] mb-2">
                    <span>TELEMETRY INGESTION ENGINE</span>
                    <span>10 HZ MULTI-CHANNEL</span>
                  </div>
                  <div className="h-16 flex items-center justify-between gap-1 text-[10px] font-mono text-[#7E9C8E]">
                    <div className="p-2 rounded bg-[#0A1A13] border border-[#163024] flex-1 text-center">
                      Strain / Deflection
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                    <div className="p-2 rounded bg-[#0A1A13] border border-[#163024] flex-1 text-center">
                      Thermal Filter
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                    <div className="p-2 rounded bg-[#10291D] border border-[#00F5A0]/40 text-[#00F5A0] flex-1 text-center">
                      Anomaly Triggers
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-1.5 text-xs text-[#8BA497]">
                  <div className="font-semibold text-white mb-2">Planned Capabilities:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Multi-channel sensor-data ingestion & time-series visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Structural response dashboards & baseline anomaly detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Future direct coupling with Bayesian reliability models</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#122A1E]">
                <Button to="/projects/structural-health-monitoring" variant="secondary" size="md">
                  View Concept
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: OUR APPROACH ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#050D0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How we build.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9EBAAC]">
              A disciplined, four-stage engineering process ensuring systems are mathematically grounded and production-grade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] mb-2 font-bold">01. DISCOVER</div>
              <h3 className="text-lg font-bold text-white">Problem Definition</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Understand the physical problem, stakeholder constraints, data quality, and technical requirements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] mb-2 font-bold">02. DESIGN</div>
              <h3 className="text-lg font-bold text-white">System Architecture</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Define the architecture, mathematical algorithms, limit-state functions, and validation strategy.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] mb-2 font-bold">03. DEVELOP</div>
              <h3 className="text-lg font-bold text-white">Precision Implementation</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Implement maintainable, strictly-typed software with modular components, automated tests, and clear documentation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] mb-2 font-bold">04. VALIDATE</div>
              <h3 className="text-lg font-bold text-white">Verification & Refinement</h3>
              <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
                Evaluate results against analytical benchmarks, resolve numerical discrepancies, and refine for performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: RESEARCH MEETS SOFTWARE ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#07130E]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
                COMPUTATIONAL RIGOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
                Where computation meets engineering.
              </h2>
              <p className="text-sm sm:text-base text-[#9EBAAC] leading-relaxed">
                Tebib Labs applies mathematical modeling, uncertainty quantification, computational methods,
                and modern software engineering to develop technically grounded tools.
              </p>

              <div className="space-y-3 text-sm text-[#B5C7BF]">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#00F5A0] font-mono shrink-0">·</span>
                  <span><strong>Probability Distributions:</strong> Explicit random-variable characterization for material resistance and live loads.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#00F5A0] font-mono shrink-0">·</span>
                  <span><strong>Numerical Models:</strong> Vectorized matrix limit-state routines supporting high-iteration Monte Carlo evaluations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#00F5A0] font-mono shrink-0">·</span>
                  <span><strong>Bayesian Inference:</strong> Systematic updating of safety indices conditioned on physical proof-load and sensor observations.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/research" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Our Research
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BayesianCurveInteractive />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: TECHNOLOGY EXPERTISE ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#050D0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              TECHNICAL STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools selected for the problem.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9EBAAC]">
              We choose mature, performant languages and computational frameworks that guarantee reproducibility and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-5 rounded-lg bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] uppercase mb-2">Languages</div>
              <ul className="space-y-1.5 text-sm text-white">
                <li>Python</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>C++</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] uppercase mb-2">Frontend</div>
              <ul className="space-y-1.5 text-sm text-white">
                <li>React</li>
                <li>Modern CSS / Tailwind</li>
                <li>Canvas & SVG Graphics</li>
                <li>WebGL Foundations</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] uppercase mb-2">Backend & APIs</div>
              <ul className="space-y-1.5 text-sm text-white">
                <li>FastAPI</li>
                <li>Node.js / Express</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] uppercase mb-2">Computational</div>
              <ul className="space-y-1.5 text-sm text-white">
                <li>NumPy</li>
                <li>SciPy</li>
                <li>Numerical Simulation</li>
                <li>Statistical Computing</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#08140F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] uppercase mb-2">Engineering Practices</div>
              <ul className="space-y-1.5 text-sm text-white">
                <li>Git Version Control</li>
                <li>Automated Unit Testing</li>
                <li>CI/CD Workflows</li>
                <li>Docker Containers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: COMPANY PHILOSOPHY ---------------- */}
      <section className="py-24 lg:py-32 border-t border-[#122A1E] bg-[#07150F] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-widest block mb-4">
            OUR PHILOSOPHY
          </span>

          <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-sans">
            "Be Wise."
          </div>

          <p className="mt-6 text-lg sm:text-xl text-[#9EBAAC] max-w-2xl mx-auto leading-relaxed">
            Technology is most valuable when knowledge, creativity, and sound engineering come together.
          </p>

          <div className="mt-8 text-xs font-mono text-[#6A897B] tracking-wider uppercase">
            TEBIB LABS · DERIVED FROM THE AMHARIC WORD FOR WISDOM
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 9: FINAL CTA ---------------- */}
      <section className="py-20 lg:py-28 border-t border-[#122A1E] bg-[#050D0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Have a problem worth solving?
          </h2>
          <p className="text-base sm:text-lg text-[#9EBAAC] max-w-xl mx-auto leading-relaxed">
            Whether you are exploring a software product, an engineering application, or a research-driven idea,
            we would like to understand the challenge.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Discuss a Project
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
