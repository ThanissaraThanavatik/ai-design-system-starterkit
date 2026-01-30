'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronsUpDown, Plus, Minus, ChevronDown, ChevronRight, Folder, File } from 'lucide-react'

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(true)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [folderOpen1, setFolderOpen1] = useState(true)
  const [folderOpen2, setFolderOpen2] = useState(false)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Collapsible</h1>
          <p className="text-lg text-muted-foreground">
            An interactive component which expands/collapses a panel.
          </p>
        </div>

        {/* Basic Collapsible */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            A basic collapsible component with a trigger button.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* Default Open */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default Open</h2>
          <p className="text-muted-foreground mb-6">
            A collapsible that starts in the open state.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Collapsible
              open={isOpen2}
              onOpenChange={setIsOpen2}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  Project dependencies
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    {isOpen2 ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  react: ^18.2.0
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  next: ^14.0.0
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  tailwindcss: ^3.4.0
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* With Different Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Different Icons</h2>
          <p className="text-muted-foreground mb-6">
            Customize the trigger icon based on the open state.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Collapsible
              open={isOpen3}
              onOpenChange={setIsOpen3}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between px-4 py-2">
                  <span className="font-semibold">Advanced Settings</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen3 ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Enable notifications</span>
                  <span className="text-sm text-muted-foreground">On</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-save drafts</span>
                  <span className="text-sm text-muted-foreground">Every 5 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dark mode</span>
                  <span className="text-sm text-muted-foreground">System</span>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* File Tree Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File Tree Example</h2>
          <p className="text-muted-foreground mb-6">
            Use collapsibles to create a file tree structure.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-1">
              <Collapsible
                open={folderOpen1}
                onOpenChange={setFolderOpen1}
                className="w-full"
              >
                <CollapsibleTrigger className="flex items-center gap-2 w-full px-2 py-1 rounded hover:bg-muted text-left">
                  {folderOpen1 ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  <Folder className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">src</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 space-y-1">
                  <Collapsible
                    open={folderOpen2}
                    onOpenChange={setFolderOpen2}
                  >
                    <CollapsibleTrigger className="flex items-center gap-2 w-full px-2 py-1 rounded hover:bg-muted text-left">
                      {folderOpen2 ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <Folder className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">components</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-6 space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted">
                        <div className="w-4" />
                        <File className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Button.tsx</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted">
                        <div className="w-4" />
                        <File className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Card.tsx</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted">
                        <div className="w-4" />
                        <File className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Collapsible.tsx</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted">
                    <div className="w-4" />
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">App.tsx</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted">
                    <div className="w-4" />
                    <File className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">index.tsx</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Card Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card Style</h2>
          <p className="text-muted-foreground mb-6">
            A collapsible styled as a card with border and shadow.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Collapsible
              open={isOpen4}
              onOpenChange={setIsOpen4}
              className="w-full border rounded-lg shadow-sm"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                <div>
                  <h4 className="font-semibold">Show more details</h4>
                  <p className="text-sm text-muted-foreground">
                    Click to expand and see additional information
                  </p>
                </div>
                <ChevronsUpDown className="h-5 w-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-t p-4 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    This is the expanded content area. You can put any content here including
                    text, images, forms, or other components.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Learn More</Button>
                    <Button size="sm" variant="outline">Dismiss</Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* Multiple Collapsibles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Collapsibles</h2>
          <p className="text-muted-foreground mb-6">
            Multiple independent collapsible sections.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-2">
            <CollapsibleSection
              title="Section 1: Getting Started"
              defaultOpen={true}
            >
              <p className="text-sm text-muted-foreground">
                Welcome to the getting started guide. Here you will learn the basics
                of using this component library.
              </p>
            </CollapsibleSection>
            <CollapsibleSection title="Section 2: Installation">
              <p className="text-sm text-muted-foreground">
                Install the package using npm or yarn: npm install @radix-ui/react-collapsible
              </p>
            </CollapsibleSection>
            <CollapsibleSection title="Section 3: Usage">
              <p className="text-sm text-muted-foreground">
                Import the components and use them in your React application.
                See the examples above for common patterns.
              </p>
            </CollapsibleSection>
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

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border rounded-md"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-muted/50 rounded-md">
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-3 pb-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}
