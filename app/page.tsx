import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const components = [
  { name: 'Button', description: 'Interactive button component', href: '/button' },
  { name: 'Card', description: 'Container component for grouped content', href: '/card' },
  { name: 'Badge', description: 'Label component', href: '/badge' },
  { name: 'Alert', description: 'Alert notification component', href: '/alert' },
  { name: 'Accordion', description: 'Expandable accordion component', href: '/accordion' },
  { name: 'Breadcrumb', description: 'Navigation breadcrumb component', href: '/breadcrumb' },
  { name: 'Avatar', description: 'User avatar component', href: '/avatar' },
  { name: 'Checkbox', description: 'Checkbox input component', href: '/checkbox' },
  { name: 'Collapsible', description: 'Expandable/collapsible panel component', href: '/collapsible' },
  { name: 'Combobox', description: 'Autocomplete input with suggestions', href: '/combobox' },
  { name: 'Command', description: 'Command palette and menu component', href: '/command' },
  { name: 'Context Menu', description: 'Right-click context menu component', href: '/context-menu' },
  { name: 'Data Table', description: 'Powerful table for displaying data', href: '/data-table' },
  { name: 'Date Picker', description: 'Date selection with calendar popup', href: '/date-picker' },
  { name: 'Dialog', description: 'Modal dialog component', href: '/dialog' },
  { name: 'Drawer', description: 'Slide-in panel from screen edge', href: '/drawer' },
  { name: 'Empty', description: 'Empty state placeholder component', href: '/empty' },
  { name: 'Field', description: 'Form field with label and validation', href: '/field' },
  { name: 'Hover Card', description: 'Preview content on hover', href: '/hover-card' },
  { name: 'Input', description: 'Text input field component', href: '/input' },
  { name: 'Input Group', description: 'Combined input with addons and buttons', href: '/input-group' },
  { name: 'Input OTP', description: 'One-time password input component', href: '/input-otp' },
  { name: 'Item', description: 'Versatile list item component', href: '/item' },
  { name: 'KPI', description: 'Key performance indicator cards', href: '/kpi' },
  { name: 'KBD', description: 'Keyboard key and shortcut display', href: '/kbd' },
  { name: 'Label', description: 'Accessible label for form controls', href: '/label' },
  { name: 'Menubar', description: 'Horizontal menu bar for applications', href: '/menubar' },
  { name: 'Navigation Menu', description: 'Horizontal navigation with dropdowns', href: '/navigation-menu' },
  { name: 'Native Select', description: 'Styled native HTML select element', href: '/native-select' },
  { name: 'Radio Group', description: 'Radio button group component', href: '/radio-group' },
  { name: 'Scroll Area', description: 'Scrollable container with custom styling', href: '/scroll-area' },
  { name: 'Select', description: 'Select dropdown component', href: '/select' },
  { name: 'Separator', description: 'Visual separator/divider component', href: '/separator' },
  { name: 'Sheet', description: 'Slide-over panel component', href: '/sheet' },
  { name: 'Sidebar', description: 'Navigation sidebar component', href: '/sidebar' },
  { name: 'Sonner', description: 'Toast notification component', href: '/sonner' },
  { name: 'Spinner', description: 'Loading spinner component', href: '/spinner' },
  { name: 'Switch', description: 'Toggle switch component', href: '/switch' },
  { name: 'Dropdown Menu', description: 'Dropdown menu component', href: '/dropdown-menu' },
  { name: 'Popover', description: 'Popover tooltip component', href: '/popover' },
  { name: 'Tooltip', description: 'Tooltip component', href: '/tooltip' },
  { name: 'Form', description: 'Form builder component', href: '/form' },
  { name: 'Select', description: 'Select dropdown component', href: '/select' },
  { name: 'Tabs', description: 'Tabbed content component', href: '/tabs' },
  { name: 'Slider', description: 'Range slider component', href: '/slider' },
  { name: 'Progress', description: 'Progress bar component', href: '/progress' },
  { name: 'Pagination', description: 'Pagination component', href: '/pagination' },
  { name: 'Table', description: 'Data table component', href: '/table' },
  { name: 'Carousel', description: 'Image carousel component', href: '/carousel' },
  { name: 'Calendar', description: 'Date picker calendar', href: '/calendar' },
  { name: 'Skeleton', description: 'Loading skeleton', href: '/skeleton' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            shadcn/ui Starter Kit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-ready Next.js starter kit with shadcn/ui components, design tokens, and Tailwind CSS configured.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Latest Next.js with App Router and Server Components
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                50+ beautifully designed, customizable components
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Design System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete design tokens and Tailwind configuration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Components Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Available Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component) => (
              <Link key={component.name} href={component.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{component.name}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Project Structure</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <code className="bg-muted px-2 py-1 rounded">/app</code> - Next.js App Router pages</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/components</code> - shadcn/ui components</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/lib</code> - Utilities and helpers</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">/hooks</code> - Custom React hooks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Design Tokens</h4>
              <p className="text-sm text-muted-foreground">
                Access design tokens from <code className="bg-muted px-2 py-1 rounded">lib/design-tokens.ts</code>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Available Hooks</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <code className="bg-muted px-2 py-1 rounded">useMobile()</code> - Detect mobile screen</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useDebounce()</code> - Debounce values</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useLocalStorage()</code> - localStorage sync</li>
                <li>• <code className="bg-muted px-2 py-1 rounded">useClipboard()</code> - Copy to clipboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Ready to build something amazing?</p>
          <Button size="lg" asChild>
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
              View Components Documentation
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
