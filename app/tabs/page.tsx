"use client"

import * as React from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Settings,
  FileText,
  Image,
  Code,
  Lock,
  Bell,
  Palette,
  Globe,
  CreditCard,
  Package,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  Zap,
  Shield,
  Key,
  Download,
  Upload,
  Search,
  Filter,
  Star,
} from "lucide-react"

export default function TabsPage() {
  const [value, setValue] = React.useState("account")

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tabs</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Organize content into separate panels with clickable tabs.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* Basic Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Example</h2>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Make changes to your account here. Click save when you're done.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                      </div>
                      <Button>Save changes</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="password">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <p className="text-sm text-muted-foreground">
                        Change your password here. After saving, you'll be logged out.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                      <Button>Update password</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="settings">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your account settings and preferences.
                      </p>
                      <div className="flex items-center gap-2">
                        <Checkbox id="notifications" defaultChecked />
                        <Label htmlFor="notifications">Email notifications</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing">Marketing emails</Label>
                      </div>
                      <Button>Save preferences</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="analytics">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="reports">
                      <FileText className="h-4 w-4 mr-2" />
                      Reports
                    </TabsTrigger>
                    <TabsTrigger value="activity">
                      <Activity className="h-4 w-4 mr-2" />
                      Activity
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$45,231</div>
                          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+2350</div>
                          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+12,234</div>
                          <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="analytics" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Analytics Overview</CardTitle>
                        <CardDescription>Detailed analytics and metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 rounded-lg border border-dashed flex items-center justify-center">
                          <div className="text-center">
                            <PieChart className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">Analytics charts would go here</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="reports" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Generated Reports</CardTitle>
                        <CardDescription>View and download your reports</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-3">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Monthly Report - January 2024</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-3">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Annual Report - 2023</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="activity" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent account activities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Payment successful</p>
                              <p className="text-xs text-muted-foreground">2 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <User className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">New user registered</p>
                              <p className="text-xs text-muted-foreground">5 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">New 5-star review</p>
                              <p className="text-xs text-muted-foreground">1 day ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Vertical Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Vertical Tabs</h2>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="general" className="w-full" orientation="vertical">
                  <div className="flex gap-6">
                    <TabsList className="flex flex-col h-fit w-48">
                      <TabsTrigger value="general" className="justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        General
                      </TabsTrigger>
                      <TabsTrigger value="profile" className="justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="security" className="justify-start">
                        <Shield className="h-4 w-4 mr-2" />
                        Security
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger value="billing" className="justify-start">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Billing
                      </TabsTrigger>
                    </TabsList>
                    <div className="flex-1">
                      <TabsContent value="general" className="space-y-4 mt-0">
                        <div>
                          <h3 className="text-lg font-medium mb-2">General Settings</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Manage your general application preferences.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <p className="font-medium">Dark Mode</p>
                                <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                              </div>
                              <Button variant="outline" size="sm">Switch</Button>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg border">
                              <div>
                                <p className="font-medium">Language</p>
                                <p className="text-sm text-muted-foreground">Select your language</p>
                              </div>
                              <Badge variant="secondary">English</Badge>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="profile" className="space-y-4 mt-0">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Profile Settings</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Update your personal information.
                          </p>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label>Full Name</Label>
                              <Input defaultValue="John Doe" />
                            </div>
                            <div className="space-y-2">
                              <Label>Email</Label>
                              <Input defaultValue="john@example.com" />
                            </div>
                            <div className="space-y-2">
                              <Label>Bio</Label>
                              <Input placeholder="Tell us about yourself" />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="security" className="space-y-4 mt-0">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Security Settings</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Manage your account security settings.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg border">
                              <div className="flex items-center gap-3">
                                <Key className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium">Two-Factor Authentication</p>
                                  <p className="text-sm text-muted-foreground">Add extra security</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">Enable</Button>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg border">
                              <div className="flex items-center gap-3">
                                <Lock className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium">Change Password</p>
                                  <p className="text-sm text-muted-foreground">Update your password</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">Change</Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="notifications" className="space-y-4 mt-0">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Notification Preferences</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Choose how you want to be notified.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-lg border">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Email notifications</span>
                              </div>
                              <Checkbox defaultChecked />
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border">
                              <div className="flex items-center gap-2">
                                <Bell className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Push notifications</span>
                              </div>
                              <Checkbox defaultChecked />
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border">
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">SMS notifications</span>
                              </div>
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="billing" className="space-y-4 mt-0">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Billing Information</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Manage your billing details and invoices.
                          </p>
                          <div className="space-y-4">
                            <Card>
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm">Current Plan</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Pro Plan</p>
                                    <p className="text-sm text-muted-foreground">$29/month</p>
                                  </div>
                                  <Button size="sm">Upgrade</Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Product Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Product Information</h2>
            <Card>
              <CardHeader>
                <CardTitle>Wireless Headphones</CardTitle>
                <CardDescription>Premium noise-cancelling headphones</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Product Overview</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience premium sound quality with our wireless headphones. Featuring active noise cancellation,
                        30-hour battery life, and superior comfort for all-day wear. Perfect for music lovers,
                        commuters, and professionals alike.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">30-hour battery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">2-year warranty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Noise cancelling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Fast charging</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="specs" className="space-y-4">
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Driver Size</span>
                        <span className="font-medium">40mm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Frequency Response</span>
                        <span className="font-medium">20Hz - 20kHz</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Battery Life</span>
                        <span className="font-medium">30 hours</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Charging Time</span>
                        <span className="font-medium">2 hours</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Connectivity</span>
                        <span className="font-medium">Bluetooth 5.0</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Weight</span>
                        <span className="font-medium">250g</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 rounded-lg border">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">John Doe</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Amazing sound quality! The noise cancellation is incredible.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 rounded-lg border">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Jane Smith</span>
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Very comfortable for long sessions. Great battery life!
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="shipping" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg border">
                        <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Free Shipping</p>
                          <p className="text-sm text-muted-foreground">On orders over $50</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg border">
                        <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Fast Delivery</p>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg border">
                        <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Secure Packaging</p>
                          <p className="text-sm text-muted-foreground">Eco-friendly materials</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Documentation Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Documentation</h2>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="installation" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="installation">Installation</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent value="installation" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Installation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Install the component using your package manager.
                      </p>
                      <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                        <p>$ npm install @radix-ui/react-tabs</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="usage" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Basic Usage</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Import and use the tabs component in your application.
                      </p>
                      <div className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
                        <p className="text-green-500">import</p>
                        <p>{'{' + " Tabs, TabsList, TabsTrigger, TabsContent " + '}'}</p>
                        <p className="text-green-500">from</p>
                        <p className="text-blue-500">"@/components/ui/tabs"</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="api" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">API Reference</h3>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg border">
                          <p className="font-medium">Tabs</p>
                          <p className="text-sm text-muted-foreground">The root tabs container component.</p>
                        </div>
                        <div className="p-3 rounded-lg border">
                          <p className="font-medium">TabsList</p>
                          <p className="text-sm text-muted-foreground">Contains the tab triggers.</p>
                        </div>
                        <div className="p-3 rounded-lg border">
                          <p className="font-medium">TabsTrigger</p>
                          <p className="text-sm text-muted-foreground">The clickable tab button.</p>
                        </div>
                        <div className="p-3 rounded-lg border">
                          <p className="font-medium">TabsContent</p>
                          <p className="text-sm text-muted-foreground">The content panel for each tab.</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="examples" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Examples</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg border">
                          <Code className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Basic Tabs</p>
                            <p className="text-sm text-muted-foreground">Simple tab implementation</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border">
                          <Palette className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Styled Tabs</p>
                            <p className="text-sm text-muted-foreground">Custom styled tabs</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Vertical Tabs</p>
                            <p className="text-sm text-muted-foreground">Sidebar-style tabs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
