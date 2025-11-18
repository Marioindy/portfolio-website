import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx for conditional class name handling
 * This is the shadcn/ui standard location for the cn utility
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
