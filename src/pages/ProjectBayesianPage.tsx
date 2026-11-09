import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Cpu,
  Layers,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { BayesianCurveInteractive } from '../components/visualizations/BayesianCurveInteractive';
import { Button } from '../components/ui/Button';

export const ProjectBayesianPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      {/* Top Breadcrumb & Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7D9A8D] hover:text-[#00F5A0] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#142C20]">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider">
            PROJECT 001 · COMPUTATIONAL ENGINEERING / SCIENTIFIC SOFTWARE
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-950/60 text-amber-300 border border-amber-800/50">
            In Development
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl text-balance">
          Bayesian Reliability Updating Engine
        </h1>

        <p className="mt-4 text-xl text-[#00F5A0] font-medium max-w-3xl">
          Computational tools for uncertainty-aware structural reliability assessment.
        </p>

        <p className="mt-4 text-base text-[#9EBAAC] max-w-3xl leading-relaxed">
          A computational software framework combining explicit probability distributions, structural
          limit-state evaluation, Monte Carlo sampling, and Bayesian updating to integrate diagnostic
          monitoring data and proof-load testing evidence into actionable reliability indices.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            to="/contact?project=bayesian-engine"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Discuss the Research
          </Button>
          <Button to="/research" variant="secondary" size="md">
            View Research Foundation
          </Button>
        </div>
      </section>

      {/* The Problem & The Computational Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] space-y-4">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>THE ENGINEERING CHALLENGE</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Deterministic Safety vs. Real Structural Evidence
            </h2>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              Traditional civil engineering assessments for aging infrastructure rely heavily on standardized
              safety factors and conservative design-code assumptions regarding material resistance, dead loads,
              and live traffic actions.
            </p>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              When a bridge or structure approaches its theoretical design life, deterministic formulas often
              mandate premature weight restrictions or costly replacements—even when physical inspection,
              proof loading, and monitoring sensors demonstrate substantial residual load-bearing capacity.
            </p>
          </div>

          {/* Approach */}
          <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] space-y-4">
            <div className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>OUR COMPUTATIONAL APPROACH</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Evidence-Conditioned Probabilistic Updating
            </h2>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              We structure the reliability assessment problem in terms of explicit random variables X and limit-state
              equations g(X) ≤ 0. When physical test data (such as proof-load survival without violating deformation
              stop criteria) is observed, we apply Bayes’ theorem to condition the prior resistance distributions.
            </p>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              This mathematical updating process truncates lower-tail uncertainty, producing a refined posterior
              distribution and an updated reliability index β that directly reflects empirical evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Preview Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Computational Pipeline & Data Flow
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            The engine is organized into modular stages, separating physical input assumptions from numerical sampling and output synthesis.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#06110D] border border-[#163024]">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center">
            {/* Stage 1 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 01</div>
              <div className="text-sm font-bold text-white mb-2">Inputs</div>
              <p className="text-[11px] text-[#8BA497]">
                Geometry, material priors, proof-load test levels, sensor thresholds.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 02</div>
              <div className="text-sm font-bold text-white mb-2">Probability Models</div>
              <p className="text-[11px] text-[#8BA497]">
                Lognormal, Normal, Weibull distributions with correlation matrices.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 03</div>
              <div className="text-sm font-bold text-white mb-2">Limit-State Functions</div>
              <p className="text-[11px] text-[#8BA497]">
                g(X) = R(X) - S(X) for bending, shear, deflection, and fatigue.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 04</div>
              <div className="text-sm font-bold text-white mb-2">Numerical Inference</div>
              <p className="text-[11px] text-[#8BA497]">
                Monte Carlo, Subset simulation, MCMC likelihood updating.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 05</div>
              <div className="text-sm font-bold text-white mb-2">Reliability Metrics</div>
              <p className="text-[11px] text-[#8BA497]">
                Failure probability P_f and updated reliability index β.
              </p>
            </div>

            {/* Stage 6 */}
            <div className="p-4 rounded-xl bg-[#091A13] border border-[#163024] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-[#00F5A0] mb-1">STAGE 06</div>
              <div className="text-sm font-bold text-white mb-2">Reports & Visualization</div>
              <p className="text-[11px] text-[#8BA497]">
                Interactive PDF/JSON reports with convergence diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demonstration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            INTERACTIVE ENGINE PROTOTYPE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Prior vs. Posterior Probability Updating
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            Adjust the applied proof load and measurement precision parameters below to inspect real-time shifts in posterior resistance distributions and reliability index β.
          </p>
        </div>

        <BayesianCurveInteractive />
      </section>

      {/* Planned Technical Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            SPECIFICATION
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Planned Technical Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">Random-Variable Modeling</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Define stochastic distributions for material strength, section modulus, dead load, and live load effects with user-specified correlation structures.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">Limit-State Evaluation</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Modular formulation of Ultimate Limit States (ULS) and Serviceability Limit States (SLS) with vectorized evaluation for speed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">MCMC & Sampling Engines</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Adaptive Metropolis-Hastings and Hamiltonian Monte Carlo samplers engineered specifically for low-probability structural failure domains.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">Monitoring-Data Interpretation</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Automated ingestion of strain gauge time-series and deflection stop criteria recorded during diagnostic bridge load tests.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">Convergence Diagnostics</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Rigorous verification routines including Gelman-Rubin diagnostics, effective sample size (ESS) calculation, and trace plot inspection.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <h3 className="text-base font-bold text-white mb-2">Reproducible Engineering Reporting</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Full provenance tracking: random number generator seeds, mathematical formulas, and input distributions packaged into auditable reports.
            </p>
          </div>
        </div>
      </section>

      {/* Research Foundation & Validation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="p-8 md:p-10 rounded-2xl bg-[#06110D] border border-[#163024] space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[#00F5A0]" />
            <div>
              <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
                ACADEMIC PROVENANCE
              </span>
              <h2 className="text-2xl font-bold text-white">
                Research Foundation and Validation
              </h2>
            </div>
          </div>

          <div className="text-sm text-[#9EBAAC] space-y-4 leading-relaxed">
            <p>
              The algorithmic core of this engine is founded on the master’s thesis research completed by Tebib Labs founder
              Neguse Solomon Mekonnen within the Erasmus Mundus NoRISK program at Universitat Politècnica de Catalunya:
            </p>

            <div className="p-4 rounded-lg bg-[#0A1A13] border border-[#163024] text-xs font-mono text-white">
              "Bayesian Updating of Bridge Structural Reliability Using Monitoring Data, Stop Criteria, and Proof Load Testing: A Case Study of the Zijlweg Viaduct" (2026)
            </div>

            <p>
              The study used monitoring information from proof-load testing of the <strong>Zijlweg Viaduct</strong> to assess bridge reliability
              and examine the mathematical relationship between monitoring evidence, stop criteria, and probabilistic structural assessment.
            </p>

            <p>
              <strong>Validation Status Notice:</strong> Numerical verification, benchmark comparison against analytical solutions,
              uncertainty characterization, and transparent assumptions are central to the development process. In keeping with our integrity
              principles, Tebib Labs does not claim that the engine is a commercially certified or officially approved bridge assessment system
              until formal peer-reviewed benchmark evidence is released.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">
          Interested in the research or computational collaboration?
        </h2>
        <p className="text-sm text-[#9EBAAC] max-w-xl mx-auto">
          We welcome dialogue with academic researchers, infrastructure asset managers, and civil structural engineers.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button to="/contact" variant="primary" size="lg">
            Contact Tebib Labs
          </Button>
          <Button to="/projects" variant="secondary" size="lg">
            Back to All Projects
          </Button>
        </div>
      </section>
    </div>
  );
};
