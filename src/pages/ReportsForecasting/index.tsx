import { BarChart3 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export default function ReportsForecasting() {
  return (
    <div>
      <PageHeader
        title="Reports & Forecasting"
        subtitle="Generate reports and view financial forecasts"
      />
      <div className="bg-white border border-border rounded-xl p-16 text-center">
        <BarChart3 size={48} className="mx-auto text-text-secondary opacity-30 mb-4" />
        <h2 className="text-lg font-semibold text-text-primary mb-2">Coming Soon</h2>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Reports and forecasting features are under development. Check back soon for comprehensive financial reports, trend analysis, and budget forecasting tools.
        </p>
      </div>
    </div>
  );
}
