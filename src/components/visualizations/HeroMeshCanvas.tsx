import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  stress: number; // 0 to 1
}

export const HeroMeshCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Resize handler
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle load perturbation
    let mouse = { x: -1000, y: -1000, isHovering: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovering = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Structural Nodes Grid (mimicking a finite-element bridge truss/mesh)
    let nodes: Node[] = [];
    const initNodes = () => {
      nodes = [];
      const cols = Math.max(5, Math.floor(width / 75));
      const rows = Math.max(4, Math.floor(height / 75));
      const spacingX = width / (cols + 1);
      const spacingY = height / (rows + 1);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = spacingX * (i + 1) + (Math.sin(j * 0.8) * 15);
          const originY = spacingY * (j + 1) + (Math.cos(i * 0.8) * 10);
          
          nodes.push({
            x: originX,
            y: originY,
            originX,
            originY,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: (i + j) % 3 === 0 ? 3.5 : 2,
            stress: Math.random() * 0.6,
            label: (i === 1 && j === 1) ? 'NODE_04' : (i === cols - 2 && j === rows - 2) ? 'LIMIT_STATE' : undefined,
          });
        }
      }
    };

    initNodes();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background coordinate guide lines
      ctx.strokeStyle = 'rgba(0, 245, 160, 0.04)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      const maxDistance = 95;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (!isReducedMotion) {
          // Natural drift around origin
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          const dxOrigin = nodeA.originX - nodeA.x;
          const dyOrigin = nodeA.originY - nodeA.y;
          nodeA.vx += dxOrigin * 0.002;
          nodeA.vy += dyOrigin * 0.002;

          // Drag / damping
          nodeA.vx *= 0.98;
          nodeA.vy *= 0.98;

          // Mouse interaction (simulates applied concentrated load)
          if (mouse.isHovering) {
            const dx = nodeA.x - mouse.x;
            const dy = nodeA.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 0) {
              const force = (120 - dist) / 120;
              nodeA.vx += (dx / dist) * force * 0.6;
              nodeA.vy += (dy / dist) * force * 0.6;
              nodeA.stress = Math.min(1, nodeA.stress + force * 0.05);
            }
          }

          // Relax stress over time
          nodeA.stress = Math.max(0.1, nodeA.stress * 0.992);
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            const combinedStress = (nodeA.stress + nodeB.stress) / 2;

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Lines glow brighter when under higher computed stress
            if (combinedStress > 0.4) {
              ctx.strokeStyle = `rgba(0, 245, 160, ${alpha + 0.3})`;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(32, 85, 65, ${alpha + 0.1})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        }
      }

      // Draw node joints
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Outer glow on active nodes
        if (node.stress > 0.4) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 245, 160, ${node.stress * 0.2})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.stress > 0.4 ? '#00F5A0' : '#2D6650';
        ctx.fill();

        // Technical node tag
        if (node.label) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(0, 245, 160, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y - 6);
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[440px] flex items-center justify-center overflow-hidden rounded-xl border border-[#163024] bg-[#07130E]/60 backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        aria-label="Interactive computational structural mesh"
      />
      
      {/* Structural Legend overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#7D9A8D] pointer-events-none px-2 py-1 bg-[#050D0A]/70 backdrop-blur-sm rounded border border-[#163024]">
        <div className="flex items-center gap-3">
          <span className="text-[#00F5A0]">FEA_MESH // INTERACTIVE</span>
          <span>DISPLACEMENT: VECTOR FIELD</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          HOVER TO APPLY STRESS LOAD
        </div>
      </div>
    </div>
  );
};
