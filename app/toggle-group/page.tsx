"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Link2,
  Image,
  Highlighter,
  Type,
  Minus,
  Plus,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Laptop,
  Tv,
  Smartphone,
  Tablet,
  Monitor,
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Currency,
  Hash,
  Calendar,
  Clock,
  MapPin,
  Tag,
  User,
  Users,
  Building2,
  Globe,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Bell,
  BellOff,
  Mic,
  MicOff,
  Video,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Heart,
  Star,
  Bookmark,
  Share2,
  Copy,
  Scissors,
  Eraser,
  Palette,
  FileText,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ArrowUpDown,
  Check,
  X,
  CornerDownLeft,
  CornerDownRight,
  WrapText,
  Heading,
  Subscript,
  Superscript,
  Code,
} from "lucide-react"

export default function ToggleGroupPage() {
  const [textAlign, setTextAlign] = React.useState("left")
  const [fontSize, setFontSize] = React.useState("medium")
  const [device, setDevice] = React.useState("all")
  const [currency, setCurrency] = React.useState("usd")
  const [view, setView] = React.useState("day")
  const [status, setStatus] = React.useState("all")

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Toggle Group</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A set of two-state toggle buttons that can be grouped together.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* Basic Example - Single Selection */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Example</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label>Text Alignment</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select text alignment (single selection)
                    </p>
                    <ToggleGroup type="single" value={textAlign} onValueChange={setTextAlign}>
                      <ToggleGroupItem value="left" aria-label="Align left">
                        <AlignLeft className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="center" aria-label="Align center">
                        <AlignCenter className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="right" aria-label="Align right">
                        <AlignRight className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="justify" aria-label="Align justify">
                        <AlignJustify className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <p style={{ textAlign: textAlign as any }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Multiple Selection */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Multiple Selection</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Text Formatting</Label>
                  <p className="text-sm text-muted-foreground">
                    Select multiple formatting options
                  </p>
                  <ToggleGroup type="multiple" defaultValue={["bold"]} className="flex-wrap">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                      <Strikethrough className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="code" aria-label="Toggle code">
                      <Code2 className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Outline Variant */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Outline Variant</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Font Size</Label>
                  <ToggleGroup type="single" value={fontSize} onValueChange={setFontSize} variant="outline">
                    <ToggleGroupItem value="small" aria-label="Small">
                      Small
                    </ToggleGroupItem>
                    <ToggleGroupItem value="medium" aria-label="Medium">
                      Medium
                    </ToggleGroupItem>
                    <ToggleGroupItem value="large" aria-label="Large">
                      Large
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label>Device Filter</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Filter by device type
                    </p>
                    <ToggleGroup type="single" value={device} onValueChange={setDevice}>
                      <ToggleGroupItem value="all" aria-label="All devices">
                        <Monitor className="h-4 w-4 mr-2" />
                        All
                      </ToggleGroupItem>
                      <ToggleGroupItem value="desktop" aria-label="Desktop">
                        <Laptop className="h-4 w-4 mr-2" />
                        Desktop
                      </ToggleGroupItem>
                      <ToggleGroupItem value="tablet" aria-label="Tablet">
                        <Tablet className="h-4 w-4 mr-2" />
                        Tablet
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mobile" aria-label="Mobile">
                        <Smartphone className="h-4 w-4 mr-2" />
                        Mobile
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div>
                    <Label>Currency</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select display currency
                    </p>
                    <ToggleGroup type="single" value={currency} onValueChange={setCurrency} variant="outline">
                      <ToggleGroupItem value="usd" aria-label="USD">
                        <DollarSign className="h-4 w-4 mr-2" />
                        USD
                      </ToggleGroupItem>
                      <ToggleGroupItem value="eur" aria-label="EUR">
                        <Euro className="h-4 w-4 mr-2" />
                        EUR
                      </ToggleGroupItem>
                      <ToggleGroupItem value="gbp" aria-label="GBP">
                        <PoundSterling className="h-4 w-4 mr-2" />
                        GBP
                      </ToggleGroupItem>
                      <ToggleGroupItem value="jpy" aria-label="JPY">
                        <Currency className="h-4 w-4 mr-2" />
                        JPY
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Text Formatting Toolbar */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Text Formatting Toolbar</h2>
            <Card>
              <CardHeader>
                <CardTitle>Rich Text Editor</CardTitle>
                <CardDescription>Complete formatting toolbar for text editing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Basic Formatting */}
                  <div>
                    <Label className="mb-2">Basic Formatting</Label>
                    <ToggleGroup type="multiple" className="flex-wrap">
                      <ToggleGroupItem value="bold" aria-label="Bold">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" aria-label="Italic">
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" aria-label="Underline">
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                        <Strikethrough className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="code" aria-label="Code">
                        <Code className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  {/* Headings */}
                  <div>
                    <Label className="mb-2">Headings</Label>
                    <ToggleGroup type="single" className="flex-wrap">
                      <ToggleGroupItem value="h1" aria-label="Heading 1">
                        <Heading1 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="h2" aria-label="Heading 2">
                        <Heading2 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="h3" aria-label="Heading 3">
                        <Heading className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  {/* Alignment */}
                  <div>
                    <Label className="mb-2">Alignment</Label>
                    <ToggleGroup type="single" className="flex-wrap">
                      <ToggleGroupItem value="left" aria-label="Align left">
                        <AlignLeft className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="center" aria-label="Align center">
                        <AlignCenter className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="right" aria-label="Align right">
                        <AlignRight className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="justify" aria-label="Align justify">
                        <AlignJustify className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  {/* Lists */}
                  <div>
                    <Label className="mb-2">Lists</Label>
                    <ToggleGroup type="single" className="flex-wrap">
                      <ToggleGroupItem value="bullet" aria-label="Bullet list">
                        <List className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="numbered" aria-label="Numbered list">
                        <ListOrdered className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  {/* Insert */}
                  <div>
                    <Label className="mb-2">Insert</Label>
                    <ToggleGroup type="multiple" className="flex-wrap">
                      <ToggleGroupItem value="link" aria-label="Insert link">
                        <Link2 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="image" aria-label="Insert image">
                        <ImageIcon className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="video" aria-label="Insert video">
                        <VideoIcon className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="table" aria-label="Insert table">
                        <FileText className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* View Toggle */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">View Toggle</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Timeline View</Label>
                  <ToggleGroup type="single" value={view} onValueChange={setView} variant="outline">
                    <ToggleGroupItem value="day" aria-label="Day view">
                      <Sun className="h-4 w-4 mr-2" />
                      Day
                    </ToggleGroupItem>
                    <ToggleGroupItem value="week" aria-label="Week view">
                      <Calendar className="h-4 w-4 mr-2" />
                      Week
                    </ToggleGroupItem>
                    <ToggleGroupItem value="month" aria-label="Month view">
                      <Calendar className="h-4 w-4 mr-2" />
                      Month
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <div className="p-4 rounded-lg border min-h-32">
                    <p className="text-center text-muted-foreground">
                      {view === "day" && "Day view selected"}
                      {view === "week" && "Week view selected"}
                      {view === "month" && "Month view selected"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Status Filter */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Status Filter</h2>
            <Card>
              <CardHeader>
                <CardTitle>Filter by Status</CardTitle>
                <CardDescription>Filter items by their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ToggleGroup type="single" value={status} onValueChange={setStatus}>
                    <ToggleGroupItem value="all" aria-label="All">
                      All
                    </ToggleGroupItem>
                    <ToggleGroupItem value="active" aria-label="Active">
                      <Check className="h-4 w-4 mr-2" />
                      Active
                    </ToggleGroupItem>
                    <ToggleGroupItem value="pending" aria-label="Pending">
                      <Clock className="h-4 w-4 mr-2" />
                      Pending
                    </ToggleGroupItem>
                    <ToggleGroupItem value="completed" aria-label="Completed">
                      <Check className="h-4 w-4 mr-2" />
                      Done
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <div className="p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Showing: {status} items</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tool Options */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Tool Options</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label>Drawing Tools</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select a drawing tool
                    </p>
                    <ToggleGroup type="single" defaultValue="select" variant="outline">
                      <ToggleGroupItem value="select" aria-label="Select">
                        <CornerDownLeft className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="draw" aria-label="Draw">
                        <Type className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="eraser" aria-label="Eraser">
                        <Eraser className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="highlighter" aria-label="Highlighter">
                        <Highlighter className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div>
                    <Label>Edit Actions</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Quick edit shortcuts
                    </p>
                    <ToggleGroup type="multiple" variant="outline">
                      <ToggleGroupItem value="cut" aria-label="Cut">
                        <Scissors className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="copy" aria-label="Copy">
                        <Copy className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="paste" aria-label="Paste">
                        <CornerDownRight className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="delete" aria-label="Delete">
                        <X className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sort and Filter */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Sort and Filter</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label>Sort Order</Label>
                    <ToggleGroup type="single" defaultValue="asc" variant="outline">
                      <ToggleGroupItem value="asc" aria-label="Ascending">
                        <SortAsc className="h-4 w-4 mr-2" />
                        Ascending
                      </ToggleGroupItem>
                      <ToggleGroupItem value="desc" aria-label="Descending">
                        <SortDesc className="h-4 w-4 mr-2" />
                        Descending
                      </ToggleGroupItem>
                      <ToggleGroupItem value="custom" aria-label="Custom">
                        <ArrowUpDown className="h-4 w-4 mr-2" />
                        Custom
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div>
                    <Label>Filter Type</Label>
                    <ToggleGroup type="multiple" defaultValue={["all"]} variant="outline">
                      <ToggleGroupItem value="all" aria-label="All">
                        All
                      </ToggleGroupItem>
                      <ToggleGroupItem value="active" aria-label="Active">
                        <Check className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="favorite" aria-label="Favorite">
                        <Star className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="archive" aria-label="Archive">
                        <Package className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Zoom Controls */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Zoom Controls</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Zoom Level</Label>
                  <ToggleGroup type="single" defaultValue="100" variant="outline">
                    <ToggleGroupItem value="50" aria-label="Zoom out 50%">
                      <ZoomOut className="h-4 w-4 mr-2" />
                      50%
                    </ToggleGroupItem>
                    <ToggleGroupItem value="75" aria-label="Zoom out 75%">
                      75%
                    </ToggleGroupItem>
                    <ToggleGroupItem value="100" aria-label="100%">
                      100%
                    </ToggleGroupItem>
                    <ToggleGroupItem value="125" aria-label="Zoom in 125%">
                      125%
                    </ToggleGroupItem>
                    <ToggleGroupItem value="150" aria-label="Zoom in 150%">
                      <ZoomIn className="h-4 w-4 mr-2" />
                      150%
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <div className="flex gap-2">
                    <ToggleGroup type="multiple" variant="outline">
                      <ToggleGroupItem value="fit" aria-label="Fit to screen">
                        <Maximize2 className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="rotate" aria-label="Rotate">
                        <RotateCw className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="fullscreen" aria-label="Fullscreen">
                        <Minimize2 className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Category Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Category Tabs</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Browse by Category</Label>
                  <ToggleGroup type="single" defaultValue="all" className="flex-wrap">
                    <ToggleGroupItem value="all" aria-label="All categories">
                      All
                    </ToggleGroupItem>
                    <ToggleGroupItem value="documents" aria-label="Documents">
                      <FileText className="h-4 w-4 mr-2" />
                      Docs
                    </ToggleGroupItem>
                    <ToggleGroupItem value="images" aria-label="Images">
                      <Image className="h-4 w-4 mr-2" />
                      Images
                    </ToggleGroupItem>
                    <ToggleGroupItem value="videos" aria-label="Videos">
                      <Video className="h-4 w-4 mr-2" />
                      Videos
                    </ToggleGroupItem>
                    <ToggleGroupItem value="music" aria-label="Music">
                      <Music className="h-4 w-4 mr-2" />
                      Music
                    </ToggleGroupItem>
                    <ToggleGroupItem value="packages" aria-label="Packages">
                      <Package className="h-4 w-4 mr-2" />
                      Packages
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Communication Options */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Communication Options</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label>Contact Method</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Choose how you want to be contacted
                    </p>
                    <ToggleGroup type="single" defaultValue="email" variant="outline">
                      <ToggleGroupItem value="email" aria-label="Email">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </ToggleGroupItem>
                      <ToggleGroupItem value="phone" aria-label="Phone">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone
                      </ToggleGroupItem>
                      <ToggleGroupItem value="chat" aria-label="Chat">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat
                      </ToggleGroupItem>
                      <ToggleGroupItem value="video" aria-label="Video">
                        <Video className="h-4 w-4 mr-2" />
                        Video
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div>
                    <Label>Quick Actions</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Available actions
                    </p>
                    <ToggleGroup type="multiple" variant="outline">
                      <ToggleGroupItem value="call" aria-label="Call">
                        <Phone className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="message" aria-label="Message">
                        <MessageSquare className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mail" aria-label="Mail">
                        <Mail className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="favorite" aria-label="Favorite">
                        <Heart className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="bookmark" aria-label="Bookmark">
                        <Bookmark className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="share" aria-label="Share">
                        <Share2 className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Privacy Settings */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label>Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Who can see your profile
                    </p>
                    <ToggleGroup type="single" defaultValue="public" variant="outline">
                      <ToggleGroupItem value="public" aria-label="Public">
                        <Globe className="h-4 w-4 mr-2" />
                        Public
                      </ToggleGroupItem>
                      <ToggleGroupItem value="friends" aria-label="Friends">
                        <Users className="h-4 w-4 mr-2" />
                        Friends
                      </ToggleGroupItem>
                      <ToggleGroupItem value="private" aria-label="Private">
                        <Lock className="h-4 w-4 mr-2" />
                        Private
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div>
                    <Label>Activity Status</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Show when you're active
                    </p>
                    <ToggleGroup type="single" defaultValue="visible" variant="outline">
                      <ToggleGroupItem value="visible" aria-label="Visible">
                        <Eye className="h-4 w-4 mr-2" />
                        Visible
                      </ToggleGroupItem>
                      <ToggleGroupItem value="hidden" aria-label="Hidden">
                        <EyeOff className="h-4 w-4 mr-2" />
                        Hidden
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quick Settings */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Quick Settings</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Label className="w-32">Notifications</Label>
                    <ToggleGroup type="single" defaultValue="on">
                      <ToggleGroupItem value="on" aria-label="On">
                        <Bell className="h-4 w-4 mr-2" />
                        On
                      </ToggleGroupItem>
                      <ToggleGroupItem value="off" aria-label="Off">
                        <BellOff className="h-4 w-4 mr-2" />
                        Off
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="w-32">Sound</Label>
                    <ToggleGroup type="single" defaultValue="on">
                      <ToggleGroupItem value="on" aria-label="On">
                        <Volume2 className="h-4 w-4 mr-2" />
                        On
                      </ToggleGroupItem>
                      <ToggleGroupItem value="off" aria-label="Off">
                        <VolumeX className="h-4 w-4 mr-2" />
                        Off
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="w-32">Microphone</Label>
                    <ToggleGroup type="single" defaultValue="off">
                      <ToggleGroupItem value="on" aria-label="On">
                        <Mic className="h-4 w-4 mr-2" />
                        On
                      </ToggleGroupItem>
                      <ToggleGroupItem value="off" aria-label="Off">
                        <MicOff className="h-4 w-4 mr-2" />
                        Off
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="w-32">Location</Label>
                    <ToggleGroup type="single" defaultValue="off">
                      <ToggleGroupItem value="on" aria-label="On">
                        <MapPin className="h-4 w-4 mr-2" />
                        On
                      </ToggleGroupItem>
                      <ToggleGroupItem value="off" aria-label="Off">
                        <Unlock className="h-4 w-4 mr-2" />
                        Off
                      </ToggleGroupItem>
                    </ToggleGroup>
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
