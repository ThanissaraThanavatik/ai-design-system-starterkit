'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Cloud,
  UserPlus,
  Users,
  FileText,
  Moon,
  Sun,
  Laptop,
  Search,
  Music,
  Palette,
  Bell,
  Shield,
  Zap,
  Terminal,
  Code,
  Database,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export default function CommandPage() {
  const [open, setOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Keyboard shortcut to open command dialog
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Command</h1>
          <p className="text-lg text-muted-foreground">
            Fast, composable, command menu for React.
          </p>
        </div>

        {/* Basic Command */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            A basic inline command menu with search and grouped items.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </section>

        {/* Command Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Command Dialog</h2>
          <p className="text-muted-foreground mb-6">
            A command menu displayed in a modal dialog. Press{' '}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>{' '}
            to open.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Button onClick={() => setOpen(true)}>
              <Search className="mr-2 h-4 w-4" />
              Open Command Palette
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Or press <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem onSelect={() => setOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </section>

        {/* With Multiple Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Groups</h2>
          <p className="text-muted-foreground mb-6">
            Organize commands into multiple groups with headers.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Search all commands..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="My Account">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <CommandShortcut>⌘K</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Team">
                  <CommandItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </CommandItem>
                  <CommandItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </CommandItem>
                  <CommandItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Help">
                  <CommandItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </CommandItem>
                  <CommandItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </CommandItem>
                  <CommandItem>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="">
                  <CommandItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <CommandShortcut>⇧⌘Q</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </section>

        {/* Theme Switcher Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Theme Switcher</h2>
          <p className="text-muted-foreground mb-6">
            A practical example using command menu for theme selection.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Button variant="outline" onClick={() => setThemeOpen(true)}>
              <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span>Toggle theme</span>
            </Button>
            <CommandDialog open={themeOpen} onOpenChange={setThemeOpen}>
              <CommandInput placeholder="Select theme..." />
              <CommandList>
                <CommandEmpty>No theme found.</CommandEmpty>
                <CommandGroup heading="Theme">
                  <CommandItem onSelect={() => setThemeOpen(false)}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setThemeOpen(false)}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setThemeOpen(false)}>
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </section>

        {/* With Disabled Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled Items</h2>
          <p className="text-muted-foreground mb-6">
            Some items can be disabled to prevent selection.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Type a command..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Create new file</span>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Open recent</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Send email (disabled)</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Start chat (disabled)</span>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Open settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </section>

        {/* Application Launcher */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Application Launcher</h2>
          <p className="text-muted-foreground mb-6">
            Use as an application or feature launcher with categories.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Button variant="outline" onClick={() => setSearchOpen(true)}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search apps...</span>
              <CommandShortcut className="ml-4">⌘/</CommandShortcut>
            </Button>
            <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
              <CommandInput placeholder="Search applications..." />
              <CommandList>
                <CommandEmpty>No applications found.</CommandEmpty>
                <CommandGroup heading="Development">
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Terminal className="mr-2 h-4 w-4" />
                    <span>Terminal</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Code className="mr-2 h-4 w-4" />
                    <span>Code Editor</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Database className="mr-2 h-4 w-4" />
                    <span>Database Client</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub Desktop</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Productivity">
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Mail</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Notes</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Media">
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Music className="mr-2 h-4 w-4" />
                    <span>Music</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Photos</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="System">
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>System Preferences</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Security</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearchOpen(false)}>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>Network</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <p className="text-muted-foreground mb-6">
            A compact command menu for quick actions.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Command className="rounded-lg border shadow-md max-w-[300px]">
              <CommandInput placeholder="Quick actions..." />
              <CommandList>
                <CommandEmpty>No actions found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Open</span>
                    <CommandShortcut>⌘O</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Zap className="mr-2 h-4 w-4" />
                    <span>Run</span>
                    <CommandShortcut>⌘R</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Find</span>
                    <CommandShortcut>⌘F</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </section>

        {/* Empty State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Empty State</h2>
          <p className="text-muted-foreground mb-6">
            Custom message when no results are found.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Search for something that doesn't exist..." />
              <CommandList>
                <CommandEmpty>
                  <div className="flex flex-col items-center py-4">
                    <Search className="h-8 w-8 text-muted-foreground mb-2" />
                    <p>No results found.</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Try searching for something else.
                    </p>
                  </div>
                </CommandEmpty>
                <CommandGroup heading="Recent Searches">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar events</span>
                  </CommandItem>
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>User settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
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
