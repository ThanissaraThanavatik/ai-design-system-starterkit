'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  FileText,
  Image as ImageIcon,
  Video,
  Code,
  ShoppingCart,
  BarChart3,
  CreditCard,
  FolderOpen,
  Layers,
  ChevronRight,
  Globe,
  Shield,
  Bell,
  Palette,
  Zap,
} from 'lucide-react'

export default function NavigationMenuShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Navigation */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-semibold">NavigationMenu</span>
            </div>

            {/* Main Navigation */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <Zap className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Pro Plan
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Unlock all features and premium support
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Analytics
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Detailed reports and insights
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Integrations
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with your favorite tools
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              API Access
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Build custom integrations
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <FileText className="h-4 w-4" />
                              Documentation
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comprehensive guides and tutorials
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <Video className="h-4 w-4" />
                              Tutorials
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Video tutorials and walkthroughs
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <Code className="h-4 w-4" />
                              Examples
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Code samples and templates
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <Palette className="h-4 w-4" />
                              Design
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Design system and Figma files
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              About Us
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn more about our company
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Careers
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join our growing team
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Blog
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Latest news and updates
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Contact
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get in touch with us
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="#"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Pricing
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="#"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Blog
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Navigation Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of navigation menu components built with Radix UI and styled with Tailwind CSS.
            Displays a list of links that navigate to different sections of your application.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Navigation</h2>
          <p className="text-muted-foreground mb-6">
            A simple horizontal navigation menu with dropdown support.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              Overview
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              Analytics
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              Reports
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              All Projects
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              Active
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              Archived
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      >
                        Team
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      >
                        Settings
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Navigation menu items with icons for better visual hierarchy.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-1 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <BarChart3 className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Overview</div>
                                <div className="text-xs text-muted-foreground">
                                  View your dashboard
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <FolderOpen className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Projects</div>
                                <div className="text-xs text-muted-foreground">
                                  Manage projects
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <Users className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Team</div>
                                <div className="text-xs text-muted-foreground">
                                  Team members
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        Products
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-1 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <ShoppingCart className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Orders</div>
                                <div className="text-xs text-muted-foreground">
                                  View orders
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <CreditCard className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Billing</div>
                                <div className="text-xs text-muted-foreground">
                                  Manage billing
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Two Column Layout</h2>
          <p className="text-muted-foreground mb-6">
            A navigation menu with a two-column dropdown layout for organizing more content.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        Features
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <BarChart3 className="h-4 w-4" />
                                Analytics
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Real-time analytics and insights
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <Shield className="h-4 w-4" />
                                Security
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Enterprise-grade security
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <Globe className="h-4 w-4" />
                                Global CDN
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Fast content delivery worldwide
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <Bell className="h-4 w-4" />
                                Notifications
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Real-time alerts and updates
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>

        {/* Featured Card Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Card Layout</h2>
          <p className="text-muted-foreground mb-6">
            A navigation menu with a featured card and additional links.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        Resources
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md transition-colors hover:from-muted hover:to-muted"
                              href="#"
                            >
                              <Zap className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Getting Started
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Learn the basics and start building in minutes.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <FileText className="h-4 w-4" />
                                Documentation
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Comprehensive guides and API reference
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <Video className="h-4 w-4" />
                                Tutorials
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Step-by-step video tutorials
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              href="#"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <Code className="h-4 w-4" />
                                Examples
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Code samples and templates
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>

        {/* Vertical List with Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Sections</h2>
          <p className="text-muted-foreground mb-6">
            Navigation menu with grouped sections for better organization.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-2">
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">
                          Account
                        </div>
                        <ul className="gap-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <Users className="h-4 w-4" />
                                Profile
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <Shield className="h-4 w-4" />
                                Security
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                        <div className="px-2 py-1.5 mt-2 text-xs font-semibold text-muted-foreground uppercase">
                          Preferences
                        </div>
                        <ul className="gap-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <Bell className="h-4 w-4" />
                                Notifications
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex items-center gap-3 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <Palette className="h-4 w-4" />
                                Appearance
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>

        {/* With Active State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Active State</h2>
          <p className="text-muted-foreground mb-6">
            Navigation menu with active state highlighting.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      data-active="true"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground"
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground"
                    >
                      <Package className="h-4 w-4 mr-2" />
                      Products
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Customers
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Dashboard item shows the active state
            </p>
          </div>
        </section>

        {/* With CTA in Dropdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With CTA in Dropdown</h2>
          <p className="text-muted-foreground mb-6">
            Navigation menu with a call-to-action button in the dropdown.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[350px] p-4">
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <LayoutDashboard className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium">Dashboard</div>
                                <div className="text-sm text-muted-foreground">
                                  Overview of your metrics
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <BarChart3 className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium">Analytics</div>
                                <div className="text-sm text-muted-foreground">
                                  Detailed reports and insights
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <div className="border-t pt-3 mt-3">
                            <Button className="w-full" asChild>
                              <a href="#">
                                Start Free Trial
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
