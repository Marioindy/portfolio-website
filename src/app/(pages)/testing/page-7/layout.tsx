import { ReactNode } from 'react';

export default function WarmPhotographyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="photography-page">{children}</div>;
}
