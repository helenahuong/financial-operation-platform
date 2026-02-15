export type Status = 'Active' | 'Inactive' | 'Pending' | 'Approved' | 'Disputed' | 'Under Review' | 'Scheduled' | 'Resolved';
export type Priority = 'High' | 'Medium' | 'Low';
export type RegionStatus = 'OnTrack' | 'Watch' | 'Alert';
export type LoadStatus = 'High load' | 'Normal' | 'Available';
export type InvoiceStatus = 'Pending' | 'Approved' | 'Disputed';

export interface KPIData {
  label: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendColor?: string;
  icon?: string;
}

export interface DonutChartData {
  name: string;
  value: number;
  color: string;
}

export interface RegionSummary {
  region: string;
  status: RegionStatus;
  ytdSpend: string;
  vendorCount: number;
}

export interface BudgetHeatmapData {
  region: string;
  percentage: number;
  status: 'under' | 'near' | 'over';
}

export interface ServiceCharge {
  sNo: number;
  service: string;
  department: string;
  usage: string;
  unitRate: string;
  totalCost: string;
  status: 'Active' | 'Inactive';
  [key: string]: unknown;
}

export interface DepartmentSummary {
  name: string;
  spend: string;
  change: string;
  changePositive: boolean;
  services: number;
  projects: number;
  icon: string;
}

export interface Invoice {
  id: string;
  vendor: string;
  department: string;
  amount: string;
  date: string;
  status: InvoiceStatus;
  [key: string]: unknown;
}

export interface Dispute {
  caseId: string;
  invoiceId: string;
  vendor: string;
  amount: string;
  assignedTo: string;
  assignedAvatar?: string;
  priority: Priority;
  status: Status;
  daysOpen: number;
  [key: string]: unknown;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  caseCount: number;
  loadStatus: LoadStatus;
}

export interface SLAPerformanceData {
  label: string;
  percentage: number;
  color: string;
}

export interface ServiceConfig {
  service: string;
  currentPrice: string;
  newPrice: string;
  newPriceColor?: string;
  effectiveDate: string;
  status: 'Scheduled' | 'Active';
}

export interface VendorCharge {
  sNo: number;
  vendor: string;
  category: string;
  contractValue: string;
  ytdSpend: string;
  invoiceCount: number;
  status: 'Active' | 'Inactive' | 'Under Review';
  [key: string]: unknown;
}

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
  [key: string]: unknown;
}

export interface InvoiceLineItem {
  lineNo: number;
  description: string;
  quantity: number;
  unitPrice: string;
  amount: string;
  glAccount: string;
}

export interface VendorDetails {
  name: string;
  vendorId: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  paymentTerms: string;
  taxId: string;
}

export interface ApprovalHistoryStep {
  approver: string;
  role: string;
  action: 'Approved' | 'Rejected' | 'Pending';
  date: string;
  comments: string;
}

export interface InvoiceDetail extends Invoice {
  lineItems: InvoiceLineItem[];
  vendorDetails: VendorDetails;
  approvalHistory: ApprovalHistoryStep[];
  paymentTerms: {
    terms: string;
    dueDate: string;
    discountTerms?: string;
  };
  attachments: {
    name: string;
    size: string;
    uploadDate: string;
  }[];
}

export interface AdvancedFilterState {
  dateRange: { start: string; end: string };
  departments: string[];
  spendRange: { min: number; max: number };
  statuses: string[];
}
