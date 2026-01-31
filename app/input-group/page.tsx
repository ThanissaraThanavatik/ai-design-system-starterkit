'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  Mail,
  Lock,
  User,
  Phone,
  Search,
  Eye,
  EyeOff,
  Globe,
  CreditCard,
  Calendar,
  DollarSign,
  Copy,
  Check,
  Send,
  Plus,
  Minus,
  ChevronDown,
  AtSign,
  Hash,
  Percent,
  Link,
  MapPin,
  Building,
  FileText,
  Image,
  Upload,
  Download,
  Settings,
  Filter,
  RefreshCw,
  X,
  ArrowRight,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function InputGroupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [searchValue, setSearchValue] = useState('')

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Input Group</h1>
          <p className="text-lg text-muted-foreground">
            Combine inputs with buttons, addons, and other elements for enhanced functionality.
          </p>
        </div>

        {/* Basic Input with Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Button</h2>
          <p className="text-muted-foreground mb-6">
            Basic input combined with an action button.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Newsletter Subscription</Label>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search</Label>
              <div className="flex gap-2">
                <Input placeholder="Search..." className="flex-1" />
                <Button variant="secondary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Invite by Email</Label>
              <div className="flex gap-2">
                <Input type="email" placeholder="colleague@company.com" className="flex-1" />
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Invite
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input with Addon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Text Addon</h2>
          <p className="text-muted-foreground mb-6">
            Input with text prefix or suffix attached.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Website URL</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  https://
                </span>
                <Input placeholder="example.com" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email Address</Label>
              <div className="flex">
                <Input placeholder="username" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  @company.com
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Price</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  $
                </span>
                <Input type="number" placeholder="0.00" className="rounded-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  USD
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Social Handle</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  @
                </span>
                <Input placeholder="username" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Percentage</Label>
              <div className="flex">
                <Input type="number" placeholder="0" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  %
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Input with Icon Addon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Icon Addon</h2>
          <p className="text-muted-foreground mb-6">
            Input with icon prefix or suffix in addon style.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Email</Label>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 rounded-l-md border border-r-0 border-input bg-muted">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </span>
                <Input type="email" placeholder="you@example.com" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Phone</Label>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 rounded-l-md border border-r-0 border-input bg-muted">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </span>
                <Input type="tel" placeholder="+1 (555) 000-0000" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 rounded-l-md border border-r-0 border-input bg-muted">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </span>
                <Input type="url" placeholder="https://example.com" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 rounded-l-md border border-r-0 border-input bg-muted">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </span>
                <Input placeholder="Enter address" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Credit Card</Label>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 rounded-l-md border border-r-0 border-input bg-muted">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </span>
                <Input placeholder="4242 4242 4242 4242" className="rounded-l-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Input with Select */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Select</h2>
          <p className="text-muted-foreground mb-6">
            Combine input with dropdown select.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Phone with Country Code</Label>
              <div className="flex">
                <Select defaultValue="us">
                  <SelectTrigger className="w-[100px] rounded-r-none border-r-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">🇺🇸 +1</SelectItem>
                    <SelectItem value="uk">🇬🇧 +44</SelectItem>
                    <SelectItem value="th">🇹🇭 +66</SelectItem>
                    <SelectItem value="jp">🇯🇵 +81</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="tel" placeholder="(555) 000-0000" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Price with Currency</Label>
              <div className="flex">
                <Select defaultValue="usd">
                  <SelectTrigger className="w-[100px] rounded-r-none border-r-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">$ USD</SelectItem>
                    <SelectItem value="eur">€ EUR</SelectItem>
                    <SelectItem value="gbp">£ GBP</SelectItem>
                    <SelectItem value="thb">฿ THB</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="number" placeholder="0.00" className="rounded-l-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search with Category</Label>
              <div className="flex">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-r-none border-r-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="users">Users</SelectItem>
                    <SelectItem value="orders">Orders</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search..." className="rounded-none flex-1" />
                <Button className="rounded-l-none">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Domain with Extension</Label>
              <div className="flex">
                <Input placeholder="mywebsite" className="rounded-r-none" />
                <Select defaultValue="com">
                  <SelectTrigger className="w-[100px] rounded-l-none border-l-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="com">.com</SelectItem>
                    <SelectItem value="net">.net</SelectItem>
                    <SelectItem value="org">.org</SelectItem>
                    <SelectItem value="io">.io</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Input with Button Group */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Button Group</h2>
          <p className="text-muted-foreground mb-6">
            Input combined with multiple buttons.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Quantity Selector</Label>
              <div className="flex w-fit">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 rounded-none text-center border-x-0"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Copy Link</Label>
              <div className="flex">
                <Input
                  defaultValue="https://example.com/share/abc123"
                  readOnly
                  className="rounded-r-none bg-muted"
                />
                <Button
                  variant="outline"
                  className="rounded-l-none border-l-0"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search with Filters</Label>
              <div className="flex">
                <Input placeholder="Search..." className="rounded-r-none flex-1" />
                <Button variant="outline" className="rounded-none border-x-0">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button className="rounded-l-none">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>URL Shortener</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  short.ly/
                </span>
                <Input placeholder="custom-alias" className="rounded-none flex-1" />
                <Button className="rounded-l-none">Shorten</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input with Dropdown Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input with Dropdown Button</h2>
          <p className="text-muted-foreground mb-6">
            Input combined with dropdown menu button.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Save Options</Label>
              <div className="flex">
                <Input placeholder="Enter filename" className="rounded-r-none flex-1" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-l-none">
                      Save
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      Save as PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Image className="mr-2 h-4 w-4" />
                      Save as Image
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Action Input</Label>
              <div className="flex">
                <Input placeholder="Enter value" className="rounded-r-none flex-1" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      Actions
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reset
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Clearable Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Clearable Input</h2>
          <p className="text-muted-foreground mb-6">
            Input with clear button to reset value.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Search with Clear</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-10"
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Password with Toggle</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stacked Input Group */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stacked Input Groups</h2>
          <p className="text-muted-foreground mb-6">
            Multiple inputs grouped vertically.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Address</Label>
              <div className="space-y-0">
                <Input placeholder="Street Address" className="rounded-b-none" />
                <Input placeholder="City" className="rounded-none border-t-0" />
                <div className="flex">
                  <Input placeholder="State" className="rounded-none rounded-bl-md border-t-0" />
                  <Input placeholder="ZIP Code" className="rounded-none rounded-br-md border-t-0 border-l-0" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Date Range</Label>
              <div className="flex">
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="date" className="rounded-r-none pl-10" />
                </div>
                <span className="inline-flex items-center px-3 border-y border-input bg-muted text-sm text-muted-foreground">
                  to
                </span>
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="date" className="rounded-l-none pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Credit Card</Label>
              <div className="space-y-0">
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Card Number" className="rounded-b-none pl-10" />
                </div>
                <div className="flex">
                  <Input placeholder="MM/YY" className="rounded-none border-t-0" />
                  <Input placeholder="CVC" className="rounded-none rounded-br-md border-t-0 border-l-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Input Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Inline Input Groups</h2>
          <p className="text-muted-foreground mb-6">
            Horizontal layout with labels inline.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div className="flex items-center gap-4">
              <Label className="w-24 text-right shrink-0">Username</Label>
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  @
                </span>
                <Input placeholder="username" className="rounded-l-none" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Label className="w-24 text-right shrink-0">Website</Label>
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  https://
                </span>
                <Input placeholder="example.com" className="rounded-l-none" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Label className="w-24 text-right shrink-0">Budget</Label>
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  $
                </span>
                <Input type="number" placeholder="0.00" className="rounded-l-none" />
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
