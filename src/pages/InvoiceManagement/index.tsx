import { useState } from 'react';
import { Plus, Download, Check, X, Eye, MessageSquare } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SubTabNavigation from '@/components/layout/SubTabNavigation';
import KPICard from '@/components/ui/KPICard';
import DataTable from '@/components/ui/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import FilterBar from '@/components/ui/FilterBar';
import ActionButton from '@/components/ui/ActionButton';
import DateSelector from '@/components/ui/DateSelector';
import InvoiceDetailsView from '@/components/features/InvoiceDetailsView';
import type { Column } from '@/components/ui/DataTable';
import type { Invoice } from '@/types';
import { invoiceKPIs, invoices, invoiceDetailsMap } from '@/data/invoices';

const generateMonthOptions = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = [2024, 2025];
  return years.flatMap(year => months.map(month => `${month} ${year}`));
};

const subTabs = [
  { label: 'Invoice Summary', value: 'summary' },
  { label: 'Invoice Details', value: 'details' },
  { label: 'Bulk Actions', value: 'bulk' },
];

const columns: Column<Invoice>[] = [
  { key: 'id', header: 'Invoice ID' },
  { key: 'vendor', header: 'Vendor' },
  { key: 'department', header: 'Department' },
  { key: 'amount', header: 'Amount in ($)' },
  { key: 'date', header: 'Date' },
  {
    key: 'status',
    header: 'Status',
    render: (row: Invoice) => <StatusBadge status={row.status} />,
  },
];

function InvoiceRowActions({ row }: { row: Invoice }) {
  switch (row.status) {
    case 'Pending':
      return (
        <div className="flex items-center gap-2">
          <button className="text-green-600 hover:text-green-700 p-1" title="Approve">
            <Check size={16} />
          </button>
          <button className="text-red-500 hover:text-red-600 p-1" title="Reject">
            <X size={16} />
          </button>
          <button className="text-blue-500 hover:text-blue-600 p-1" title="View">
            <Eye size={16} />
          </button>
        </div>
      );
    case 'Approved':
      return (
        <div className="flex items-center gap-2">
          <button className="text-blue-500 hover:text-blue-600 p-1" title="Download">
            <Download size={16} />
          </button>
          <button className="text-blue-500 hover:text-blue-600 p-1" title="View">
            <Eye size={16} />
          </button>
        </div>
      );
    case 'Disputed':
      return (
        <div className="flex items-center gap-2">
          <button className="text-amber-500 hover:text-amber-600 p-1" title="Comment">
            <MessageSquare size={16} />
          </button>
          <button className="text-blue-500 hover:text-blue-600 p-1" title="View">
            <Eye size={16} />
          </button>
        </div>
      );
    default:
      return null;
  }
}

export default function InvoiceManagement() {
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedMonth, setSelectedMonth] = useState('December 2024');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('INV-2024-001');
  const [filterInvoice, setFilterInvoice] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDept, setFilterDept] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const filteredInvoices = invoices.filter((inv) => {
    if (filterStatus && inv.status !== filterStatus) return false;
    if (filterDept && inv.department !== filterDept) return false;
    if (searchVal) {
      const q = searchVal.toLowerCase();
      return (
        inv.id.toLowerCase().includes(q) ||
        inv.vendor.toLowerCase().includes(q) ||
        inv.department.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      <PageHeader
        title="Invoice Management"
        subtitle="Review, approve, and manage invoices across all departments"
        actions={
          <>
            <DateSelector
              options={generateMonthOptions()}
              value={selectedMonth}
              onChange={setSelectedMonth}
              label="Select month"
            />
            <ActionButton variant="primary" icon={<Plus size={16} />}>
              New Invoice
            </ActionButton>
          </>
        }
      />

      <SubTabNavigation tabs={subTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {invoiceKPIs.map((kpi, idx) => (
          <KPICard key={idx} data={kpi} />
        ))}
      </div>

      {/* Invoice Summary & Bulk Actions View */}
      {(activeTab === 'summary' || activeTab === 'bulk') && (
        <>
          {/* Filter Bar */}
          <div className="mb-4">
            <FilterBar
              filters={[
                {
                  label: 'All Invoices',
                  options: ['All Invoices'],
                  value: filterInvoice,
                  onChange: setFilterInvoice,
                },
                {
                  label: 'All Status',
                  options: ['Pending', 'Approved', 'Disputed'],
                  value: filterStatus,
                  onChange: setFilterStatus,
                },
                {
                  label: 'All Departments',
                  options: ['Engineering', 'Manufacturing', 'Marketing', 'Sales'],
                  value: filterDept,
                  onChange: setFilterDept,
                },
              ]}
              searchValue={searchVal}
              onSearchChange={setSearchVal}
              searchPlaceholder="Search invoices"
              actions={
                <>
                  <ActionButton variant="secondary" icon={<Download size={16} />}>
                    Export
                  </ActionButton>
                  <ActionButton variant="primary">
                    Bulk Actions
                  </ActionButton>
                </>
              }
            />
          </div>

          {/* Invoice Table */}
          <div className="bg-white border border-border rounded-xl p-6">
            <DataTable
              data={filteredInvoices}
              columns={columns}
              pageSize={6}
              enableSelection={activeTab === 'bulk'}
              renderRowActions={(row) => <InvoiceRowActions row={row as Invoice} />}
            />
          </div>
        </>
      )}

      {/* Invoice Details View */}
      {activeTab === 'details' && (
        <>
          {/* Invoice Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Select Invoice
            </label>
            <select
              value={selectedInvoiceId}
              onChange={(e) => setSelectedInvoiceId(e.target.value)}
              className="px-4 py-2 text-sm border border-border rounded-lg bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {Object.keys(invoiceDetailsMap).map((id) => (
                <option key={id} value={id}>
                  {id} - {invoiceDetailsMap[id].vendor}
                </option>
              ))}
            </select>
          </div>

          {/* Invoice Details Component */}
          <InvoiceDetailsView invoiceId={selectedInvoiceId} />
        </>
      )}
    </div>
  );
}
