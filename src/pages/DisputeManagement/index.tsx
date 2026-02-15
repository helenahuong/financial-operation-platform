import { useState } from 'react';
import { ChevronDown, Plus, Eye, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SubTabNavigation from '@/components/layout/SubTabNavigation';
import KPICard from '@/components/ui/KPICard';
import HorizontalBarChart from '@/components/ui/HorizontalBarChart';
import DataTable from '@/components/ui/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import ActionButton from '@/components/ui/ActionButton';
import type { Column } from '@/components/ui/DataTable';
import type { Dispute } from '@/types';
import { getLoadStatusStyle } from '@/utils/statusColors';
import { disputeKPIs, slaPerformance, teamWorkload, disputes } from '@/data/disputes';

const subTabs = [
  { label: 'Dispute Dashboard', value: 'dashboard' },
  { label: 'Raise New Dispute', value: 'raise' },
  { label: 'Case View', value: 'case' },
];

const columns: Column<Dispute>[] = [
  {
    key: 'caseId',
    header: 'Case ID',
    render: (row: Dispute) => <span className="text-primary font-medium">{row.caseId}</span>,
  },
  {
    key: 'invoiceId',
    header: 'Invoice',
    render: (row: Dispute) => <span className="text-primary">{row.invoiceId}</span>,
  },
  { key: 'vendor', header: 'Vendor' },
  { key: 'amount', header: 'Amount in ($)' },
  {
    key: 'assignedTo',
    header: 'Assigned To',
    render: (row: Dispute) => (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-text-secondary">
          {row.assignedTo.split(' ').map(n => n[0]).join('')}
        </div>
        <span className="text-sm">{row.assignedTo}</span>
      </div>
    ),
  },
  {
    key: 'priority',
    header: 'Priority',
    render: (row: Dispute) => <StatusBadge status={row.priority} variant="pill" />,
  },
  {
    key: 'status',
    header: 'Status',
    render: (row: Dispute) => <StatusBadge status={row.status} />,
  },
  { key: 'daysOpen', header: 'Days Open' },
];

export default function DisputeManagement() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div>
      <PageHeader
        title="Dispute Management"
        subtitle="Track, manage, and resolve invoice disputes efficiently"
        actions={
          <>
            <ActionButton variant="secondary" icon={<ChevronDown size={16} />}>
              All Disputes
            </ActionButton>
            <ActionButton variant="primary" icon={<Plus size={16} />}>
              Raise Dispute
            </ActionButton>
          </>
        }
      />

      <SubTabNavigation tabs={subTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'dashboard' && (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {disputeKPIs.map((kpi, idx) => (
              <KPICard key={idx} data={kpi} />
            ))}
          </div>

          {/* SLA + Team Workload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* SLA Performance */}
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-text-primary">SLA Performance</h3>
                <ActionButton variant="secondary" size="sm" icon={<ChevronDown size={14} />}>
                  Last 30 days
                </ActionButton>
              </div>
              <HorizontalBarChart data={slaPerformance} />
            </div>

            {/* Team Workload */}
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-text-primary">Team Workload</h3>
                <ActionButton variant="primary" size="sm" icon={<ArrowRight size={14} />}>
                  Reassign
                </ActionButton>
              </div>
              <div className="space-y-4">
                {teamWorkload.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-text-secondary shrink-0">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">{member.name}</p>
                      <p className="text-xs text-text-secondary">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-text-primary">{member.caseCount} cases</p>
                      <p className={`text-xs font-medium ${getLoadStatusStyle(member.loadStatus)}`}>
                        {member.loadStatus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Disputes Table */}
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-text-primary">Active Disputes</h3>
              <div className="flex items-center gap-2">
                <ActionButton variant="secondary" size="sm" icon={<ChevronDown size={14} />}>
                  All Priority
                </ActionButton>
                <ActionButton variant="primary" size="sm">
                  View All
                </ActionButton>
              </div>
            </div>
            <DataTable
              data={disputes as unknown as Record<string, unknown>[]}
              columns={columns as Column<Record<string, unknown>>[]}
              pageSize={5}
              renderRowActions={() => (
                <div className="flex items-center gap-2">
                  <button className="text-blue-500 hover:text-blue-600 p-1" title="View">
                    <Eye size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500 p-1" title="Comment">
                    <MessageSquare size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500 p-1" title="Open">
                    <ExternalLink size={16} />
                  </button>
                </div>
              )}
            />
          </div>
        </>
      )}

      {activeTab === 'raise' && (
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-6">Raise New Dispute</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Invoice Reference</label>
              <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Select Invoice</option>
                <option>INV-2024-001</option>
                <option>INV-2024-002</option>
                <option>INV-2024-003</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Vendor</label>
              <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Select Vendor</option>
                <option>Pan Asia LTD</option>
                <option>Tang Spares LLP</option>
                <option>Kong LLP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Dispute Amount ($)</label>
              <input type="number" placeholder="0.00" className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Priority</label>
              <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-1.5">Reason</label>
              <textarea rows={4} placeholder="Describe the dispute reason..." className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" />
            </div>
            <div className="md:col-span-2">
              <ActionButton variant="primary">Submit Dispute</ActionButton>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'case' && (
        <div className="bg-white border border-border rounded-xl p-6 text-center py-16">
          <p className="text-text-secondary">Select a dispute case to view details</p>
        </div>
      )}
    </div>
  );
}
