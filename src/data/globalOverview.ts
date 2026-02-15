import type { KPIData, DonutChartData, RegionSummary, BudgetHeatmapData } from '@/types';

export const overviewKPIs: KPIData[] = [
  {
    label: 'Total YTD Spend',
    value: '$2.4M',
    subtitle: 'QoQ: +8.2%',
    trend: '+12.5%',
    trendColor: 'text-green-600',
    icon: 'DollarSign',
  },
  {
    label: 'Budget Utilization',
    value: '$2.76M',
    subtitle: '87%',
    trend: '87%',
    trendColor: 'text-green-600',
    icon: 'FileText',
  },
  {
    label: 'Total YTD Spend',
    value: '$2.4M',
    subtitle: 'QoQ: +8.2%',
    trend: '+12.5%',
    trendColor: 'text-green-600',
    icon: 'Globe',
  },
  {
    label: 'Active Disputes',
    value: '12',
    subtitle: 'Value: $45.2K',
    trend: '+3',
    trendColor: 'text-orange-500',
    icon: 'AlertTriangle',
  },
  {
    label: 'Active Vendors',
    value: '248',
    subtitle: 'New this month: 3',
    trend: '+2',
    trendColor: 'text-blue-500',
    icon: 'Building2',
  },
];

export const salesVolumeData: DonutChartData[] = [
  { name: 'North America', value: 45, color: '#2563EB' },
  { name: 'Europe', value: 25, color: '#3B82F6' },
  { name: 'India', value: 16, color: '#60A5FA' },
  { name: 'GCC Countries', value: 9, color: '#93C5FD' },
  { name: 'Japan', value: 5, color: '#BFDBFE' },
];

export const salesMarginData: DonutChartData[] = [
  { name: 'North America', value: 45, color: '#2563EB' },
  { name: 'Europe', value: 25, color: '#3B82F6' },
  { name: 'India', value: 16, color: '#60A5FA' },
  { name: 'GCC Countries', value: 9, color: '#93C5FD' },
  { name: 'Japan', value: 5, color: '#BFDBFE' },
];

export const regionSummaries: RegionSummary[] = [
  { region: 'United States', status: 'OnTrack', ytdSpend: '$1.08M', vendorCount: 143 },
  { region: 'Europe', status: 'Watch', ytdSpend: '$672K', vendorCount: 89 },
  { region: 'Japan', status: 'Alert', ytdSpend: '$428K', vendorCount: 34 },
  { region: 'India', status: 'OnTrack', ytdSpend: '$240K', vendorCount: 28 },
];

export const budgetHeatmap: BudgetHeatmapData[] = [
  { region: 'North America', percentage: 72, status: 'under' },
  { region: 'Europe', percentage: 89, status: 'near' },
  { region: 'India', percentage: 78, status: 'under' },
  { region: 'Japan', percentage: 95, status: 'over' },
];

export const reportLinks = [
  { label: 'Vendor Reports', href: '/reports' },
  { label: 'Cost Reports', href: '/reports' },
  { label: 'Dispute Report', href: '/reports' },
];
