'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant={activeCategory === 'All' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onCategoryChange('All')}
        className={cn(
          'transition-all',
          activeCategory === 'All' && 'ring-2 ring-primary ring-offset-2'
        )}
      >
        All Projects
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            'transition-all',
            activeCategory === category && 'ring-2 ring-primary ring-offset-2'
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
