import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing Lab 2 | Cyberpunk Interface',
  description: 'Experimental cyberpunk testing environment with neon aesthetics and 3D depth',
};

export default function TestingPage2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        // @ts-ignore - View Transitions API is experimental
        viewTransitionName: 'testing-page-2',
      }}
    >
      {children}
    </div>
  );
}
