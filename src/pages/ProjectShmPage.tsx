import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  AlertCircle,
  Database,
  BarChart3,
  Sliders,
  Bell,
  Cpu,
} from 'lucide-react';
import { SensorDashboardDemo } from '../components/visualizations/SensorDashboardDemo';
import { Button } from '../components/ui/Button';

export const ProjectShmPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      {/* Top Breadcrumb & Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7D9A8D] hover:text-[#00F5A0] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#142C20]">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider">
            PROJECT 002 · ENGINEERING SOFTWARE / DATA SYSTEMS
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-sky-950/60 text-sky-300 border border-sky-800/50">
            Planned Concept
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl text-balance">
          Structural Health Monitoring Platform
        </h1>

        <p className="mt-4 text-xl text-[#00F5A0] font-medium max-w-3xl">
          Turning structural measurements into interpretable engineering information.
        </p>

        <p className="mt-4 text-base text-[#9EBAAC] max-w-3xl leading-relaxed">
          A planned modular software platform for ingesting, visualizing, and interpreting continuous sensor data
          from bridges, viaducts, and civil infrastructure, with an architectural roadmap to integrate Bayesian
          safety index tracking.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            to="/contact?project=shm-platform"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Discuss the Platform Concept
          </Button>
          <Button to="/projects" variant="secondary" size="md">
            Explore All Projects
          </Button>
        </div>
      </section>

      {/* The Challenge & Planned Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* The Challenge */}
          <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] space-y-4">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>THE MONITORING CHALLENGE</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Data Volume vs. Actionable Engineering Context
            </h2>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              Modern sensor networks deployed across civil infrastructure can stream gigabytes of raw data per day,
              including strain readings, displacement transducers, temperature cycles, and dynamic accelerations.
            </p>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              However, bridge managers are often overwhelmed by unformatted CSV files, noisy telemetry, and false
              alarms triggered by natural thermal fluctuations rather than actual material damage. Without structured
              engineering processing, valuable data remains uninterpreted.
            </p>
          </div>

          {/* Planned Solution */}
          <div className="p-8 rounded-2xl bg-[#08140F] border border-[#163024] space-y-4">
            <div className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>THE PLANNED SOLUTION</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Interpretable Time-Series & Anomaly Tracking
            </h2>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              Tebib Labs is designing a modular software platform focused on standardizing ingestion from diverse
              data acquisition hardware, applying temperature compensation routines, and providing clear, high-performance
              interactive dashboards.
            </p>
            <p className="text-sm text-[#9EBAAC] leading-relaxed">
              Crucially, the platform is architected to feed statistical summaries directly into our Bayesian Reliability
              Updating Engine, translating raw strain oscillations into dynamic safety indices and failure probability forecasts.
            </p>
          </div>
        </div>
      </section>

      {/* Illustrative Interactive Dashboard Concept */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            CONCEPTUAL PROTOTYPE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Illustrative Dashboard Interface
          </h2>
          <p className="mt-2 text-sm text-[#9EBAAC]">
            The panel below demonstrates the proposed user experience for multi-channel sensor ingestion, live stream inspection,
            and threshold tracking. All data is simulated for demonstration purposes.
          </p>
        </div>

        <SensorDashboardDemo />
      </section>

      {/* Planned Feature Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#142C20]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-2">
            ROADMAP & ARCHITECTURE
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Core Architectural Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Sensor-Data Ingestion</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Flexible connectors for common DAQ file formats and real-time MQTT / WebSocket telemetry streams.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">High-Throughput Time Series</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              GPU-accelerated Canvas/WebGL charting capable of rendering millions of strain data points smoothly without browser stutter.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Environmental Filtering</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Built-in baseline normalization removing daily thermal oscillations to reveal subtle structural stiffness changes.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Engineering Stop Criteria & Alerts</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Multi-tier notification triggers calibrated to structural serviceability limits rather than generic statistical spikes.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Spatial Sensor Mapping</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Interactive 2D/3D schematics mapping gauge locations across bridge girders, piers, and expansion joints.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#08140F] border border-[#163024]">
            <div className="w-10 h-10 rounded-lg bg-[#0E2218] flex items-center justify-center text-[#00F5A0] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Future Bayesian Integration</h3>
            <p className="text-xs text-[#8BA497] leading-relaxed">
              Seamless data pipeline feeding the Bayesian Reliability Engine to produce continuously updated safety index estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Development Transparency Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-6 rounded-xl bg-[#06110D] border border-[#142C20] text-xs text-[#8BA497] space-y-2 max-w-3xl mx-auto text-center">
          <div className="font-semibold text-white">
            Architecture & Validation Disclosure
          </div>
          <p>
            The Structural Health Monitoring Platform is currently in conceptual planning and architectural design.
            All visual interfaces and charts displayed on this page use synthetic test data. Tebib Labs does not claim
            commercial deployment on operational bridges at this stage.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="md">
              Inquire About Future Collaboration
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
