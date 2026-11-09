import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, BookOpen } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#142C20] bg-[#030907] text-[#9EBAAC] relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00F5A0]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" size="md" />

            <div className="pt-2">
              <span className="text-xs font-mono text-[#00F5A0] tracking-widest uppercase block">
                {siteConfig.slogan}
              </span>
              <p className="mt-2 text-sm text-[#8BA497] max-w-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#081510] border border-[#163024] text-[#8BA497] hover:text-[#00F5A0] hover:border-[#00F5A0]/40 transition-colors"
                aria-label="Tebib Labs on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#081510] border border-[#163024] text-[#8BA497] hover:text-[#00F5A0] hover:border-[#00F5A0]/40 transition-colors"
                aria-label="Tebib Labs on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#081510] border border-[#163024] text-[#8BA497] hover:text-[#00F5A0] hover:border-[#00F5A0]/40 transition-colors"
                aria-label="ResearchGate Publications"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00F5A0] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00F5A0] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00F5A0] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#00F5A0] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-[#00F5A0] transition-colors">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#00F5A0] transition-colors">
                  Insights & Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00F5A0] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects & Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Featured Systems
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/projects/bayesian-reliability-engine"
                  className="hover:text-[#00F5A0] transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">Bayesian Reliability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5B796C] group-hover:text-[#00F5A0] transition-colors shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/structural-health-monitoring"
                  className="hover:text-[#00F5A0] transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">SHM Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5B796C] group-hover:text-[#00F5A0] transition-colors shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="hover:text-[#00F5A0] transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">Zijlweg Viaduct Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5B796C] group-hover:text-[#00F5A0] transition-colors shrink-0" />
                </Link>
              </li>
              <li className="pt-2 text-xs font-mono text-[#6A897B]">
                STATUS: IN DEVELOPMENT & PLANNED
              </li>
            </ul>
          </div>

          {/* Legal & Inquiries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-xs text-[#8BA497] leading-relaxed">
                For research collaboration, technical development, or exploratory consultations:
              </p>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:text-[#00F5A0] font-mono text-xs block transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00F5A0] hover:underline"
                >
                  <span>Submit project brief</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#10241A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A897B]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#00F5A0] font-mono">{siteConfig.slogan}</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="font-mono text-[11px] text-[#557064]">
              ETHIOPIAN ROOTS · GLOBAL OUTLOOK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
