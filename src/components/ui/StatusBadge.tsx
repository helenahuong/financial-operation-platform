import { getStatusStyle } from '@/utils/statusColors';

interface StatusBadgeProps {
  status: string;
  variant?: 'dot' | 'pill';
}

export default function StatusBadge({ status, variant = 'dot' }: StatusBadgeProps) {
  const style = getStatusStyle(status);

  if (variant === 'pill') {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
        {status}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm`}>
      <span className={`w-2 h-2 rounded-full ${style.dot}`} />
      <span className={style.text}>{status}</span>
    </span>
  );
}
