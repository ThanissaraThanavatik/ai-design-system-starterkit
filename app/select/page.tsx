'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  User,
  Mail,
  Globe,
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  Building,
  Briefcase,
  Settings,
  ChevronRight,
  Search,
  Filter,
  Star,
  Check,
  Plus,
  X,
  Languages,
  Palette,
  Moon,
  Sun,
  Monitor,
} from 'lucide-react'

export default function SelectShowcasePage() {
  const [framework, setFramework] = useState('next')
  const [role, setRole] = useState('developer')
  const [status, setStatus] = useState('active')
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('system')
  const [country, setCountry] = useState('us')
  const [timezone, setTimezone] = useState('pst')
  const [department, setDepartment] = useState('engineering')
  const [priority, setPriority] = useState('medium')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Select</h1>
          <p className="text-lg text-muted-foreground">
            Displays a list of options for the user to pick from.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Select</h2>
          <p className="text-muted-foreground mb-6">
            Simple dropdown for selecting a single option.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="framework">Framework</Label>
              <Select value={framework} onValueChange={setFramework}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Selected: {framework}
              </p>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Selected: {role}
              </p>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Select options with icons for visual clarity.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="es">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Español</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="fr">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Français</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="de">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Deutsch</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ja">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>日本語</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="country">Country</Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>United States</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="uk">
                    <div className="flex items-center gap-2">
                      <span>🇬🇧</span>
                      <span>United Kingdom</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ca">
                    <div className="flex items-center gap-2">
                      <span>🇨🇦</span>
                      <span>Canada</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="au">
                    <div className="flex items-center gap-2">
                      <span>🇦🇺</span>
                      <span>Australia</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="jp">
                    <div className="flex items-center gap-2">
                      <span>🇯🇵</span>
                      <span>Japan</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* With Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Groups</h2>
          <p className="text-muted-foreground mb-6">
            Organize options into groups with labels.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                    <SelectItem value="cst">Central Time (CT)</SelectItem>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European (EET)</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="jst">Japan Standard (JST)</SelectItem>
                    <SelectItem value="cst-china">China Standard (CST)</SelectItem>
                    <SelectItem value="ist">India Standard (IST)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="department">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Engineering</SelectLabel>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="qa">Quality Assurance</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Design</SelectLabel>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="ux">UX Research</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Business</SelectLabel>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Select components in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="select-sm">Small</Label>
              <Select defaultValue="option1">
                <SelectTrigger id="select-sm" size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="select-default">Default</Label>
              <Select defaultValue="option1">
                <SelectTrigger id="select-default">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="select-lg">Large (custom)</Label>
              <Select defaultValue="option1">
                <SelectTrigger id="select-lg" className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Form Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
          <p className="text-muted-foreground mb-6">
            Select components integrated in a form.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Fill in the user details below</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="form-role">Role</Label>
                    <Select>
                      <SelectTrigger id="form-role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="guest">Guest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="form-department">Department</Label>
                    <Select>
                      <SelectTrigger id="form-department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="form-country">Country</Label>
                    <Select>
                      <SelectTrigger id="form-country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="form-timezone">Timezone</Label>
                    <Select>
                      <SelectTrigger id="form-timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Time</SelectItem>
                        <SelectItem value="mst">Mountain Time</SelectItem>
                        <SelectItem value="cst">Central Time</SelectItem>
                        <SelectItem value="est">Eastern Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline">Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Settings Selects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings Selects</h2>
          <p className="text-muted-foreground mb-6">
            Select components commonly used in settings.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="theme">Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      <span>Light</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      <span>Dark</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="system">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <span>System</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="language-setting">Display Language</Label>
              <Select>
                <SelectTrigger id="language-setting">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English (US)</SelectItem>
                  <SelectItem value="en-gb">English (UK)</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="ko">한국어</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="currency">Currency</Label>
              <Select>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar ($)</SelectItem>
                  <SelectItem value="eur">EUR - Euro (€)</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound (£)</SelectItem>
                  <SelectItem value="jpy">JPY - Japanese Yen (¥)</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar (C$)</SelectItem>
                  <SelectItem value="aud">AUD - Australian Dollar (A$)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="date-format">Date Format</Label>
              <Select>
                <SelectTrigger id="date-format">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  <SelectItem value="month">Month DD, YYYY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* With Descriptions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Descriptions</h2>
          <p className="text-muted-foreground mb-6">
            Select options with additional descriptions.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-md">
              <Label htmlFor="priority">Priority Level</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger id="priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    <div className="flex flex-col gap-1">
                      <span>Low</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        No immediate action required
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex flex-col gap-1">
                      <span>Medium</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        Address within the next few days
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex flex-col gap-1">
                      <span>High</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        Urgent attention needed
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="critical">
                    <div className="flex flex-col gap-1">
                      <span>Critical</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        Immediate action required
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-md">
              <Label htmlFor="plan">Subscription Plan</Label>
              <Select>
                <SelectTrigger id="plan">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <div className="flex flex-col gap-1">
                      <span>Free</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        $0/month - Basic features
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="pro">
                    <div className="flex flex-col gap-1">
                      <span>Pro</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        $29/month - Advanced features
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="enterprise">
                    <div className="flex flex-col gap-1">
                      <span>Enterprise</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        $99/month - Full access + support
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Searchable Select (Simulated) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Searchable Select</h2>
          <p className="text-muted-foreground mb-6">
            Select with search functionality (simulated).
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="search">Search and Select</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Type to search..."
                  className="pl-9"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Or select from list" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="cherry">Cherry</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="elderberry">Elderberry</SelectItem>
                  <SelectItem value="fig">Fig</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Multiple Selections (Simulated) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filter Panel</h2>
          <p className="text-muted-foreground mb-6">
            Multiple select dropdowns for filtering content.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Filters</CardTitle>
                  <CardDescription>Refine your search results</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  Clear All
                  <X className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Price</SelectItem>
                      <SelectItem value="0-25">Under $25</SelectItem>
                      <SelectItem value="25-50">$25 - $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200+">$200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Rating</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Rating</SelectItem>
                      <SelectItem value="4">4★ & above</SelectItem>
                      <SelectItem value="3">3★ & above</SelectItem>
                      <SelectItem value="2">2★ & above</SelectItem>
                      <SelectItem value="1">1★ & above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="sony">Sony</SelectItem>
                      <SelectItem value="lg">LG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Color</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All colors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Colors</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All sizes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sizes</SelectItem>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button className="flex-1">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Status Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Status Select</h2>
          <p className="text-muted-foreground mb-6">
            Select with status indicator badges.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="order-status">Order Status</Label>
              <Select>
                <SelectTrigger id="order-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-500" />
                      <span>Pending</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="processing">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>Processing</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="shipped">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      <span>Shipped</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="delivered">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span>Delivered</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="cancelled">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      <span>Cancelled</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="task-priority">Task Priority</Label>
              <Select>
                <SelectTrigger id="task-priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <Star className="h-4 w-4 fill-red-500 text-red-500" />
                      </div>
                      <span>P1 - Critical</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="p2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                        <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                      </div>
                      <span>P2 - High</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="p3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </div>
                      <span>P3 - Medium</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="p4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                        <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                        <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                        <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                      </div>
                      <span>P4 - Low</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
          <p className="text-muted-foreground mb-6">
            Disabled select components.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="disabled-select" className="text-muted-foreground">
                Disabled Select
              </Label>
              <Select disabled>
                <SelectTrigger id="disabled-select">
                  <SelectValue placeholder="This select is disabled" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="disabled-value">Disabled with Value</Label>
              <Select defaultValue="option1" disabled>
                <SelectTrigger id="disabled-value">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* With Prefix/Suffix */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Prefix/Suffix</h2>
          <p className="text-muted-foreground mb-6">
            Select with icon or text prefix/suffix.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="prefixed">With Icon Prefix</Label>
              <Select>
                <SelectTrigger id="prefixed">
                  <User className="h-4 w-4 text-muted-foreground mr-2" />
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">John Doe</SelectItem>
                  <SelectItem value="user2">Jane Smith</SelectItem>
                  <SelectItem value="user3">Bob Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 max-w-sm">
              <Label htmlFor="suffixed">With Suffix</Label>
              <Select>
                <SelectTrigger id="suffixed">
                  <SelectValue placeholder="Select currency" />
                  <span className="text-muted-foreground ml-2">USD</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">US Dollar</SelectItem>
                  <SelectItem value="eur">Euro</SelectItem>
                  <SelectItem value="gbp">British Pound</SelectItem>
                </SelectContent>
              </Select>
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
