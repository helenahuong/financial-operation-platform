import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children?: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-white text-text-primary border border-border hover:bg-gray-50',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'text-text-secondary hover:bg-gray-100',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
};

export default function ActionButton({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 font-medium rounded-lg transition-colors cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
