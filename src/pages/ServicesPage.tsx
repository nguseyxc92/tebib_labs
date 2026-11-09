import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Database,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { services, engagementProcess } from '../data/servicesData';
import { Button } from '../components/ui/Button';

export const ServicesPage: React.FC = () => {
  const serviceIcons = {
    'custom-software': <Code2 className="w-6 h-6 text-[#00F5A0]" />,
    'scientific-computing': <Cpu className="w-6 h-6 text-[#00F5A0]" />,
    'data-systems': <Database className="w-6 h-6 text-[#00F5A0]" />,
    'applied-rd': <FlaskConical className="w-6 h-6 text-[#00F5A0]" />,
  };

  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            TECHNICAL SERVICES & CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Software engineering for{' '}
            <span className="text-[#00F5A0] block mt-1">
              complex problems.
            </span>
          </h1>
          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            We partner with engineering organizations, research teams, and businesses to build robust software systems,
            computational tools, and mathematical models designed for accuracy, maintainability, and real-world utility.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {services.map((svc) => (
          <div
            key={svc.id}
            id={svc.id}
            className="p-8 md:p-10 rounded-2xl bg-[#08140F] border border-[#163024] scroll-mt-24 transition-all duration-200 hover:border-[#00F5A0]/40"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0F261C] flex items-center justify-center border border-[#1A3F30]">
                    {serviceIcons[svc.id as keyof typeof serviceIcons]}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
                      {svc.kicker}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-[#B5C7BF] leading-relaxed pt-2">
                  {svc.description}
                </p>
              </div>

              <div className="shrink-0 lg:pt-2">
                <Button
                  to={`/contact?service=${encodeURIComponent(svc.title)}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss This Service
                </Button>
              </div>
            </div>

            {/* Sub-grid: Capabilities, Typical Problems, Deliverables */}
            <div className="mt-10 pt-8 border-t border-[#122A1E] grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              {/* Capabilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-white font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
                  <span>Key Capabilities</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8BA497]">
                  {svc.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00F5A0] font-mono">·</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Typical Problems Addressed */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-white font-semibold flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#00F5A0]" />
                  <span>Problems Addressed</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8BA497]">
                  {svc.typicalProblems.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono">·</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example Deliverables & Tech */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-white font-semibold flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#00F5A0]" />
                  <span>Deliverables & Stack</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8BA497]">
                  {svc.exampleDeliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00F5A0] font-mono">·</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3">
                  <div className="text-[11px] font-mono text-[#6A897B] uppercase mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.suitableTech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1A13] border border-[#163024] text-[#B5C7BF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How Engagements Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#142C20]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            ENGAGEMENT LIFECYCLE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How Engagements Work
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            We follow an open, collaborative process structured to validate technical feasibility before code is written.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {engagementProcess.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-[#08140F] border border-[#163024] flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#00F5A0] font-bold mb-2">
                  {step.step}.
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8BA497] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 md:p-10 rounded-2xl bg-[#07150F] border border-[#163024] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to explore a technical engagement?
          </h2>
          <p className="text-sm text-[#9EBAAC] max-w-xl mx-auto leading-relaxed">
            Every project begins with a focused discussion of the technical scope, data constraints, and expected outcomes.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
