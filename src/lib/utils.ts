import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx for conditional className logic
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
