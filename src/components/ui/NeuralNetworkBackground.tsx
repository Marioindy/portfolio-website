'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const canvas: HTMLCanvasElement = canvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Configuration
    const config = {
      nodeCount: 100,
      nodeRadius: 2,
      maxDistance: 150,
      nodeSpeed: 0.3,
      lineWidth: 0.5,
      nodeColor: 'rgba(100, 116, 139, 0.8)', // slate-500
      lineColor: 'rgba(100, 116, 139, 0.2)',
      highlightColor: 'rgba(147, 51, 234, 0.4)', // purple-600
    };

    // Create nodes
    const nodes: Node[] = [];
    for (let i = 0; i < config.nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.nodeSpeed,
        vy: (Math.random() - 0.5) * config.nodeSpeed,
        radius: config.nodeRadius,
      });
    }

    // Mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; // slate-900 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Check distance to mouse
        const distToMouse = Math.hypot(mouseX - node.x, mouseY - node.y);
        const isNearMouse = distToMouse < config.maxDistance;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse
          ? config.highlightColor
          : config.nodeColor;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = 1 - distance / config.maxDistance;

            // Check if either node is near mouse
            const distToMouseI = Math.hypot(mouseX - nodes[i].x, mouseY - nodes[i].y);
            const distToMouseJ = Math.hypot(mouseX - nodes[j].x, mouseY - nodes[j].y);
            const isHighlighted =
              distToMouseI < config.maxDistance || distToMouseJ < config.maxDistance;

            ctx.beginPath();
            ctx.strokeStyle = isHighlighted
              ? `rgba(147, 51, 234, ${opacity * 0.6})`
              : `rgba(100, 116, 139, ${opacity * 0.2})`;
            ctx.lineWidth = config.lineWidth;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connection lines
      nodes.forEach((node) => {
        const distance = Math.hypot(mouseX - node.x, mouseY - node.y);
        if (distance < config.maxDistance) {
          const opacity = 1 - distance / config.maxDistance;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900"
      aria-hidden="true"
    />
  );
}
