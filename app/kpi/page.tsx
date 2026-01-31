'use client'

import * as React from 'react'
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  CreditCard,
  Package,
  Percent,
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  LineChart,
  Zap,
  Globe,
  Heart,
  Star,
  MessageSquare,
  Download,
  Upload,
  RefreshCw,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function KPIPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">KPI</h1>
          <p className="text-lg text-muted-foreground">
            Key Performance Indicator cards for dashboards and analytics displays.
          </p>
        </div>

        {/* Basic KPI Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic KPI cards with value and label.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-3xl">+2,350</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Sales</CardDescription>
                <CardTitle className="text-3xl">+12,234</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Now</CardDescription>
                <CardTitle className="text-3xl">+573</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* KPI with Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            KPI cards with descriptive icons.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Users</CardDescription>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Orders</CardDescription>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Page Views</CardDescription>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground">
                  +7% from last week
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* KPI with Trend Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Trend Indicators</h2>
          <p className="text-muted-foreground mb-6">
            KPI cards showing positive/negative trends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Revenue</CardDescription>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$54,231</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12.5%
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Expenses</CardDescription>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,456</div>
                <div className="flex items-center text-xs text-red-600">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  -8.2%
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Orders</CardDescription>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <div className="flex items-center text-xs text-green-600">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +24.3%
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Refunds</CardDescription>
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Minus className="mr-1 h-3 w-3" />
                  0%
                  <span className="ml-1">no change</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* KPI with Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Progress Bar</h2>
          <p className="text-muted-foreground mb-6">
            KPI cards showing progress towards goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Monthly Goal</CardDescription>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$32,450</span>
                  <span className="text-sm text-muted-foreground">/ $50,000</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-muted-foreground">65% of goal reached</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Tasks Completed</CardDescription>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">89</span>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <Progress value={89} className="h-2" />
                <p className="text-xs text-muted-foreground">11 tasks remaining</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Storage Used</CardDescription>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">7.2 GB</span>
                  <span className="text-sm text-muted-foreground">/ 10 GB</span>
                </div>
                <Progress value={72} className="h-2" />
                <p className="text-xs text-muted-foreground">2.8 GB available</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* KPI with Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Status Badge</h2>
          <p className="text-muted-foreground mb-6">
            KPI cards with status indicators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>System Status</CardDescription>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Healthy
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">Uptime this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>API Status</CardDescription>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    Warning
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245ms</div>
                <p className="text-xs text-muted-foreground">Average response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Database</CardDescription>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    <XCircle className="mr-1 h-3 w-3" />
                    Critical
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Storage capacity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Sync Status</CardDescription>
                  <Badge variant="secondary">
                    <RefreshCw className="mr-1 h-3 w-3" />
                    Syncing
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">Records pending</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Large KPI Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Large Format</h2>
          <p className="text-muted-foreground mb-6">
            Larger KPI cards for featured metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-4xl mt-2">$284,532.00</CardTitle>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +12.5% from last quarter
                  </div>
                  <Button variant="outline" size="sm">View Report</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>Active Users</CardDescription>
                    <CardTitle className="text-4xl mt-2">12,543</CardTitle>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +8.2% from last month
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mini KPI Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compact Format</h2>
          <p className="text-muted-foreground mb-6">
            Smaller KPI cards for dense layouts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Views', value: '12.5K', icon: Eye, trend: '+5%' },
              { label: 'Likes', value: '8.2K', icon: Heart, trend: '+12%' },
              { label: 'Comments', value: '1.4K', icon: MessageSquare, trend: '+3%' },
              { label: 'Shares', value: '892', icon: Globe, trend: '+8%' },
              { label: 'Saves', value: '2.1K', icon: Download, trend: '+15%' },
              { label: 'Rating', value: '4.8', icon: Star, trend: '+0.2' },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-green-600">{item.trend}</span>
                </div>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* KPI with Sparkline Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Chart Indicator</h2>
          <p className="text-muted-foreground mb-6">
            KPI cards with mini chart visualization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Revenue Trend</CardDescription>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">$45,231</div>
                <div className="h-10 flex items-end gap-1">
                  {[40, 60, 45, 80, 55, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>User Growth</CardDescription>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">+2,350</div>
                <div className="h-10 flex items-center">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,25 Q20,20 30,15 T50,12 T70,8 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>Category Split</CardDescription>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">5 Categories</div>
                <div className="flex gap-1">
                  <div className="h-2 flex-[4] bg-primary rounded-l" />
                  <div className="h-2 flex-[3] bg-blue-400" />
                  <div className="h-2 flex-[2] bg-green-400" />
                  <div className="h-2 flex-[1] bg-yellow-400 rounded-r" />
                </div>
              </CardContent>
            </Card>
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
