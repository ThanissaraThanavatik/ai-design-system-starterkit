'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Info,
  HelpCircle,
  MoreHorizontal,
  Plus,
  Calendar,
  Smile,
  MapPin,
  Tag,
  DollarSign,
  User,
  Mail,
  Link as LinkIcon,
  Copy,
  Check,
  Share2,
  Download,
  Heart,
  Bookmark,
  MessageSquare,
  Star,
  Edit,
  Trash2,
} from 'lucide-react'

export default function PopoverShowcasePage() {
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Popover</h1>
          <p className="text-lg text-muted-foreground">
            Displays rich content in a portal, triggered by a button or interactive element.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Popover</h2>
          <p className="text-muted-foreground mb-6">
            A simple popover with text content.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm">
                    This is a basic popover component. It displays rich content
                    in a portal, triggered by a button.
                  </p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Need Help?</h4>
                      <p className="text-sm text-muted-foreground">
                        Click here to access our documentation and support resources.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* With Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Form</h2>
          <p className="text-muted-foreground mb-6">
            Popover containing form elements for user input.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Create New Task</h4>
                    <div className="space-y-2">
                      <Label htmlFor="task-title">Title</Label>
                      <Input id="task-title" placeholder="Enter task title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-desc">Description</Label>
                      <Textarea
                        id="task-desc"
                        placeholder="Enter description"
                        className="resize-none"
                        rows={3}
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">Cancel</Button>
                      <Button size="sm">Create</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    Add Contact
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">New Contact</h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name" className="text-xs">Name</Label>
                        <Input id="contact-name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email" className="text-xs">Email</Label>
                        <Input id="contact-email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone" className="text-xs">Phone</Label>
                        <Input id="contact-phone" type="tel" placeholder="+1 234 567 890" />
                      </div>
                    </div>
                    <Button className="w-full" size="sm">Save Contact</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Positioning</h2>
          <p className="text-muted-foreground mb-6">
            Popover positioned relative to the trigger.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Top
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                  <p className="text-sm">Popover positioned at the top</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Bottom
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <p className="text-sm">Popover positioned at the bottom</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Left
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                  <p className="text-sm">Popover positioned on the left</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Right
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                  <p className="text-sm">Popover positioned on the right</p>
                </PopoverContent>
              </Popover>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Alignment variants:</p>
              <div className="flex flex-wrap gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">Start</Button>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <p className="text-sm">Aligned to start</p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">Center</Button>
                  </PopoverTrigger>
                  <PopoverContent align="center">
                    <p className="text-sm">Aligned to center</p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">End</Button>
                  </PopoverTrigger>
                  <PopoverContent align="end">
                    <p className="text-sm">Aligned to end</p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive Actions</h2>
          <p className="text-muted-foreground mb-6">
            Popover with action buttons and icons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-3">
              {/* Copy Link */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium">Copy Link</p>
                    <p className="text-xs text-muted-foreground">
                      https://example.com/page/123
                    </p>
                    <Button size="sm" className="w-full" onClick={handleCopy}>
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Share */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-56">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Share this content</p>
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Save/Bookmark */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-56">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Save to collection</p>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <Tag className="mr-2 h-4 w-4" />
                        Favorites
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <Bookmark className="mr-2 h-4 w-4" />
                        Read Later
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <Star className="mr-2 h-4 w-4" />
                        Important
                      </Button>
                    </div>
                    <div className="pt-2 border-t">
                      <Input placeholder="New collection..." className="h-8 text-sm" />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Like */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Heart className={`h-4 w-4 ${liked ? 'fill-current text-red-500' : ''}`} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48">
                  <div className="text-center space-y-3">
                    <div className="flex justify-center">
                      <Heart className={`h-8 w-8 ${liked ? 'fill-current text-red-500' : ''}`} />
                    </div>
                    <p className="text-sm font-medium">
                      {liked ? 'You liked this!' : 'Like this content'}
                    </p>
                    <p className="text-xs text-muted-foreground">247 people liked this</p>
                    <Button size="sm" variant={liked ? 'destructive' : 'default'} className="w-full" onClick={handleLike}>
                      {liked ? 'Unlike' : 'Like'}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* More Options */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48">
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* With Rich Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rich Content</h2>
          <p className="text-muted-foreground mb-6">
            Popover with images, formatted text, and media.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              {/* User Profile Preview */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">@johndoe</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Product Designer at Acme Inc. Creating beautiful interfaces.
                    </p>
                    <div className="flex gap-2 text-sm">
                      <span className="text-muted-foreground">247</span>
                      <span className="text-muted-foreground">Following</span>
                      <span className="text-muted-foreground">1.2K</span>
                      <span className="text-muted-foreground">Followers</span>
                    </div>
                    <Button size="sm" className="w-full">Follow</Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Location Info */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <MapPin className="mr-2 h-4 w-4" />
                    Location
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-3">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">San Francisco, CA</p>
                      <p className="text-sm text-muted-foreground">
                        123 Market Street, CA 94103
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Calendar Event */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Event
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Team Meeting</p>
                        <p className="text-xs text-muted-foreground mb-2">
                          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-sm">10:00 AM - 11:00 AM</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-background" />
                        <div className="h-6 w-6 rounded-full bg-green-500 border-2 border-background" />
                        <div className="h-6 w-6 rounded-full bg-yellow-500 border-2 border-background" />
                      </div>
                      <span className="text-xs text-muted-foreground self-center">
                        +3 attendees
                      </span>
                    </div>
                    <Button size="sm" className="w-full">Join Meeting</Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Emoji Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Smile className="mr-2 h-4 w-4" />
                    React
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Add Reaction</p>
                    <div className="grid grid-cols-6 gap-1">
                      {['👍', '❤️', '😂', '😮', '😢', '😡', '🎉', '🔥', '👏', '🤔', '🙏', '💯'].map((emoji) => (
                        <button
                          key={emoji}
                          className="h-8 w-8 text-lg hover:bg-muted rounded flex items-center justify-center transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* With Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Input</h2>
          <p className="text-muted-foreground mb-6">
            Popover triggered by input focus or value selection.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-6 max-w-md">
              {/* Amount Input */}
              <Popover>
                <PopoverAnchor>
                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-8"
                        placeholder="0.00"
                        type="number"
                      />
                    </div>
                  </div>
                </PopoverAnchor>
                <PopoverContent side="top" align="start" className="w-48">
                  <p className="text-xs text-muted-foreground">
                    Enter the amount in USD. Minimum: $10.00
                  </p>
                </PopoverContent>
              </Popover>

              {/* URL Input */}
              <Popover>
                <PopoverAnchor>
                  <div className="space-y-2">
                    <Label>Website URL</Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-8"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </PopoverAnchor>
                <PopoverContent side="top" align="start" className="w-56">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      Enter a valid URL including the protocol (http:// or https://)
                    </p>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm" className="text-xs">http://</Button>
                      <Button variant="outline" size="sm" className="text-xs">https://</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Controlled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Controlled State</h2>
          <p className="text-muted-foreground mb-6">
            Programmatically controlled popover open/close state.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <PopoverDemo />
          </div>
        </section>

        {/* Hover Trigger */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hover Trigger</h2>
          <p className="text-muted-foreground mb-6">
            Popover that opens on hover instead of click.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap items-center gap-4">
              <PopoverOpenOnHover
                content={
                  <div className="space-y-2">
                    <p className="font-medium">Quick Tips</p>
                    <p className="text-sm text-muted-foreground">
                      Hover over elements to see additional information and tooltips.
                    </p>
                  </div>
                }
              >
                <Button variant="outline" className="cursor-help">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Hover me
                </Button>
              </PopoverOpenOnHover>

              <PopoverOpenOnHover
                content={
                  <div className="space-y-2">
                    <p className="font-medium">Keyboard Shortcuts</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">K</kbd> - Command palette</li>
                      <li><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">/</kbd> - Search</li>
                    </ul>
                  </div>
                }
              >
                <Button variant="outline" size="sm">Shortcuts</Button>
              </PopoverOpenOnHover>
            </div>
          </div>
        </section>

        {/* Nested Popovers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nested Popovers</h2>
          <p className="text-muted-foreground mb-6">
            Popover containing another popover trigger.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Parent Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Parent Popover Content</p>
                  <p className="text-xs text-muted-foreground">
                    This popover contains another popover trigger inside.
                  </p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        Open Nested
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-48">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Nested Popover</p>
                        <p className="text-xs text-muted-foreground">
                          This is a nested popover component.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Real-World Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Real-World Example</h2>
          <p className="text-muted-foreground mb-6">
            Complete data table with action popover.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="h-10 px-4 text-left font-medium">Name</th>
                  <th className="h-10 px-4 text-left font-medium">Email</th>
                  <th className="h-10 px-4 text-left font-medium">Role</th>
                  <th className="h-10 px-4 text-left font-medium">Status</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['John Doe', 'john@example.com', 'Admin', 'Active'],
                  ['Jane Smith', 'jane@example.com', 'User', 'Active'],
                  ['Bob Johnson', 'bob@example.com', 'User', 'Inactive'],
                ].map(([name, email, role, status], i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 font-medium">{name}</td>
                    <td className="p-4 text-muted-foreground">{email}</td>
                    <td className="p-4">{role}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-48">
                          <div className="space-y-1">
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              <User className="mr-2 h-4 w-4" />
                              View Profile
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </Button>
                            <div className="border-t my-1" />
                            <Button variant="ghost" size="sm" className="w-full justify-start text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

// Controlled popover demo component
function PopoverDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {open ? 'Close' : 'Open'} Controlled Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <p className="text-sm font-medium">Controlled State</p>
            <p className="text-xs text-muted-foreground">
              This popover's open state is controlled by React state.
            </p>
            <div className="flex gap-2 pt-2">
              <Button size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex gap-2">
        <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>
          Open from Outside
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setOpen(false)}>
          Close from Outside
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setOpen(!open)}>
          Toggle
        </Button>
      </div>
    </div>
  )
}

// Hover-triggered popover wrapper
function PopoverOpenOnHover({
  children,
  content,
}: {
  children: React.ReactNode
  content: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent side="top">{content}</PopoverContent>
    </Popover>
  )
}
