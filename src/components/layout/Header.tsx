import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../data/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Research', path: '/research' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#050D0A]/90 backdrop-blur-md border-b border-[#142C20] shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & official mark */}
          <div className="flex items-center shrink-0">
            <Logo variant="full" size="md" />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors duration-150 py-1 ${
                    isActive
                      ? 'text-[#00F5A0] font-semibold border-b-2 border-[#00F5A0]'
                      : 'text-[#9EBAAC] hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#00F5A0] text-[#050D0A] hover:bg-[#15FFAE] transition-all duration-150 shadow-[0_2px_12px_rgba(0,245,160,0.15)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#9EBAAC] hover:text-white hover:bg-[#0E2219] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] bg-[#050D0A]/95 backdrop-blur-xl border-t border-[#142C20] p-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#0E251C] text-[#00F5A0] font-semibold border-l-2 border-[#00F5A0]'
                      : 'text-[#B5C7BF] hover:text-white hover:bg-[#0B1B14]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#142C20] flex flex-col gap-4">
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-lg bg-[#00F5A0] text-[#050D0A] font-semibold text-center text-sm shadow-[0_2px_16px_rgba(0,245,160,0.2)]"
            >
              Start a Conversation
            </Link>

            <div className="text-center text-xs text-[#698476] font-mono">
              TEBIB LABS · BE WISE.
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
