'use client';

export function GreenScreenMonitor() {
  return (
    <>
      {/* Green Screen Overlay */}
      <div className="fixed inset-0 bg-black pointer-events-none -z-20" />

      {/* Ambient Green Glow */}
      <div className="fixed inset-0 bg-green-950/30 pointer-events-none -z-10" />

      {/* Monitor Bezel Effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Corner Reflection */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent pointer-events-none z-40 blur-2xl" />
    </>
  );
}
