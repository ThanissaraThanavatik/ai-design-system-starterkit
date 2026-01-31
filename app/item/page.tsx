'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  MoreHorizontal,
  ChevronRight,
  Check,
  Circle,
  FileText,
  Image,
  Music,
  Film,
  Folder,
  Settings,
  Bell,
  CreditCard,
  Shield,
  Trash2,
  Edit,
  Copy,
  Share,
  Download,
  ExternalLink,
  Tag,
  Bookmark,
  MessageSquare,
  Eye,
  Package,
  Zap,
  Globe,
  Lock,
  Unlock,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function ItemPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [favoriteItems, setFavoriteItems] = useState<string[]>(['item-2'])

  const toggleSelect = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleFavorite = (id: string) => {
    setFavoriteItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Item</h1>
          <p className="text-lg text-muted-foreground">
            Versatile item component for lists, menus, and interactive content.
          </p>
        </div>

        {/* Basic Item */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic item with title and description.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            <div className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-medium">Item Title</h3>
              <p className="text-sm text-muted-foreground">Item description goes here</p>
            </div>
            <div className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-medium">Another Item</h3>
              <p className="text-sm text-muted-foreground">Another description</p>
            </div>
            <div className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-medium">Third Item</h3>
              <p className="text-sm text-muted-foreground">Third description</p>
            </div>
          </div>
        </section>

        {/* Item with Icon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icon</h2>
          <p className="text-muted-foreground mb-6">
            Items with leading icons.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { icon: User, title: 'Profile', desc: 'View and edit your profile' },
              { icon: Bell, title: 'Notifications', desc: 'Manage notification settings' },
              { icon: Shield, title: 'Security', desc: 'Password and authentication' },
              { icon: CreditCard, title: 'Billing', desc: 'Manage payment methods' },
              { icon: Settings, title: 'Settings', desc: 'App preferences' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </section>

        {/* Item with Avatar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Avatar</h2>
          <p className="text-muted-foreground mb-6">
            User list items with avatars.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { name: 'John Doe', email: 'john@example.com', avatar: 'https://github.com/shadcn.png', status: 'Online' },
              { name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://i.pravatar.cc/150?img=5', status: 'Away' },
              { name: 'Bob Johnson', email: 'bob@example.com', avatar: 'https://i.pravatar.cc/150?img=8', status: 'Offline' },
            ].map((user, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className={cn(
                    "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                    user.status === 'Online' && 'bg-green-500',
                    user.status === 'Away' && 'bg-yellow-500',
                    user.status === 'Offline' && 'bg-gray-400',
                  )} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <Badge variant={user.status === 'Online' ? 'default' : 'secondary'} className="text-xs">
                  {user.status}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Selectable Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Selectable Items</h2>
          <p className="text-muted-foreground mb-6">
            Items with checkbox selection.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { id: 'item-1', title: 'Design System', desc: 'UI component library' },
              { id: 'item-2', title: 'Documentation', desc: 'Project documentation' },
              { id: 'item-3', title: 'API Reference', desc: 'API documentation' },
            ].map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex items-center gap-4 p-4 transition-colors cursor-pointer",
                  selectedItems.includes(item.id) ? 'bg-muted/50' : 'hover:bg-muted/50'
                )}
                onClick={() => toggleSelect(item.id)}
              >
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={() => toggleSelect(item.id)}
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Selected: {selectedItems.length} item(s)
          </p>
        </section>

        {/* Item with Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Actions</h2>
          <p className="text-muted-foreground mb-6">
            Items with action buttons and dropdown menu.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { id: 'file-1', icon: FileText, title: 'document.pdf', size: '2.4 MB', date: 'Jan 12, 2024' },
              { id: 'file-2', icon: Image, title: 'photo.jpg', size: '1.8 MB', date: 'Jan 10, 2024' },
              { id: 'file-3', icon: Folder, title: 'Projects', size: '12 items', date: 'Jan 8, 2024' },
            ].map((file) => (
              <div key={file.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <file.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{file.title}</h3>
                  <p className="text-sm text-muted-foreground">{file.size} • {file.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => toggleFavorite(file.id)}
                  >
                    <Star className={cn(
                      "h-4 w-4",
                      favoriteItems.includes(file.id) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                    )} />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Item with Badge */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Badge</h2>
          <p className="text-muted-foreground mb-6">
            Items with status badges.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { title: 'Design Review', badge: 'In Progress', badgeVariant: 'default' as const },
              { title: 'Code Review', badge: 'Pending', badgeVariant: 'secondary' as const },
              { title: 'Testing', badge: 'Completed', badgeVariant: 'outline' as const },
              { title: 'Deployment', badge: 'Failed', badgeVariant: 'destructive' as const },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Circle className="h-2 w-2 fill-current text-primary" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <Badge variant={item.badgeVariant}>{item.badge}</Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Item with Switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Switch</h2>
          <p className="text-muted-foreground mb-6">
            Settings items with toggle switches.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { icon: Bell, title: 'Push Notifications', desc: 'Receive push notifications', defaultChecked: true },
              { icon: Mail, title: 'Email Updates', desc: 'Receive email updates', defaultChecked: true },
              { icon: Globe, title: 'Public Profile', desc: 'Make your profile public', defaultChecked: false },
              { icon: Lock, title: 'Two-Factor Auth', desc: 'Enable 2FA for security', defaultChecked: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </div>
        </section>

        {/* Item with Meta Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Meta Information</h2>
          <p className="text-muted-foreground mb-6">
            Items with additional metadata.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              {
                title: 'Product Launch Campaign',
                category: 'Marketing',
                date: 'Due Mar 15',
                views: 234,
                comments: 12,
              },
              {
                title: 'Q1 Financial Report',
                category: 'Finance',
                date: 'Due Mar 20',
                views: 89,
                comments: 5,
              },
              {
                title: 'Website Redesign',
                category: 'Design',
                date: 'Due Apr 1',
                views: 456,
                comments: 28,
              },
            ].map((item, i) => (
              <div key={i} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {item.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compact Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compact Items</h2>
          <p className="text-muted-foreground mb-6">
            Smaller, more condensed item style.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            {[
              { icon: Zap, title: 'Quick Actions', count: 5 },
              { icon: Bookmark, title: 'Saved Items', count: 12 },
              { icon: Clock, title: 'Recent', count: 8 },
              { icon: Tag, title: 'Tags', count: 24 },
              { icon: Package, title: 'Packages', count: 3 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Item States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Item States</h2>
          <p className="text-muted-foreground mb-6">
            Items showing different states.
          </p>
          <div className="border rounded-lg bg-card divide-y">
            <div className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Default Item</h3>
                <p className="text-sm text-muted-foreground">Normal state</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Selected Item</h3>
                <p className="text-sm text-muted-foreground">Currently selected</p>
              </div>
              <Check className="h-5 w-5 text-primary" />
            </div>

            <div className="flex items-center gap-4 p-4 opacity-50 cursor-not-allowed">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Disabled Item</h3>
                <p className="text-sm text-muted-foreground">Cannot interact</p>
              </div>
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-4 p-4 border-l-4 border-l-primary hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Active Item</h3>
                <p className="text-sm text-muted-foreground">With accent border</p>
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
