import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 lg:py-36 text-center max-w-xl mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-[#091A13] border border-[#163024] flex items-center justify-center text-[#00F5A0] mx-auto mb-6">
        <Compass className="w-8 h-8" />
      </div>

      <div className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider mb-2">
        ERROR 404 · ROUTE NOT FOUND
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Page Does Not Exist
      </h1>

      <p className="mt-3 text-sm text-[#9EBAAC] leading-relaxed">
        The requested URL was not found on this server. It may have been moved, renamed, or is currently in development.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
          Return to Homepage
        </Button>
        <Button to="/projects" variant="secondary">
          Browse Projects
        </Button>
      </div>
    </div>
  );
};
