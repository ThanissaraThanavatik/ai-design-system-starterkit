"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  ArrowLeft,
  Info,
  AlertCircle,
  User,
  Mail,
  Lock,
  Phone,
  Calendar,
  CreditCard,
  HelpCircle
} from "lucide-react"

// Extended Label with variants
interface ExtendedLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  required?: boolean
  optional?: boolean
  error?: boolean
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg'
  hint?: string
}

function ExtendedLabel({
  className,
  required,
  optional,
  error,
  disabled,
  size = 'default',
  hint,
  children,
  ...props
}: ExtendedLabelProps) {
  return (
    <div className="space-y-1">
      <Label
        className={cn(
          size === 'sm' && "text-xs",
          size === 'default' && "text-sm",
          size === 'lg' && "text-base",
          error && "text-destructive",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
        {optional && <span className="text-muted-foreground ml-1 font-normal">(optional)</span>}
      </Label>
      {hint && (
        <p className={cn(
          "text-xs text-muted-foreground",
          error && "text-destructive"
        )}>
          {hint}
        </p>
      )}
    </div>
  )
}

export default function LabelShowcase() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Label</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A label component for form fields and inputs. Labels provide accessible text descriptions
            that are associated with form controls for better usability and accessibility.
          </p>
        </div>

        {/* Default Labels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Label</CardTitle>
            <CardDescription>Basic label with different text content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-8">
              <Label>Username</Label>
              <Label>Email Address</Label>
              <Label>Password</Label>
              <Label>Phone Number</Label>
            </div>
          </CardContent>
        </Card>

        {/* Label Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label Sizes</CardTitle>
            <CardDescription>Labels in different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-end gap-8">
              <div className="space-y-1">
                <ExtendedLabel size="sm">Small Label</ExtendedLabel>
                <p className="text-xs text-muted-foreground">text-xs (12px)</p>
              </div>
              <div className="space-y-1">
                <ExtendedLabel size="default">Default Label</ExtendedLabel>
                <p className="text-xs text-muted-foreground">text-sm (14px)</p>
              </div>
              <div className="space-y-1">
                <ExtendedLabel size="lg">Large Label</ExtendedLabel>
                <p className="text-xs text-muted-foreground">text-base (16px)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required & Optional */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required & Optional Indicators</CardTitle>
            <CardDescription>Labels with required asterisk or optional text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Default Label</Label>
                <Input placeholder="Enter value" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel required>Required Field</ExtendedLabel>
                <Input placeholder="This field is required" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel optional>Optional Field</ExtendedLabel>
                <Input placeholder="This field is optional" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label States</CardTitle>
            <CardDescription>Different visual states for labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label>Normal</Label>
                <Input placeholder="Normal input" />
              </div>
              <div className="space-y-2">
                <Label className="text-primary">Focused</Label>
                <Input placeholder="Focused input" className="border-primary ring-1 ring-primary" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel error>Error</ExtendedLabel>
                <Input placeholder="Error input" className="border-destructive" />
                <p className="text-xs text-destructive">This field has an error</p>
              </div>
              <div className="space-y-2">
                <ExtendedLabel disabled>Disabled</ExtendedLabel>
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label with Hint Text */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label with Hint Text</CardTitle>
            <CardDescription>Labels with descriptive helper text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <ExtendedLabel hint="Enter your full legal name as it appears on your ID">
                  Full Name
                </ExtendedLabel>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel required hint="We'll never share your email with anyone else">
                  Email Address
                </ExtendedLabel>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel hint="Must be at least 8 characters with one number">
                  Password
                </ExtendedLabel>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <ExtendedLabel error hint="Username is already taken">
                  Username
                </ExtendedLabel>
                <Input placeholder="johndoe" className="border-destructive" defaultValue="admin" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label with Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label with Icons</CardTitle>
            <CardDescription>Labels with leading or trailing icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Username
                </Label>
                <Input placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </Label>
                <Input type="tel" placeholder="Enter phone" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date of Birth
                </Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Card Number
                </Label>
                <Input placeholder="1234 5678 9012 3456" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label with Tooltip */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label with Help Icon</CardTitle>
            <CardDescription>Labels with additional help indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  API Key
                  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                </Label>
                <Input placeholder="sk-xxxxxxxxxxxx" type="password" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  Webhook URL
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </Label>
                <Input placeholder="https://your-domain.com/webhook" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label with Form Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Label with Different Form Controls</CardTitle>
            <CardDescription>Labels paired with various input types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* With Input */}
            <div className="space-y-2">
              <Label htmlFor="input-example">Text Input</Label>
              <Input id="input-example" placeholder="Type something..." />
            </div>

            {/* With Textarea */}
            <div className="space-y-2">
              <Label htmlFor="textarea-example">Textarea</Label>
              <Textarea id="textarea-example" placeholder="Enter your message..." />
            </div>

            {/* With Select */}
            <div className="space-y-2">
              <Label htmlFor="select-example">Select</Label>
              <Select>
                <SelectTrigger id="select-example">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* With Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox-example" />
              <Label htmlFor="checkbox-example" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>

            {/* With Switch */}
            <div className="flex items-center justify-between max-w-sm">
              <Label htmlFor="switch-example" className="cursor-pointer">
                Enable notifications
              </Label>
              <Switch id="switch-example" />
            </div>

            {/* With Radio Group */}
            <div className="space-y-3">
              <Label>Choose your plan</Label>
              <RadioGroup defaultValue="free" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="free" id="plan-free" />
                  <Label htmlFor="plan-free" className="cursor-pointer font-normal">
                    Free Plan
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pro" id="plan-pro" />
                  <Label htmlFor="plan-pro" className="cursor-pointer font-normal">
                    Pro Plan
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="plan-enterprise" />
                  <Label htmlFor="plan-enterprise" className="cursor-pointer font-normal">
                    Enterprise Plan
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Inline Labels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inline Labels</CardTitle>
            <CardDescription>Labels positioned inline with form controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center gap-4">
                <Label className="w-32 text-right">Name</Label>
                <Input placeholder="Enter your name" className="flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <Label className="w-32 text-right">Email</Label>
                <Input type="email" placeholder="Enter your email" className="flex-1" />
              </div>
              <div className="flex items-center gap-4">
                <Label className="w-32 text-right">Phone</Label>
                <Input type="tel" placeholder="Enter your phone" className="flex-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>A realistic form layout with labels</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6 max-w-lg">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <ExtendedLabel required htmlFor="first-name">First Name</ExtendedLabel>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <ExtendedLabel required htmlFor="last-name">Last Name</ExtendedLabel>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <ExtendedLabel required htmlFor="email" hint="We'll send a confirmation email to this address">
                    Email Address
                  </ExtendedLabel>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <ExtendedLabel optional htmlFor="phone">
                    Phone Number
                  </ExtendedLabel>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Settings</h3>

                <div className="space-y-2">
                  <ExtendedLabel required htmlFor="username">Username</ExtendedLabel>
                  <Input id="username" placeholder="johndoe" />
                </div>

                <div className="space-y-2">
                  <ExtendedLabel
                    required
                    htmlFor="password"
                    hint="Must be at least 8 characters with uppercase, lowercase, and numbers"
                  >
                    Password
                  </ExtendedLabel>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>

                <div className="space-y-2">
                  <ExtendedLabel required htmlFor="confirm-password">
                    Confirm Password
                  </ExtendedLabel>
                  <Input id="confirm-password" type="password" placeholder="••••••••" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preferences</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I agree to the <a href="#" className="text-primary underline">Terms of Service</a> and{' '}
                      <a href="#" className="text-primary underline">Privacy Policy</a>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                      Subscribe to newsletter for updates and promotions
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit">Create Account</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accessibility Features</CardTitle>
            <CardDescription>Labels provide essential accessibility for form controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Using htmlFor
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  The htmlFor attribute connects the label to its input, enabling click-to-focus.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="accessible-input">Click this label</Label>
                  <Input id="accessible-input" placeholder="Input gets focused" />
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Wrapping Input
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Labels can wrap their inputs for implicit association.
                </p>
                <Label className="space-y-2 block">
                  <span>Click this label too</span>
                  <Input placeholder="Input also gets focused" />
                </Label>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-primary/5">
              <h4 className="font-semibold mb-2">Screen Reader Support</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Labels are announced when users focus on form controls</li>
                <li>Required fields should use aria-required in addition to visual indicators</li>
                <li>Error messages should be associated using aria-describedby</li>
                <li>Keep label text concise but descriptive</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Usage Notes */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Always use labels with form inputs for accessibility</li>
                <li>Use htmlFor to explicitly associate labels with inputs</li>
                <li>Keep label text clear and concise</li>
                <li>Place labels above inputs for better readability</li>
                <li>Use required indicators consistently throughout your forms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Text inputs, textareas, and select fields</li>
                <li>Checkboxes and radio buttons</li>
                <li>Toggle switches and other form controls</li>
                <li>Any interactive element that needs a text description</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
