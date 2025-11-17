import { ShaderAnimation } from "@/components/ui/shader-lines";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shader Lines Demo | Portfolio',
  description: 'Interactive shader lines animation demonstration',
};

export default function ShaderDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <ShaderAnimation/>
        <span className="pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
          Shader Lines
        </span>
      </div>
    </div>
  )
}
