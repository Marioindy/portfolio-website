'use client';

import { useQuery } from 'convex/react';
import { FunctionReference } from 'convex/server';

/**
 * Type-safe wrapper for Convex useQuery with loading and error states
 */
export function useConvexData<T>(
  query: FunctionReference<'query', 'public', Record<string, unknown>, T>,
  args?: Record<string, unknown>
) {
  const data = useQuery(query, args ?? {});

  return {
    data,
    isLoading: data === undefined,
    isEmpty: data === null || (Array.isArray(data) && data.length === 0),
  };
}

/**
 * Custom hook for paginated Convex queries
 */
export function useConvexPagination<T>(
  query: FunctionReference<'query', 'public', Record<string, unknown>, T[]>,
  args?: Record<string, unknown>,
  pageSize: number = 10
) {
  const allData = useQuery(query, args ?? {});

  const [currentPage, setCurrentPage] = React.useState(1);

  const paginatedData = React.useMemo(() => {
    if (!allData || !Array.isArray(allData)) return [];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return allData.slice(startIndex, endIndex);
  }, [allData, currentPage, pageSize]);

  const totalPages = React.useMemo(() => {
    if (!allData || !Array.isArray(allData)) return 0;
    return Math.ceil(allData.length / pageSize);
  }, [allData, pageSize]);

  const nextPage = React.useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const prevPage = React.useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToPage = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    data: paginatedData,
    isLoading: allData === undefined,
    isEmpty: !allData || allData.length === 0,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

// Add React import for the pagination hook
import React from 'react';
