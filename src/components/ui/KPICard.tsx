import {
  DollarSign, FileText, Globe, AlertTriangle, Building2,
  FolderOpen, Clock, CheckCircle, BarChart3, Settings,
  BadgeCheck, Calendar, TrendingUp, Megaphone, Factory,
  Coins,
} from 'lucide-react';
import type { KPIData } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  DollarSign, FileText, Globe, AlertTriangle, Building2,
  FolderOpen, Clock, CheckCircle, BarChart3, Settings,
  BadgeCheck, Calendar, TrendingUp, Megaphone, Factory,
  Coins,
};

interface KPICardProps {
  data: KPIData;
  className?: string;
}

export default function KPICard({ data, className = '' }: KPICardProps) {
  const IconComponent = data.icon ? iconMap[data.icon] : null;

  return (
    <div className={`bg-white border border-border rounded-xl p-6 flex justify-between items-start ${className}`}>
      <div className="flex flex-col gap-1">
        <span className="text-3xl font-bold text-text-primary">{data.value}</span>
        <span className="text-sm text-text-secondary">{data.label}</span>
        {data.subtitle && (
          <span className="text-xs text-text-secondary">{data.subtitle}</span>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        {data.trend && (
          <span className={`text-sm font-medium ${data.trendColor || 'text-green-600'}`}>
            {data.trend}
          </span>
        )}
        {IconComponent && (
          <IconComponent size={32} className="text-text-secondary opacity-40" />
        )}
      </div>
    </div>
  );
}
