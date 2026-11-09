import React, { useState, useEffect } from 'react';

interface SensorChannel {
  id: string;
  name: string;
  type: 'strain' | 'displacement' | 'temperature' | 'acceleration';
  unit: string;
  baseline: number;
  threshold: number;
  currentValue: number;
  status: 'nominal' | 'advisory' | 'alert';
  readings: number[];
}

export const SensorDashboardDemo: React.FC = () => {
  const [activeChannelId, setActiveChannelId] = useState<string>('SG-01');
  const [isLiveStream, setIsLiveStream] = useState<boolean>(true);
  const [samplingRate, setSamplingRate] = useState<number>(100); // ms

  // Channels state
  const [channels, setChannels] = useState<SensorChannel[]>([
    {
      id: 'SG-01',
      name: 'Mid-Span Bottom Flange Strain',
      type: 'strain',
      unit: 'με',
      baseline: 240,
      threshold: 450,
      currentValue: 265,
      status: 'nominal',
      readings: [242, 245, 250, 248, 255, 260, 258, 265, 262, 270, 268, 265],
    },
    {
      id: 'LVDT-02',
      name: 'Pier 2 Vertical Deflection',
      type: 'displacement',
      unit: 'mm',
      baseline: 4.2,
      threshold: 8.5,
      currentValue: 4.8,
      status: 'nominal',
      readings: [4.1, 4.3, 4.2, 4.5, 4.6, 4.4, 4.7, 4.9, 4.8, 5.0, 4.9, 4.8],
    },
    {
      id: 'TMP-03',
      name: 'Slab Ambient Temperature',
      type: 'temperature',
      unit: '°C',
      baseline: 18.5,
      threshold: 38.0,
      currentValue: 19.2,
      status: 'nominal',
      readings: [18.2, 18.3, 18.5, 18.6, 18.8, 18.9, 19.0, 19.1, 19.2, 19.2, 19.3, 19.2],
    },
    {
      id: 'ACC-04',
      name: 'Deck Vertical Acceleration',
      type: 'acceleration',
      unit: 'mg',
      baseline: 12.0,
      threshold: 65.0,
      currentValue: 15.4,
      status: 'nominal',
      readings: [11.5, 13.2, 12.8, 16.4, 14.1, 15.8, 17.2, 15.1, 14.9, 16.0, 15.5, 15.4],
    },
  ]);

  // Synthetic live feed update (clearly simulated)
  useEffect(() => {
    if (!isLiveStream) return;

    const interval = setInterval(() => {
      setChannels((prevChannels) =>
        prevChannels.map((ch) => {
          // Synthetic small variance simulating real micro-strains
          const noise = (Math.random() - 0.48) * (ch.type === 'strain' ? 12 : ch.type === 'displacement' ? 0.2 : 0.8);
          const nextVal = Number(Math.max(ch.baseline * 0.8, ch.currentValue + noise).toFixed(1));
          const updatedHistory = [...ch.readings.slice(1), nextVal];
          
          let status: 'nominal' | 'advisory' | 'alert' = 'nominal';
          if (nextVal > ch.threshold * 0.9) status = 'advisory';
          if (nextVal > ch.threshold) status = 'alert';

          return {
            ...ch,
            currentValue: nextVal,
            status,
            readings: updatedHistory,
          };
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [isLiveStream]);

  const activeChannel = channels.find((c) => c.id === activeChannelId) || channels[0];

  // SVG dimensions for time-series sparkline
  const width = 580;
  const height = 180;
  const padding = { top: 15, right: 20, bottom: 30, left: 45 };
  const pWidth = width - padding.left - padding.right;
  const pHeight = height - padding.top - padding.bottom;

  const minVal = Math.min(...activeChannel.readings) * 0.92;
  const maxVal = Math.max(...activeChannel.readings, activeChannel.threshold) * 1.05;

  const getSvgX = (i: number) => padding.left + (i / (activeChannel.readings.length - 1)) * pWidth;
  const getSvgY = (v: number) => padding.top + pHeight - ((v - minVal) / (maxVal - minVal || 1)) * pHeight;

  const polylinePoints = activeChannel.readings
    .map((v, i) => `${getSvgX(i).toFixed(1)},${getSvgY(v).toFixed(1)}`)
    .join(' ');

  const thresholdY = getSvgY(activeChannel.threshold);

  return (
    <div className="rounded-xl border border-[#163024] bg-[#07130E] p-5 md:p-7 text-[#E1EAE5]">
      {/* Simulation Disclaimer Banner */}
      <div className="mb-6 flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#0E2018] border border-[#1B3E30] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00F5A0]" />
          <span className="text-[#00F5A0] font-semibold">SYNTHETIC TELEMETRY</span>
          <span className="text-[#7A988B] hidden sm:inline">
            — Conceptual demonstration stream. Not real physical structure data.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiveStream(!isLiveStream)}
            className="text-[11px] px-2.5 py-1 rounded bg-[#152D23] hover:bg-[#1C3B2E] text-white border border-[#234A39] transition-colors"
          >
            {isLiveStream ? 'Pause Stream' : 'Resume Stream'}
          </button>
        </div>
      </div>

      {/* Sensor Channel Selector Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {channels.map((channel) => {
          const isSelected = channel.id === activeChannelId;
          return (
            <button
              key={channel.id}
              onClick={() => setActiveChannelId(channel.id)}
              className={`p-3.5 rounded-lg border text-left transition-all duration-150 ${
                isSelected
                  ? 'bg-[#0E251C] border-[#00F5A0] shadow-[0_0_12px_rgba(0,245,160,0.1)]'
                  : 'bg-[#0A1712] border-[#163024] hover:border-[#1E4332]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#7D9A8D]">{channel.id}</span>
                <span
                  className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    channel.status === 'nominal'
                      ? 'bg-[#122A1F] text-[#00F5A0]'
                      : 'bg-amber-950/60 text-amber-300'
                  }`}
                >
                  {channel.status}
                </span>
              </div>
              <div className="text-xs font-medium text-slate-200 mt-1 truncate">
                {channel.name}
              </div>
              <div className="mt-2 flex items-baseline gap-1 font-mono">
                <span className="text-lg font-bold text-white tabular-nums">
                  {channel.currentValue}
                </span>
                <span className="text-xs text-[#7D9A8D]">{channel.unit}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Time-Series Waveform */}
      <div className="p-4 rounded-lg bg-[#050D0A] border border-[#142C20]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-2 border-b border-[#12271D] text-xs">
          <div>
            <span className="font-mono text-[#00F5A0] font-semibold">{activeChannel.id}</span>
            <span className="text-white ml-2">{activeChannel.name}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#7D9A8D] mt-2 sm:mt-0">
            <span>Alert Threshold: <strong className="text-amber-400">{activeChannel.threshold} {activeChannel.unit}</strong></span>
            <span>Sampling: 10 Hz</span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto select-none"
            aria-label="Sensor time series chart"
          >
            {/* Grid Lines */}
            {[0.2, 0.4, 0.6, 0.8].map((ratio) => {
              const y = padding.top + pHeight * ratio;
              return (
                <line
                  key={ratio}
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#10251B"
                  strokeDasharray="2 2"
                />
              );
            })}

            {/* Threshold dashed red line */}
            <line
              x1={padding.left}
              y1={thresholdY}
              x2={width - padding.right}
              y2={thresholdY}
              stroke="#D97706"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text
              x={width - padding.right - 5}
              y={thresholdY - 5}
              fill="#D97706"
              fontSize="9"
              textAnchor="end"
              fontFamily="monospace"
            >
              LIMIT: {activeChannel.threshold} {activeChannel.unit}
            </text>

            {/* Live Waveform Line */}
            <polyline
              fill="none"
              stroke="#00F5A0"
              strokeWidth="2.5"
              points={polylinePoints}
            />

            {/* Reading points */}
            {activeChannel.readings.map((v, i) => (
              <circle
                key={i}
                cx={getSvgX(i)}
                cy={getSvgY(v)}
                r={i === activeChannel.readings.length - 1 ? 4 : 2}
                fill={i === activeChannel.readings.length - 1 ? '#00F5A0' : '#1D4534'}
                stroke="#050D0A"
                strokeWidth="1"
              />
            ))}

            {/* Axes */}
            <line
              x1={padding.left}
              y1={height - padding.bottom}
              x2={width - padding.right}
              y2={height - padding.bottom}
              stroke="#1C3F2F"
            />

            {/* X-axis labels */}
            {['t - 12s', 't - 8s', 't - 4s', 'Current (t)'].map((label, i) => (
              <text
                key={label}
                x={padding.left + (i / 3) * pWidth}
                y={height - padding.bottom + 16}
                fill="#698476"
                fontSize="10"
                textAnchor={i === 0 ? 'start' : i === 3 ? 'end' : 'middle'}
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Y-axis values */}
            <text
              x={padding.left - 8}
              y={padding.top + 10}
              fill="#7A988B"
              fontSize="10"
              textAnchor="end"
              fontFamily="monospace"
            >
              {maxVal.toFixed(0)}
            </text>
            <text
              x={padding.left - 8}
              y={height - padding.bottom}
              fill="#7A988B"
              fontSize="10"
              textAnchor="end"
              fontFamily="monospace"
            >
              {minVal.toFixed(0)}
            </text>
          </svg>
        </div>
      </div>

      {/* Structural Interpretation & Long-term vision */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3.5 rounded-lg bg-[#0A1712] border border-[#163024]">
          <div className="text-[#00F5A0] font-mono font-semibold mb-1">
            01. Automated Baseline Filtering
          </div>
          <p className="text-[#8BA497] leading-relaxed">
            Temperature-induced strain shifts are separated from structural degradation using environmental regression models, reducing false alarms.
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#0A1712] border border-[#163024]">
          <div className="text-[#00F5A0] font-mono font-semibold mb-1">
            02. Future Bayesian Reliability Coupling
          </div>
          <p className="text-[#8BA497] leading-relaxed">
            Planned architecture passes stream-extracted peak stress distributions directly to the Bayesian Engine to update safety indices in near real time.
          </p>
        </div>
      </div>
    </div>
  );
};
