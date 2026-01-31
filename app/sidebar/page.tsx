'use client'

import { useState } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
  Home,
  FileText,
  Image,
  Video,
  Music,
  FolderOpen,
  Folder,
  HardDrive,
  Clock,
  Star,
  Trash2,
  Settings,
  HelpCircle,
  Search,
  Bell,
  User,
  CreditCard,
  Palette,
  Globe,
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  Package,
  ShoppingCart,
  Tag,
  Layers,
  Plus,
  X,
  LogOut,
  ChevronRight,
  Check,
  Calendar,
  Upload,
  Download,
  Share2,
  Heart,
  Bookmark,
  Filter,
} from 'lucide-react'

export default function SidebarShowcasePage() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Default Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          {/* Left Sidebar */}
          <Sidebar className="w-64 h-[600px]">
            <SidebarHeader className="border-b">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-semibold">Application</span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeItem === 'dashboard'}>
                    <a href="#" onClick={() => setActiveItem('dashboard')}>
                      <Home className="h-4 w-4" />
                      Dashboard
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeItem === 'projects'}>
                    <a href="#" onClick={() => setActiveItem('projects')}>
                      <FolderOpen className="h-4 w-4" />
                      Projects
                      <Badge variant="secondary" className="ml-auto">12</Badge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeItem === 'documents'}>
                    <a href="#" onClick={() => setActiveItem('documents')}>
                      <FileText className="h-4 w-4" />
                      Documents
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={activeItem === 'media'}>
                    <a href="#" onClick={() => setActiveItem('media')}>
                      <Image className="h-4 w-4" />
                      Media
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Cloud Storage</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <HardDrive className="h-4 w-4" />
                      My Drive
                      <span className="ml-auto text-xs text-muted-foreground">75 GB</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Clock className="h-4 w-4" />
                      Recent
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Star className="h-4 w-4" />
                      Starred
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Tags</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Work
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Personal
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Archive
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings className="h-4 w-4" />
                      Settings
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content Area */}
          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="text-muted-foreground">Main content area with sidebar navigation</p>
          </div>
        </div>
      </section>

      {/* Documentation Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className="w-72 h-[600px]">
            <SidebarHeader className="border-b bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span className="font-semibold">Docs</span>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <div className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
              </div>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">Getting Started</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                    Installation
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                    Quick Start
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Components</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Accordion
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Alert
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Avatar
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Badge
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Button
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Card
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>On This Page</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Introduction
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Installation
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Usage
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Examples
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <p className="text-muted-foreground">Browse documentation pages with sidebar navigation</p>
          </div>
        </div>
      </section>

      {/* Admin Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className="w-64 h-[600px]">
            <SidebarHeader className="border-b bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span className="font-semibold">Admin Panel</span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Home className="h-4 w-4" />
                      Overview
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <BarChart3 className="h-4 w-4" />
                      Analytics
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Users className="h-4 w-4" />
                      Users
                      <Badge variant="secondary" className="ml-auto">2.4k</Badge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <ShoppingCart className="h-4 w-4" />
                      Orders
                      <Badge variant="secondary" className="ml-auto">48</Badge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Package className="h-4 w-4" />
                      Products
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <TrendingUp className="h-4 w-4" />
                      Reports
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Palette className="h-4 w-4" />
                      Content
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      Customers
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <CreditCard className="h-4 w-4" />
                      Finance
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>System</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Shield className="h-4 w-4" />
                      Security
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Globe className="h-4 w-4" />
                      Integrations
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.jpg" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <p className="text-muted-foreground">Administrative control panel with grouped menu items</p>
          </div>
        </div>
      </section>

      {/* File Explorer Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className="w-72 h-[600px]">
            <SidebarHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5" />
                  <span className="font-semibold">File Explorer</span>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <div className="p-2">
                <Button variant="outline" size="sm" className="w-full justify-start mb-4">
                  <Plus className="h-4 w-4 mr-2" />
                  New Folder
                </Button>
              </div>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HardDrive className="h-4 w-4" />
                    My Computer
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Folders</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder className="h-4 w-4 text-blue-500" />
                      Documents
                      <span className="ml-auto text-xs text-muted-foreground">24</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder className="h-4 w-4 text-green-500" />
                      Pictures
                      <span className="ml-auto text-xs text-muted-foreground">156</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder className="h-4 w-4 text-purple-500" />
                      Music
                      <span className="ml-auto text-xs text-muted-foreground">89</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder className="h-4 w-4 text-orange-500" />
                      Videos
                      <span className="ml-auto text-xs text-muted-foreground">42</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder className="h-4 w-4 text-red-500" />
                      Downloads
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Recent Files</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      Report.pdf
                      <span className="ml-auto text-xs text-muted-foreground">2h ago</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Image className="h-4 w-4" />
                      Screenshot.png
                      <span className="ml-auto text-xs text-muted-foreground">5h ago</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      Notes.txt
                      <span className="ml-auto text-xs text-muted-foreground">1d ago</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Tags</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Work
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Personal
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Tag className="h-4 w-4" />
                      Important
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <div className="text-xs text-muted-foreground">
                {Math.round(75 * 1024 / 1024 / 1024 / 1024 * 100) / 10} TB used of 1 TB
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">File Explorer</h2>
            <p className="text-muted-foreground">Browse folders and files with the sidebar</p>
          </div>
        </div>
      </section>

      {/* Collapsible Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} h-[600px] transition-all duration-300`}>
            <SidebarHeader className="border-b">
              {!collapsed && (
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">A</span>
                  </div>
                  <span className="font-semibold">App</span>
                </div>
              )}
              {collapsed && (
                <div className="flex justify-center">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">A</span>
                  </div>
                </div>
              )}
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className={collapsed ? 'justify-center' : ''}>
                      <Home className="h-4 w-4" />
                      {!collapsed && <span>Dashboard</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className={collapsed ? 'justify-center' : ''}>
                      <FolderOpen className="h-4 w-4" />
                      {!collapsed && <span>Projects</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className={collapsed ? 'justify-center' : ''}>
                      <FileText className="h-4 w-4" />
                      {!collapsed && <span>Documents</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <Button
                variant="ghost"
                size="icon-sm"
                className={collapsed ? 'w-full' : ''}
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronRight className="h-4 w-4 rotate-180" />}
              </Button>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Collapsible Sidebar</h2>
            <p className="text-muted-foreground">
              Click the arrow in the footer to collapse/expand the sidebar
            </p>
          </div>
        </div>
      </section>

      {/* User Profile Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className="w-72 h-[600px]">
            <SidebarHeader className="border-b bg-gradient-to-r from-primary/20 to-primary/5">
              <div className="flex flex-col items-center gap-3 py-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/avatar.jpg" alt="User" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                  <Badge variant="secondary" className="mt-2">Pro Member</Badge>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User className="h-4 w-4" />
                    Profile
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                      <Palette className="h-4 w-4" />
                      Appearance
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                      <Bell className="h-4 w-4" />
                      Notifications
                      <Badge className="ml-auto">3</Badge>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                      <Globe className="h-4 w-4" />
                      Language
                    </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Activity</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <TrendingUp className="h-4 w-4" />
                      Performance
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart3 className="h-4 w-4" />
                      Analytics
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Package className="h-4 w-4" />
                      Orders
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Preferences</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <HelpCircle className="h-4 w-4" />
                      Help & Support
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Share2 className="h-4 w-4" />
                      Refer a Friend
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-red-500">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <p className="text-muted-foreground">Sidebar with user information and profile actions</p>
          </div>
        </div>
      </section>

      {/* E-commerce Sidebar */}
      <section className="mb-12 border-b">
        <div className="flex">
          <Sidebar className="w-64 h-[600px]">
            <SidebarHeader className="border-b">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-semibold">Shop</span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-9" />
                </div>
              </div>

              <SidebarGroup>
                <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Electronics
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Clothing
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Home & Garden
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers className="h-4 w-4" />
                      Sports
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Price Range</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Under $25
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      $25 - $50
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      $50 - $100
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      $100+
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Rating</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="ml-2">4+ Stars</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="ml-2">3+ Stars</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="ml-2">2+ Stars</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarSeparator />

              <div className="p-4">
                <Button className="w-full" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </SidebarContent>

            <SidebarFooter className="border-t">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="text-sm">3 items</span>
                <Badge variant="secondary" className="ml-auto">$234</Badge>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">E-commerce Sidebar</h2>
            <p className="text-muted-foreground">Filter products by category, price, and rating</p>
          </div>
        </div>
      </section>

      {/* Social Media Sidebar */}
      <section className="mb-12">
        <div className="flex">
          <Sidebar className="w-72 h-[600px]">
            <SidebarHeader className="border-b bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <div className="flex flex-col items-center gap-3 py-6">
                <Avatar className="h-20 w-20 ring-4 ring-white">
                  <AvatarImage src="/avatar.jpg" alt="User" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-white/80">@janesmith</p>
                  <p className="text-xs text-white/60">1.2k followers</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90">
                    Follow
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                    Message
                  </Button>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileText className="h-4 w-4" />
                    Posts
                    <Badge variant="secondary" className="ml-auto">128</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Image className="h-4 w-4" />
                    Media
                    <Badge variant="secondary" className="ml-auto">456</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Heart className="h-4 w-4" />
                    Likes
                    <Badge variant="secondary" className="ml-auto">2.3k</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Bookmark className="h-4 w-4" />
                    Saved
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Suggestions</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src="/avatar1.jpg" alt="" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium">Alice Brown</p>
                        <p className="text-xs text-muted-foreground">@alice</p>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src="/avatar2.jpg" alt="" />
                        <AvatarFallback>CD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium">Charlie Davis</p>
                        <p className="text-xs text-muted-foreground">@charlie</p>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div className="flex-1 p-6 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Social Profile</h2>
            <p className="text-muted-foreground">User profile sidebar with posts, media, and connections</p>
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
  )
}
