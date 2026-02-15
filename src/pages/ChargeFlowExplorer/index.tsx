import { useState, useMemo } from 'react';
import { Filter, LayoutGrid, BarChart3, Settings, Factory, Megaphone, Coins, Building2, FlaskConical, Cog, Landmark, TrendingUp, ChevronDown } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SubTabNavigation from '@/components/layout/SubTabNavigation';
import DataTable from '@/components/ui/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import ActionButton from '@/components/ui/ActionButton';
import DateSelector from '@/components/ui/DateSelector';
import DepartmentChartView from '@/components/features/DepartmentChartView';
import AdvancedFiltersModal from '@/components/features/AdvancedFiltersModal';
import type { Column } from '@/components/ui/DataTable';
import type { ServiceCharge, VendorCharge, CostCenterCharge, AdvancedFilterState } from '@/types';
import {
  departmentSummaries,
  serviceCharges,
  vendorSummaries,
  vendorCharges,
  costCenterSummaries,
  costCenterCharges,
  departmentChartData,
  monthlyTrendData,
  serviceDistribution,
} from '@/data/explorer';

const generateMonthOptions = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = [2024, 2025];
  return years.flatMap(year => months.map(month => `${month} ${year}`));
};

const subTabs = [
  { label: 'Internal Program Charges', value: 'internal' },
  { label: 'Vendor Supplier Charges', value: 'vendor' },
  { label: 'Cost Center Drill-Down', value: 'costcenter' },
];

const deptIcons: Record<string, React.ElementType> = {
  Engineering: Settings,
  Manufacturing: Factory,
  Marketing: Megaphone,
  Sales: Coins,
  Building2: Building2,
  FlaskConical: FlaskConical,
  Cog: Cog,
  Landmark: Landmark,
  TrendingUp: TrendingUp,
};

const serviceColumns: Column<ServiceCharge>[] = [
  { key: 'sNo', header: 'S.No' },
  { key: 'service', header: 'Services', sortable: true },
  { key: 'department', header: 'Department', sortable: true },
  { key: 'usage', header: 'Usage', sortable: true },
  { key: 'unitRate', header: 'Unit Rate', sortable: true },
  { key: 'totalCost', header: 'Total Cost', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row: ServiceCharge) => <StatusBadge status={row.status} />,
  },
];

const vendorColumns: Column<VendorCharge>[] = [
  { key: 'sNo', header: 'S.No' },
  { key: 'vendor', header: 'Vendor', sortable: true },
  { key: 'category', header: 'Category', sortable: true },
  { key: 'contractValue', header: 'Contract Value', sortable: true },
  { key: 'ytdSpend', header: 'YTD Spend', sortable: true },
  { key: 'invoiceCount', header: 'Invoice Count', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row: VendorCharge) => <StatusBadge status={row.status} />,
  },
];

const costCenterColumns: Column<CostCenterCharge>[] = [
  { key: 'sNo', header: 'S.No' },
  { key: 'costCenter', header: 'Cost Center', sortable: true },
  { key: 'department', header: 'Department', sortable: true },
  { key: 'budget', header: 'Budget', sortable: true },
  { key: 'actualSpend', header: 'Actual Spend', sortable: true },
  {
    key: 'variance',
    header: 'Variance',
    sortable: true,
    render: (row: CostCenterCharge) => (
      <span className={row.variancePositive ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
        {row.variance}
      </span>
    ),
  },
  {
    key: 'utilization',
    header: 'Utilization %',
    sortable: true,
    render: (row: CostCenterCharge) => (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium min-w-[3rem]">{row.utilization}%</span>
        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${row.utilization > 100 ? 'bg-red-500' : row.utilization > 90 ? 'bg-yellow-500' : 'bg-primary'}`}
            style={{ width: `${Math.min(row.utilization, 100)}%` }}
          />
        </div>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row: CostCenterCharge) => <StatusBadge status={row.status} />,
  },
];

export default function ChargeFlowExplorer() {
  const [activeTab, setActiveTab] = useState('internal');
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('table');
  const [selectedMonth, setSelectedMonth] = useState('December 2024');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilterState>({
    dateRange: { start: '', end: '' },
    departments: [],
    spendRange: { min: 0, max: 1000000 },
    statuses: [],
  });

  // Apply advanced filters to service charges
  const filteredServiceCharges = useMemo(() => {
    return serviceCharges.filter(charge => {
      // Filter by department
      if (advancedFilters.departments.length > 0 && !advancedFilters.departments.includes(charge.department)) {
        return false;
      }
      // Filter by status
      if (advancedFilters.statuses.length > 0 && !advancedFilters.statuses.includes(charge.status)) {
        return false;
      }
      return true;
    });
  }, [advancedFilters]);

  // Count active filters
  const activeFilterCount =
    (advancedFilters.dateRange.start || advancedFilters.dateRange.end ? 1 : 0) +
    advancedFilters.departments.length +
    advancedFilters.statuses.length +
    (advancedFilters.spendRange.min > 0 || advancedFilters.spendRange.max < 1000000 ? 1 : 0);

  return (
    <div>
      <PageHeader
        title="Chargeflow Explorer"
        subtitle="Detailed analysis of internal programs, vendors, and cost centers"
        actions={
          <>
            <DateSelector
              options={generateMonthOptions()}
              value={selectedMonth}
              onChange={setSelectedMonth}
              label="Select month"
            />
            <div className="relative">
              <ActionButton
                variant="primary"
                icon={<Filter size={16} />}
                onClick={() => setShowAdvancedFilters(true)}
              >
                Advanced Filters
              </ActionButton>
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </div>
          </>
        }
      />

      <SubTabNavigation tabs={subTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Filter Bar */}
      <div className="bg-gray-50 rounded-xl p-4 flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm text-text-secondary font-medium">View by:</span>
        <ActionButton variant="secondary" size="sm" icon={<ChevronDown size={14} />}>
          Department
        </ActionButton>
        <ActionButton variant="secondary" size="sm" icon={<ChevronDown size={14} />}>
          All Departments
        </ActionButton>
        <div className="ml-auto flex items-center gap-2">
          <ActionButton
            variant={viewMode === 'table' ? 'primary' : 'secondary'}
            size="sm"
            icon={<LayoutGrid size={14} />}
            onClick={() => setViewMode('table')}
          >
            Table View
          </ActionButton>
          <ActionButton
            variant={viewMode === 'chart' ? 'primary' : 'secondary'}
            size="sm"
            icon={<BarChart3 size={14} />}
            onClick={() => setViewMode('chart')}
          >
            Chart View
          </ActionButton>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {(activeTab === 'internal' ? departmentSummaries : activeTab === 'vendor' ? vendorSummaries : costCenterSummaries).map((item) => {
          const IconComp = deptIcons[item.icon] || Settings;
          return (
            <div key={item.name} className="bg-white border border-border rounded-xl p-6 flex justify-between items-start">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl font-bold text-text-primary">{item.spend}</span>
                  <span className={`text-sm font-medium ${item.changePositive ? 'text-green-600' : 'text-red-500'}`}>
                    {item.change}
                  </span>
                </div>
                <p className="text-sm text-text-secondary font-medium">{item.name}</p>
                <p className="text-xs text-text-secondary mt-1">
                  {item.services} Services &bull; {item.projects} Projects
                </p>
              </div>
              <IconComp size={32} className="text-text-secondary opacity-30" />
            </div>
          );
        })}
      </div>

      {/* Data View (Table or Chart) */}
      {viewMode === 'table' ? (
        <>
          {activeTab === 'internal' && (
            <div className="bg-white border border-border rounded-xl p-6">
              <DataTable
                data={filteredServiceCharges}
                columns={serviceColumns}
                pageSize={6}
              />
            </div>
          )}

          {activeTab === 'vendor' && (
            <div className="bg-white border border-border rounded-xl p-6">
              <DataTable
                data={vendorCharges}
                columns={vendorColumns}
                pageSize={6}
              />
            </div>
          )}

          {activeTab === 'costcenter' && (
            <div className="bg-white border border-border rounded-xl p-6">
              <DataTable
                data={costCenterCharges}
                columns={costCenterColumns}
                pageSize={6}
              />
            </div>
          )}
        </>
      ) : (
        <DepartmentChartView
          serviceDistribution={serviceDistribution}
          departmentData={departmentChartData}
          monthlyTrend={monthlyTrendData}
        />
      )}

      {/* Advanced Filters Modal */}
      <AdvancedFiltersModal
        isOpen={showAdvancedFilters}
        onClose={() => setShowAdvancedFilters(false)}
        filters={advancedFilters}
        onApplyFilters={setAdvancedFilters}
      />
    </div>
  );
}
