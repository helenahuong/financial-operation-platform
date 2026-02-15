import { useEffect } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { useToastStore } from '@/stores/toastStore';

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: 'border-l-green-500 bg-green-50',
  error: 'border-l-red-500 bg-red-50',
  warning: 'border-l-orange-500 bg-orange-50',
  info: 'border-l-blue-500 bg-blue-50',
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onClose,
}: {
  toast: { id: string; type: 'success' | 'error' | 'warning' | 'info'; message: string; duration?: number };
  onClose: () => void;
}) {
  const Icon = iconMap[toast.type];

  useEffect(() => {
    const timer = setTimeout(onClose, toast.duration || 3000);
    return () => clearTimeout(timer);
  }, [toast.duration, onClose]);

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 shadow-md min-w-[300px] ${colorMap[toast.type]}`}
    >
      <Icon size={18} />
      <span className="text-sm flex-1">{toast.message}</span>
      <button onClick={onClose} className="p-0.5 hover:bg-black/5 rounded">
        <X size={14} />
      </button>
    </div>
  );
}
