import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pb-10 border-b border-[#142C20]">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-2">
            LEGAL & DATA PROTECTION
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-[#7D9A8D]">
            Last updated: November 2026 · Pre-launch Draft for Founder & Legal Review
          </p>
        </header>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#0B1A13] border border-[#173828] flex items-start gap-3 text-xs text-[#9EBAAC]">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Notice for Review:</span> This Privacy Policy outlines the data handling practices
            currently implemented on this website. Final legal entity registration, jurisdiction details, and regulatory filings
            are subject to confirmation prior to formal commercial operations.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm text-[#C2D2CB] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Overview & Data Controller</h2>
            <p>
              Tebib Labs ("we", "our", or "us") respects your privacy. This policy describes how we collect, handle, and protect personal
              information provided when interacting with our official corporate website ({siteConfig.name}).
            </p>
            <p>
              For privacy-related inquiries or data requests, you can contact our data compliance coordinator at{' '}
              <strong className="text-[#00F5A0] font-mono">{siteConfig.contact.email}</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>We collect only the minimum personal data necessary to evaluate and respond to technical inquiries:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#9EBAAC]">
              <li><strong>Contact Inquiry Information:</strong> Your full name, email address, optional organization, project type, and message content submitted via our contact form.</li>
              <li><strong>Technical Server Logs:</strong> Standard web server connection data (e.g., anonymized IP addresses, browser user-agent, access timestamps) strictly for security monitoring and DDoS mitigation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Purpose of Processing</h2>
            <p>Your submitted contact information is processed exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#9EBAAC]">
              <li>Evaluating and responding to software engineering inquiries, research discussions, or partnership proposals.</li>
              <li>Preparing feasibility assessments and technical proposals requested by you.</li>
              <li>Ensuring network security and preventing spam submissions.</li>
            </ul>
            <p>We do not sell, rent, or monetize your contact information or personal data to third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies and Tracking</h2>
            <p>
              The Tebib Labs website does not utilize non-essential tracking cookies, advertising pixels, or third-party behavioral profiling scripts.
              Any local storage utilized is strictly limited to interface accessibility preferences (e.g., reduced-motion or session states).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Data Retention & Security</h2>
            <p>
              Contact form communications are retained only as long as necessary to fulfill the operational purpose of the correspondence
              or until a reasonable project evaluation period concludes. We implement industry-standard encryption in transit (HTTPS/TLS)
              to safeguard data transmission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Your Rights</h2>
            <p>
              Subject to applicable data protection regulations (such as the GDPR where applicable to European users), you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#9EBAAC]">
              <li>Request access to personal information we hold about you.</li>
              <li>Request correction or deletion of your contact data.</li>
              <li>Withdraw consent to communications at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <strong className="text-[#00F5A0] font-mono">{siteConfig.contact.email}</strong>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#142C20] flex items-center justify-between text-xs text-[#7D9A8D]">
          <Link to="/terms" className="hover:text-[#00F5A0] transition-colors">
            View Terms of Use →
          </Link>
          <Link to="/" className="hover:text-[#00F5A0] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
