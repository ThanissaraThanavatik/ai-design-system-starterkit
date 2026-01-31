'use client'

import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  User,
  FileText,
  Image,
  ShoppingCart,
  BarChart3,
  Home,
  Bell,
  Search,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Package,
  Settings,
  Star,
  MessageSquare,
  Clock,
  Tag,
  Globe,
  Heart,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Link2,
  Copy,
  ExternalLink,
  Play,
  Pause,
  MoreHorizontal,
} from 'lucide-react'

export default function SkeletonShowcasePage() {
  const [loading, setLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

  const handleLoadData = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDataLoaded(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Skeleton</h1>
          <p className="text-lg text-muted-foreground">
            Placeholder skeleton screens for loading states.
          </p>
        </div>

        {/* Basic Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Simple skeleton loaders in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Default</p>
              <Skeleton className="h-4 w-[250px]" />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">With custom width</p>
              <Skeleton className="h-4 w-full" />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Multiple lines</p>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Custom height</p>
              <Skeleton className="h-12 w-full" />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Small</p>
              <Skeleton className="h-3 w-[150px]" />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Square</p>
              <Skeleton className="h-24 w-24 rounded-md" />
            </div>
          </div>
        </section>

        {/* Circle Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Circle Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Circular skeleton for avatars and profile pictures.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-56" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-64" />
              </div>
            </div>
          </div>
        </section>

        {/* Card Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Complete card layout with skeleton loaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Card */}
            <Card>
              <div className="p-0">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-8 w-full mt-2" />
                </div>
              </div>
            </Card>

            {/* Profile Card */}
            <Card>
              <div className="p-6">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="space-y-2 text-center w-full">
                    <Skeleton className="h-4 w-32 mx-auto" />
                    <Skeleton className="h-3 w-24 mx-auto" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <Skeleton className="h-3 w-4/6" />
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card>
              <div className="p-6">
                <Skeleton className="h-6 w-24 mb-4" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-8 w-12" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-10 w-28" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* List Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">List Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for list items and table rows.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-9 w-24" />
            </div>

            {/* List Items */}
            <div className="divide-y">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Table Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for data tables.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <Skeleton className="h-6 w-40" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-32" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
              {/* Table Header */}
              <div className="flex gap-4 pb-2">
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-4">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Article Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Content skeleton for blog posts and articles.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <Skeleton className="h-8 w-3/4" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <span className="text-muted-foreground">•</span>
                <Skeleton className="h-4 w-20" />
              </div>
            </div>

            {/* Featured Image */}
            <Skeleton className="h-64 w-full rounded-lg" />

            {/* Content */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Complete dashboard layout with skeleton loaders.
          </p>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-8 w-48" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-10 w-20" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Chart Section */}
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="h-64 flex items-end gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Skeleton key={i} className="flex-1" style={{ height: `${Math.random() * 100 + 20}%` }} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48 mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Card Skeletons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Product Card Skeletons</h2>
          <p className="text-muted-foreground mb-6">
            E-commerce product cards with loading state.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <div className="p-0">
                  <Skeleton className="h-48 w-full rounded-t-lg" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Skeleton className="h-8 w-full" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Profile Page Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Profile Page Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            User profile page with skeleton loaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card>
              <div className="p-6">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <Skeleton className="h-24 w-24 rounded-full" />
                  <div className="text-center w-full">
                    <Skeleton className="h-5 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-2.5 w-16" />
                  <Skeleton className="h-2.5 w-12" />
                </div>
                <div className="flex gap-2 pt-4 border-t">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 flex-1" />
                </div>
              </div>
            </Card>

            {/* Info Cards */}
            <div className="space-y-4 md:col-span-2">
              <Card>
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-20 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-24 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-28 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-24" />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10" />
                      <Skeleton className="h-4 w-52" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10" />
                      <Skeleton className="h-4 w-44" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground mb-6">
            Toggle between loading and loaded states.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Data Loading Example</CardTitle>
              <CardDescription>
                Simulate fetching and displaying user data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!loading && !dataLoaded && (
                <div className="text-center py-8">
                  <Button onClick={handleLoadData} size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    Load Data
                  </Button>
                </div>
              )}

              {loading && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-9 w-24 ml-auto" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </div>
              )}

              {dataLoaded && !loading && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      JD
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Product Designer at Creative Studios</p>
                    </div>
                    <Button variant="outline" size="sm">Edit Profile</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <span className="font-medium">Orders</span>
                      </div>
                      <p className="text-2xl font-bold">248</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">Reviews</span>
                      </div>
                      <p className="text-2xl font-bold">4.8</p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Revenue</span>
                    </div>
                    <p className="text-2xl font-bold">$45,678</p>
                  </div>
                  <Button onClick={() => setDataLoaded(false)} variant="outline" className="w-full">
                    Reset
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Navigation Bar Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Navigation Bar Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading state for navigation headers.
          </p>
          <div className="border rounded-lg bg-card p-4">
            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-8 w-32" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-28" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          </div>
        </section>

        {/* Form Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Form Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for forms and inputs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48 mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-24 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-full mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-4 w-40 mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-14" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <Skeleton className="h-10 w-full mt-4" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Search Results Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Search Results Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for search results page.
          </p>
          <div className="border rounded-lg bg-card p-6">
            <div className="space-y-4 mb-6">
              <Skeleton className="h-6 w-48" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-32" />
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-40" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Skeleton className="h-40 w-full rounded-md mb-3" />
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Chat Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for chat messages and conversation.
          </p>
          <div className="border rounded-lg bg-card p-6">
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-16 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment Thread Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Comment Thread Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for comment threads.
          </p>
          <div className="border rounded-lg bg-card p-6">
            {/* Main Comment */}
            <div className="flex gap-3 mb-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
                <Skeleton className="h-16 w-full" />
                <div className="flex items-center gap-4 mt-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>

            <div className="ml-14 space-y-4">
              {/* Reply 1 */}
              <div className="flex gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-16 w-2/3" />
                </div>
              </div>

              {/* Reply 2 */}
              <div className="flex gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-12 w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Media Gallery Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for media galleries and image grids.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-9 w-24" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-40 w-full aspect-square rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notification List Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notification List Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for notification lists.
          </p>
          <div className="border rounded-lg bg-card max-w-md">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
            <div className="divide-y">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3 p-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-4 w-64" />
                  </div>
                  <Skeleton className="h-6 w-8" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Skeleton */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Timeline Skeleton</h2>
          <p className="text-muted-foreground mb-6">
            Loading skeleton for timeline and activity feeds.
          </p>
          <div className="border rounded-lg bg-card max-w-2xl">
            <div className="p-6">
              <Skeleton className="h-6 w-40 mb-6" />
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-32 mb-2" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-36 mb-2" />
                      <Skeleton className="h-3 w-56" />
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-28 mb-2" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-40 mb-2" />
                      <Skeleton className="h-3 w-72" />
                    </div>
                  </div>
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
