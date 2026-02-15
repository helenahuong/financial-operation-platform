import type { KPIData, Dispute, TeamMember, SLAPerformanceData } from '@/types';

export const disputeKPIs: KPIData[] = [
  {
    label: 'Open Disputes',
    value: '42',
    subtitle: '$485K in dispute',
    trend: '+5 today',
    trendColor: 'text-green-600',
    icon: 'FolderOpen',
  },
  {
    label: 'Under Review',
    value: '28',
    subtitle: '67% of open cases',
    trend: 'Avg: 3.2 days',
    trendColor: 'text-blue-500',
    icon: 'Clock',
  },
  {
    label: 'Resolved',
    value: '156',
    subtitle: '$1.2M recovered',
    trend: '+12 this week',
    trendColor: 'text-green-600',
    icon: 'CheckCircle',
  },
  {
    label: 'Avg. Resolution Days',
    value: '4.2',
    subtitle: 'Target: 5 days',
    trend: '85% SLA',
    trendColor: 'text-green-600',
    icon: 'BarChart3',
  },
];

export const slaPerformance: SLAPerformanceData[] = [
  { label: 'Within 24 hours', percentage: 92, color: '#16A34A' },
  { label: 'Within 3 days', percentage: 85, color: '#EA580C' },
  { label: 'Within 5 days', percentage: 78, color: '#2563EB' },
  { label: 'Over 5 days', percentage: 15, color: '#DC2626' },
];

export const teamWorkload: TeamMember[] = [
  { name: 'Wayne Johnson', role: 'Senior Analyst', caseCount: 12, loadStatus: 'High load' },
  { name: 'Priya Sen', role: 'Finance Analyst', caseCount: 8, loadStatus: 'Normal' },
  { name: 'Julia Jeffiery', role: 'Junior Analyst', caseCount: 5, loadStatus: 'Available' },
];

export const disputes: Dispute[] = [
  { caseId: 'DSP-2024-001', invoiceId: 'INV-2024-001', vendor: 'Pan Asia LTD', amount: '$24,500.00', assignedTo: 'Wayne Johnson', priority: 'High', status: 'Under Review', daysOpen: 3 },
  { caseId: 'DSP-2024-002', invoiceId: 'INV-2024-003', vendor: 'Kong LLP', amount: '$24,500.00', assignedTo: 'Priya Sen', priority: 'Medium', status: 'Under Review', daysOpen: 5 },
  { caseId: 'DSP-2024-003', invoiceId: 'INV-2024-010', vendor: 'NexGen Corp', amount: '$19,800.00', assignedTo: 'Julia Jeffiery', priority: 'Low', status: 'Under Review', daysOpen: 2 },
  { caseId: 'DSP-2024-004', invoiceId: 'INV-2024-016', vendor: 'Pan Asia LTD', amount: '$9,300.00', assignedTo: 'Wayne Johnson', priority: 'High', status: 'Under Review', daysOpen: 7 },
  { caseId: 'DSP-2024-005', invoiceId: 'INV-2024-023', vendor: 'Pan Asia LTD', amount: '$25,000.00', assignedTo: 'Priya Sen', priority: 'Medium', status: 'Under Review', daysOpen: 4 },
  { caseId: 'DSP-2024-006', invoiceId: 'INV-2024-031', vendor: 'NexGen Corp', amount: '$11,900.00', assignedTo: 'Wayne Johnson', priority: 'High', status: 'Under Review', daysOpen: 1 },
  { caseId: 'DSP-2024-007', invoiceId: 'INV-2024-039', vendor: 'Tang Spares LLP', amount: '$7,400.00', assignedTo: 'Julia Jeffiery', priority: 'Low', status: 'Under Review', daysOpen: 6 },
  { caseId: 'DSP-2024-008', invoiceId: 'INV-2024-045', vendor: 'NexGen Corp', amount: '$8,100.00', assignedTo: 'Priya Sen', priority: 'Medium', status: 'Under Review', daysOpen: 2 },
];
