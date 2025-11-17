import React from 'react';
import { ProjectGrid } from './components/ProjectGrid';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View all my projects and work samples',
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <div>
      <ProjectGrid />
    </div>
  );
}
