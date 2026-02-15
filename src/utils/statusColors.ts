export function getStatusStyle(status: string): { dot: string; text: string; bg: string } {
  const map: Record<string, { dot: string; text: string; bg: string }> = {
    Pending: { dot: 'bg-orange-500', text: 'text-orange-600', bg: 'bg-orange-50' },
    Approved: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    Disputed: { dot: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50' },
    Active: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    Inactive: { dot: 'bg-gray-400', text: 'text-gray-500', bg: 'bg-gray-50' },
    'Under Review': { dot: 'bg-yellow-500', text: 'text-yellow-700', bg: 'bg-yellow-50' },
    Scheduled: { dot: 'bg-purple-500', text: 'text-purple-600', bg: 'bg-purple-50' },
    Resolved: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    High: { dot: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50' },
    Medium: { dot: 'bg-yellow-500', text: 'text-yellow-600', bg: 'bg-yellow-50' },
    Low: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    OnTrack: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    Watch: { dot: 'bg-orange-500', text: 'text-orange-600', bg: 'bg-orange-50' },
    Alert: { dot: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50' },
  };
  return map[status] ?? { dot: 'bg-gray-400', text: 'text-gray-500', bg: 'bg-gray-50' };
}

export function getPriorityStyle(priority: string): { text: string; bg: string } {
  const map: Record<string, { text: string; bg: string }> = {
    High: { text: 'text-red-700', bg: 'bg-red-100' },
    Medium: { text: 'text-yellow-700', bg: 'bg-yellow-100' },
    Low: { text: 'text-green-700', bg: 'bg-green-100' },
  };
  return map[priority] ?? { text: 'text-gray-700', bg: 'bg-gray-100' };
}

export function getLoadStatusStyle(status: string): string {
  const map: Record<string, string> = {
    'High load': 'text-red-500',
    Normal: 'text-blue-500',
    Available: 'text-green-500',
  };
  return map[status] ?? 'text-gray-500';
}
