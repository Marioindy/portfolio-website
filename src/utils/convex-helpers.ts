/**
 * Convex Helper Utilities
 * Provides type-safe helpers for working with Convex data
 */

import { Id, TableNames } from 'convex/_generated/dataModel';

/**
 * Type guard to check if a value is a valid Convex ID
 */
export function isValidId<TableName extends TableNames>(
  value: unknown
): value is Id<TableName> {
  return typeof value === 'string' && value.length > 0;
}

/**
 * Format a date for display
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format a date relative to now (e.g., "2 days ago")
 */
export function formatRelativeDate(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
        -interval,
        unit as Intl.RelativeTimeFormatUnit
      );
    }
  }

  return 'just now';
}

/**
 * Get storage URL for Convex file
 */
export function getStorageUrl(storageId: string | null): string | null {
  if (!storageId) return null;
  return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${storageId}`;
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parse and validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Debounce function for search/filtering
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Group array items by a key
 */
export function groupBy<T>(
  array: T[],
  keyFn: (item: T) => string
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Sort array by multiple criteria
 */
export function sortBy<T>(
  array: T[],
  ...fns: Array<(item: T) => string | number>
): T[] {
  return [...array].sort((a, b) => {
    for (const fn of fns) {
      const aVal = fn(a);
      const bVal = fn(b);
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
    }
    return 0;
  });
}
