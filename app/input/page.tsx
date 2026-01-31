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
  AlertCircle,
  CheckCircle2,
  AtSign,
  Globe,
  CreditCard,
  Calendar,
  DollarSign,
  Hash,
  MapPin,
  X,
  Loader2,
  Send,
  Copy,
  Check,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Input</h1>
          <p className="text-lg text-muted-foreground">
            Displays a form input field for user text entry.
          </p>
        </div>

        {/* Default Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic input field.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-sm">
            <Input type="text" placeholder="Enter text..." />
          </div>
        </section>

        {/* Input Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input Types</h2>
          <p className="text-muted-foreground mb-6">
            Various HTML input types for different data.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="text">Text</Label>
                <Input id="text" type="text" placeholder="Enter text" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input id="number" type="number" placeholder="0" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tel">Phone</Label>
                <Input id="tel" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input id="url" type="url" placeholder="https://example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="datetime">Date & Time</Label>
                <Input id="datetime" type="datetime-local" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="month">Month</Label>
                <Input id="month" type="month" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="week">Week</Label>
                <Input id="week" type="week" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input id="color" type="color" defaultValue="#6366f1" className="h-9 p-1" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="range">Range</Label>
                <Input id="range" type="range" min="0" max="100" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input id="search" type="search" placeholder="Search..." />
              </div>
            </div>
          </div>
        </section>

        {/* File Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File Input</h2>
          <p className="text-muted-foreground mb-6">
            Input for file uploads.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="file">Default File Input</Label>
              <Input id="file" type="file" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-multiple">Multiple Files</Label>
              <Input id="file-multiple" type="file" multiple />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-accept">Images Only</Label>
              <Input id="file-accept" type="file" accept="image/*" />
            </div>
          </div>
        </section>

        {/* Input States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">States</h2>
          <p className="text-muted-foreground mb-6">
            Different input states.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label>Default</Label>
              <Input placeholder="Default input" />
            </div>

            <div className="space-y-2">
              <Label>Focused</Label>
              <Input placeholder="Click to focus" className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]" />
              <p className="text-xs text-muted-foreground">Click the input to see focus state</p>
            </div>

            <div className="space-y-2">
              <Label>Disabled</Label>
              <Input placeholder="Disabled input" disabled />
            </div>

            <div className="space-y-2">
              <Label>Read Only</Label>
              <Input defaultValue="Read only value" readOnly className="bg-muted" />
            </div>

            <div className="space-y-2">
              <Label>Error</Label>
              <Input placeholder="Invalid input" aria-invalid="true" />
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                This field is required.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Success</Label>
              <div className="relative">
                <Input
                  defaultValue="Valid input"
                  className="pr-10 border-green-500 focus-visible:ring-green-500/50"
                />
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
              </div>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Inputs with leading or trailing icons.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            {/* Leading Icon */}
            <div className="space-y-2">
              <Label>Email with Icon</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search with Icon</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
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

            <div className="space-y-2">
              <Label>User</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Username" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="url" placeholder="https://example.com" className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        {/* With Prefix/Suffix */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Prefix/Suffix</h2>
          <p className="text-muted-foreground mb-6">
            Inputs with text or element addons.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
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
              <Label>Email</Label>
              <div className="flex">
                <Input placeholder="username" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  @gmail.com
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
              <Label>Discount</Label>
              <div className="flex">
                <Input type="number" placeholder="0" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  %
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Weight</Label>
              <div className="flex">
                <Input type="number" placeholder="0" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  kg
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* With Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Button</h2>
          <p className="text-muted-foreground mb-6">
            Input combined with action button.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label>Subscribe</Label>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
                <Button>Search</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Copy Link</Label>
              <div className="flex gap-2">
                <Input defaultValue="https://example.com/share/abc123" readOnly className="bg-muted" />
                <Button variant="outline" size="icon" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Send Message</Label>
              <div className="flex gap-2">
                <Input placeholder="Type a message..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>With Loading</Label>
              <div className="flex gap-2">
                <Input placeholder="Enter value" disabled={isLoading} />
                <Button onClick={simulateLoading} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Different input sizes using custom classes.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label>Small</Label>
              <Input placeholder="Small input" className="h-8 text-xs" />
            </div>

            <div className="space-y-2">
              <Label>Default</Label>
              <Input placeholder="Default input" />
            </div>

            <div className="space-y-2">
              <Label>Large</Label>
              <Input placeholder="Large input" className="h-11 text-base" />
            </div>

            <div className="space-y-2">
              <Label>Extra Large</Label>
              <Input placeholder="Extra large input" className="h-14 text-lg px-4" />
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Form Example</h2>
          <p className="text-muted-foreground mb-6">
            Complete form using various input styles.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
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
                <Label htmlFor="formEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="formEmail" type="email" placeholder="john@example.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="formPhone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="formPhone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="formPassword">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="formPassword" type="password" placeholder="••••••••" className="pl-10" />
                </div>
                <p className="text-xs text-muted-foreground">Must be at least 8 characters.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="formWebsite">Website (Optional)</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                    https://
                  </span>
                  <Input id="formWebsite" placeholder="yoursite.com" className="rounded-l-none" />
                </div>
              </div>

              <Button type="submit" className="w-full">Create Account</Button>
            </form>
          </div>
        </section>

        {/* Constrained Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Width Variations</h2>
          <p className="text-muted-foreground mb-6">
            Inputs with different widths.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Full Width (default)</Label>
              <Input placeholder="Full width input" />
            </div>

            <div className="space-y-2">
              <Label>Fixed Width</Label>
              <Input placeholder="Fixed width" className="w-64" />
            </div>

            <div className="space-y-2">
              <Label>Max Width</Label>
              <Input placeholder="Max width input" className="max-w-xs" />
            </div>

            <div className="space-y-2">
              <Label>Inline Inputs</Label>
              <div className="flex items-center gap-2">
                <Input placeholder="Day" className="w-16 text-center" maxLength={2} />
                <span>/</span>
                <Input placeholder="Month" className="w-16 text-center" maxLength={2} />
                <span>/</span>
                <Input placeholder="Year" className="w-20 text-center" maxLength={4} />
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
