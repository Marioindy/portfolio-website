import React from 'react';
import { ProjectGrid } from './components/ProjectGrid';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View all my projects and work samples',
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectGrid />
    </div>
  );
}
