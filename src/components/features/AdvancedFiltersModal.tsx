import { useState, useEffect } from 'react';
import Modal from '@/components/ui/Modal';
import ActionButton from '@/components/ui/ActionButton';
import type { AdvancedFilterState } from '@/types';

interface AdvancedFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: AdvancedFilterState;
  onApplyFilters: (filters: AdvancedFilterState) => void;
}

export default function AdvancedFiltersModal({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
}: AdvancedFiltersModalProps) {
  const [localFilters, setLocalFilters] = useState<AdvancedFilterState>(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: AdvancedFilterState = {
      dateRange: { start: '', end: '' },
      departments: [],
      spendRange: { min: 0, max: 1000000 },
      statuses: [],
    };
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  const toggleDepartment = (dept: string) => {
    setLocalFilters(prev => ({
      ...prev,
      departments: prev.departments.includes(dept)
        ? prev.departments.filter(d => d !== dept)
        : [...prev.departments, dept],
    }));
  };

  const toggleStatus = (status: string) => {
    setLocalFilters(prev => ({
      ...prev,
      statuses: prev.statuses.includes(status)
        ? prev.statuses.filter(s => s !== status)
        : [...prev.statuses, status],
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Advanced Filters" size="lg">
      <div className="space-y-6">
        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Date Range
          </label>
          <div className="flex items-center gap-3">
            <input
              type="date"
              value={localFilters.dateRange.start}
              onChange={(e) =>
                setLocalFilters(prev => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, start: e.target.value },
                }))
              }
              className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-text-secondary">to</span>
            <input
              type="date"
              value={localFilters.dateRange.end}
              onChange={(e) =>
                setLocalFilters(prev => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, end: e.target.value },
                }))
              }
              className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Departments */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Departments
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Engineering', 'Manufacturing', 'Marketing', 'Sales'].map(dept => (
              <label key={dept} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.departments.includes(dept)}
                  onChange={() => toggleDepartment(dept)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary/20"
                />
                <span className="text-sm text-text-primary">{dept}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Spend Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Spend Range
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>${localFilters.spendRange.min.toLocaleString()}</span>
              <span>${localFilters.spendRange.max.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="1000000"
                step="10000"
                value={localFilters.spendRange.min}
                onChange={(e) =>
                  setLocalFilters(prev => ({
                    ...prev,
                    spendRange: { ...prev.spendRange, min: Number(e.target.value) },
                  }))
                }
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <input
                type="range"
                min="0"
                max="1000000"
                step="10000"
                value={localFilters.spendRange.max}
                onChange={(e) =>
                  setLocalFilters(prev => ({
                    ...prev,
                    spendRange: { ...prev.spendRange, max: Number(e.target.value) },
                  }))
                }
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Status
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Active', 'Inactive', 'Under Review'].map(status => (
              <label key={status} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.statuses.includes(status)}
                  onChange={() => toggleStatus(status)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary/20"
                />
                <span className="text-sm text-text-primary">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <ActionButton variant="primary" onClick={handleApply} className="flex-1">
            Apply Filters
          </ActionButton>
          <ActionButton variant="secondary" onClick={handleReset} className="flex-1">
            Reset
          </ActionButton>
        </div>
      </div>
    </Modal>
  );
}
