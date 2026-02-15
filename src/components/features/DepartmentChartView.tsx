import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DonutChart from '@/components/ui/DonutChart';
import BarChart from '@/components/ui/BarChart';
import type { DonutChartData } from '@/types';

interface DepartmentChartViewProps {
  serviceDistribution: DonutChartData[];
  departmentData: Array<{ name: string; internal: number; vendor: number; total: number }>;
  monthlyTrend: Array<{ month: string; spend: number }>;
}

export default function DepartmentChartView({
  serviceDistribution,
  departmentData,
  monthlyTrend,
}: DepartmentChartViewProps) {
  // Transform department data for display
  const departmentBarData = departmentData.map(dept => ({
    name: dept.name,
    'Total Spend': dept.total / 1000, // Convert to thousands for better display
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Service Distribution Donut Chart */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold text-text-primary mb-1">Service Distribution</h3>
        <p className="text-xs text-text-secondary mb-4">By Category</p>
        <DonutChart data={serviceDistribution} centerValue="100%" />
      </div>

      {/* Department Spending Bar Chart */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold text-text-primary mb-1">Department Spending</h3>
        <p className="text-xs text-text-secondary mb-4">Total Spend Comparison (in K)</p>
        <BarChart
          data={departmentBarData}
          xKey="name"
          yKey="Total Spend"
          color="#2563EB"
          height={250}
        />
      </div>

      {/* Monthly Trend Line Chart */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold text-text-primary mb-1">Monthly Trend</h3>
        <p className="text-xs text-text-secondary mb-4">Spending Over Time</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              tick={{ fill: '#64748B', fontSize: 12 }}
              axisLine={{ stroke: '#E2E8F0' }}
            />
            <YAxis
              tick={{ fill: '#64748B', fontSize: 12 }}
              axisLine={{ stroke: '#E2E8F0' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#64748B' }} />
            <Line
              type="monotone"
              dataKey="spend"
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ fill: '#2563EB', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
