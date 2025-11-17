import React from 'react';
import { ProjectGrid } from './components/ProjectGrid';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View all my projects and work samples',
};

// Force dynamic rendering for this page since it uses Convex queries
export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <div>
      <ProjectGrid />
    </div>
  );
}
