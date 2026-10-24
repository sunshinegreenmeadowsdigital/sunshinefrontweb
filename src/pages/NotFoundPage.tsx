import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/shared/Button'
import { ArrowLeft, Home } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-slate-900 text-center">
      <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center mb-6">
        <span className="font-mono text-2xl font-bold text-[#E06B2D]">404</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mb-8 leading-relaxed">
        The requested address does not exist or has been relocated. Return to the corporate homepage or explore Sunshine Green Meadows.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/">
          <Button variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Corporate Home</span>
          </Button>
        </Link>
        <Link to="/sunshine-green-meadows">
          <Button variant="outline" size="md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Green Meadows Project</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
