import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Cpu, Activity, Clock } from 'lucide-react';
import { projects } from '../data/projectsData';
import { Button } from '../components/ui/Button';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'engineering') return p.filterCategory === 'engineering';
    if (filter === 'research') return p.filterCategory === 'research';
    if (filter === 'planned') return p.filterCategory === 'planned';
    return true;
  });

  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            PRODUCTS & INITIATIVES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Building our{' '}
            <span className="text-[#00F5A0] block mt-1">
              technology portfolio.
            </span>
          </h1>
          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            Our active software projects reflect our focus on structural reliability, scientific computing,
            and computational data systems. Each initiative begins from verified engineering theory and progresses
            toward practical software tooling.
          </p>
        </div>

        {/* Filter controls (Buttons with click handlers per frontend design constitution) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#00F5A0] text-[#050D0A] font-semibold'
                : 'bg-[#0A1A13] text-[#9EBAAC] hover:text-white border border-[#163024]'
            }`}
          >
            All Initiatives ({projects.length})
          </button>
          <button
            onClick={() => setFilter('engineering')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'engineering'
                ? 'bg-[#00F5A0] text-[#050D0A] font-semibold'
                : 'bg-[#0A1A13] text-[#9EBAAC] hover:text-white border border-[#163024]'
            }`}
          >
            Engineering Software
          </button>
          <button
            onClick={() => setFilter('planned')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'planned'
                ? 'bg-[#00F5A0] text-[#050D0A] font-semibold'
                : 'bg-[#0A1A13] text-[#9EBAAC] hover:text-white border border-[#163024]'
            }`}
          >
            Planned Products
          </button>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] hover:border-[#00F5A0]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-[#00F5A0] font-semibold uppercase">
                    {project.category}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                      project.status === 'In Development'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-800/50'
                        : 'bg-sky-950/60 text-sky-300 border-sky-800/50'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white hover:text-[#00F5A0] transition-colors">
                  <Link to={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h2>

                <p className="mt-3 text-sm text-[#9EBAAC] leading-relaxed">
                  {project.summary}
                </p>

                {/* Abstract Visual Schematic Preview */}
                <div className="mt-6 p-4 rounded-xl bg-[#050D0A] border border-[#142C20]">
                  {project.id === 'bayesian-reliability-engine' ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5A0]">
                        <span>PROBABILISTIC INFERENCE GRAPH</span>
                        <span>MCMC SAMPLER</span>
                      </div>
                      <div className="h-14 flex items-center justify-between gap-2 text-[10px] font-mono text-[#7D9A8D]">
                        <div className="flex-1 p-2 bg-[#0A1A13] rounded border border-[#163024] text-center">
                          Priors f_R, f_S
                        </div>
                        <span className="text-[#00F5A0]">→</span>
                        <div className="flex-1 p-2 bg-[#0A1A13] rounded border border-[#163024] text-center">
                          Proof Load t_p
                        </div>
                        <span className="text-[#00F5A0]">→</span>
                        <div className="flex-1 p-2 bg-[#122A1F] rounded border border-[#00F5A0]/40 text-[#00F5A0] text-center font-bold">
                          β_updated
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#00F5A0]">
                        <span>MULTI-CHANNEL SENSOR TELEMETRY</span>
                        <span>10 HZ STREAM</span>
                      </div>
                      <div className="h-14 flex items-center justify-between gap-2 text-[10px] font-mono text-[#7D9A8D]">
                        <div className="flex-1 p-2 bg-[#0A1A13] rounded border border-[#163024] text-center">
                          Strain & Deflection
                        </div>
                        <span className="text-[#00F5A0]">→</span>
                        <div className="flex-1 p-2 bg-[#0A1A13] rounded border border-[#163024] text-center">
                          Thermal Normalizer
                        </div>
                        <span className="text-[#00F5A0]">→</span>
                        <div className="flex-1 p-2 bg-[#122A1F] rounded border border-[#00F5A0]/40 text-[#00F5A0] text-center font-bold">
                          Anomaly Alerts
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0A1A13] border border-[#163024] text-[#B5C7BF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-[#122A1E] flex items-center justify-between">
                <span className="text-xs font-mono text-[#6A897B]">
                  {project.plannedRelease}
                </span>

                <Button
                  to={`/projects/${project.slug}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Portfolio Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#06110D] border border-[#142C20] text-xs text-[#8BA497] flex items-start gap-3 max-w-3xl">
          <Clock className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">
              Commercial Release Status Notice
            </div>
            <span>
              Both initiatives represent active applied R&D and planned software architectures within Tebib Labs.
              Neither project is currently offered as an off-the-shelf commercial product. We welcome technical inquiries,
              academic peer dialogue, and exploratory collaboration.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
