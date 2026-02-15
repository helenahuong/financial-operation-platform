import type { SLAPerformanceData } from '@/types';

interface HorizontalBarChartProps {
  data: SLAPerformanceData[];
}

export default function HorizontalBarChart({ data }: HorizontalBarChartProps) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-4">
          <span className="text-sm text-text-secondary w-32 shrink-0">{item.label}</span>
          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
            />
          </div>
          <span className="text-sm font-medium text-text-primary w-12 text-right">
            {item.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}
