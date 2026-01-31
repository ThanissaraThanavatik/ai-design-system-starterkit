'use client'

import * as React from 'react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function ChartShowcasePage() {
  // Sample data
  const monthlyData = [
    { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
    { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
    { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
    { month: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
    { month: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
    { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
    { month: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
    { month: 'Aug', revenue: 4000, expenses: 2400, profit: 1600 },
    { month: 'Sep', revenue: 5000, expenses: 2100, profit: 2900 },
    { month: 'Oct', revenue: 4500, expenses: 2300, profit: 2200 },
    { month: 'Nov', revenue: 3800, expenses: 3200, profit: 600 },
    { month: 'Dec', revenue: 5200, expenses: 3100, profit: 2100 },
  ]

  const categoryData = [
    { name: 'Electronics', value: 400, color: '#8b5cf6' },
    { name: 'Clothing', value: 300, color: '#ec4899' },
    { name: 'Food', value: 200, color: '#f59e0b' },
    { name: 'Books', value: 150, color: '#3b82f6' },
    { name: 'Others', value: 100, color: '#10b981' },
  ]

  const weeklyData = [
    { day: 'Mon', sales: 120, visitors: 800 },
    { day: 'Tue', sales: 150, visitors: 950 },
    { day: 'Wed', sales: 180, visitors: 1100 },
    { day: 'Thu', sales: 200, visitors: 1200 },
    { day: 'Fri', sales: 250, visitors: 1500 },
    { day: 'Sat', sales: 300, visitors: 1800 },
    { day: 'Sun', sales: 280, visitors: 1600 },
  ]

  const productData = [
    { product: 'Product A', q1: 120, q2: 150, q3: 180, q4: 200 },
    { product: 'Product B', q1: 80, q2: 100, q3: 120, q4: 140 },
    { product: 'Product C', q1: 200, q2: 180, q3: 160, q4: 140 },
  ]

  const performanceData = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'English', A: 98, B: 130, fullMark: 150 },
    { subject: 'Physics', A: 86, B: 130, fullMark: 150 },
    { subject: 'Chemistry', A: 99, B: 100, fullMark: 150 },
    { subject: 'Biology', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
  ]

  const chartConfig = {
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--chart-1))',
    },
    expenses: {
      label: 'Expenses',
      color: 'hsl(var(--chart-2))',
    },
    profit: {
      label: 'Profit',
      color: 'hsl(var(--chart-3))',
    },
    sales: {
      label: 'Sales',
      color: 'hsl(var(--chart-4))',
    },
    visitors: {
      label: 'Visitors',
      color: 'hsl(var(--chart-5))',
    },
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Chart</h1>
          <p className="text-lg text-muted-foreground">
            Beautiful and responsive charts powered by Recharts.
          </p>
        </div>

        {/* Line Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
          <p className="text-muted-foreground mb-6">
            Track trends over time with line charts.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Revenue trend over 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="hsl(var(--destructive))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Area Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Area Chart</h2>
          <p className="text-muted-foreground mb-6">
            Show volume and trends with area charts.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Profit Overview</CardTitle>
              <CardDescription>Monthly profit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stackId="1"
                    stroke="hsl(var(--destructive))"
                    fill="hsl(var(--destructive))"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Bar Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
          <p className="text-muted-foreground mb-6">
            Compare values across categories.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
              <CardDescription>Sales and visitors comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="visitors" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Pie Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
          <p className="text-muted-foreground mb-6">
            Show proportions and percentages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
                <CardDescription>Detailed category values</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stacked Bar Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stacked Bar Chart</h2>
          <p className="text-muted-foreground mb-6">
            Compare multiple values across categories.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Product Sales</CardTitle>
              <CardDescription>Product performance by quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={productData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="product" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="q1" stackId="a" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="q2" stackId="a" fill="hsl(var(--chart-2))" />
                  <Bar dataKey="q3" stackId="a" fill="hsl(var(--chart-3))" />
                  <Bar dataKey="q4" stackId="a" fill="hsl(var(--chart-4))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Simple Line Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Simple Line Chart</h2>
          <p className="text-muted-foreground mb-6">
            Clean and minimal line chart.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Profit Trend</CardTitle>
              <CardDescription>Monthly profit over 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Multiple Lines Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Metrics</h2>
          <p className="text-muted-foreground mb-6">
            Compare multiple data series.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Student performance by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="subject" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="A"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="B"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Mini Charts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mini Charts</h2>
          <p className="text-muted-foreground mb-6">
            Compact charts for dashboards and cards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">$45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                <ResponsiveContainer width="100%" height={60}>
                  <AreaChart data={monthlyData.slice(-6)}>
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">2,350</div>
                <p className="text-xs text-muted-foreground">+180 new this week</p>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={weeklyData}>
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="hsl(var(--chart-5))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
                <ResponsiveContainer width="100%" height={60}>
                  <BarChart data={weeklyData.slice(-4)}>
                    <Bar dataKey="sales" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <Card>
            <CardContent className="py-4">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Home
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
