import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface BarChartProps {
  data: Array<Record<string, unknown>>;
  xKey: string;
  yKey: string;
  color?: string;
  height?: number;
}

export default function BarChart({ data, xKey, yKey, color = '#2563EB', height = 300 }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis
          dataKey={xKey}
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
          cursor={{ fill: 'rgba(37, 99, 235, 0.1)' }}
        />
        <Legend
          wrapperStyle={{ fontSize: '12px', color: '#64748B' }}
        />
        <Bar dataKey={yKey} fill={color} radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
