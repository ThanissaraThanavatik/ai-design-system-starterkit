'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  Menu,
  X,
  Settings,
  User,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  Home,
  FileText,
  Image,
  Music,
  Film,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Heart,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Slider } from '@/components/ui/slider'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export default function DrawerPage() {
  const [goal, setGoal] = useState(350)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1 },
    { id: 2, name: 'USB-C Cable', price: 19.99, quantity: 2 },
    { id: 3, name: 'Phone Case', price: 29.99, quantity: 1 },
  ])

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Drawer</h1>
          <p className="text-lg text-muted-foreground">
            A drawer component that slides in from the edge of the screen.
          </p>
        </div>

        {/* Bottom Drawer (Default) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bottom Drawer (Default)</h2>
          <p className="text-muted-foreground mb-6">
            Drawer that slides up from the bottom of the screen.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer>
              <DrawerTrigger asChild>
                <Button>Open Bottom Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => setGoal(Math.max(200, goal - 10))}
                        disabled={goal <= 200}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => setGoal(Math.min(500, goal + 10))}
                        disabled={goal >= 500}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Right Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Right Drawer</h2>
          <p className="text-muted-foreground mb-6">
            Drawer that slides in from the right side.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Settings</DrawerTitle>
                  <DrawerDescription>
                    Manage your account settings and preferences.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email notifications
                        </p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable dark theme
                        </p>
                      </div>
                      <Checkbox />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Analytics</Label>
                        <p className="text-sm text-muted-foreground">
                          Share usage data
                        </p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Input defaultValue="English" />
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Input defaultValue="UTC+7 (Bangkok)" />
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save Changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Left Drawer - Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Left Drawer (Navigation)</h2>
          <p className="text-muted-foreground mb-6">
            Mobile navigation menu drawer.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <DrawerTitle className="text-base">John Doe</DrawerTitle>
                      <DrawerDescription>john@example.com</DrawerDescription>
                    </div>
                  </div>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto">
                  <nav className="space-y-1 p-4">
                    {[
                      { icon: Home, label: 'Home', active: true },
                      { icon: User, label: 'Profile' },
                      { icon: FileText, label: 'Documents' },
                      { icon: Image, label: 'Photos' },
                      { icon: Music, label: 'Music' },
                      { icon: Film, label: 'Videos' },
                    ].map((item) => (
                      <Button
                        key={item.label}
                        variant={item.active ? 'secondary' : 'ghost'}
                        className="w-full justify-start"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                        {item.active && (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        )}
                      </Button>
                    ))}
                  </nav>
                  <Separator className="my-2" />
                  <nav className="space-y-1 p-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help & Support
                    </Button>
                  </nav>
                </div>
                <DrawerFooter>
                  <Button variant="outline" className="w-full justify-start text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Top Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Top Drawer</h2>
          <p className="text-muted-foreground mb-6">
            Drawer that slides down from the top.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                  <Badge className="ml-2" variant="destructive">3</Badge>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-md">
                  <DrawerHeader>
                    <DrawerTitle>Notifications</DrawerTitle>
                    <DrawerDescription>You have 3 unread messages</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    {[
                      { title: 'New message', desc: 'You have a new message from Jane', time: '2 min ago', unread: true },
                      { title: 'Order shipped', desc: 'Your order #1234 has been shipped', time: '1 hour ago', unread: true },
                      { title: 'Payment received', desc: 'We received your payment of $99.99', time: '3 hours ago', unread: true },
                    ].map((notification, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
                        {notification.unread && (
                          <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.desc}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <DrawerFooter>
                    <Button variant="outline" className="w-full">Mark all as read</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Shopping Cart Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <p className="text-muted-foreground mb-6">
            E-commerce cart drawer example.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                  <Badge className="ml-2" variant="secondary">{cartItems.length}</Badge>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="sm:max-w-md">
                <DrawerHeader>
                  <DrawerTitle>Shopping Cart</DrawerTitle>
                  <DrawerDescription>{cartItems.length} items in your cart</DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                          <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                            <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Separator />
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">Checkout</Button>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">Continue Shopping</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Filter Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filter Drawer</h2>
          <p className="text-muted-foreground mb-6">
            Product filter drawer for e-commerce.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                  <DrawerDescription>Narrow down your search results</DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Categories</Label>
                    {['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'].map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <Checkbox id={cat} />
                        <Label htmlFor={cat} className="font-normal">{cat}</Label>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Price Range</Label>
                    <Slider defaultValue={[25, 75]} max={100} step={1} />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$0</span>
                      <span>$1000</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Rating</Label>
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="font-normal flex items-center">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                          <span className="ml-2">& up</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Availability</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" defaultChecked />
                      <Label htmlFor="in-stock" className="font-normal">In Stock</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-sale" />
                      <Label htmlFor="on-sale" className="font-normal">On Sale</Label>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button className="w-full">Apply Filters</Button>
                  <Button variant="outline" className="w-full">Clear All</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* Contact Info Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            Displaying contact details in a drawer.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-md">
                  <DrawerHeader>
                    <DrawerTitle>Contact Us</DrawerTitle>
                    <DrawerDescription>Get in touch with our team</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">123 Main Street, Bangkok 10110</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+66 2 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">contact@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-full">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        {/* With Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Form</h2>
          <p className="text-muted-foreground mb-6">
            Drawer containing a form for user input.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Item
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Add New Item</DrawerTitle>
                  <DrawerDescription>Fill in the details to add a new item.</DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="item-name">Name</Label>
                      <Input id="item-name" placeholder="Enter item name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="item-desc">Description</Label>
                      <Input id="item-desc" placeholder="Enter description" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="item-price">Price</Label>
                      <Input id="item-price" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="item-category">Category</Label>
                      <Input id="item-category" placeholder="Select category" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="featured" />
                      <Label htmlFor="featured" className="font-normal">
                        Mark as featured
                      </Label>
                    </div>
                  </form>
                </div>
                <DrawerFooter>
                  <Button>Save Item</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
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
