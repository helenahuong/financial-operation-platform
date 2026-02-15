import { Search } from 'lucide-react';
import type { ReactNode } from 'react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 text-sm border border-border rounded-lg bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

interface FilterBarProps {
  filters: {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }[];
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  actions?: ReactNode;
}

export default function FilterBar({
  filters,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search...',
  actions,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((filter, idx) => (
        <FilterDropdown key={idx} {...filter} />
      ))}
      {onSearchChange && (
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 w-56"
          />
        </div>
      )}
      {actions && <div className="ml-auto flex items-center gap-2">{actions}</div>}
    </div>
  );
}
