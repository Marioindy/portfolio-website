'use client';

import { CSSProperties } from 'react';

interface IsometricShapeProps {
  type?: 'cube' | 'pyramid' | 'prism';
  color?: 'purple' | 'cyan' | 'mixed';
  size?: number;
  className?: string;
}

/**
 * IsometricShape - Pure CSS 3D isometric geometric shapes
 * Creates depth through CSS transforms and perspective
 */
export function IsometricShape({
  type = 'cube',
  color = 'purple',
  size = 100,
  className = '',
}: IsometricShapeProps) {
  const colorMap = {
    purple: {
      main: 'bg-purple-600/60',
      light: 'bg-purple-400/60',
      dark: 'bg-purple-800/60',
      border: 'border-purple-400/80',
      shadow: 'shadow-purple-500/50',
    },
    cyan: {
      main: 'bg-cyan-600/60',
      light: 'bg-cyan-400/60',
      dark: 'bg-cyan-800/60',
      border: 'border-cyan-400/80',
      shadow: 'shadow-cyan-500/50',
    },
    mixed: {
      main: 'bg-gradient-to-br from-purple-600/60 to-cyan-600/60',
      light: 'bg-gradient-to-br from-purple-400/60 to-cyan-400/60',
      dark: 'bg-gradient-to-br from-purple-800/60 to-cyan-800/60',
      border: 'border-purple-400/80',
      shadow: 'shadow-purple-500/30',
    },
  };

  const colors = colorMap[color];

  const cubeStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    transformStyle: 'preserve-3d',
    transform: 'rotateX(-30deg) rotateY(45deg)',
  };

  if (type === 'cube') {
    return (
      <div
        className={`relative ${className}`}
        style={{ perspective: '1000px' }}
      >
        <div style={cubeStyle} className="relative">
          {/* Front face */}
          <div
            className={`absolute inset-0 ${colors.main} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `translateZ(${size / 2}px)`,
            }}
          />
          {/* Back face */}
          <div
            className={`absolute inset-0 ${colors.dark} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
            }}
          />
          {/* Right face */}
          <div
            className={`absolute inset-0 ${colors.main} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Left face */}
          <div
            className={`absolute inset-0 ${colors.dark} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Top face */}
          <div
            className={`absolute inset-0 ${colors.light} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Bottom face */}
          <div
            className={`absolute inset-0 ${colors.dark} ${colors.border} border backdrop-blur-sm`}
            style={{
              transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            }}
          />
        </div>
      </div>
    );
  }

  if (type === 'pyramid') {
    return (
      <div
        className={`relative ${className}`}
        style={{ perspective: '1000px' }}
      >
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-20deg) rotateY(45deg)',
          }}
          className="relative"
        >
          {/* Base */}
          <div
            className={`absolute ${colors.dark} ${colors.border} border backdrop-blur-sm`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `translateZ(0)`,
            }}
          />
          {/* Front triangle */}
          <div
            className={`absolute ${colors.main} ${colors.border} border-l backdrop-blur-sm`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(147, 51, 234, 0.6)`,
              transformOrigin: 'bottom center',
              transform: `rotateX(45deg) translateY(-${size / 2}px)`,
            }}
          />
        </div>
      </div>
    );
  }

  // Prism (default fallback)
  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size * 1.5}px`,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-15deg) rotateY(30deg)',
        }}
        className="relative"
      >
        <div
          className={`absolute ${colors.main} ${colors.border} border backdrop-blur-sm`}
          style={{
            width: `${size}px`,
            height: `${size * 1.5}px`,
            transform: `translateZ(${size / 4}px)`,
          }}
        />
        <div
          className={`absolute ${colors.dark} ${colors.border} border backdrop-blur-sm`}
          style={{
            width: `${size}px`,
            height: `${size * 1.5}px`,
            transform: `rotateY(90deg) translateZ(${size / 4}px)`,
          }}
        />
        <div
          className={`absolute ${colors.light} ${colors.border} border backdrop-blur-sm`}
          style={{
            width: `${size / 2}px`,
            height: `${size * 1.5}px`,
            transform: `rotateY(90deg) translateZ(-${size / 4}px)`,
          }}
        />
      </div>
    </div>
  );
}
