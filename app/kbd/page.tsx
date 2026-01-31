'use client'

import * as React from 'react'
import {
  Command,
  Option,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CornerDownLeft,
  Delete,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
}

function Kbd({ className, variant = 'default', size = 'default', children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center gap-1 font-mono font-medium",
        "rounded border",
        // Variants
        variant === 'default' && "bg-muted text-muted-foreground border-border shadow-sm",
        variant === 'outline' && "bg-transparent text-foreground border-border",
        variant === 'ghost' && "bg-transparent text-muted-foreground border-transparent",
        // Sizes
        size === 'sm' && "h-5 min-w-5 px-1 text-[10px]",
        size === 'default' && "h-6 min-w-6 px-1.5 text-xs",
        size === 'lg' && "h-8 min-w-8 px-2 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}

export default function KbdPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">KBD (Keyboard)</h1>
          <p className="text-lg text-muted-foreground">
            Keyboard key component for displaying keyboard shortcuts and key combinations.
          </p>
        </div>

        {/* Basic Keys */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic keyboard key styling.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap gap-2">
              <Kbd>A</Kbd>
              <Kbd>B</Kbd>
              <Kbd>C</Kbd>
              <Kbd>1</Kbd>
              <Kbd>2</Kbd>
              <Kbd>3</Kbd>
              <Kbd>F1</Kbd>
              <Kbd>F2</Kbd>
              <Kbd>F12</Kbd>
            </div>
          </div>
        </section>

        {/* Modifier Keys */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Modifier Keys</h2>
          <p className="text-muted-foreground mb-6">
            Common modifier keys with symbols.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Kbd>⌘</Kbd>
                <span className="text-sm text-muted-foreground">Command</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⌥</Kbd>
                <span className="text-sm text-muted-foreground">Option/Alt</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⇧</Kbd>
                <span className="text-sm text-muted-foreground">Shift</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⌃</Kbd>
                <span className="text-sm text-muted-foreground">Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⇪</Kbd>
                <span className="text-sm text-muted-foreground">Caps Lock</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⎋</Kbd>
                <span className="text-sm text-muted-foreground">Escape</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⏎</Kbd>
                <span className="text-sm text-muted-foreground">Return</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⌫</Kbd>
                <span className="text-sm text-muted-foreground">Delete</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>⇥</Kbd>
                <span className="text-sm text-muted-foreground">Tab</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>␣</Kbd>
                <span className="text-sm text-muted-foreground">Space</span>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Keys */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Arrow Keys</h2>
          <p className="text-muted-foreground mb-6">
            Navigation arrow keys.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col items-center gap-1">
              <Kbd>↑</Kbd>
              <div className="flex gap-1">
                <Kbd>←</Kbd>
                <Kbd>↓</Kbd>
                <Kbd>→</Kbd>
              </div>
            </div>
          </div>
        </section>

        {/* Key Combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Combinations</h2>
          <p className="text-muted-foreground mb-6">
            Common keyboard shortcuts.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Copy</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>C</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Paste</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>V</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Cut</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>X</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Undo</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>Z</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Redo</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>⇧</Kbd>
                  <Kbd>Z</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Save</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Select All</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>A</Kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Find</span>
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>F</Kbd>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Different keyboard key sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Kbd size="sm">⌘</Kbd>
                <span className="text-xs text-muted-foreground">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Kbd size="default">⌘</Kbd>
                <span className="text-xs text-muted-foreground">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Kbd size="lg">⌘</Kbd>
                <span className="text-xs text-muted-foreground">Large</span>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Different visual styles.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  <Kbd variant="default">⌘</Kbd>
                  <Kbd variant="default">K</Kbd>
                </div>
                <span className="text-xs text-muted-foreground">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  <Kbd variant="outline">⌘</Kbd>
                  <Kbd variant="outline">K</Kbd>
                </div>
                <span className="text-xs text-muted-foreground">Outline</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  <Kbd variant="ghost">⌘</Kbd>
                  <Kbd variant="ghost">K</Kbd>
                </div>
                <span className="text-xs text-muted-foreground">Ghost</span>
              </div>
            </div>
          </div>
        </section>

        {/* Text Labels */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Text Labels</h2>
          <p className="text-muted-foreground mb-6">
            Keys with text labels instead of symbols.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap gap-2">
              <Kbd>Ctrl</Kbd>
              <Kbd>Alt</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Esc</Kbd>
              <Kbd>Space</Kbd>
              <Kbd>Backspace</Kbd>
              <Kbd>Delete</Kbd>
              <Kbd>Home</Kbd>
              <Kbd>End</Kbd>
              <Kbd>PgUp</Kbd>
              <Kbd>PgDn</Kbd>
            </div>
          </div>
        </section>

        {/* In Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">In Context</h2>
          <p className="text-muted-foreground mb-6">
            Keyboard shortcuts displayed in various contexts.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Inline text */}
            <div>
              <h3 className="text-sm font-medium mb-2">Inline with text</h3>
              <p className="text-sm text-muted-foreground">
                Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette,
                or <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd> for quick actions.
              </p>
            </div>

            {/* Menu items */}
            <div>
              <h3 className="text-sm font-medium mb-2">Menu items</h3>
              <div className="border rounded-lg divide-y max-w-xs">
                <div className="flex items-center justify-between px-3 py-2 hover:bg-muted/50 cursor-pointer">
                  <span className="text-sm">New File</span>
                  <div className="flex gap-1">
                    <Kbd size="sm">⌘</Kbd>
                    <Kbd size="sm">N</Kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 hover:bg-muted/50 cursor-pointer">
                  <span className="text-sm">Open File</span>
                  <div className="flex gap-1">
                    <Kbd size="sm">⌘</Kbd>
                    <Kbd size="sm">O</Kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 hover:bg-muted/50 cursor-pointer">
                  <span className="text-sm">Save</span>
                  <div className="flex gap-1">
                    <Kbd size="sm">⌘</Kbd>
                    <Kbd size="sm">S</Kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 hover:bg-muted/50 cursor-pointer">
                  <span className="text-sm">Save As...</span>
                  <div className="flex gap-1">
                    <Kbd size="sm">⌘</Kbd>
                    <Kbd size="sm">⇧</Kbd>
                    <Kbd size="sm">S</Kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Tooltip style */}
            <div>
              <h3 className="text-sm font-medium mb-2">Button with shortcut hint</h3>
              <div className="flex gap-4">
                <Button>
                  Save
                  <span className="ml-2 text-xs opacity-60">
                    <Kbd size="sm" variant="ghost" className="bg-primary-foreground/10">⌘S</Kbd>
                  </span>
                </Button>
                <Button variant="outline">
                  Search
                  <span className="ml-2">
                    <Kbd size="sm">⌘K</Kbd>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shortcuts Reference</h2>
          <p className="text-muted-foreground mb-6">
            Complete keyboard shortcuts reference panel.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Keyboard Shortcuts</h3>
            </div>
            <div className="p-4 space-y-6">
              {/* General */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">General</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { action: 'Command palette', keys: ['⌘', 'K'] },
                    { action: 'Quick search', keys: ['⌘', 'P'] },
                    { action: 'Settings', keys: ['⌘', ','] },
                    { action: 'Keyboard shortcuts', keys: ['⌘', '?'] },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <span className="text-sm">{item.action}</span>
                      <div className="flex gap-1">
                        {item.keys.map((key, j) => (
                          <Kbd key={j} size="sm">{key}</Kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editing */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Editing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { action: 'Bold', keys: ['⌘', 'B'] },
                    { action: 'Italic', keys: ['⌘', 'I'] },
                    { action: 'Underline', keys: ['⌘', 'U'] },
                    { action: 'Strikethrough', keys: ['⌘', '⇧', 'X'] },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <span className="text-sm">{item.action}</span>
                      <div className="flex gap-1">
                        {item.keys.map((key, j) => (
                          <Kbd key={j} size="sm">{key}</Kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Navigation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { action: 'Go to line', keys: ['⌃', 'G'] },
                    { action: 'Go to file', keys: ['⌘', 'P'] },
                    { action: 'Go to symbol', keys: ['⌘', '⇧', 'O'] },
                    { action: 'Go to definition', keys: ['F12'] },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <span className="text-sm">{item.action}</span>
                      <div className="flex gap-1">
                        {item.keys.map((key, j) => (
                          <Kbd key={j} size="sm">{key}</Kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
