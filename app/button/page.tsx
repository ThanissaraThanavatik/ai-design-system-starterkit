'use client'

import { Button } from '@/components/ui/button'
import {
  Mail,
  Download,
  Trash2,
  ChevronRight,
  Plus,
  Search,
  Settings,
  Heart,
  Share2,
  Upload,
  Edit,
  Save,
  X,
  Check,
  Loader2,
  ArrowRight,
} from 'lucide-react'

export default function ButtonShowcasePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Button</h1>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Different button styles for various use cases.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Available button sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-end gap-4">
              <div className="text-center">
                <Button size="sm">Small</Button>
                <p className="text-xs text-muted-foreground mt-2">sm</p>
              </div>
              <div className="text-center">
                <Button size="default">Default</Button>
                <p className="text-xs text-muted-foreground mt-2">default</p>
              </div>
              <div className="text-center">
                <Button size="lg">Large</Button>
                <p className="text-xs text-muted-foreground mt-2">lg</p>
              </div>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Buttons with leading or trailing icons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button>
                <Mail />
                Email
              </Button>
              <Button>
                <Download />
                Download
              </Button>
              <Button variant="secondary">
                Upload
                <Upload />
              </Button>
              <Button variant="outline">
                Continue
                <ChevronRight />
              </Button>
              <Button variant="destructive">
                <Trash2 />
                Delete
              </Button>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Icon Only</h2>
          <p className="text-muted-foreground mb-6">
            Square buttons with icons only.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-end gap-4">
              <div className="text-center">
                <Button size="icon-sm" variant="outline">
                  <Search />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">sm</p>
              </div>
              <div className="text-center">
                <Button size="icon" variant="outline">
                  <Settings />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">default</p>
              </div>
              <div className="text-center">
                <Button size="icon-lg" variant="outline">
                  <Heart />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">lg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Button Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Icon Button Variants</h2>
          <p className="text-muted-foreground mb-6">
            Icon buttons in different styles.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon">
                <Plus />
              </Button>
              <Button size="icon" variant="secondary">
                <Edit />
              </Button>
              <Button size="icon" variant="outline">
                <Share2 />
              </Button>
              <Button size="icon" variant="ghost">
                <Heart />
              </Button>
              <Button size="icon" variant="destructive">
                <Trash2 />
              </Button>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Loading State</h2>
          <p className="text-muted-foreground mb-6">
            Buttons with loading indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>
                <Loader2 className="animate-spin" />
                Loading...
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="animate-spin" />
                Processing
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
          <p className="text-muted-foreground mb-6">
            Disabled button states.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="destructive" disabled>Destructive</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
              <Button variant="link" disabled>Link</Button>
            </div>
          </div>
        </section>

        {/* Button Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Groups</h2>
          <p className="text-muted-foreground mb-6">
            Multiple buttons grouped together.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div className="flex gap-2">
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Edit />
              </Button>
              <Button size="icon" variant="outline">
                <Save />
              </Button>
              <Button size="icon" variant="outline">
                <Trash2 />
              </Button>
            </div>
          </div>
        </section>

        {/* As Link */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">As Link</h2>
          <p className="text-muted-foreground mb-6">
            Buttons rendered as anchor tags.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild>
                <a href="/">Go to Home</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/components">View Components</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#">Learn more</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Full Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Full Width</h2>
          <p className="text-muted-foreground mb-6">
            Buttons that span the full width of their container.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-3">
            <Button className="w-full">
              <Mail />
              Sign in with Email
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
            <Button variant="secondary" className="w-full">
              Create Account
            </Button>
          </div>
        </section>

        {/* Custom Styling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
          <p className="text-muted-foreground mb-6">
            Buttons with custom colors and styles.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Gradient Button
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Success
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Warning
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Info
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
          <p className="text-muted-foreground mb-6">
            Real-world button examples.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Form Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Form Actions</h3>
              <div className="flex gap-2">
                <Button>
                  <Check />
                  Submit
                </Button>
                <Button variant="outline">
                  <X />
                  Cancel
                </Button>
              </div>
            </div>

            {/* Card Actions */}
            <div className="border rounded-lg p-4">
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Pro Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Best for growing teams
                </p>
                <p className="text-2xl font-bold mt-2">$29/mo</p>
              </div>
              <Button className="w-full">Get Started</Button>
              <Button variant="ghost" className="w-full mt-2">
                Learn more
                <ArrowRight />
              </Button>
            </div>

            {/* Toolbar */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Toolbar</h3>
              <div className="flex gap-1">
                <Button size="icon-sm" variant="ghost">
                  <Edit />
                </Button>
                <Button size="icon-sm" variant="ghost">
                  <Save />
                </Button>
                <Button size="icon-sm" variant="ghost">
                  <Share2 />
                </Button>
                <div className="w-px bg-border mx-1" />
                <Button size="icon-sm" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>

            {/* Social Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Social Actions</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Heart />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Download />
                  Save
                </Button>
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
