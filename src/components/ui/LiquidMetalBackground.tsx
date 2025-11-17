"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane } from "./background-paper-shaders"

interface LiquidMetalBackgroundProps {
  color1?: string
  color2?: string
  className?: string
}

export function LiquidMetalBackground({
  color1 = "#1a1a1a",
  color2 = "#ffffff",
  className = "",
}: LiquidMetalBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "#000000" }}
      >
        <ambientLight intensity={0.5} />
        <ShaderPlane position={[0, 0, 0]} color1={color1} color2={color2} />
      </Canvas>

      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "2s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}

export default LiquidMetalBackground
