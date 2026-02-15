import { useState } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import KPICard from '@/components/ui/KPICard';
import DonutChart from '@/components/ui/DonutChart';
import RegionCard from '@/components/ui/RegionCard';
import HeatmapGrid from '@/components/ui/HeatmapGrid';
import ActionButton from '@/components/ui/ActionButton';
import DateSelector from '@/components/ui/DateSelector';
import {
  overviewKPIs,
  salesVolumeData,
  salesMarginData,
  regionSummaries,
  budgetHeatmap,
  reportLinks,
} from '@/data/globalOverview';

const quarterOptions = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'];

export default function GlobalOverview() {
  const [selectedQuarter, setSelectedQuarter] = useState('Q4 2024');
  return (
    <div>
      <PageHeader
        title="Global Financial Overview"
        subtitle="Real-time insights across all regions and business units"
        actions={
          <>
            <DateSelector
              options={quarterOptions}
              value={selectedQuarter}
              onChange={setSelectedQuarter}
              label="Select quarter"
            />
            <ActionButton variant="secondary" icon={<Download size={16} />}>
              Export Report
            </ActionButton>
          </>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {overviewKPIs.map((kpi, idx) => (
          <KPICard key={idx} data={kpi} />
        ))}
      </div>

      {/* Charts + Regional Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Sales Volume */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-1">Sales Volume</h3>
          <p className="text-xs text-text-secondary mb-4">Regional Breakdown</p>
          <DonutChart data={salesVolumeData} centerValue="$16.7M" />
        </div>

        {/* Sales Margin */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-1">Sales Margin</h3>
          <p className="text-xs text-text-secondary mb-4">Regional Breakdown</p>
          <DonutChart data={salesMarginData} centerValue="$21.2M" />
        </div>

        {/* Regional Summary */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4">Regional Summary</h3>
          <div className="grid grid-cols-2 gap-3">
            {regionSummaries.map((region) => (
              <RegionCard key={region.region} data={region} />
            ))}
          </div>
        </div>
      </div>

      {/* Budget Utilization + Report Links */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 bg-white border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-text-primary">Budget Utilization Heatmap Summary</h3>
            <div className="flex items-center gap-4 text-xs text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-green-100 border border-green-200" /> Under Budget
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-yellow-100 border border-yellow-200" /> Near Limit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-red-100 border border-red-200" /> Over Budget
              </span>
            </div>
          </div>
          <HeatmapGrid data={budgetHeatmap} />
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4">Reports Links</h3>
          <div className="flex flex-col gap-3">
            {reportLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between text-sm text-text-primary hover:text-primary transition-colors"
              >
                {link.label}
                <ArrowUpRight size={16} className="text-text-secondary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
