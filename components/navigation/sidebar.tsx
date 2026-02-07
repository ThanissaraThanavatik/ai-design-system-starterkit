'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Layout, 
  FormInput, 
  Navigation, 
  Layers, 
  Table, 
  Bell, 
  Wrench,
  ChevronDown,
  Search,
  Menu,
  X,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { componentCategories, allComponents } from '@/lib/component-categories'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  FormInput,
  Navigation,
  Layers,
  Table,
  Bell,
  Wrench,
}

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    () => Object.keys(componentCategories)
  )
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const filteredCategories = Object.entries(componentCategories).map(
    ([key, category]) => ({
      key,
      ...category,
      components: category.components.filter(
        (component) =>
          component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })
  ).filter((category) => category.components.length > 0)

  const SidebarContent = () => (
    <>
      {/* Header - Sticky Top */}
      <div className="flex-shrink-0 bg-background">
        <div className="flex items-center gap-2 px-4 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-semibold">shadcn/ui</span>
        </div>

        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search components..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Separator />
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1 px-3 py-4 min-h-0">
        <div className="space-y-1">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
              pathname === '/' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
            )}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        <div className="mt-6 space-y-1">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Components
          </p>
          
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layout
            const isExpanded = expandedCategories.includes(category.key)
            const isActive = category.components.some((c) => c.href === pathname)

            return (
              <div key={category.key} className="space-y-1">
                <button
                  onClick={() => toggleCategory(category.key)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {category.title}
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      isExpanded && 'rotate-180'
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-4 space-y-1">
                    {category.components.map((component) => (
                      <Link
                        key={component.href}
                        href={component.href}
                        className={cn(
                          'flex flex-col rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
                          pathname === component.href
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span className="font-medium">{component.name}</span>
                        <span className="text-xs opacity-70 truncate">{component.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>

      {/* Footer - Sticky Bottom */}
      <div className="flex-shrink-0 border-t bg-background p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {allComponents.length} components
          </span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-72 flex-col overflow-hidden border-r bg-background transition-transform duration-300 md:hidden',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 hidden w-72 flex-col h-screen overflow-hidden border-r bg-background md:flex',
          className
        )}
      >
        <SidebarContent />
      </aside>
    </>
  )
}
