'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getComponentByHref } from '@/lib/component-categories'

interface BreadcrumbProps {
  className?: string
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname()
  
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const component = getComponentByHref(pathname)
  
  const items = [
    { label: 'Home', href: '/' },
    ...(component
      ? [{ label: 'Components', href: '#' }, { label: component.name, href: pathname }]
      : segments.map((segment, index) => ({
          label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          href: '/' + segments.slice(0, index + 1).join('/'),
        }))
    ),
  ]

  return (
    <nav className={cn('flex items-center space-x-1 text-sm text-muted-foreground', className)}>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {index === 0 ? (
                <span className="flex items-center gap-1">
                  <Home className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              ) : (
                item.label
              )}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
