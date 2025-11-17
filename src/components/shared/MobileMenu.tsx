'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { NavigationItem } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavigationItem[];
  pathname: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
  onNavClick,
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-30 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <div className="flex h-full flex-col items-center justify-center space-y-8 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => {
              onNavClick(e, item.href);
              onClose();
            }}
            className={cn(
              'text-3xl font-bold transition-all duration-200',
              pathname === item.href
                ? 'text-primary scale-110'
                : 'text-foreground hover:text-primary hover:scale-105'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
