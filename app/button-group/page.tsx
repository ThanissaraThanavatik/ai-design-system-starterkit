'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarPlus,
  ChevronDown,
  Clock,
  Copy,
  ListFilterPlus,
  MailCheck,
  Minus,
  MoreHorizontal,
  Plus,
  Search,
  Share,
  Tag,
  Trash2,
} from 'lucide-react'

export default function ButtonGroupShowcasePage() {
  const [label, setLabel] = useState('personal')
  const [currency, setCurrency] = useState('$')

  const currencies = [
    { value: '$', label: 'US Dollar' },
    { value: '€', label: 'Euro' },
    { value: '£', label: 'British Pound' },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Button Group</h1>
          <p className="text-lg text-muted-foreground">
            A container that groups related buttons together with consistent styling.
          </p>
        </div>

        {/* Basic Button Group */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Button Group</h2>
          <p className="text-muted-foreground mb-6">
            Group related buttons together with consistent spacing.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline">Archive</Button>
                <Button variant="outline">Report</Button>
                <Button variant="outline">Snooze</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Button groups with icon buttons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline" size="icon" aria-label="Archive">
                  <Archive className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Copy">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Mixed Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mixed Content</h2>
          <p className="text-muted-foreground mb-6">
            Combine text and icon buttons in a group.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline" size="icon" aria-label="Back">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline">Archive</Button>
                <Button variant="outline">Report</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Orientation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Orientation</h2>
          <p className="text-muted-foreground mb-6">
            Vertical button groups for stacked layouts.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-8">
              <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
                <Button variant="outline" size="icon" aria-label="Add">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Remove">
                  <Minus className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Size */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Size</h2>
          <p className="text-muted-foreground mb-6">
            Button groups in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Small</p>
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  Small
                </Button>
                <Button variant="outline" size="sm">
                  Button
                </Button>
                <Button variant="outline" size="sm">
                  Group
                </Button>
                <Button variant="outline" size="icon-sm">
                  <Plus className="h-3 w-3" />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Default</p>
              <ButtonGroup>
                <Button variant="outline">Default</Button>
                <Button variant="outline">Button</Button>
                <Button variant="outline">Group</Button>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Large</p>
              <ButtonGroup>
                <Button variant="outline" size="lg">
                  Large
                </Button>
                <Button variant="outline" size="lg">
                  Button
                </Button>
                <Button variant="outline" size="lg">
                  Group
                </Button>
                <Button variant="outline" size="icon-lg">
                  <Plus className="h-5 w-5" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Nested */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nested</h2>
          <p className="text-muted-foreground mb-6">
            Create complex layouts with nested button groups.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">4</Button>
                  <Button variant="outline" size="sm">5</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline" size="icon-sm" aria-label="Previous">
                    <ArrowLeft className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon-sm" aria-label="Next">
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Separator */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Separator</h2>
          <p className="text-muted-foreground mb-6">
            Visually divide buttons within a group.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="secondary" size="sm">
                  Copy
                </Button>
                <ButtonGroupSeparator />
                <Button variant="secondary" size="sm">
                  Paste
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Split Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Split Button</h2>
          <p className="text-muted-foreground mb-6">
            Create a split button with an action and dropdown.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline">Save</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="!pl-2">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <SaveAs className="h-4 w-4" />
                        Save As...
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share className="h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ButtonGroup>

              <ButtonGroup>
                <Button>Follow</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="!pl-2">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <MailCheck className="h-4 w-4" />
                        Mark as Read
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem variant="destructive">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* With Dropdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Dropdown Menu</h2>
          <p className="text-muted-foreground mb-6">
            Button groups with integrated dropdown menus.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline" size="icon" aria-label="Back">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline">Archive</Button>
                  <Button variant="outline">Report</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline">Snooze</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" aria-label="More Options">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <MailCheck className="h-4 w-4" />
                          Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4" />
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Clock className="h-4 w-4" />
                          Snooze
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CalendarPlus className="h-4 w-4" />
                          Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ListFilterPlus className="h-4 w-4" />
                          Add to List
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* With Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Input</h2>
          <p className="text-muted-foreground mb-6">
            Combine buttons with input fields.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Input placeholder="Search..." />
                <Button variant="outline" aria-label="Search">
                  <Search className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="font-mono w-20">
                    {currency}
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((curr) => (
                      <SelectItem key={curr.value} value={curr.value}>
                        {curr.value}{' '}
                        <span className="text-muted-foreground text-xs">
                          {curr.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input placeholder="10.00" className="w-32" />
                <Button aria-label="Send" size="icon" variant="outline">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* With Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Popover</h2>
          <p className="text-muted-foreground mb-6">
            Button groups with popover content.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Button variant="outline">
                  <Bot className="h-4 w-4 mr-2" />
                  Copilot
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Open Popover">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="rounded-xl p-0 w-80">
                    <div className="px-4 py-3">
                      <div className="text-sm font-medium">Agent Tasks</div>
                    </div>
                    <Separator />
                    <div className="p-4 text-sm space-y-2">
                      <Textarea
                        placeholder="Describe your task in natural language."
                        className="resize-none"
                        rows={3}
                      />
                      <p className="font-medium">Start a new task with Copilot</p>
                      <p className="text-muted-foreground text-xs">
                        Describe your task in natural language. Copilot will work
                        in the background and open a pull request for your review.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Real World Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Real World Examples</h2>
          <p className="text-muted-foreground mb-6">
            Common button group patterns in production.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Email Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                Email Actions
              </h3>
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <Button variant="outline" size="sm">
                  <MailCheck className="h-4 w-4 mr-2" />
                  Mark Read
                </Button>
              </ButtonGroup>
            </div>

            {/* Pagination */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                Pagination
              </h3>
              <ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">4</Button>
                  <Button variant="outline" size="sm">5</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline" size="icon-sm" aria-label="Previous">
                    <ArrowLeft className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon-sm" aria-label="Next">
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </div>

            {/* Format Toolbar */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                Format Toolbar
              </h3>
              <ButtonGroup>
                <Button variant="outline" size="icon-sm">
                  <span className="font-bold">B</span>
                </Button>
                <Button variant="outline" size="icon-sm">
                  <span className="italic">I</span>
                </Button>
                <Button variant="outline" size="icon-sm">
                  <span className="underline">U</span>
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline" size="icon-sm">
                  <Plus className="h-3 w-3" />
                </Button>
              </ButtonGroup>
            </div>

            {/* Split Action */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                Split Action Button
              </h3>
              <ButtonGroup>
                <Button size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <ButtonGroupSeparator />
                <Button size="icon-sm" variant="default" aria-label="More options">
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </ButtonGroup>
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

// Add missing icon
function SaveAs({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}
