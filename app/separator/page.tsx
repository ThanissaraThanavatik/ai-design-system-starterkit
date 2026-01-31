'use client'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  User,
  Settings,
  LogOut,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  Share2,
  Bookmark,
  MessageSquare,
  Plus,
  Search,
  Filter,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Home,
  FileText,
  Image,
  Video,
  Music,
  Check,
} from 'lucide-react'

export default function SeparatorShowcasePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Separator</h1>
          <p className="text-lg text-muted-foreground">
            Visually divides content into sections.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Separator</h2>
          <p className="text-muted-foreground mb-6">
            Simple horizontal and vertical separators.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Horizontal Separator</p>
              <div className="space-y-4">
                <p>Content above the separator</p>
                <Separator />
                <p>Content below the separator</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Vertical Separator</p>
              <div className="flex items-center gap-4 h-12">
                <span>Left content</span>
                <Separator orientation="vertical" className="h-8" />
                <span>Middle content</span>
                <Separator orientation="vertical" className="h-8" />
                <span>Right content</span>
              </div>
            </div>
          </div>
        </section>

        {/* With Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Text</h2>
          <p className="text-muted-foreground mb-6">
            Separator with centered text label.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Or continue with</p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
              </div>
              <div className="flex items-center gap-4 my-4">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground uppercase">Or</span>
                <Separator className="flex-1" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Date separator in messages</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Hey, how are you?</p>
                    <p className="text-xs text-muted-foreground">9:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">Today</span>
                  <Separator className="flex-1" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">JS</div>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-sm text-muted-foreground">I'm doing great, thanks!</p>
                    <p className="text-xs text-muted-foreground">10:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In Lists */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">In Lists</h2>
          <p className="text-muted-foreground mb-6">
            Separators used within list items.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Navigation Menu</h3>
            </div>
            <div>
              <a href="#" className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                <Home className="h-5 w-5 text-muted-foreground" />
                <span>Home</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
              <Separator />
              <a href="#" className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>Documents</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
              <Separator />
              <a href="#" className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                <Image className="h-5 w-5 text-muted-foreground" />
                <span>Images</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
              <Separator />
              <a href="#" className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                <Video className="h-5 w-5 text-muted-foreground" />
                <span>Videos</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
              <Separator />
              <a href="#" className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                <Music className="h-5 w-5 text-muted-foreground" />
                <span>Music</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
            </div>
          </div>
        </section>

        {/* In Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">In Cards</h2>
          <p className="text-muted-foreground mb-6">
            Separators used to divide card content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>User information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-3 mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Member since</span>
                    <span>January 2024</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Projects</span>
                    <span>12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Contributions</span>
                    <span>48</span>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <Plus className="h-5 w-5 text-muted-foreground" />
                  <span>Create New Project</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </button>
                <Separator />
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <span>Search Files</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </button>
                <Separator />
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <span>Filter Results</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </button>
                <Separator />
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <span>View Analytics</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Settings Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings Sections</h2>
          <p className="text-muted-foreground mb-6">
            Separators organizing settings into groups.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your application preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Account Section */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Account</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Profile Settings</p>
                          <p className="text-sm text-muted-foreground">Update your profile information</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Security</p>
                          <p className="text-sm text-muted-foreground">Password and authentication</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Preferences Section */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Preferences</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Notifications</p>
                          <p className="text-sm text-muted-foreground">Configure notification preferences</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Palette className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Appearance</p>
                          <p className="text-sm text-muted-foreground">Theme and display settings</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Language</p>
                          <p className="text-sm text-muted-foreground">Select your language</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Billing Section */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Billing</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Payment Methods</p>
                          <p className="text-sm text-muted-foreground">Manage your payment options</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Billing History</p>
                          <p className="text-sm text-muted-foreground">View past invoices</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            Separators in contact information display.
          </p>
          <Card className="border rounded-lg max-w-md">
            <CardHeader>
              <CardTitle>Contact Info</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@example.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">123 Main St, San Francisco, CA</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM PST</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <p className="text-muted-foreground mb-6">
            Vertical timeline with separators.
          </p>
          <Card className="border rounded-lg max-w-2xl">
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
              <CardDescription>Track your order progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                <div className="flex gap-4 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-px h-full bg-border" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Order Placed</p>
                    <p className="text-sm text-muted-foreground">January 15, 2025 at 10:30 AM</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-px h-full bg-border" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Processing</p>
                    <p className="text-sm text-muted-foreground">January 15, 2025 at 2:45 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-px h-full bg-border" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Shipped</p>
                    <p className="text-sm text-muted-foreground">January 16, 2025 at 9:00 AM</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-px h-full bg-border" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">In Transit</p>
                    <p className="text-sm text-muted-foreground">Package is on its way</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Home className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-muted-foreground">Delivered</p>
                    <p className="text-sm text-muted-foreground">Estimated: January 18, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sidebar Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sidebar Navigation</h2>
          <p className="text-muted-foreground mb-6">
            Sidebar with sectioned navigation using separators.
          </p>
          <div className="border rounded-lg bg-card overflow-hidden max-w-xs">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Menu</h3>
            </div>
            <div className="p-2">
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <Home className="h-5 w-5 text-muted-foreground" />
                <span>Overview</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                <FileText className="h-5 w-5" />
                <span>Documents</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <Image className="h-5 w-5 text-muted-foreground" />
                <span>Media</span>
              </a>
              <Separator className="my-2" />
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <span>Settings</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <span>Help & Support</span>
              </a>
              <Separator className="my-2" />
              <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-left text-red-500">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Footer Sections</h2>
          <p className="text-muted-foreground mb-6">
            Footer divided into sections with separators.
          </p>
          <div className="border rounded-lg bg-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Enterprise</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Security</a></li>
                </ul>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">© 2025 Company. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Share2 className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Heart className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Post Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Post Actions</h2>
          <p className="text-muted-foreground mb-6">
            Action buttons separated by dividers.
          </p>
          <Card className="border rounded-lg">
            <CardContent className="p-6">
              <p className="mb-4">This is an example post content. Users can interact with it using the actions below.</p>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comment
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Split Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Split Layout</h2>
          <p className="text-muted-foreground mb-6">
            Content split with vertical separator.
          </p>
          <div className="border rounded-lg bg-card p-6">
            <div className="flex items-stretch gap-6">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Left Content</h3>
                <p className="text-sm text-muted-foreground">
                  This is the left side of the split layout. It can contain any content you need.
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Right Content</h3>
                <p className="text-sm text-muted-foreground">
                  This is the right side of the split layout. The vertical separator divides the content.
                </p>
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
