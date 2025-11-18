'use client';

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Projects', url: '/projects', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: Mail }
];

export function ClientNavBar() {
  return <NavBar items={navItems} />;
}
