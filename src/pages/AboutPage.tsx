import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  GraduationCap,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Lightbulb,
  CheckCircle,
  Globe2,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            <span>ABOUT TEBIB LABS</span>
            <span aria-hidden="true" className="text-[#3A5D4E]">·</span>
            <span className="text-[#9EBAAC]">{siteConfig.slogan}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Built on knowledge.{' '}
            <span className="text-[#00F5A0] block mt-1">
              Driven by engineering.
            </span>
          </h1>

          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            Tebib Labs was established to bridge academic computational research with high-performance,
            maintainable software systems designed for real-world engineering challenges.
          </p>
        </div>
      </section>

      {/* Company Story & Ethos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
              THE NAME & IDENTITY
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Wisdom in Practice
            </h2>
            <div className="p-4 rounded-lg bg-[#07150F] border border-[#163024]">
              <div className="text-xs font-mono text-[#00F5A0] mb-1">
                AMHARIC ETYMOLOGY: ጠቢብ (TEBIB)
              </div>
              <p className="text-sm text-[#B5C7BF] leading-relaxed">
                Refers to an individual possessing wisdom, deep insight, discernment, and technical mastery.
                For our engineering team, it serves as an uncompromising standard: to build with foresight,
                clarity, and disciplined craftsmanship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#9EBAAC] text-base leading-relaxed">
            <p>
              In software and physical engineering alike, complexity often accumulates unchecked. Systems
              become opaque, underlying assumptions remain undocumented, and empirical safety margins
              substitute for true understanding.
            </p>
            <p>
              Tebib Labs was created with a clear counter-principle: to apply computational thinking,
              mathematical transparency, and robust software architecture to produce digital tools that
              practicing engineers and technical teams can inspect, verify, and trust.
            </p>
            <p>
              Whether we are developing probabilistic reliability engines, sensor-stream dashboards, or
              bespoke cloud applications, we treat each system as a synthesis of engineering science and
              software discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#11261D] flex items-center justify-center text-[#00F5A0] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              OUR MISSION
            </span>
            <h3 className="text-2xl font-bold text-white">
              To develop reliable, useful software that applies engineering knowledge and computational thinking to meaningful problems.
            </h3>
            <p className="mt-4 text-sm text-[#8BA497] leading-relaxed">
              We focus our energy on practical technology: software tools with measurable impact, transparent
              methodologies, and tangible utility for engineering, business, and research environments.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#11261D] flex items-center justify-center text-[#00F5A0] mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
              OUR VISION
            </span>
            <h3 className="text-2xl font-bold text-white">
              To become a trusted developer of original software products and research-driven technologies with international reach.
            </h3>
            <p className="mt-4 text-sm text-[#8BA497] leading-relaxed">
              We aim to contribute meaningfully to global engineering software, creating tools recognized for
              computational precision, usability, and scientific integrity across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            GUIDING PRINCIPLES
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Values
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            These principles determine how we formulate code, evaluate algorithms, and conduct partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">01. WISDOM</div>
            <h3 className="text-lg font-bold text-white">Sound Judgment</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              Choosing the right tool for the actual problem, refusing unnecessary complexity, and acting with long-term foresight.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">02. RIGOR</div>
            <h3 className="text-lg font-bold text-white">Engineering Quality</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              Systematic verification, defensive software architecture, and mathematical precision across every module.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">03. HONESTY</div>
            <h3 className="text-lg font-bold text-white">Integrity & Clarity</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              Transparent assumptions, clear documentation of system boundaries, and zero exaggerated claims.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">04. INQUIRY</div>
            <h3 className="text-lg font-bold text-white">Curiosity</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              A commitment to deep technical study, exploring computational literature, and examining foundational first principles.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">05. UTILITY</div>
            <h3 className="text-lg font-bold text-white">Practical Innovation</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              Technology built for actual use, directly addressing domain challenges rather than speculative decoration.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="text-xs font-mono text-[#00F5A0] mb-2">06. EVOLUTION</div>
            <h3 className="text-lg font-bold text-white">Continuous Improvement</h3>
            <p className="mt-2 text-sm text-[#8BA497] leading-relaxed">
              Iterative testing, systematic peer review, and constant refinement of both our codebase and our engineering methods.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            LEADERSHIP & ENGINEERING
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Founder & Lead Engineer
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Founder Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A1A13] border-2 border-[#163024] shadow-[0_4px_24px_rgba(0,0,0,0.5)] group">
                <img
                  src={`${import.meta.env.BASE_URL}images/founder-portrait.png`}
                  alt="Neguse Solomon Mekonnen — Founder & Lead Engineer, Tebib Labs"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-xs font-bold text-white tracking-wide">
                    {siteConfig.founder.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#00F5A0]">
                    Founder & CEO
                  </div>
                </div>
              </div>

              {/* Verified academic badge */}
              <div className="mt-4 text-xs font-mono text-[#7A988B] space-y-1">
                <div>UPC (Barcelona) & Civil Engineering</div>
                <div className="text-[#00F5A0]">NoRISK Erasmus Mundus Scholar</div>
              </div>
            </div>

            {/* Biography & Research Foundation */}
            <div className="lg:col-span-8 space-y-5 text-sm">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {siteConfig.founder.name}
                </h3>
                <div className="text-xs font-mono text-[#00F5A0] mt-0.5">
                  {siteConfig.founder.title}
                </div>
              </div>

              <p className="text-[#B5C7BF] leading-relaxed">
                {siteConfig.founder.bio}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase text-white font-semibold">
                  Academic Background
                </div>
                <ul className="space-y-1.5 text-xs text-[#8BA497]">
                  {siteConfig.founder.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#00F5A0] font-mono">·</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase text-white font-semibold">
                  Primary Research Disciplines
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#7D9A8D]">
                  {siteConfig.founder.researchFocus.map((res, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0A1A13] border border-[#163024] text-[#B5C7BF]"
                    >
                      {res}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Outlook Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 rounded-xl bg-[#06110D] border border-[#142C20] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
              HERITAGE & HORIZON
            </span>
            <h3 className="text-xl font-bold text-white">
              Rooted in Wisdom. Built for International Scope.
            </h3>
            <p className="text-sm text-[#8BA497] leading-relaxed">
              Tebib Labs proudly traces its foundational inspiration to Ethiopian cultural traditions of wisdom and scholarship,
              combining this heritage with advanced European master’s research and global software standards.
            </p>
          </div>

          <Button to="/contact" variant="primary" size="md">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};
