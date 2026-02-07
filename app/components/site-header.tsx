'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl">Business</span>
          </Link>

          {/* Right Side - Theme Toggle Only */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
