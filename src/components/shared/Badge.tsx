import React from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'success' | 'warning' | 'neutral'
  pulse?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'brand',
  pulse = false,
  children,
  ...props
}) => {
  const variantStyles = {
    brand:
      'bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning:
      'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    neutral:
      'bg-white/5 text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase font-mono select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  )
}
