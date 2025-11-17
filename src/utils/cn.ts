import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx for conditional class name handling
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
