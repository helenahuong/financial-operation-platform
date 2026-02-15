import type { DepartmentSummary, ServiceCharge } from '@/types';

export const departmentSummaries: DepartmentSummary[] = [
  { name: 'Engineering', spend: '$485K', change: '+5.2%', changePositive: true, services: 12, projects: 34, icon: 'Settings' },
  { name: 'Manufacturing', spend: '$342K', change: '-2.1%', changePositive: false, services: 8, projects: 18, icon: 'Factory' },
  { name: 'Marketing', spend: '$156K', change: '+8.7%', changePositive: true, services: 6, projects: 12, icon: 'Megaphone' },
  { name: 'Sales', spend: '$198K', change: '+3.4%', changePositive: true, services: 5, projects: 8, icon: 'Coins' },
];

export const serviceCharges: ServiceCharge[] = [
  { sNo: 1, service: 'AWS Compute', department: 'Engineering', usage: '2,450 hrs', unitRate: '$0.15/hr', totalCost: '$367.50', status: 'Active' },
  { sNo: 2, service: 'Database Storage', department: 'Engineering', usage: '850 GB', unitRate: '$0.25/GB', totalCost: '$212.50', status: 'Active' },
  { sNo: 3, service: 'Analytics Platform', department: 'Marketing', usage: '156 queries', unitRate: '$2.50/query', totalCost: '$390.00', status: 'Inactive' },
  { sNo: 4, service: 'Analytics Platform', department: 'Sales', usage: '70 units', unitRate: '$2.50/query', totalCost: '$390.00', status: 'Active' },
  { sNo: 5, service: 'Analytics Platform', department: 'Marketing', usage: '156 queries', unitRate: '$2.50/query', totalCost: '$390.00', status: 'Active' },
  { sNo: 6, service: 'Analytics Platform', department: 'Marketing', usage: '156 queries', unitRate: '$2.50/query', totalCost: '$390.00', status: 'Active' },
  { sNo: 7, service: 'Cloud Functions', department: 'Engineering', usage: '1,200 invocations', unitRate: '$0.02/inv', totalCost: '$24.00', status: 'Active' },
  { sNo: 8, service: 'CDN Service', department: 'Marketing', usage: '500 GB', unitRate: '$0.08/GB', totalCost: '$40.00', status: 'Active' },
  { sNo: 9, service: 'Email Service', department: 'Sales', usage: '10,000 emails', unitRate: '$0.001/email', totalCost: '$10.00', status: 'Active' },
  { sNo: 10, service: 'CI/CD Pipeline', department: 'Engineering', usage: '340 builds', unitRate: '$0.10/build', totalCost: '$34.00', status: 'Active' },
  { sNo: 11, service: 'Monitoring Tools', department: 'Engineering', usage: '720 hrs', unitRate: '$0.05/hr', totalCost: '$36.00', status: 'Active' },
  { sNo: 12, service: 'CRM Platform', department: 'Sales', usage: '45 licenses', unitRate: '$25/license', totalCost: '$1,125.00', status: 'Active' },
  { sNo: 13, service: 'Ad Platform', department: 'Marketing', usage: '2,000 impressions', unitRate: '$0.05/imp', totalCost: '$100.00', status: 'Active' },
  { sNo: 14, service: 'Data Warehouse', department: 'Engineering', usage: '1.2 TB', unitRate: '$5/TB', totalCost: '$6.00', status: 'Inactive' },
  { sNo: 15, service: 'Video Conferencing', department: 'Manufacturing', usage: '200 hrs', unitRate: '$0.10/hr', totalCost: '$20.00', status: 'Active' },
  { sNo: 16, service: 'ERP System', department: 'Manufacturing', usage: '30 licenses', unitRate: '$50/license', totalCost: '$1,500.00', status: 'Active' },
  { sNo: 17, service: 'IoT Platform', department: 'Manufacturing', usage: '500 devices', unitRate: '$1/device', totalCost: '$500.00', status: 'Active' },
  { sNo: 18, service: 'Security Suite', department: 'Engineering', usage: '100 endpoints', unitRate: '$3/endpoint', totalCost: '$300.00', status: 'Active' },
  { sNo: 19, service: 'Design Tools', department: 'Marketing', usage: '15 licenses', unitRate: '$20/license', totalCost: '$300.00', status: 'Active' },
  { sNo: 20, service: 'Payroll System', department: 'Manufacturing', usage: '250 employees', unitRate: '$2/employee', totalCost: '$500.00', status: 'Active' },
  { sNo: 21, service: 'API Gateway', department: 'Engineering', usage: '50,000 calls', unitRate: '$0.001/call', totalCost: '$50.00', status: 'Active' },
  { sNo: 22, service: 'Backup Service', department: 'Engineering', usage: '2 TB', unitRate: '$10/TB', totalCost: '$20.00', status: 'Active' },
  { sNo: 23, service: 'Chat Platform', department: 'Sales', usage: '100 agents', unitRate: '$15/agent', totalCost: '$1,500.00', status: 'Active' },
  { sNo: 24, service: 'Survey Tool', department: 'Marketing', usage: '5,000 responses', unitRate: '$0.02/resp', totalCost: '$100.00', status: 'Inactive' },
  { sNo: 25, service: 'QA Testing', department: 'Manufacturing', usage: '800 tests', unitRate: '$0.50/test', totalCost: '$400.00', status: 'Active' },
  { sNo: 26, service: 'DNS Service', department: 'Engineering', usage: '1M queries', unitRate: '$0.0004/q', totalCost: '$400.00', status: 'Active' },
  { sNo: 27, service: 'Load Balancer', department: 'Engineering', usage: '720 hrs', unitRate: '$0.03/hr', totalCost: '$21.60', status: 'Active' },
  { sNo: 28, service: 'Object Storage', department: 'Marketing', usage: '300 GB', unitRate: '$0.02/GB', totalCost: '$6.00', status: 'Active' },
  { sNo: 29, service: 'Message Queue', department: 'Engineering', usage: '500K msgs', unitRate: '$0.0001/msg', totalCost: '$50.00', status: 'Active' },
  { sNo: 30, service: 'Compliance Tool', department: 'Manufacturing', usage: '12 audits', unitRate: '$100/audit', totalCost: '$1,200.00', status: 'Active' },
  { sNo: 31, service: 'SSO Service', department: 'Engineering', usage: '500 users', unitRate: '$2/user', totalCost: '$1,000.00', status: 'Active' },
  { sNo: 32, service: 'Helpdesk', department: 'Sales', usage: '300 tickets', unitRate: '$1/ticket', totalCost: '$300.00', status: 'Active' },
  { sNo: 33, service: 'SEO Tool', department: 'Marketing', usage: '10 projects', unitRate: '$50/project', totalCost: '$500.00', status: 'Active' },
  { sNo: 34, service: 'Inventory System', department: 'Manufacturing', usage: '1,000 items', unitRate: '$0.10/item', totalCost: '$100.00', status: 'Active' },
  { sNo: 35, service: 'Log Management', department: 'Engineering', usage: '5 TB', unitRate: '$3/TB', totalCost: '$15.00', status: 'Active' },
  { sNo: 36, service: 'CMS Platform', department: 'Marketing', usage: '8 sites', unitRate: '$30/site', totalCost: '$240.00', status: 'Active' },
  { sNo: 37, service: 'VPN Service', department: 'Engineering', usage: '200 users', unitRate: '$5/user', totalCost: '$1,000.00', status: 'Active' },
  { sNo: 38, service: 'Shipping API', department: 'Manufacturing', usage: '2,000 labels', unitRate: '$0.25/label', totalCost: '$500.00', status: 'Active' },
  { sNo: 39, service: 'Payment Gateway', department: 'Sales', usage: '5,000 txns', unitRate: '$0.30/txn', totalCost: '$1,500.00', status: 'Active' },
  { sNo: 40, service: 'Webhook Service', department: 'Engineering', usage: '100K events', unitRate: '$0.0005/ev', totalCost: '$50.00', status: 'Active' },
  { sNo: 41, service: 'A/B Testing', department: 'Marketing', usage: '20 experiments', unitRate: '$25/exp', totalCost: '$500.00', status: 'Active' },
  { sNo: 42, service: 'Supply Chain', department: 'Manufacturing', usage: '50 vendors', unitRate: '$10/vendor', totalCost: '$500.00', status: 'Active' },
  { sNo: 43, service: 'Notification Hub', department: 'Engineering', usage: '1M pushes', unitRate: '$0.001/push', totalCost: '$1,000.00', status: 'Active' },
  { sNo: 44, service: 'Social Listener', department: 'Marketing', usage: '5 channels', unitRate: '$40/channel', totalCost: '$200.00', status: 'Active' },
  { sNo: 45, service: 'Field Service', department: 'Manufacturing', usage: '80 technicians', unitRate: '$15/tech', totalCost: '$1,200.00', status: 'Active' },
  { sNo: 46, service: 'Contract Mgmt', department: 'Sales', usage: '200 contracts', unitRate: '$5/contract', totalCost: '$1,000.00', status: 'Active' },
  { sNo: 47, service: 'BI Dashboard', department: 'Engineering', usage: '50 dashboards', unitRate: '$10/dash', totalCost: '$500.00', status: 'Active' },
  { sNo: 48, service: 'Quality Control', department: 'Manufacturing', usage: '1,500 checks', unitRate: '$0.50/check', totalCost: '$750.00', status: 'Inactive' },
];

// Vendor Supplier Charges tab data
export interface VendorCharge {
  sNo: number;
  vendor: string;
  category: string;
  contractValue: string;
  ytdSpend: string;
  invoiceCount: number;
  status: 'Active' | 'Inactive' | 'Under Review';
}

export const vendorSummaries: DepartmentSummary[] = [
  { name: 'Pan Asia LTD', spend: '$312K', change: '+7.8%', changePositive: true, services: 5, projects: 14, icon: 'Building2' },
  { name: 'Tang Spares LLP', spend: '$198K', change: '+2.3%', changePositive: true, services: 3, projects: 9, icon: 'Building2' },
  { name: 'Kong LLP', spend: '$167K', change: '-1.5%', changePositive: false, services: 4, projects: 11, icon: 'Building2' },
  { name: 'NexGen Corp', spend: '$142K', change: '+12.1%', changePositive: true, services: 6, projects: 7, icon: 'Building2' },
];

export const vendorCharges: VendorCharge[] = [
  { sNo: 1, vendor: 'Pan Asia LTD', category: 'IT Services', contractValue: '$450,000', ytdSpend: '$312,400', invoiceCount: 24, status: 'Active' },
  { sNo: 2, vendor: 'Tang Spares LLP', category: 'Hardware', contractValue: '$280,000', ytdSpend: '$198,200', invoiceCount: 18, status: 'Active' },
  { sNo: 3, vendor: 'Kong LLP', category: 'Consulting', contractValue: '$200,000', ytdSpend: '$167,800', invoiceCount: 15, status: 'Active' },
  { sNo: 4, vendor: 'NexGen Corp', category: 'Software', contractValue: '$320,000', ytdSpend: '$142,600', invoiceCount: 12, status: 'Active' },
  { sNo: 5, vendor: 'Global Tech Inc', category: 'Cloud Services', contractValue: '$180,000', ytdSpend: '$128,400', invoiceCount: 9, status: 'Active' },
  { sNo: 6, vendor: 'Apex Solutions', category: 'Data Analytics', contractValue: '$150,000', ytdSpend: '$98,700', invoiceCount: 8, status: 'Active' },
  { sNo: 7, vendor: 'Stellar Industries', category: 'Manufacturing', contractValue: '$520,000', ytdSpend: '$385,200', invoiceCount: 32, status: 'Active' },
  { sNo: 8, vendor: 'Orion Systems', category: 'Security', contractValue: '$95,000', ytdSpend: '$72,300', invoiceCount: 6, status: 'Under Review' },
  { sNo: 9, vendor: 'Summit Partners', category: 'Consulting', contractValue: '$120,000', ytdSpend: '$89,100', invoiceCount: 7, status: 'Active' },
  { sNo: 10, vendor: 'Delta Corp', category: 'Logistics', contractValue: '$75,000', ytdSpend: '$54,200', invoiceCount: 5, status: 'Inactive' },
  { sNo: 11, vendor: 'CloudNine SaaS', category: 'Software', contractValue: '$210,000', ytdSpend: '$156,800', invoiceCount: 11, status: 'Active' },
  { sNo: 12, vendor: 'TechVault Inc', category: 'IT Services', contractValue: '$165,000', ytdSpend: '$112,400', invoiceCount: 10, status: 'Active' },
  { sNo: 13, vendor: 'Prime Networks', category: 'Telecom', contractValue: '$88,000', ytdSpend: '$67,500', invoiceCount: 6, status: 'Active' },
  { sNo: 14, vendor: 'Blue Horizon', category: 'Marketing', contractValue: '$60,000', ytdSpend: '$45,800', invoiceCount: 4, status: 'Active' },
  { sNo: 15, vendor: 'Iron Gate Security', category: 'Security', contractValue: '$140,000', ytdSpend: '$102,300', invoiceCount: 8, status: 'Under Review' },
  { sNo: 16, vendor: 'DataStream LLC', category: 'Data Analytics', contractValue: '$175,000', ytdSpend: '$131,600', invoiceCount: 9, status: 'Active' },
];

// Cost Center Drill-Down tab data
export interface CostCenterCharge {
  sNo: number;
  costCenter: string;
  department: string;
  budget: string;
  actualSpend: string;
  variance: string;
  variancePositive: boolean;
  utilization: number;
  status: 'Under Budget' | 'On Track' | 'Over Budget';
}

export const costCenterSummaries: DepartmentSummary[] = [
  { name: 'CC-1001 R&D', spend: '$620K', change: '+3.2%', changePositive: true, services: 18, projects: 42, icon: 'FlaskConical' },
  { name: 'CC-2001 Ops', spend: '$445K', change: '-0.8%', changePositive: false, services: 12, projects: 28, icon: 'Cog' },
  { name: 'CC-3001 G&A', spend: '$238K', change: '+4.5%', changePositive: true, services: 8, projects: 15, icon: 'Landmark' },
  { name: 'CC-4001 Sales', spend: '$178K', change: '+6.1%', changePositive: true, services: 6, projects: 10, icon: 'TrendingUp' },
];

export const costCenterCharges: CostCenterCharge[] = [
  { sNo: 1, costCenter: 'CC-1001', department: 'Engineering', budget: '$750,000', actualSpend: '$620,400', variance: '-$129,600', variancePositive: true, utilization: 83, status: 'On Track' },
  { sNo: 2, costCenter: 'CC-1002', department: 'Engineering', budget: '$320,000', actualSpend: '$298,700', variance: '-$21,300', variancePositive: true, utilization: 93, status: 'On Track' },
  { sNo: 3, costCenter: 'CC-2001', department: 'Manufacturing', budget: '$500,000', actualSpend: '$445,200', variance: '-$54,800', variancePositive: true, utilization: 89, status: 'On Track' },
  { sNo: 4, costCenter: 'CC-2002', department: 'Manufacturing', budget: '$180,000', actualSpend: '$192,400', variance: '+$12,400', variancePositive: false, utilization: 107, status: 'Over Budget' },
  { sNo: 5, costCenter: 'CC-3001', department: 'Marketing', budget: '$280,000', actualSpend: '$238,100', variance: '-$41,900', variancePositive: true, utilization: 85, status: 'On Track' },
  { sNo: 6, costCenter: 'CC-3002', department: 'Marketing', budget: '$95,000', actualSpend: '$87,600', variance: '-$7,400', variancePositive: true, utilization: 92, status: 'On Track' },
  { sNo: 7, costCenter: 'CC-4001', department: 'Sales', budget: '$200,000', actualSpend: '$178,300', variance: '-$21,700', variancePositive: true, utilization: 89, status: 'On Track' },
  { sNo: 8, costCenter: 'CC-4002', department: 'Sales', budget: '$120,000', actualSpend: '$125,800', variance: '+$5,800', variancePositive: false, utilization: 105, status: 'Over Budget' },
  { sNo: 9, costCenter: 'CC-5001', department: 'Engineering', budget: '$400,000', actualSpend: '$312,500', variance: '-$87,500', variancePositive: true, utilization: 78, status: 'Under Budget' },
  { sNo: 10, costCenter: 'CC-5002', department: 'Manufacturing', budget: '$250,000', actualSpend: '$218,900', variance: '-$31,100', variancePositive: true, utilization: 88, status: 'On Track' },
  { sNo: 11, costCenter: 'CC-6001', department: 'Marketing', budget: '$150,000', actualSpend: '$142,300', variance: '-$7,700', variancePositive: true, utilization: 95, status: 'On Track' },
  { sNo: 12, costCenter: 'CC-6002', department: 'Sales', budget: '$85,000', actualSpend: '$91,200', variance: '+$6,200', variancePositive: false, utilization: 107, status: 'Over Budget' },
  { sNo: 13, costCenter: 'CC-7001', department: 'Engineering', budget: '$550,000', actualSpend: '$425,600', variance: '-$124,400', variancePositive: true, utilization: 77, status: 'Under Budget' },
  { sNo: 14, costCenter: 'CC-7002', department: 'Manufacturing', budget: '$340,000', actualSpend: '$328,100', variance: '-$11,900', variancePositive: true, utilization: 96, status: 'On Track' },
  { sNo: 15, costCenter: 'CC-8001', department: 'Marketing', budget: '$110,000', actualSpend: '$98,400', variance: '-$11,600', variancePositive: true, utilization: 89, status: 'On Track' },
  { sNo: 16, costCenter: 'CC-8002', department: 'Sales', budget: '$70,000', actualSpend: '$68,200', variance: '-$1,800', variancePositive: true, utilization: 97, status: 'On Track' },
];

// Department spending data for chart view
export const departmentChartData = [
  { name: 'Engineering', internal: 485000, vendor: 312000, total: 797000 },
  { name: 'Manufacturing', internal: 342000, vendor: 385000, total: 727000 },
  { name: 'Marketing', internal: 156000, vendor: 98000, total: 254000 },
  { name: 'Sales', internal: 198000, vendor: 142000, total: 340000 },
];

export const monthlyTrendData = [
  { month: 'Jul', spend: 165000 },
  { month: 'Aug', spend: 178000 },
  { month: 'Sep', spend: 192000 },
  { month: 'Oct', spend: 185000 },
  { month: 'Nov', spend: 198000 },
  { month: 'Dec', spend: 210000 },
];

export const serviceDistribution = [
  { name: 'Cloud Computing', value: 35, color: '#2563EB' },
  { name: 'Data & Analytics', value: 22, color: '#3B82F6' },
  { name: 'Security', value: 15, color: '#60A5FA' },
  { name: 'DevOps', value: 12, color: '#93C5FD' },
  { name: 'Communication', value: 10, color: '#BFDBFE' },
  { name: 'Other', value: 6, color: '#DBEAFE' },
];
