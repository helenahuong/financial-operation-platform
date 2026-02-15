import type { KPIData, ServiceConfig } from '@/types';

export const configKPIs: KPIData[] = [
  {
    label: 'Active Services',
    value: '47',
    trend: '+3 this month',
    trendColor: 'text-green-600',
    icon: 'Settings',
  },
  {
    label: 'Pricing Rules',
    value: '156',
    trend: '3 models',
    trendColor: 'text-green-600',
    icon: 'BadgeCheck',
  },
  {
    label: 'Scheduled Changes',
    value: '12',
    trend: 'Next: Jan 1',
    trendColor: 'text-purple-600',
    icon: 'Calendar',
  },
  {
    label: 'Forecast Deviations',
    value: '5',
    trend: '2 critical',
    trendColor: 'text-red-500',
    icon: 'TrendingUp',
  },
];

export const serviceCategories = [
  'Cloud Computing',
  'Data & Analytics',
  'Security',
  'Communication',
  'DevOps',
  'Marketing Tools',
  'Sales Tools',
  'Manufacturing',
];

export const effectiveDateData: ServiceConfig[] = [
  {
    service: 'Service567-medium',
    currentPrice: '$0.14/hr',
    newPrice: '$0.0384/hr',
    newPriceColor: 'text-green-600',
    effectiveDate: '01-Jan-2025',
    status: 'Scheduled',
  },
  {
    service: 'AWS Compute-large',
    currentPrice: '$0.25/hr',
    newPrice: '$0.22/hr',
    newPriceColor: 'text-green-600',
    effectiveDate: '01-Jan-2025',
    status: 'Scheduled',
  },
  {
    service: 'Database Storage-premium',
    currentPrice: '$0.30/GB',
    newPrice: '$0.35/GB',
    newPriceColor: 'text-red-500',
    effectiveDate: '01-Feb-2025',
    status: 'Scheduled',
  },
  {
    service: 'Analytics Platform-basic',
    currentPrice: '$2.50/query',
    newPrice: '$2.00/query',
    newPriceColor: 'text-green-600',
    effectiveDate: '01-Feb-2025',
    status: 'Scheduled',
  },
  {
    service: 'CDN Service-standard',
    currentPrice: '$0.08/GB',
    newPrice: '$0.06/GB',
    newPriceColor: 'text-green-600',
    effectiveDate: '01-Mar-2025',
    status: 'Scheduled',
  },
];
