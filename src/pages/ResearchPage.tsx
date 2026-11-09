import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  FileText,
  Layers,
  GraduationCap,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { featuredResearch, researchAreas, researchWorkflow } from '../data/researchData';
import { Button } from '../components/ui/Button';

export const ResearchPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            APPLIED R&D & SCIENTIFIC INQUIRY
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Research that{' '}
            <span className="text-[#00F5A0] block mt-1">
              informs engineering.
            </span>
          </h1>
          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            We ground our software tools in mathematical probability, structural mechanics, and rigorous uncertainty
            quantification. Our research investigates how empirical inspection evidence can be mathematically conditioned
            to evaluate structural reliability.
          </p>
        </div>
      </section>

      {/* Featured Master's Dissertation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            FEATURED ACADEMIC RESEARCH
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Master's Dissertation Research
          </h2>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-[#08140F] border border-[#163024] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F5A0]">
              <GraduationCap className="w-4 h-4" />
              <span>{featuredResearch.type} · {featuredResearch.year}</span>
            </div>
            <div className="text-xs font-mono text-[#7D9A8D]">
              {featuredResearch.institution}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            {featuredResearch.title}
          </h3>

          <div className="text-xs font-mono text-[#B5C7BF] flex flex-wrap items-center gap-5 py-2.5 border-y border-[#12271D]">
            <div className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}images/founder-portrait.png`}
                alt={featuredResearch.author}
                className="w-7 h-7 rounded-full object-cover object-top border border-[#00F5A0]/40"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[#6A897B]">AUTHOR:</span> <span className="text-white font-semibold">{featuredResearch.author}</span>
              </div>
            </div>
            <div>
              <span className="text-[#6A897B]">PROGRAM:</span> {featuredResearch.program}
            </div>
            <div>
              <span className="text-[#6A897B]">CASE STUDY:</span> {featuredResearch.caseStudy}
            </div>
          </div>

          <div className="text-sm text-[#9EBAAC] space-y-3 leading-relaxed">
            <p>{featuredResearch.summary}</p>
          </div>

          {/* Key Contributions */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase text-white font-semibold">
              Key Methodological Contributions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#8BA497]">
              {featuredResearch.keyContributions.map((contrib, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#050D0A] border border-[#142C20]">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Status / Honest academic disclosure */}
          <div className="pt-6 border-t border-[#122A1E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#7D9A8D] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00F5A0] shrink-0" />
              <span>{featuredResearch.statusText}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled
                className="px-4 py-2 text-xs font-medium rounded-lg bg-[#0F261C] text-[#6A897B] border border-[#163024] cursor-not-allowed flex items-center gap-2"
                title="Manuscript verification in progress; will be linked upon university repository deposit."
              >
                <span>Full PDF (Repository Deposit Pending)</span>
              </button>

              <Button
                to="/contact?inquiry=research-manuscript"
                variant="outline"
                size="sm"
              >
                Request Research Summary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research-to-Software Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            TRANSLATIONAL PIPELINE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            From Research Theory to Production Code
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            We enforce a clear translational workflow that converts mathematical formulations into maintainable, tested software components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {researchWorkflow.map((stage) => (
            <div
              key={stage.stage}
              className="p-5 rounded-xl bg-[#08140F] border border-[#163024] flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#00F5A0] font-bold mb-2">
                  {stage.stage}.
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#8BA497] leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Six Research Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            RESEARCH DOMAINS
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Core Fields of Investigation
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            Short, accurate summaries of our active computational and engineering specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#08140F] border border-[#163024] flex flex-col justify-between hover:border-[#00F5A0]/40 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-[#00F5A0] mb-2 font-semibold">
                  0{i + 1}. DOMAIN
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-[#B5C7BF] font-medium leading-relaxed mb-3">
                  {area.summary}
                </p>
                <p className="text-xs text-[#8BA497] leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
