import React from 'react'
import { Badge } from './Badge'
import { AlertCircle } from 'lucide-react'

export interface DevelopmentBannerProps {
  pageTitle: string
  phase?: string
  statusMessage?: string
}

export const DevelopmentBanner: React.FC<DevelopmentBannerProps> = ({
  pageTitle,
  phase = 'Phase 1: Architecture & Route Foundation',
  statusMessage = 'Route active. Final layout & components will be implemented in Phase 2.',
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] text-center shadow-xl">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Badge variant="brand" pulse>
          {phase}
        </Badge>
      </div>
      <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-[var(--color-text-primary)] mb-3">
        {pageTitle}
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4 text-[var(--color-accent-primary)] shrink-0" />
        <span>{statusMessage}</span>
      </p>
    </div>
  )
}
