import React, { useState, useMemo } from 'react';

export const BayesianCurveInteractive: React.FC = () => {
  // Interactive parameters
  const [proofLoad, setProofLoad] = useState<number>(340); // kN (applied proof load)
  const [priorMean, setPriorMean] = useState<number>(420); // kN
  const [priorStd, setPriorStd] = useState<number>(45); // kN
  const [inspectionNoise, setInspectionNoise] = useState<number>(18); // measurement std

  // Calculate prior, likelihood, and posterior distributions
  const calculation = useMemo(() => {
    // Normal PDF helper
    const normalPdf = (x: number, mean: number, std: number) => {
      const exponent = -0.5 * Math.pow((x - mean) / std, 2);
      return (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
    };

    // Conjugate Gaussian update for demonstration of Bayesian updating principles
    // Prior ~ N(mu_0, sigma_0^2), Evidence Observation ~ N(proofLoad, sigma_e^2)
    const var0 = priorStd * priorStd;
    const varE = inspectionNoise * inspectionNoise;
    const posteriorVar = 1 / (1 / var0 + 1 / varE);
    const posteriorStd = Math.sqrt(posteriorVar);
    const posteriorMean = posteriorVar * (priorMean / var0 + proofLoad / varE);

    // Operational design load S ~ N(280, 30^2)
    const loadMean = 280;
    const loadStd = 32;

    // Reliability Index Beta = (mu_R - mu_S) / sqrt(sigma_R^2 + sigma_S^2)
    const priorBeta = (priorMean - loadMean) / Math.sqrt(var0 + loadStd * loadStd);
    const posteriorBeta = (posteriorMean - loadMean) / Math.sqrt(posteriorVar + loadStd * loadStd);

    // Simple failure probability approximation
    const pfPrior = 0.5 * (1 - Math.tanh(priorBeta * 0.79788));
    const pfPosterior = 0.5 * (1 - Math.tanh(posteriorBeta * 0.79788));

    // Generate coordinate points for SVG plot [200, 600]
    const xMin = 220;
    const xMax = 580;
    const points = 80;
    const step = (xMax - xMin) / points;

    const priorPoints: [number, number][] = [];
    const posteriorPoints: [number, number][] = [];
    let maxPdf = 0;

    for (let x = xMin; x <= xMax; x += step) {
      const pPrior = normalPdf(x, priorMean, priorStd);
      const pPost = normalPdf(x, posteriorMean, posteriorStd);
      if (pPrior > maxPdf) maxPdf = pPrior;
      if (pPost > maxPdf) maxPdf = pPost;
      priorPoints.push([x, pPrior]);
      posteriorPoints.push([x, pPost]);
    }

    return {
      priorMean,
      posteriorMean,
      priorBeta,
      posteriorBeta,
      pfPrior,
      pfPosterior,
      priorPoints,
      posteriorPoints,
      maxPdf: maxPdf || 0.015,
      xMin,
      xMax,
    };
  }, [proofLoad, priorMean, priorStd, inspectionNoise]);

  // Convert (x, pdf) to SVG coordinates (width 600, height 260)
  const svgWidth = 600;
  const svgHeight = 240;
  const padding = { top: 20, right: 30, bottom: 40, left: 50 };
  const plotWidth = svgWidth - padding.left - padding.right;
  const plotHeight = svgHeight - padding.top - padding.bottom;

  const toSvgX = (x: number) =>
    padding.left + ((x - calculation.xMin) / (calculation.xMax - calculation.xMin)) * plotWidth;

  const toSvgY = (y: number) =>
    padding.top + plotHeight - (y / (calculation.maxPdf * 1.15)) * plotHeight;

  // Build SVG path strings
  const priorPath = calculation.priorPoints
    .map(([x, y], idx) => `${idx === 0 ? 'M' : 'L'} ${toSvgX(x).toFixed(1)} ${toSvgY(y).toFixed(1)}`)
    .join(' ');

  const posteriorPath = calculation.posteriorPoints
    .map(([x, y], idx) => `${idx === 0 ? 'M' : 'L'} ${toSvgX(x).toFixed(1)} ${toSvgY(y).toFixed(1)}`)
    .join(' ');

  const proofLoadX = toSvgX(proofLoad);

  return (
    <div className="rounded-xl border border-[#163024] bg-[#07130E] p-5 md:p-7 text-[#E1EAE5]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#142A1F]">
        <div>
          <div className="text-xs font-mono text-[#00F5A0] tracking-wider uppercase">
            INTERACTIVE MATHEMATICAL DEMONSTRATION
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Prior vs. Posterior Resistance & Reliability Index (β)
          </h3>
          <p className="text-xs text-[#8BA497] mt-0.5">
            Illustrating how observed evidence refines prior structural uncertainty under Bayes’ theorem.
          </p>
        </div>

        {/* Real-time Computed Reliability Indices */}
        <div className="flex items-center gap-4 bg-[#0B1A13] px-4 py-2.5 rounded-lg border border-[#173326]">
          <div>
            <div className="text-[10px] font-mono text-[#7D9A8D] uppercase">Prior Reliability β₀</div>
            <div className="text-base font-bold font-mono text-[#B5C7BF] tabular-nums">
              {calculation.priorBeta.toFixed(2)}
            </div>
          </div>
          <div className="h-6 w-px bg-[#193729]" />
          <div>
            <div className="text-[10px] font-mono text-[#00F5A0] uppercase">Updated β_post</div>
            <div className="text-base font-bold font-mono text-[#00F5A0] tabular-nums">
              {calculation.posteriorBeta.toFixed(2)}
            </div>
          </div>
          <div className="h-6 w-px bg-[#193729]" />
          <div>
            <div className="text-[10px] font-mono text-[#7D9A8D] uppercase">Δ Safety Index</div>
            <div className="text-base font-bold font-mono text-emerald-400 tabular-nums">
              {calculation.posteriorBeta >= calculation.priorBeta ? '+' : ''}
              {(calculation.posteriorBeta - calculation.priorBeta).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Plot */}
      <div className="relative mt-5 w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto select-none"
          aria-label="Prior and posterior probability distribution plot"
        >
          {/* Subtle horizontal grid lines */}
          {[0.25, 0.5, 0.75, 1.0].map((frac) => {
            const y = padding.top + plotHeight * (1 - frac);
            return (
              <line
                key={frac}
                x1={padding.left}
                y1={y}
                x2={svgWidth - padding.right}
                y2={y}
                stroke="#12271D"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Proof load threshold indicator line */}
          <line
            x1={proofLoadX}
            y1={padding.top}
            x2={proofLoadX}
            y2={svgHeight - padding.bottom}
            stroke="#00F5A0"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <text
            x={proofLoadX + 5}
            y={padding.top + 14}
            fill="#00F5A0"
            fontSize="10"
            fontFamily="monospace"
          >
            Evidence (t_p = {proofLoad} kN)
          </text>

          {/* Prior curve (dashed gray/emerald) */}
          <path
            d={priorPath}
            fill="none"
            stroke="#5A7D6E"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Posterior curve (solid neon mint) */}
          <path
            d={posteriorPath}
            fill="none"
            stroke="#00F5A0"
            strokeWidth="2.5"
          />

          {/* Axes */}
          <line
            x1={padding.left}
            y1={svgHeight - padding.bottom}
            x2={svgWidth - padding.right}
            y2={svgHeight - padding.bottom}
            stroke="#204533"
            strokeWidth="1"
          />

          {/* X-Axis Ticks */}
          {[250, 300, 350, 400, 450, 500, 550].map((val) => {
            const x = toSvgX(val);
            return (
              <g key={val}>
                <line
                  x1={x}
                  y1={svgHeight - padding.bottom}
                  x2={x}
                  y2={svgHeight - padding.bottom + 5}
                  stroke="#204533"
                />
                <text
                  x={x}
                  y={svgHeight - padding.bottom + 18}
                  fill="#789688"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Axis Label */}
          <text
            x={svgWidth / 2}
            y={svgHeight - 6}
            fill="#8BA497"
            fontSize="11"
            textAnchor="middle"
            fontFamily="monospace"
          >
            Structural Resistance R [kN]
          </text>
        </svg>
      </div>

      {/* Legend & Interactive Controls */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[#142A1F]">
        {/* Slider 1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#8BA497]">Proof Load (t_p):</span>
            <span className="text-[#00F5A0] tabular-nums font-semibold">{proofLoad} kN</span>
          </div>
          <input
            type="range"
            min={260}
            max={480}
            step={5}
            value={proofLoad}
            onChange={(e) => setProofLoad(Number(e.target.value))}
            className="w-full accent-[#00F5A0] h-1.5 bg-[#142C20] rounded-lg cursor-pointer"
          />
          <div className="text-[10px] text-[#698476]">Applied physical test evidence</div>
        </div>

        {/* Slider 2 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#8BA497]">Prior Mean (μ₀):</span>
            <span className="text-white tabular-nums font-semibold">{priorMean} kN</span>
          </div>
          <input
            type="range"
            min={360}
            max={480}
            step={5}
            value={priorMean}
            onChange={(e) => setPriorMean(Number(e.target.value))}
            className="w-full accent-[#00F5A0] h-1.5 bg-[#142C20] rounded-lg cursor-pointer"
          />
          <div className="text-[10px] text-[#698476]">Initial engineering estimation</div>
        </div>

        {/* Slider 3 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#8BA497]">Sensor Noise (σ_ε):</span>
            <span className="text-white tabular-nums font-semibold">{inspectionNoise} kN</span>
          </div>
          <input
            type="range"
            min={8}
            max={35}
            step={1}
            value={inspectionNoise}
            onChange={(e) => setInspectionNoise(Number(e.target.value))}
            className="w-full accent-[#00F5A0] h-1.5 bg-[#142C20] rounded-lg cursor-pointer"
          />
          <div className="text-[10px] text-[#698476]">Instrument measurement uncertainty</div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-4 p-3 bg-[#091710] rounded border border-[#163024] text-[11px] text-[#7A988B] flex items-start gap-2">
        <span className="text-[#00F5A0] font-mono shrink-0">Note:</span>
        <span>
          This demonstration models Bayesian conjugate normal updating: as empirical test evidence is integrated with higher precision, posterior variance collapses and the structural reliability index β is updated mathematically.
        </span>
      </div>
    </div>
  );
};
