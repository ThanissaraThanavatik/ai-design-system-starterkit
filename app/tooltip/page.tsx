"use client"

import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  X,
  Plus,
  Trash2,
  Edit2,
  Copy,
  Download,
  Upload,
  Share2,
  Link2,
  Image,
  Video,
  FileText,
  Music,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  User,
  Users,
  Star,
  Heart,
  Bookmark,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  Volume2,
  Zap,
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  MoreVertical,
  RefreshCw,
  ExternalLink,
  Maximize2,
  Minimize2,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  SortAsc,
  SortDesc,
  Code,
  Terminal,
  File,
  Folder,
  Archive,
  Trash,
  Scissors,
  Eraser,
  Shield,
  Palette,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Heading1,
  Quote,
  Highlighter,
  Type,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react"

export default function TooltipPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tooltip</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A floating label that provides additional information.
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
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="default">Primary</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Primary action button</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Secondary</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Secondary action button</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get help</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View information</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <AlertCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Important notice</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Warning message</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <CheckCircle2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Success!</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Close or dismiss</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Position */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Position</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Position</CardTitle>
                <CardDescription>Tooltips can be positioned on any side</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="space-y-2 text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">Top</Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Tooltip appears on top</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="space-y-2 text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">Right</Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Tooltip appears on right</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="space-y-2 text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">Bottom</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Tooltip appears on bottom</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="space-y-2 text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">Left</Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Tooltip appears on left</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Action Tooltips */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Action Tooltips</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Type something..." className="flex-1" />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Search className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Search</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Filter results</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-10 rounded-lg bg-muted animate-pulse" />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Refresh</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>More options</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Field Tooltips */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Form Field Tooltips</h2>
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>Form with helpful tooltips for each field</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="username" className="text-sm font-medium">Username</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Choose a unique username for your account</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>We'll send a verification link to this email</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Minimum 8 characters, including uppercase and numbers</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Status Indicators */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Status Indicators</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-6">
                  <div className="text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center cursor-help">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Online and available</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-sm mt-2">Online</p>
                  </div>
                  <div className="text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center cursor-help">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Last seen 5 minutes ago</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-sm mt-2">Away</p>
                  </div>
                  <div className="text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center cursor-help">
                          <X className="h-5 w-5 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Offline - Not available</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-sm mt-2">Offline</p>
                  </div>
                  <div className="text-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center cursor-help">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>In a meeting - Do not disturb</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-sm mt-2">Busy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Icon Button Actions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Icon Button Actions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Document.pdf</p>
                        <p className="text-sm text-muted-foreground">2.4 MB</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Preview</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Share</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Connection Status */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Connection Status</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <Wifi className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Wi-Fi</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Connected to Home-WiFi</p>
                      <p className="text-xs text-muted-foreground">Excellent signal</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <Bluetooth className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Bluetooth</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Connected to AirPods Pro</p>
                      <p className="text-xs text-muted-foreground">85% battery</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <BatteryCharging className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Battery</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Charging</p>
                      <p className="text-xs text-muted-foreground">72% - 45 min until full</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <Volume2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Sound</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Volume: 75%</p>
                      <p className="text-xs text-muted-foreground">Press to mute</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rich Text Editor Tools */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Rich Text Editor Tools</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-1 p-2 rounded-lg border bg-muted/50">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Bold className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Bold (Ctrl+B)</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Italic className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Italic (Ctrl+I)</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Underline className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Underline (Ctrl+U)</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Strikethrough className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Strikethrough</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Code className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Inline Code (Ctrl+E)</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Align Left</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <AlignCenter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Align Center</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <AlignRight className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Align Right</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <List className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Bullet List</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Numbered List</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <Quote className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Quote</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Insert Link (Ctrl+K)</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Insert Image</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* User Profile Card */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">User Profile Card</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">John Doe</h3>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="secondary" className="cursor-help">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This account is verified</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Send a message</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Share profile</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreVertical className="h-4 w-4 mr-2" />
                            More
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>More options</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* File Type Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">File Type Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">Document.pdf</p>
                          <p className="text-xs text-muted-foreground">2.4 MB</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Document.pdf</p>
                      <p className="text-xs text-muted-foreground">PDF • 2.4 MB</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <ImageIcon className="h-8 w-8 text-purple-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">Photo.jpg</p>
                          <p className="text-xs text-muted-foreground">5.1 MB</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Photo.jpg</p>
                      <p className="text-xs text-muted-foreground">JPEG • 5.1 MB</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <Video className="h-8 w-8 text-red-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">Clip.mp4</p>
                          <p className="text-xs text-muted-foreground">124 MB</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Clip.mp4</p>
                      <p className="text-xs text-muted-foreground">MP4 • 124 MB</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                        <Music className="h-8 w-8 text-green-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">Song.mp3</p>
                          <p className="text-xs text-muted-foreground">8.2 MB</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Song.mp3</p>
                      <p className="text-xs text-muted-foreground">MP3 • 8.2 MB</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Feature Highlights */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Feature Highlights</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-start gap-3 p-4 rounded-lg border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 cursor-help">
                          <Zap className="h-5 w-5 text-blue-500" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">Lightning Fast</p>
                        <p className="text-xs">Optimized for speed</p>
                      </TooltipContent>
                    </Tooltip>
                    <div>
                      <h4 className="font-medium">Instant Loading</h4>
                      <p className="text-sm text-muted-foreground">Pages load in milliseconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 cursor-help">
                          <Shield className="h-5 w-5 text-green-500" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">Secure</p>
                        <p className="text-xs">End-to-end encryption</p>
                      </TooltipContent>
                    </Tooltip>
                    <div>
                      <h4 className="font-medium">Bank-level Security</h4>
                      <p className="text-sm text-muted-foreground">Your data is always protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 cursor-help">
                          <Users className="h-5 w-5 text-purple-500" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">Collaborative</p>
                        <p className="text-xs">Work together in real-time</p>
                      </TooltipContent>
                    </Tooltip>
                    <div>
                      <h4 className="font-medium">Team Features</h4>
                      <p className="text-sm text-muted-foreground">Built for collaboration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
