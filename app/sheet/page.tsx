'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Menu,
  ShoppingCart,
  User,
  Settings,
  Bell,
  Search,
  Plus,
  Filter,
  Share2,
  Heart,
  Bookmark,
  MessageSquare,
  Star,
  LogOut,
  Home,
  FileText,
  Image,
  Video,
  Music,
  Code,
  HelpCircle,
  CreditCard,
  Package,
  TrendingUp,
  BarChart3,
  Users,
  Wallet,
  ChevronRight,
  X,
  Check,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  Link,
  Copy,
  ExternalLink,
  LogIn,
  UserPlus,
  FolderOpen,
  Layers,
  Tag,
  Palette,
  Globe,
  Shield,
  Key,
  Upload,
  Download,
  MoreHorizontal,
} from 'lucide-react'

export default function SheetShowcasePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Sheet</h1>
          <p className="text-lg text-muted-foreground">
            A slide-out panel that displays content from the edge of the screen.
          </p>
        </div>

        {/* Sides */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sheet Sides</h2>
          <p className="text-muted-foreground mb-6">
            Sheets can slide from any edge of the screen.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Top */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Top
                  </Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides down from the top of the screen.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Content goes here. The top sheet is useful for notifications,
                      quick actions, or temporary content that doesn't need full screen space.
                    </p>
                  </div>
                  <SheetFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Action</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* Bottom */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Bottom
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides up from the bottom of the screen.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Bottom sheets are commonly used on mobile devices for actions,
                      forms, or additional content that slides up from below.
                    </p>
                  </div>
                  <SheetFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Action</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* Left */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Left
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the left side.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Left sheets work well for navigation menus, sidebar content,
                      or additional information panels.
                    </p>
                  </div>
                  <SheetFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Action</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* Right */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Right
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the right side.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Right sheets are commonly used for settings, details panels,
                      or forms that slide in from the right.
                    </p>
                  </div>
                  <SheetFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Action</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>

        {/* Navigation Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
          <p className="text-muted-foreground mb-6">
            Mobile navigation menu using left sheet.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu className="h-4 w-4 mr-2" />
                  Open Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Home className="h-5 w-5 text-muted-foreground" />
                    <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <FileText className="h-5 w-5" />
                    <span>Documents</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Image className="h-5 w-5 text-muted-foreground" />
                    <span>Media</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <FolderOpen className="h-5 w-5 text-muted-foreground" />
                    <span>Projects</span>
                  </a>
                  <Separator className="my-2" />
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <span>Settings</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    <span>Help</span>
                  </a>
                  <Separator className="my-2" />
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left text-red-500">
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Shopping Cart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <p className="text-muted-foreground mb-6">
            E-commerce shopping cart using right sheet.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Open Cart
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    Review your items before checkout
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-4">
                    {[
                      { name: 'Wireless Headphones', price: 149, qty: 1, image: '🎧' },
                      { name: 'Mechanical Keyboard', price: 129, qty: 1, image: '⌨️' },
                      { name: 'USB-C Cable', price: 19, qty: 2, image: '🔌' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 border rounded-lg">
                        <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center text-2xl">
                          {item.image}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                          <p className="text-sm font-semibold mt-1">${item.price * item.qty}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <SheetFooter className="flex-col items-stretch">
                  <div className="flex items-center justify-between py-4 border-t">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold text-lg">$316.00</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">Continue Shopping</Button>
                    <Button className="flex-1">Checkout</Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* User Profile */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <p className="text-muted-foreground mb-6">
            User profile and account management sheet.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <SheetTitle>John Doe</SheetTitle>
                      <SheetDescription>john@example.com</SheetDescription>
                    </div>
                  </div>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea placeholder="Tell us about yourself..." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input placeholder="San Francisco, CA" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="public-profile">Public Profile</Label>
                    <Switch id="public-profile" defaultChecked />
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Settings Panel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings Panel</h2>
          <p className="text-muted-foreground mb-6">
            Application settings with organized sections.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription>
                    Manage your application preferences
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4 space-y-6">
                  {/* Notifications */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Push Notifications</p>
                            <p className="text-xs text-muted-foreground">Receive push notifications</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Email Updates</p>
                            <p className="text-xs text-muted-foreground">Receive email updates</p>
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Appearance */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Appearance</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Palette className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Theme</p>
                            <p className="text-xs text-muted-foreground">Customize the appearance</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Dark</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Language</p>
                            <p className="text-xs text-muted-foreground">Select your language</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Privacy */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Privacy & Security</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Two-Factor Auth</p>
                            <p className="text-xs text-muted-foreground">Add extra security</p>
                          </div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Key className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">API Keys</p>
                            <p className="text-xs text-muted-foreground">Manage your API keys</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Account */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Account</h4>
                    <div className="space-y-1">
                      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">Profile Settings</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">Billing & Plans</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">Team Management</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <p className="text-muted-foreground mb-6">
            Common actions accessible via bottom sheet.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Quick Actions
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Quick Actions</SheetTitle>
                  <SheetDescription>
                    Choose an action to perform
                  </SheetDescription>
                </SheetHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium">New Doc</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <FolderOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm font-medium">New Folder</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm font-medium">Upload</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-sm font-medium">Like</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <MoreHorizontal className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <span className="text-sm font-medium">More</span>
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Share Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Share Options</h2>
          <p className="text-muted-foreground mb-6">
            Share content with various platforms.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Share Content</SheetTitle>
                  <SheetDescription>
                    Choose where to share this content
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-2 py-4">
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                    <div className="flex-1 text-left">
                      <p className="font-medium">Copy Link</p>
                      <p className="text-xs text-muted-foreground">Copy link to clipboard</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Share2 className="h-5 w-5 text-blue-400" />
                    <div className="flex-1 text-left">
                      <p className="font-medium">Twitter</p>
                      <p className="text-xs text-muted-foreground">Share to Twitter</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Share2 className="h-5 w-5 text-blue-600" />
                    <div className="flex-1 text-left">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Share to LinkedIn</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Mail className="h-5 w-5 text-green-500" />
                    <div className="flex-1 text-left">
                      <p className="font-medium">Email</p>
                      <p className="text-xs text-muted-foreground">Send via email</p>
                    </div>
                  </button>
                </div>
                <SheetFooter>
                  <Button variant="outline" className="w-full">Cancel</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Filters Panel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filters Panel</h2>
          <p className="text-muted-foreground mb-6">
            Filter options panel for search results.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search results
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div className="space-y-3">
                    <Label>Category</Label>
                    <div className="space-y-2">
                      {['All', 'Documents', 'Images', 'Videos', 'Audio'].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                          <input type="radio" name="category" className="accent-primary" defaultChecked={cat === 'All'} />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Date Modified</Label>
                    <div className="space-y-2">
                      {['Any time', 'Today', 'This week', 'This month', 'This year'].map((date) => (
                        <label key={date} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                          <input type="radio" name="date" className="accent-primary" defaultChecked={date === 'Any time'} />
                          <span className="text-sm">{date}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>File Size</Label>
                    <div className="space-y-2">
                      {['Any size', '< 1MB', '1-10MB', '10-100MB', '> 100MB'].map((size) => (
                        <label key={size} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                          <input type="checkbox" className="accent-primary" />
                          <span className="text-sm">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      {['Important', 'Work', 'Personal', 'Archive', 'Favorites'].map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline">Clear All</Button>
                  <Button>Apply Filters</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Details Panel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Details Panel</h2>
          <p className="text-muted-foreground mb-6">
            Slide-out panel showing detailed information.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <SheetTitle>Project Proposal.docx</SheetTitle>
                      <SheetDescription>
                        Created 2 days ago • 2.4 MB
                      </SheetDescription>
                    </div>
                  </div>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <p className="text-sm text-muted-foreground">
                      This document contains the project proposal including objectives,
                      timeline, budget, and resource requirements for Q1 2025.
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Properties</Label>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span>Microsoft Word</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size</span>
                        <span>2.4 MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created</span>
                        <span>Jan 29, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Modified</span>
                        <span>2 hours ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Owner</span>
                        <span>John Doe</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Important</Badge>
                      <Badge variant="secondary">Q1 2025</Badge>
                      <Badge variant="secondary">Proposal</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Activity</Label>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          JD
                        </div>
                        <div className="flex-1">
                          <p className="text-sm"><span className="font-medium">John Doe</span> edited this file</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          JS
                        </div>
                        <div className="flex-1">
                          <p className="text-sm"><span className="font-medium">Jane Smith</span> viewed this file</p>
                          <p className="text-xs text-muted-foreground">5 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Auth Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication Menu</h2>
          <p className="text-muted-foreground mb-6">
            Sign in / sign up options for mobile.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Welcome Back</SheetTitle>
                  <SheetDescription>
                    Sign in to access your account
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input type="password" placeholder="•••••••••" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-primary" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">Forgot password?</a>
                  </div>
                  <Button className="w-full">Sign In</Button>
                  <div className="relative my-4">
                    <Separator />
                    <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Continue with GitHub
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Contact Sheet */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Sheet</h2>
          <p className="text-muted-foreground mb-6">
            Contact information and quick actions.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Get in Touch</SheetTitle>
                  <SheetDescription>
                    We'd love to hear from you
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div className="space-y-4">
                    <a href="mailto:support@example.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">support@example.com</p>
                      </div>
                    </a>
                    <a href="tel:+15551234567" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Office</p>
                        <p className="text-sm text-muted-foreground">123 Main St, San Francisco, CA</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Send us a message</Label>
                    <div className="space-y-2">
                      <Input placeholder="Your name" />
                      <Input type="email" placeholder="Your email" />
                      <Textarea placeholder="Your message" rows={3} />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Follow us</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" className="w-full">Close</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
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
