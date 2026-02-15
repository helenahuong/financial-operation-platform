import { Building2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import type { RegionSummary } from '@/types';

interface RegionCardProps {
  data: RegionSummary;
}

export default function RegionCard({ data }: RegionCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-text-primary">{data.region}</span>
        <StatusBadge status={data.status} variant="pill" />
      </div>
      <span className="text-2xl font-bold text-text-primary">{data.ytdSpend}</span>
      <div className="flex items-center gap-2 text-xs text-text-secondary">
        <Building2 size={14} />
        <span>YTD Spend</span>
        <span className="ml-auto">{data.vendorCount} Vendors</span>
      </div>
    </div>
  );
}
