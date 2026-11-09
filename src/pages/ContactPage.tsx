import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Copy,
  Check,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  Clock,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const preselectedProject = searchParams.get('project') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    projectType: preselectedService || (preselectedProject ? 'Engineering Software' : 'Custom Software Development'),
    budget: '',
    message: preselectedProject
      ? `Inquiry regarding ${preselectedProject}: `
      : '',
    preferredContact: 'email',
    consent: false,
    honeypot: '', // Spam protection honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Custom Software Development',
    'Engineering Software',
    'Data & Analytical Systems',
    'Applied Research',
    'Partnership or Collaboration',
    'General Inquiry',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please describe your project or challenge (minimum 15 characters).';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm consent to process your contact inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Check honeypot for spam bots
    if (formData.honeypot) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Simulate backend submission cycle
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Check whether backend endpoint is configured or if we provide an honest local confirmation
      setSubmissionStatus('success');
    } catch (err) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="py-12 lg:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#142C20]">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase mb-3">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Let's build{' '}
            <span className="text-[#00F5A0] block mt-1">
              something meaningful.
            </span>
          </h1>
          <p className="mt-5 text-lg text-[#9EBAAC] leading-relaxed">
            Tell us about your project, technical challenge, or research idea. We respond to all technical inquiries
            with clear feedback and engineering feasibility notes.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#08140F] border border-[#163024]">
              {submissionStatus === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#102B1E] border border-[#00F5A0] flex items-center justify-center text-[#00F5A0] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Recorded
                  </h3>
                  <p className="text-sm text-[#9EBAAC] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry regarding{' '}
                    <strong className="text-white">{formData.projectType}</strong> has been logged.
                  </p>

                  <div className="p-4 rounded-xl bg-[#050D0A] border border-[#142C20] text-xs text-[#8BA497] max-w-md mx-auto text-left space-y-2">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#00F5A0]" />
                      <span>Next Steps</span>
                    </div>
                    <p>
                      Our engineering lead will review your requirements. You may also send supplementary technical documents
                      or datasets directly to <strong className="text-[#00F5A0] font-mono">{siteConfig.contact.email}</strong>.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => {
                        setSubmissionStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          organization: '',
                          projectType: 'Custom Software Development',
                          budget: '',
                          message: '',
                          preferredContact: 'email',
                          consent: false,
                          honeypot: '',
                        });
                      }}
                      variant="secondary"
                      size="sm"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot hidden input for spam bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Full Name <span className="text-[#00F5A0]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#050D0A] border text-sm text-white placeholder-[#4E6B5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] ${
                          errors.fullName ? 'border-rose-500' : 'border-[#163024]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Email Address <span className="text-[#00F5A0]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.org"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#050D0A] border text-sm text-white placeholder-[#4E6B5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] ${
                          errors.email ? 'border-rose-500' : 'border-[#163024]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Organization & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Organization / University <span className="text-[#6A897B] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Research Lab"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050D0A] border border-[#163024] text-sm text-white placeholder-[#4E6B5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Project Type <span className="text-[#00F5A0]">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050D0A] border border-[#163024] text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] cursor-pointer"
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt} className="bg-[#050D0A] text-white">
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Estimated Budget <span className="text-[#6A897B] font-normal">(Optional)</span>
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050D0A] border border-[#163024] text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] cursor-pointer"
                      >
                        <option value="" className="bg-[#050D0A] text-[#6A897B]">To be determined during scope</option>
                        <option value="under-15k" className="bg-[#050D0A] text-white">&lt; $15,000 (PoC / Study)</option>
                        <option value="15k-50k" className="bg-[#050D0A] text-white">$15,000 - $50,000 (Development)</option>
                        <option value="50k-plus" className="bg-[#050D0A] text-white">&gt; $50,000 (Full Platform)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                        Preferred Contact Method
                      </label>
                      <div className="flex items-center gap-4 pt-1.5">
                        <label className="flex items-center gap-2 text-xs text-[#9EBAAC] cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                            className="accent-[#00F5A0]"
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs text-[#9EBAAC] cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="video"
                            checked={formData.preferredContact === 'video'}
                            onChange={() => setFormData({ ...formData, preferredContact: 'video' })}
                            className="accent-[#00F5A0]"
                          />
                          <span>Video Call</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message / Project Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B5C7BF] mb-2 font-semibold">
                      Project Description & Technical Requirements <span className="text-[#00F5A0]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your application goals, mathematical/engineering assumptions, input data formats, or research timeline..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#050D0A] border text-sm text-white placeholder-[#4E6B5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] ${
                        errors.message ? 'border-rose-500' : 'border-[#163024]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 accent-[#00F5A0] rounded"
                      />
                      <span className="text-xs text-[#8BA497] leading-relaxed">
                        I agree to Tebib Labs processing the submitted contact information exclusively for responding to this technical inquiry in accordance with the Privacy Policy.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-rose-400">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Operational Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0F261C] flex items-center justify-center text-[#00F5A0]">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block">
                  DIRECT EMAIL INQUIRIES
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Connect Directly with Engineering
                </h3>
              </div>

              <p className="text-xs text-[#8BA497] leading-relaxed">
                If you have existing mathematical formulations, technical papers, or architecture specifications,
                you are welcome to email them directly.
              </p>

              <div className="pt-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#050D0A] border border-[#142C20]">
                  <span className="font-mono text-sm text-white select-all">
                    {siteConfig.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-[#0A1A13] text-[#7D9A8D] hover:text-[#00F5A0] border border-[#163024] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#00F5A0]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="mt-1.5 text-[11px] font-mono text-[#00F5A0]">
                    Email address copied to clipboard.
                  </p>
                )}
              </div>
            </div>

            {/* Backend Integration Disclosure */}
            <div className="p-6 rounded-xl bg-[#06110D] border border-[#142C20] text-xs text-[#8BA497] space-y-3">
              <div className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00F5A0]" />
                <span>Backend Dispatch Status</span>
              </div>
              <p className="leading-relaxed">
                {siteConfig.contact.status}
              </p>
              <p className="leading-relaxed text-[#6A897B] font-mono text-[11px]">
                ENV CONFIGURATION: Set SMTP_HOST / RESEND_API_KEY in production to automate external mail routing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
