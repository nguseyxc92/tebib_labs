import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pb-10 border-b border-[#142C20]">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-2">
            LEGAL & WEBSITE USAGE
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs font-mono text-[#7D9A8D]">
            Last updated: November 2026 · Pre-launch Draft for Founder & Legal Review
          </p>
        </header>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#0B1A13] border border-[#173828] flex items-start gap-3 text-xs text-[#9EBAAC]">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Notice:</span> These terms govern your access to and use of this website.
            The site provides informational descriptions of software research, academic concepts, and technical capabilities.
            It does not constitute certified civil engineering safety approvals for physical structures.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm text-[#C2D2CB] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Tebib Labs website, you agree to comply with and be bound by these Terms of Use.
              If you do not agree, please discontinue using the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Informational & Research Nature of Content</h2>
            <p>
              The materials presented on this website—including articles, mathematical summaries, software architectures,
              and interactive demonstrations—are published for informational, educational, and technical discussion purposes.
            </p>
            <p className="text-xs text-[#9EBAAC]">
              <strong>Limitation of Structural Engineering Advice:</strong> No content or interactive visualization on this site
              should be construed as certified structural design calculations, professional engineering sign-offs, or regulatory compliance
              approvals for physical infrastructure without independent licensed engineering review.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              All original content, branding, trademarks (including "Tebib Labs", the geometric structural mark, and the slogan "Be Wise."),
              text, code samples, and diagrams are the intellectual property of Tebib Labs and its founder, Neguse Solomon Mekonnen,
              unless otherwise credited.
            </p>
            <p>
              You may view, download, and print pages for personal or internal technical evaluation, provided that copyright and trademark
              notices remain intact.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Project Status & Commercial Availability</h2>
            <p>
              Descriptions of projects labeled "In Development" (e.g., Bayesian Reliability Updating Engine) or "Planned"
              (e.g., Structural Health Monitoring Platform) represent active research and planned architectures. Such descriptions
              do not constitute binding warranties of future commercial release dates or guaranteed feature sets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed in accordance with applicable laws, subject to final formal corporate
              registration and jurisdiction selection by Tebib Labs prior to public commercial launch.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#142C20] flex items-center justify-between text-xs text-[#7D9A8D]">
          <Link to="/privacy" className="hover:text-[#00F5A0] transition-colors">
            View Privacy Policy →
          </Link>
          <Link to="/" className="hover:text-[#00F5A0] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
