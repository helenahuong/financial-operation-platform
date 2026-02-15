import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import type { DonutChartData } from '@/types';

interface DonutChartProps {
  data: DonutChartData[];
  centerLabel?: string;
  centerValue?: string;
  height?: number;
}

export default function DonutChart({ data, centerLabel, centerValue, height = 250 }: DonutChartProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: height, height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, '']}
              contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {centerValue && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold text-text-primary">{centerValue}</span>
            {centerLabel && (
              <span className="text-xs text-text-secondary">{centerLabel}</span>
            )}
          </div>
        )}
        {/* Percentage labels around the chart */}
        {data.map((entry, index) => {
          const angle = data.slice(0, index).reduce((sum, d) => sum + d.value, 0) + entry.value / 2;
          const radian = ((angle * 3.6) - 90) * (Math.PI / 180);
          const radius = 115;
          const x = 50 + (radius / (height / 2)) * 50 * Math.cos(radian);
          const y = 50 + (radius / (height / 2)) * 50 * Math.sin(radian);
          return (
            <span
              key={`label-${index}`}
              className="absolute text-xs font-medium text-text-secondary pointer-events-none"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {entry.value}%
            </span>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 justify-center">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5 text-xs text-text-secondary">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
}
