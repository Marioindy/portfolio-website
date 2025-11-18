'use client';

import React from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { MetricsGrid } from './components/MetricsGrid';
import { ChartSection } from './components/ChartSection';
import { DataTable } from './components/DataTable';

export default function Page24() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Data Viz Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <DashboardHeader />

        {/* Metrics Overview */}
        <MetricsGrid />

        {/* Charts Section */}
        <ChartSection />

        {/* Data Table */}
        <DataTable />

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-mono">
            [DATA_VISUALIZATION] [DASHBOARD_DESIGN] [EXECUTION]
          </p>
          <p className="text-xs text-cyan-400/40 mt-2">
            Real-time Dashboard Analytics • Page 24
          </p>
        </div>
      </div>
    </div>
  );
}
