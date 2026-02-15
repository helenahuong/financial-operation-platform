import { ChevronDown } from 'lucide-react';

export interface DateSelectorProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function DateSelector({ options, value, onChange, label }: DateSelectorProps) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-4 pr-10 py-2 text-sm font-medium bg-white text-text-primary border border-border rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
        aria-label={label || 'Select date'}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown size={16} className="text-text-secondary" />
      </div>
    </div>
  );
}
