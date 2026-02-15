import type { BudgetHeatmapData } from '@/types';

interface HeatmapGridProps {
  data: BudgetHeatmapData[];
}

function getHeatmapColor(status: string): string {
  switch (status) {
    case 'under':
      return 'bg-green-100 text-green-800';
    case 'near':
      return 'bg-yellow-100 text-yellow-800';
    case 'over':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function HeatmapGrid({ data }: HeatmapGridProps) {
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <div key={item.region} className="flex flex-col items-center gap-2 flex-1">
          <div
            className={`w-full py-4 rounded-lg text-center text-lg font-bold ${getHeatmapColor(item.status)}`}
          >
            {item.percentage}%
          </div>
          <span className="text-xs text-text-secondary text-center">{item.region}</span>
        </div>
      ))}
    </div>
  );
}
