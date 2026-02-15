import { useState } from 'react';
import { ChevronDown, Save, CalendarDays, Pencil, Trash2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import SubTabNavigation from '@/components/layout/SubTabNavigation';
import KPICard from '@/components/ui/KPICard';
import StatusBadge from '@/components/ui/StatusBadge';
import ActionButton from '@/components/ui/ActionButton';
import { configKPIs, serviceCategories, effectiveDateData } from '@/data/configuration';

const subTabs = [
  { label: 'Service & Pricing Setup', value: 'pricing' },
  { label: 'Usage Data Upload', value: 'upload' },
  { label: 'Vendor Mapping', value: 'vendor' },
  { label: 'User Access & Roles', value: 'roles' },
];

export default function Configuration() {
  const [activeTab, setActiveTab] = useState('pricing');

  return (
    <div>
      <PageHeader
        title="Configuration"
        subtitle="Manage system settings and administrative controls"
        actions={
          <>
            <ActionButton variant="secondary" icon={<ChevronDown size={16} />}>
              All Configurations
            </ActionButton>
            <ActionButton variant="primary" icon={<Save size={16} />}>
              Save Changes
            </ActionButton>
          </>
        }
      />

      <SubTabNavigation tabs={subTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'pricing' && (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {configKPIs.map((kpi, idx) => (
              <KPICard key={idx} data={kpi} />
            ))}
          </div>

          {/* Add Services + Pricing Models */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Add Services */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-text-primary mb-4">Add Services</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Service Name</label>
                    <input
                      type="text"
                      placeholder="e.g., New Service Name"
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Service Category</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Select the Service Category</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Service description..."
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <ActionButton variant="primary">Add Service</ActionButton>
                </div>
              </div>
            </div>

            {/* Pricing Models */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-text-primary mb-4">Pricing Models</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-text-primary">Unit Rate</label>
                    <span className="text-xs text-text-secondary">Fixed monthly cost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Amount"
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-sm text-text-secondary whitespace-nowrap">USD/month</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Component Rate</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Amount"
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-sm text-text-secondary whitespace-nowrap">USD/month</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Lease Rate</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Amount"
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-sm text-text-secondary whitespace-nowrap">USD/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Effective Date Management */}
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-text-primary">Effective Date Management</h3>
              <ActionButton variant="primary" size="sm" icon={<CalendarDays size={14} />}>
                Schedule Change
              </ActionButton>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">Service</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">Current Price</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">New Price</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">Effective Date</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">Status</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {effectiveDateData.map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-text-primary">{row.service}</td>
                      <td className="py-3 px-4 text-sm text-text-primary">{row.currentPrice}</td>
                      <td className={`py-3 px-4 text-sm font-medium ${row.newPriceColor || 'text-text-primary'}`}>
                        {row.newPrice}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-primary">{row.effectiveDate}</td>
                      <td className="py-3 px-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-500 hover:text-blue-600 p-1" title="Edit">
                            <Pencil size={16} />
                          </button>
                          <button className="text-red-500 hover:text-red-600 p-1" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'upload' && (
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Usage Data Upload</h3>
          <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
            <p className="text-text-secondary mb-2">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-text-secondary">Supported formats: CSV, XLSX, JSON (Max 10MB)</p>
            <ActionButton variant="secondary" className="mt-4">Browse Files</ActionButton>
          </div>
        </div>
      )}

      {activeTab === 'vendor' && (
        <div className="bg-white border border-border rounded-xl p-6 text-center py-16">
          <p className="text-text-secondary">Vendor mapping configuration coming soon</p>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="bg-white border border-border rounded-xl p-6 text-center py-16">
          <p className="text-text-secondary">User access & roles management coming soon</p>
        </div>
      )}
    </div>
  );
}
