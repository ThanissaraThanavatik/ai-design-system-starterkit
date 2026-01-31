'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Image,
  Video,
  Music,
  Download,
  Share2,
  MoreHorizontal,
  Star,
  Clock,
  CheckCircle2,
  User,
  Calendar,
  Tag,
  Search,
  Settings,
  MessageSquare,
  Heart,
  Bookmark,
  Filter,
  ArrowUpDown,
  TrendingUp,
  Activity,
  Users,
  Copy,
  Lock,
  Key,
  CreditCard,
  Shield,
  Palette,
  Globe,
  Bell,
} from 'lucide-react'

export default function ScrollAreaShowcasePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Scroll Area</h1>
          <p className="text-lg text-muted-foreground">
            A container that provides custom scrolling behavior with styled scrollbars.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Scroll Area</h2>
          <p className="text-muted-foreground mb-6">
            A simple scrollable container with vertical scrollbar.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ScrollArea className="h-64 w-full rounded-md border">
              <div className="p-4">
                <h3 className="font-semibold mb-4">Scrollable Content</h3>
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">Item {i + 1}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          This is a description for item {i + 1}. Scroll down to see more content.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* Horizontal Scrolling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Horizontal Scrolling</h2>
          <p className="text-muted-foreground mb-6">
            Scrollable container with horizontal scrollbar.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-48 shrink-0 rounded-lg border bg-muted/50 p-4"
                  >
                    <div className="h-32 bg-muted rounded mb-3" />
                    <p className="font-medium">Card {i + 1}</p>
                    <p className="text-sm text-muted-foreground">
                      Horizontal scroll content
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* File List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File List</h2>
          <p className="text-muted-foreground mb-6">
            Scrollable list of files with icons and actions.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Recent Files</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <ScrollArea className="h-80">
              <div className="divide-y">
                {[
                  { name: 'Project Proposal.pdf', type: 'pdf', size: '2.4 MB', date: '2 hours ago', icon: FileText },
                  { name: 'Design Mockups.fig', type: 'fig', size: '15.8 MB', date: '5 hours ago', icon: Image },
                  { name: 'Product Demo.mp4', type: 'mp4', size: '128.5 MB', date: 'Yesterday', icon: Video },
                  { name: 'Background Music.mp3', type: 'mp3', size: '4.2 MB', date: 'Yesterday', icon: Music },
                  { name: 'Meeting Notes.docx', type: 'docx', size: '156 KB', date: '2 days ago', icon: FileText },
                  { name: 'Logo Design.png', type: 'png', size: '1.2 MB', date: '3 days ago', icon: Image },
                  { name: 'Tutorial Video.mov', type: 'mov', size: '256.8 MB', date: '4 days ago', icon: Video },
                  { name: 'Audio Recording.wav', type: 'wav', size: '8.4 MB', date: '5 days ago', icon: Music },
                  { name: 'Presentation.pptx', type: 'pptx', size: '5.6 MB', date: '1 week ago', icon: FileText },
                  { name: 'Photo Album.zip', type: 'zip', size: '45.2 MB', date: '1 week ago', icon: FileText },
                  { name: 'Budget Sheet.xlsx', type: 'xlsx', size: '890 KB', date: '2 weeks ago', icon: FileText },
                  { name: 'Banner Design.psd', type: 'psd', size: '22.4 MB', date: '2 weeks ago', icon: Image },
                  { name: 'Interview.mp3', type: 'mp3', size: '12.6 MB', date: '3 weeks ago', icon: Music },
                  { name: 'Training Video.mp4', type: 'mp4', size: '185.2 MB', date: '3 weeks ago', icon: Video },
                  { name: 'Report.pdf', type: 'pdf', size: '1.8 MB', date: '1 month ago', icon: FileText },
                ].map((file, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <file.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.size} • {file.date}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {file.type.toUpperCase()}
                    </Badge>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* Chat Messages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Chat Messages</h2>
          <p className="text-muted-foreground mb-6">
            Scrollable chat interface with message bubbles.
          </p>
          <Card className="border rounded-lg">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Chat</CardTitle>
                  <CardDescription>3 members online</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-96">
                <div className="p-4 space-y-4">
                  {/* Date separator */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground">Today</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Message from others */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">JD</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium">John Doe</span>
                        <span className="text-xs text-muted-foreground">9:30 AM</span>
                      </div>
                      <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-md">
                        <p className="text-sm">Hey team! Has anyone reviewed the new design mockups?</p>
                      </div>
                    </div>
                  </div>

                  {/* Message from others */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">JS</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium">Jane Smith</span>
                        <span className="text-xs text-muted-foreground">9:32 AM</span>
                      </div>
                      <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-md">
                        <p className="text-sm">Yes! I just finished reviewing them. Looking great! 🎨</p>
                      </div>
                    </div>
                  </div>

                  {/* Own message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 space-y-1 flex flex-col items-end">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-muted-foreground">9:35 AM</span>
                        <span className="text-sm font-medium">You</span>
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-md">
                        <p className="text-sm">Thanks for the feedback! I'll incorporate the changes.</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">ME</span>
                    </div>
                  </div>

                  {/* Message from others */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">AB</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium">Alex Brown</span>
                        <span className="text-xs text-muted-foreground">9:40 AM</span>
                      </div>
                      <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-md">
                        <p className="text-sm">Should we schedule a call to discuss the remaining items?</p>
                      </div>
                    </div>
                  </div>

                  {/* Own message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 space-y-1 flex flex-col items-end">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-muted-foreground">9:42 AM</span>
                        <span className="text-sm font-medium">You</span>
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-md">
                        <p className="text-sm">Sure! How about 2 PM today?</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">ME</span>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-medium">JD</span>
                    </div>
                    <div className="bg-muted rounded-lg rounded-tl-none p-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Activity Feed */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Activity Feed</h2>
          <p className="text-muted-foreground mb-6">
            Timeline-style scrollable activity feed.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Track your team's latest actions</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-6">
                    {[
                      { user: 'Sarah Chen', action: 'completed', target: 'Design review', time: '2 minutes ago', icon: CheckCircle2, color: 'text-green-500' },
                      { user: 'Mike Johnson', action: 'commented on', target: 'Project proposal', time: '15 minutes ago', icon: MessageSquare, color: 'text-blue-500' },
                      { user: 'Emma Wilson', action: 'liked', target: 'Your post', time: '1 hour ago', icon: Heart, color: 'text-red-500' },
                      { user: 'Alex Brown', action: 'shared', target: 'Documentation', time: '2 hours ago', icon: Share2, color: 'text-purple-500' },
                      { user: 'Lisa Park', action: 'bookmarked', target: 'Tutorial video', time: '3 hours ago', icon: Bookmark, color: 'text-yellow-500' },
                      { user: 'Tom Davis', action: 'completed', target: 'Code review', time: '5 hours ago', icon: CheckCircle2, color: 'text-green-500' },
                      { user: 'Amy Taylor', action: 'uploaded', target: 'New assets', time: 'Yesterday', icon: Activity, color: 'text-blue-500' },
                      { user: 'Chris Lee', action: 'started', target: 'New project', time: 'Yesterday', icon: TrendingUp, color: 'text-green-500' },
                      { user: 'Nina White', action: 'joined', target: 'Design team', time: '2 days ago', icon: Users, color: 'text-purple-500' },
                      { user: 'David Kim', action: 'completed', target: 'Sprint planning', time: '3 days ago', icon: CheckCircle2, color: 'text-green-500' },
                    ].map((activity, i) => (
                      <div key={i} className="flex gap-4 relative">
                        {/* Timeline dot */}
                        <div className="h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 z-10">
                          <activity.icon className={`h-4 w-4 ${activity.color}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>{' '}
                            <span className="text-muted-foreground">{activity.action}</span>{' '}
                            <span className="font-medium">{activity.target}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Tags List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tags & Categories</h2>
          <p className="text-muted-foreground mb-6">
            Scrollable list of tags and categories with filters.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
              <CardDescription>Browse content by tags</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="flex flex-wrap gap-2 p-1">
                  {[
                    { tag: 'react', count: 1234 },
                    { tag: 'design', count: 982 },
                    { tag: 'javascript', count: 876 },
                    { tag: 'typescript', count: 765 },
                    { tag: 'css', count: 654 },
                    { tag: 'html', count: 543 },
                    { tag: 'tailwind', count: 432 },
                    { tag: 'nextjs', count: 421 },
                    { tag: 'vue', count: 398 },
                    { tag: 'angular', count: 356 },
                    { tag: 'nodejs', count: 345 },
                    { tag: 'python', count: 334 },
                    { tag: 'rust', count: 323 },
                    { tag: 'go', count: 312 },
                    { tag: 'web3', count: 301 },
                    { tag: 'blockchain', count: 298 },
                    { tag: 'ai', count: 287 },
                    { tag: 'machine-learning', count: 276 },
                    { tag: 'cloud', count: 265 },
                    { tag: 'devops', count: 254 },
                    { tag: 'testing', count: 243 },
                    { tag: 'security', count: 232 },
                    { tag: 'performance', count: 221 },
                    { tag: 'accessibility', count: 210 },
                    { tag: 'ux', count: 209 },
                    { tag: 'ui', count: 198 },
                    { tag: 'figma', count: 187 },
                    { tag: 'sketch', count: 176 },
                    { tag: 'photoshop', count: 165 },
                    { tag: 'illustrator', count: 154 },
                  ].map(({ tag, count }) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary/20 transition-colors px-3 py-1"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag} ({count})
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Code Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Code Preview</h2>
          <p className="text-muted-foreground mb-6">
            Scrollable code block with syntax highlighting.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Component.tsx</CardTitle>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 rounded-md border bg-muted/50">
                <pre className="p-4 text-sm">
                  <code>{`import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Component() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">
        Counter: {count}
      </h1>
      <div className="flex gap-2">
        <Button
          onClick={() => setCount(count - 1)}
          variant="outline"
        >
          Decrement
        </Button>
        <Button
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
      </div>
      <Button
        onClick={() => setCount(0)}
        variant="ghost"
        size="sm"
      >
        Reset
      </Button>
    </div>
  )
}`}</code>
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Settings Panel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings Panel</h2>
          <p className="text-muted-foreground mb-6">
            Long settings list in a scrollable container.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border rounded-lg">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-72">
                  <div className="p-4 space-y-1">
                    {[
                      { icon: User, label: 'Account Settings', desc: 'Manage your account details' },
                      { icon: Bell, label: 'Notifications', desc: 'Configure notification preferences' },
                      { icon: Shield, label: 'Privacy', desc: 'Control your privacy settings' },
                      { icon: Palette, label: 'Appearance', desc: 'Customize the look and feel' },
                      { icon: Globe, label: 'Language', desc: 'Select your preferred language' },
                      { icon: Clock, label: 'Time Zone', desc: 'Set your time zone' },
                      { icon: Lock, label: 'Security', desc: 'Manage security options' },
                      { icon: Key, label: 'API Keys', desc: 'Manage your API keys' },
                      { icon: CreditCard, label: 'Billing', desc: 'View billing information' },
                      { icon: Users, label: 'Team', desc: 'Manage team members' },
                    ].map((setting, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        <setting.icon className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{setting.label}</p>
                          <p className="text-xs text-muted-foreground">{setting.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="border rounded-lg">
              <CardHeader>
                <CardTitle>Shortcuts</CardTitle>
                <CardDescription>Keyboard shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-72">
                  <div className="p-4 space-y-2">
                    {[
                      { key: '⌘K', desc: 'Open command palette' },
                      { key: '⌘/', desc: 'Search' },
                      { key: '⌘B', desc: 'Toggle sidebar' },
                      { key: '⌘K', desc: 'Command palette' },
                      { key: '⌘N', desc: 'New document' },
                      { key: '⌘S', desc: 'Save' },
                      { key: '⌘F', desc: 'Find' },
                      { key: '⌘G', desc: 'Find next' },
                      { key: '⌘Shift+F', desc: 'Find in files' },
                      { key: '⌘P', desc: 'Quick open' },
                      { key: '⌘Shift+P', desc: 'Command palette' },
                      { key: '⌘T', desc: 'New tab' },
                      { key: '⌘W', desc: 'Close tab' },
                      { key: '⌘+', desc: 'Zoom in' },
                      { key: '⌘-', desc: 'Zoom out' },
                      { key: '⌘0', desc: 'Reset zoom' },
                    ].map((shortcut, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50"
                      >
                        <span className="text-sm text-muted-foreground">{shortcut.desc}</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">
                          {shortcut.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Both Directions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Both Directions</h2>
          <p className="text-muted-foreground mb-6">
            Container scrollable in both vertical and horizontal directions.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Data Grid</CardTitle>
              <CardDescription>Wide table with horizontal and vertical scrolling</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72 w-full rounded-md border">
                <div className="min-w-max">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 sticky top-0">
                      <tr>
                        <th className="h-10 px-4 text-left font-medium border-r">ID</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Name</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Email</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Role</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Department</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Location</th>
                        <th className="h-10 px-4 text-left font-medium border-r">Status</th>
                        <th className="h-10 px-4 text-left font-medium">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-4 border-r">{i + 1}</td>
                          <td className="p-4 border-r">User {i + 1}</td>
                          <td className="p-4 border-r text-muted-foreground">user{i + 1}@example.com</td>
                          <td className="p-4 border-r">{['Admin', 'User', 'Editor'][i % 3]}</td>
                          <td className="p-4 border-r">{['Engineering', 'Design', 'Marketing'][i % 3]}</td>
                          <td className="p-4 border-r">{['New York', 'London', 'Tokyo'][i % 3]}</td>
                          <td className="p-4 border-r">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                              i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {i % 2 === 0 ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="p-4 text-muted-foreground">
                            {i + 1} {['hours', 'days', 'weeks'][i % 3]} ago
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
          <p className="text-muted-foreground mb-6">
            Horizontal scrolling image gallery.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Screenshots</CardTitle>
              <CardDescription>Project screenshots and previews</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex gap-4 p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="w-64 shrink-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-2 flex items-center justify-center">
                        <Image className="h-8 w-8 text-primary/50" />
                      </div>
                      <p className="text-sm font-medium">Screenshot {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Added {i + 1} days ago</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
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
