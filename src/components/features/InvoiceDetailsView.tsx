import { Download, FileText, Building2, CreditCard } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import DataTable from '@/components/ui/DataTable';
import type { Column } from '@/components/ui/DataTable';
import type { InvoiceLineItem } from '@/types';
import { invoiceDetailsMap } from '@/data/invoices';

interface InvoiceDetailsViewProps {
  invoiceId: string;
}

const lineItemColumns: Column<InvoiceLineItem>[] = [
  { key: 'lineNo', header: 'Line' },
  { key: 'description', header: 'Description' },
  { key: 'quantity', header: 'Quantity' },
  { key: 'unitPrice', header: 'Unit Price' },
  { key: 'amount', header: 'Amount' },
  { key: 'glAccount', header: 'GL Account' },
];

export default function InvoiceDetailsView({ invoiceId }: InvoiceDetailsViewProps) {
  const invoice = invoiceDetailsMap[invoiceId];

  if (!invoice) {
    return (
      <div className="bg-white border border-border rounded-xl p-6">
        <p className="text-text-secondary text-center">
          No details available for this invoice. Please select a different invoice.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Invoice Header */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                Invoice: {invoice.id}
              </h3>
              <p className="text-sm text-text-secondary">
                Issued on {invoice.date}
              </p>
            </div>
            <StatusBadge status={invoice.status} />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-text-secondary">Vendor:</span>
              <p className="text-text-primary font-medium mt-1">{invoice.vendor}</p>
            </div>
            <div>
              <span className="text-text-secondary">Department:</span>
              <p className="text-text-primary font-medium mt-1">{invoice.department}</p>
            </div>
            <div>
              <span className="text-text-secondary">Amount:</span>
              <p className="text-text-primary font-semibold text-lg mt-1">{invoice.amount}</p>
            </div>
            <div>
              <span className="text-text-secondary">Due Date:</span>
              <p className="text-text-primary font-medium mt-1">{invoice.paymentTerms.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
            <FileText size={20} className="text-text-secondary" />
            Line Items
          </h3>
          <DataTable
            data={invoice.lineItems as unknown as Record<string, unknown>[]}
            columns={lineItemColumns as Column<Record<string, unknown>>[]}
            pageSize={10}
          />
        </div>

        {/* Approval History */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4">Approval History</h3>
          <div className="space-y-4">
            {invoice.approvalHistory.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step.action === 'Approved'
                        ? 'bg-green-500'
                        : step.action === 'Rejected'
                        ? 'bg-red-500'
                        : 'bg-gray-300'
                    }`}
                  />
                  {index < invoice.approvalHistory.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-200 mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-text-primary">{step.approver}</p>
                    <span className="text-xs text-text-secondary">{step.date}</span>
                  </div>
                  <p className="text-xs text-text-secondary mb-1">{step.role}</p>
                  <div className="flex items-center gap-2">
                    <StatusBadge
                      status={step.action}
                      variant="pill"
                    />
                    {step.comments && (
                      <span className="text-xs text-text-secondary italic">
                        "{step.comments}"
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="space-y-6">
        {/* Vendor Details */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Building2 size={20} className="text-text-secondary" />
            Vendor Details
          </h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-text-secondary">Vendor ID</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.vendorId}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Contact Person</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.contactPerson}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Email</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.email}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Phone</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.phone}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Address</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.address}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Tax ID</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.vendorDetails.taxId}</dd>
            </div>
          </dl>
        </div>

        {/* Payment Terms */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
            <CreditCard size={20} className="text-text-secondary" />
            Payment Terms
          </h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-text-secondary">Terms</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.paymentTerms.terms}</dd>
            </div>
            <div>
              <dt className="text-text-secondary">Due Date</dt>
              <dd className="text-text-primary font-medium mt-0.5">{invoice.paymentTerms.dueDate}</dd>
            </div>
            {invoice.paymentTerms.discountTerms && (
              <div>
                <dt className="text-text-secondary">Discount</dt>
                <dd className="text-text-primary font-medium mt-0.5">
                  {invoice.paymentTerms.discountTerms}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Attachments */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
            <FileText size={20} className="text-text-secondary" />
            Attachments
          </h3>
          <div className="space-y-2">
            {invoice.attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <FileText size={16} className="text-text-secondary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary font-medium truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {file.size} • {file.uploadDate}
                    </p>
                  </div>
                </div>
                <button className="text-primary hover:text-primary-dark p-1">
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
