"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronDown,
  Globe,
  User,
  CreditCard,
  MapPin,
  Calendar,
  Clock,
  Palette,
} from "lucide-react"

// Native Select Component
interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'filled' | 'ghost'
  selectSize?: 'sm' | 'default' | 'lg'
  error?: boolean
  icon?: React.ReactNode
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, variant = 'default', selectSize = 'default', error, icon, children, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            {icon}
          </div>
        )}
        <select
          ref={ref}
          className={cn(
            "flex w-full appearance-none rounded-md border bg-background text-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            // Variants
            variant === 'default' && "border-input hover:border-ring",
            variant === 'filled' && "border-transparent bg-muted hover:bg-muted/80",
            variant === 'ghost' && "border-transparent hover:bg-accent",
            // Sizes
            selectSize === 'sm' && "h-8 px-3 pr-8 text-xs",
            selectSize === 'default' && "h-9 px-3 pr-8",
            selectSize === 'lg' && "h-11 px-4 pr-10 text-base",
            // Error state
            error && "border-destructive focus:ring-destructive",
            // Icon padding
            icon && selectSize === 'sm' && "pl-8",
            icon && selectSize === 'default' && "pl-9",
            icon && selectSize === 'lg' && "pl-10",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground",
            selectSize === 'sm' && "h-3 w-3",
            selectSize === 'default' && "h-4 w-4",
            selectSize === 'lg' && "h-5 w-5"
          )}
        />
      </div>
    )
  }
)
NativeSelect.displayName = "NativeSelect"

export default function NativeSelectShowcase() {
  const [country, setCountry] = React.useState("")
  const [language, setLanguage] = React.useState("en")
  const [formData, setFormData] = React.useState({
    country: "",
    state: "",
    cardType: "",
  })

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Native Select</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A styled native HTML select element. Provides better mobile experience with native
            OS pickers while maintaining consistent styling with the design system.
          </p>
        </div>

        {/* Default Native Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Native Select</CardTitle>
            <CardDescription>Basic native select with custom styling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-xs">
              <NativeSelect defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Select Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Sizes</CardTitle>
            <CardDescription>Native select in different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-end gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Small</Label>
                <NativeSelect selectSize="sm" defaultValue="option1" className="w-40">
                  <option value="option1">Small Select</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Default</Label>
                <NativeSelect selectSize="default" defaultValue="option1" className="w-44">
                  <option value="option1">Default Select</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Large</Label>
                <NativeSelect selectSize="lg" defaultValue="option1" className="w-48">
                  <option value="option1">Large Select</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Variants</CardTitle>
            <CardDescription>Different visual styles for native select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Default</Label>
                <NativeSelect variant="default" defaultValue="option1">
                  <option value="option1">Default variant</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
                <p className="text-xs text-muted-foreground">Standard bordered style</p>
              </div>
              <div className="space-y-2">
                <Label>Filled</Label>
                <NativeSelect variant="filled" defaultValue="option1">
                  <option value="option1">Filled variant</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
                <p className="text-xs text-muted-foreground">Filled background style</p>
              </div>
              <div className="space-y-2">
                <Label>Ghost</Label>
                <NativeSelect variant="ghost" defaultValue="option1">
                  <option value="option1">Ghost variant</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
                <p className="text-xs text-muted-foreground">Minimal ghost style</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select States</CardTitle>
            <CardDescription>Different states for native select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label>Normal</Label>
                <NativeSelect defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option value="1">Option 1</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>With Value</Label>
                <NativeSelect defaultValue="selected">
                  <option value="selected">Selected value</option>
                  <option value="other">Other option</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Error</Label>
                <NativeSelect error defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option value="1">Option 1</option>
                </NativeSelect>
                <p className="text-xs text-destructive">This field is required</p>
              </div>
              <div className="space-y-2">
                <Label>Disabled</Label>
                <NativeSelect disabled defaultValue="disabled">
                  <option value="disabled">Disabled select</option>
                </NativeSelect>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select with Icons</CardTitle>
            <CardDescription>Native select with leading icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Country</Label>
                <NativeSelect icon={<Globe className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="th">Thailand</option>
                  <option value="jp">Japan</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>User Role</Label>
                <NativeSelect icon={<User className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select role</option>
                  <option value="admin">Administrator</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <NativeSelect icon={<CreditCard className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select payment</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="paypal">PayPal</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <NativeSelect icon={<MapPin className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select location</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                  <option value="ch">Chicago</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Date Range</Label>
                <NativeSelect icon={<Calendar className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Time Zone</Label>
                <NativeSelect icon={<Clock className="h-4 w-4" />} defaultValue="">
                  <option value="" disabled>Select timezone</option>
                  <option value="utc">UTC</option>
                  <option value="est">Eastern Time</option>
                  <option value="pst">Pacific Time</option>
                </NativeSelect>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select with Option Groups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select with Option Groups</CardTitle>
            <CardDescription>Organized options using optgroup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Country</Label>
                <NativeSelect
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  icon={<Globe className="h-4 w-4" />}
                >
                  <option value="" disabled>Select a country</option>
                  <optgroup label="North America">
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="mx">Mexico</option>
                  </optgroup>
                  <optgroup label="Europe">
                    <option value="uk">United Kingdom</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                  </optgroup>
                  <optgroup label="Asia">
                    <option value="th">Thailand</option>
                    <option value="jp">Japan</option>
                    <option value="kr">South Korea</option>
                    <option value="sg">Singapore</option>
                  </optgroup>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <NativeSelect
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <optgroup label="Popular">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="zh">Chinese</option>
                  </optgroup>
                  <optgroup label="European">
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                  </optgroup>
                  <optgroup label="Asian">
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="th">Thai</option>
                  </optgroup>
                </NativeSelect>
              </div>
            </div>

            <div className="text-sm text-muted-foreground p-4 border rounded-md bg-muted/30">
              <p>Selected values:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Country: {country || "(none)"}</li>
                <li>Language: {language}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Full Width Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Full Width Select</CardTitle>
            <CardDescription>Select that spans the full container width</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <NativeSelect className="w-full" defaultValue="">
                <option value="" disabled>Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Garden</option>
                <option value="sports">Sports & Outdoors</option>
                <option value="books">Books</option>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Select</CardTitle>
            <CardDescription>Native multiple selection (hold Ctrl/Cmd to select multiple)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 max-w-sm">
              <Label>Select Skills</Label>
              <select
                multiple
                className="flex w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
              >
                <option value="js">JavaScript</option>
                <option value="ts">TypeScript</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="node">Node.js</option>
                <option value="python">Python</option>
                <option value="go">Go</option>
              </select>
              <p className="text-xs text-muted-foreground">Hold Ctrl (Windows) or Cmd (Mac) to select multiple options</p>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>Native select in a realistic form context</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6 max-w-lg">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shipping Address</h3>

                <div className="space-y-2">
                  <Label htmlFor="form-country">Country / Region</Label>
                  <NativeSelect
                    id="form-country"
                    icon={<Globe className="h-4 w-4" />}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full"
                  >
                    <option value="" disabled>Select country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="th">Thailand</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-state">State / Province</Label>
                  <NativeSelect
                    id="form-state"
                    icon={<MapPin className="h-4 w-4" />}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full"
                    disabled={!formData.country}
                  >
                    <option value="" disabled>
                      {formData.country ? "Select state" : "Select country first"}
                    </option>
                    {formData.country === "us" && (
                      <>
                        <option value="ca">California</option>
                        <option value="ny">New York</option>
                        <option value="tx">Texas</option>
                        <option value="fl">Florida</option>
                      </>
                    )}
                    {formData.country === "th" && (
                      <>
                        <option value="bkk">Bangkok</option>
                        <option value="cm">Chiang Mai</option>
                        <option value="pk">Phuket</option>
                      </>
                    )}
                  </NativeSelect>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment</h3>

                <div className="space-y-2">
                  <Label htmlFor="form-card">Card Type</Label>
                  <NativeSelect
                    id="form-card"
                    icon={<CreditCard className="h-4 w-4" />}
                    value={formData.cardType}
                    onChange={(e) => setFormData({ ...formData, cardType: e.target.value })}
                    className="w-full"
                  >
                    <option value="" disabled>Select card type</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="discover">Discover</option>
                  </NativeSelect>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="button">Continue</Button>
                <Button type="button" variant="outline">Back</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Comparison with Custom Select */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Native vs Custom Select</CardTitle>
            <CardDescription>When to use native select vs custom select component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Native Select
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Better mobile experience with OS picker
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Better accessibility support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Smaller bundle size
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Native keyboard navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">-</span>
                    Limited styling options for dropdown
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">-</span>
                    Inconsistent look across browsers
                  </li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Custom Select (Radix)
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Full control over styling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Consistent across all browsers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Rich content in options (icons, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    Custom animations and transitions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">-</span>
                    Larger bundle size
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">-</span>
                    No native mobile picker
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">When to Use Native Select</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Mobile-first applications where native picker is preferred</li>
                <li>Simple option lists without need for rich content</li>
                <li>Forms requiring maximum accessibility</li>
                <li>Performance-critical applications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Always include a placeholder option with disabled attribute</li>
                <li>Use optgroup for organizing many options</li>
                <li>Keep option text concise and clear</li>
                <li>Provide visual feedback for error states</li>
                <li>Ensure sufficient color contrast for accessibility</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
