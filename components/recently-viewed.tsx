'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getComponentByHref } from '@/lib/component-categories'

interface RecentlyViewedItem {
  href: string
  timestamp: number
}

const STORAGE_KEY = 'recently-viewed-components'
const MAX_ITEMS = 5

export function RecentlyViewed() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        // Ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleRouteChange = () => {
      const currentPath = window.location.pathname
      if (currentPath === '/') return

      setItems((prev) => {
        const filtered = prev.filter((item) => item.href !== currentPath)
        const newItems = [
          { href: currentPath, timestamp: Date.now() },
          ...filtered,
        ].slice(0, MAX_ITEMS)
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
        return newItems
      })
    }

    handleRouteChange()
  }, [mounted])

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY)
    setItems([])
  }

  if (!mounted || items.length === 0) return null

  return (
    <Card className="mb-8">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Recently Viewed
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={clearHistory}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const component = getComponentByHref(item.href)
            if (!component) return null
            
            return (
              <Link key={item.href} href={item.href}>
                <Button variant="outline" size="sm">
                  {component.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
