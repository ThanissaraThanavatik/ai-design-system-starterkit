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
  HelpCircle,
  AtSign,
  Globe,
  CreditCard,
  Calendar,
  DollarSign,
  Percent,
  Hash,
  MapPin,
  Building,
  Link,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function FieldPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const maxBioLength = 200

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Field</h1>
          <p className="text-lg text-muted-foreground">
            Form field component combining label, input, helper text, and validation states.
          </p>
        </div>

        {/* Basic Field */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic form field with label and input.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
          </div>
        </section>

        {/* With Helper Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Helper Text</h2>
          <p className="text-muted-foreground mb-6">
            Field with description or hint text below the input.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md">
            <div className="space-y-2">
              <Label htmlFor="email-helper">Email</Label>
              <Input id="email-helper" type="email" placeholder="you@example.com" />
              <p className="text-sm text-muted-foreground">
                We'll never share your email with anyone else.
              </p>
            </div>
          </div>
        </section>

        {/* Required Field */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Required Field</h2>
          <p className="text-muted-foreground mb-6">
            Field marked as required with asterisk indicator.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="required-1">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input id="required-1" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="required-2">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input id="required-2" type="email" placeholder="john@example.com" required />
              <p className="text-sm text-muted-foreground">
                Required fields are marked with an asterisk.
              </p>
            </div>
          </div>
        </section>

        {/* Error State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Error State</h2>
          <p className="text-muted-foreground mb-6">
            Field with validation error message.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="error-1">Email</Label>
              <Input
                id="error-1"
                type="email"
                placeholder="you@example.com"
                defaultValue="invalid-email"
                aria-invalid="true"
              />
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                Please enter a valid email address.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="error-2">Password</Label>
              <Input
                id="error-2"
                type="password"
                defaultValue="123"
                aria-invalid="true"
              />
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                Password must be at least 8 characters.
              </p>
            </div>
          </div>
        </section>

        {/* Success State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Success State</h2>
          <p className="text-muted-foreground mb-6">
            Field showing successful validation.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md">
            <div className="space-y-2">
              <Label htmlFor="success">Username</Label>
              <div className="relative">
                <Input
                  id="success"
                  defaultValue="johndoe"
                  className="pr-10 border-green-500 focus-visible:ring-green-500/50"
                />
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
              </div>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
                Username is available!
              </p>
            </div>
          </div>
        </section>

        {/* Disabled Field */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled Field</h2>
          <p className="text-muted-foreground mb-6">
            Field in disabled state.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="disabled-1">Account ID</Label>
              <Input id="disabled-1" defaultValue="ACC-12345" disabled />
              <p className="text-sm text-muted-foreground">
                This field cannot be edited.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-2" className="opacity-50">Email (Verified)</Label>
              <Input id="disabled-2" type="email" defaultValue="john@example.com" disabled />
            </div>
          </div>
        </section>

        {/* With Icon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icon</h2>
          <p className="text-muted-foreground mb-6">
            Fields with leading or trailing icons.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            {/* Leading Icon */}
            <div className="space-y-2">
              <Label htmlFor="icon-1">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="icon-1" type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </div>

            {/* Leading Icon - Search */}
            <div className="space-y-2">
              <Label htmlFor="icon-2">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="icon-2" placeholder="Search..." className="pl-10" />
              </div>
            </div>

            {/* Password with Toggle */}
            <div className="space-y-2">
              <Label htmlFor="icon-3">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="icon-3"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Trailing Icon */}
            <div className="space-y-2">
              <Label htmlFor="icon-4">Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="icon-4" placeholder="https://example.com" className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        {/* With Prefix/Suffix */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Prefix/Suffix</h2>
          <p className="text-muted-foreground mb-6">
            Fields with text prefix or suffix.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            {/* URL Prefix */}
            <div className="space-y-2">
              <Label htmlFor="prefix-1">Website</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  https://
                </span>
                <Input id="prefix-1" placeholder="example.com" className="rounded-l-none" />
              </div>
            </div>

            {/* Email Suffix */}
            <div className="space-y-2">
              <Label htmlFor="prefix-2">Email</Label>
              <div className="flex">
                <Input id="prefix-2" placeholder="username" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  @company.com
                </span>
              </div>
            </div>

            {/* Currency */}
            <div className="space-y-2">
              <Label htmlFor="prefix-3">Price</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                  $
                </span>
                <Input id="prefix-3" type="number" placeholder="0.00" className="rounded-l-none rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  USD
                </span>
              </div>
            </div>

            {/* Percentage */}
            <div className="space-y-2">
              <Label htmlFor="prefix-4">Discount</Label>
              <div className="flex">
                <Input id="prefix-4" type="number" placeholder="0" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-sm text-muted-foreground">
                  %
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* With Label Tooltip */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Tooltip</h2>
          <p className="text-muted-foreground mb-6">
            Field with additional information in tooltip.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md">
            <TooltipProvider>
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <Label htmlFor="tooltip-1">API Key</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your API key can be found in your account settings.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input id="tooltip-1" placeholder="sk-xxxxxxxxxxxxx" />
              </div>
            </TooltipProvider>
          </div>
        </section>

        {/* Character Count */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Character Count</h2>
          <p className="text-muted-foreground mb-6">
            Field showing character count and limit.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="count-1">Bio</Label>
                <span className={cn(
                  "text-sm",
                  bio.length > maxBioLength ? "text-destructive" : "text-muted-foreground"
                )}>
                  {bio.length}/{maxBioLength}
                </span>
              </div>
              <Textarea
                id="count-1"
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className={cn(bio.length > maxBioLength && "border-destructive")}
                rows={4}
              />
              {bio.length > maxBioLength && (
                <p className="text-sm text-destructive">
                  Bio exceeds maximum length.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="count-2">Username</Label>
                <span className="text-sm text-muted-foreground">3-20 characters</span>
              </div>
              <Input id="count-2" placeholder="johndoe" maxLength={20} minLength={3} />
            </div>
          </div>
        </section>

        {/* Different Input Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input Types</h2>
          <p className="text-muted-foreground mb-6">
            Various input types for different data.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="type-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-email" type="email" placeholder="you@example.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-tel">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-tel" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-url">URL</Label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-url" type="url" placeholder="https://example.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-number">Number</Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-number" type="number" placeholder="0" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-date">Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-date" type="date" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-time">Time</Label>
                <Input id="type-time" type="time" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type-password" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-file">File</Label>
                <Input id="type-file" type="file" />
              </div>
            </div>
          </div>
        </section>

        {/* Inline Label */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Inline Label</h2>
          <p className="text-muted-foreground mb-6">
            Field with label positioned inline with input.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-lg space-y-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="inline-1" className="w-24 text-right shrink-0">
                Name
              </Label>
              <Input id="inline-1" placeholder="John Doe" />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="inline-2" className="w-24 text-right shrink-0">
                Email
              </Label>
              <Input id="inline-2" type="email" placeholder="john@example.com" />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="inline-3" className="w-24 text-right shrink-0">
                Company
              </Label>
              <Input id="inline-3" placeholder="Acme Inc." />
            </div>
          </div>
        </section>

        {/* Field Group */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Field Groups</h2>
          <p className="text-muted-foreground mb-6">
            Related fields grouped together.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-lg space-y-6">
            {/* Name Group */}
            <div>
              <h3 className="text-sm font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="group-first">First Name</Label>
                  <Input id="group-first" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-last">Last Name</Label>
                  <Input id="group-last" placeholder="Doe" />
                </div>
              </div>
            </div>

            {/* Address Group */}
            <div>
              <h3 className="text-sm font-medium mb-4">Address</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="group-street">Street Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="group-street" placeholder="123 Main St" className="pl-10" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="group-city">City</Label>
                    <Input id="group-city" placeholder="Bangkok" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="group-zip">Postal Code</Label>
                    <Input id="group-zip" placeholder="10110" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Readonly Field */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Readonly Field</h2>
          <p className="text-muted-foreground mb-6">
            Field that displays data but allows selection.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="readonly-1">Account Number</Label>
              <Input id="readonly-1" defaultValue="1234-5678-9012-3456" readOnly className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readonly-2">API Endpoint</Label>
              <Input id="readonly-2" defaultValue="https://api.example.com/v1" readOnly className="bg-muted" />
              <p className="text-sm text-muted-foreground">
                Click to select and copy.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Field */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Optional Field</h2>
          <p className="text-muted-foreground mb-6">
            Field marked as optional.
          </p>
          <div className="border rounded-lg p-6 bg-card max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="optional-1">
                Middle Name <span className="text-muted-foreground font-normal">(Optional)</span>
              </Label>
              <Input id="optional-1" placeholder="Enter middle name" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="optional-2">Phone Number</Label>
                <span className="text-sm text-muted-foreground">Optional</span>
              </div>
              <Input id="optional-2" type="tel" placeholder="+1 (555) 000-0000" />
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
