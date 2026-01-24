'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  X,
  AlertCircle,
  Clock,
  Star,
  Zap,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Mail,
  Bell,
} from 'lucide-react'

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Badge</h1>
          <p className="text-lg text-muted-foreground">
            Displays a badge or a component that looks like a badge.
          </p>
        </div>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Available badge variants.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Badges with leading or trailing icons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>
                <Check />
                Approved
              </Badge>
              <Badge variant="destructive">
                <X />
                Rejected
              </Badge>
              <Badge variant="secondary">
                <Clock />
                Pending
              </Badge>
              <Badge variant="outline">
                <AlertCircle />
                Warning
              </Badge>
              <Badge>
                New
                <ArrowRight />
              </Badge>
            </div>
          </div>
        </section>

        {/* Status Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Status Badges</h2>
          <p className="text-muted-foreground mb-6">
            Common status indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-green-500 hover:bg-green-600">
                <Check />
                Active
              </Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-600">
                <Clock />
                Pending
              </Badge>
              <Badge className="bg-red-500 hover:bg-red-600">
                <X />
                Inactive
              </Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600">
                <Zap />
                Processing
              </Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600">
                <Star />
                Featured
              </Badge>
            </div>
          </div>
        </section>

        {/* Notification Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notification Badges</h2>
          <p className="text-muted-foreground mb-6">
            Badges for showing counts and notifications.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
              </div>
              <div className="relative">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                  9
                </Badge>
              </div>
              <div className="relative">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 flex items-center justify-center text-[10px]">
                  99+
                </Badge>
              </div>
              <div className="relative">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
              </div>
            </div>
          </div>
        </section>

        {/* Trend Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trend Badges</h2>
          <p className="text-muted-foreground mb-6">
            Badges for showing trends and changes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                <TrendingUp />
                +12.5%
              </Badge>
              <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">
                <TrendingDown />
                -3.2%
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                +250
              </Badge>
              <Badge className="bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200">
                0%
              </Badge>
            </div>
          </div>
        </section>

        {/* Category Tags */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Category Tags</h2>
          <p className="text-muted-foreground mb-6">
            Badges used as category or tag labels.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">GraphQL</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Docker</Badge>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Badges with different sizes using custom classes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-end gap-4">
              <div className="text-center">
                <Badge className="text-[10px] px-1.5 py-0">Small</Badge>
                <p className="text-xs text-muted-foreground mt-2">sm</p>
              </div>
              <div className="text-center">
                <Badge>Default</Badge>
                <p className="text-xs text-muted-foreground mt-2">md</p>
              </div>
              <div className="text-center">
                <Badge className="text-sm px-3 py-1">Large</Badge>
                <p className="text-xs text-muted-foreground mt-2">lg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pill vs Square */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
          <p className="text-muted-foreground mb-6">
            Badges with different border radius styles.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Pill (Default)</Badge>
              <Badge className="rounded-md">Rounded</Badge>
              <Badge className="rounded-sm">Slight Round</Badge>
              <Badge className="rounded-none">Square</Badge>
            </div>
          </div>
        </section>

        {/* As Link */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">As Link</h2>
          <p className="text-muted-foreground mb-6">
            Badges that act as clickable links.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Badge asChild>
                <a href="#">Click me</a>
              </Badge>
              <Badge variant="secondary" asChild>
                <a href="#">Secondary Link</a>
              </Badge>
              <Badge variant="outline" asChild>
                <a href="#">
                  Learn more
                  <ArrowRight />
                </a>
              </Badge>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
          <p className="text-muted-foreground mb-6">
            Real-world examples of badge usage.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Pro Plan</h3>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Popular</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Best for growing teams</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$29</p>
                  <p className="text-sm text-muted-foreground">/month</p>
                </div>
              </div>
            </div>

            {/* Article Meta */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Tutorial</Badge>
                <Badge variant="outline">5 min read</Badge>
              </div>
              <h3 className="font-semibold mb-1">Getting Started with Next.js</h3>
              <p className="text-sm text-muted-foreground">Learn how to build modern web applications...</p>
            </div>

            {/* User Profile */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">John Doe</span>
                    <Badge className="bg-blue-500">Pro</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Check className="h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <Button asChild variant="outline">
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
