import { useState, type ReactNode } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import Pagination from './Pagination';

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  enableSelection?: boolean;
  onSelectionChange?: (selected: T[]) => void;
  renderRowActions?: (row: T) => ReactNode;
}

export default function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  pageSize = 6,
  enableSelection = false,
  onSelectionChange,
  renderRowActions,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal == null || bVal == null) return 0;
    const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const pageData = sortedData.slice(startIdx, startIdx + pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === pageData.length) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const newSet = new Set(pageData.map((_, i) => startIdx + i));
      setSelectedRows(newSet);
      onSelectionChange?.(pageData);
    }
  };

  const handleSelectRow = (globalIdx: number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(globalIdx)) {
      newSet.delete(globalIdx);
    } else {
      newSet.add(globalIdx);
    }
    setSelectedRows(newSet);
    onSelectionChange?.(sortedData.filter((_, i) => newSet.has(i)));
  };

  const getSortIcon = (key: string) => {
    if (sortKey !== key) return <ArrowUpDown size={14} className="text-gray-400" />;
    return sortDir === 'asc'
      ? <ArrowUp size={14} className="text-primary" />
      : <ArrowDown size={14} className="text-primary" />;
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {enableSelection && (
                <th className="py-3 px-4 text-left w-10">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === pageData.length && pageData.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-left text-sm font-semibold text-text-primary ${col.className || ''} ${
                    col.sortable ? 'cursor-pointer select-none hover:bg-gray-50' : ''
                  }`}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && getSortIcon(col.key)}
                  </div>
                </th>
              ))}
              {renderRowActions && (
                <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, rowIdx) => {
              const globalIdx = startIdx + rowIdx;
              return (
                <tr
                  key={globalIdx}
                  className="border-b border-border hover:bg-gray-50 transition-colors"
                >
                  {enableSelection && (
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(globalIdx)}
                        onChange={() => handleSelectRow(globalIdx)}
                        className="rounded border-gray-300"
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className={`py-3 px-4 text-sm text-text-primary ${col.className || ''}`}>
                      {col.render ? col.render(row) : String(row[col.key] ?? '')}
                    </td>
                  ))}
                  {renderRowActions && (
                    <td className="py-3 px-4">
                      {renderRowActions(row)}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
