"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
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
  Undo,
  Redo,
  Link2,
  Image,
  Video,
  Search,
  Map,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Wifi,
  WifiOff,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Lock,
  Pin,
  Star,
  Heart,
  Bookmark,
  Check,
  SortAsc,
  SortDesc,
  Grid3x3,
  List as ListIcon,
  MoreHorizontal,
  MoreVertical,
  Columns,
  Rows,
  Table,
  ArrowUpDown,
  Zap,
  RefreshCw,
  Shuffle,
  Repeat,
  Play,
  SkipBack,
  SkipForward,
  Type,
  User,
  Briefcase,
} from "lucide-react"

export default function TogglePage() {
  const [bold, setBold] = React.useState(false)
  const [italic, setItalic] = React.useState(false)
  const [underline, setUnderline] = React.useState(false)
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [filters, setFilters] = React.useState({
    urgent: false,
    important: false,
    personal: false,
    work: false,
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Toggle</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A button that can be toggled on or off.
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
                  <Toggle aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                  <Toggle aria-label="Toggle strike">
                    <Strikethrough className="h-4 w-4" />
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Text */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Text</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Toggle aria-label="Toggle bold">
                    <Bold className="h-4 w-4 mr-2" />
                    Bold
                  </Toggle>
                  <Toggle aria-label="Toggle italic">
                    <Italic className="h-4 w-4 mr-2" />
                    Italic
                  </Toggle>
                  <Toggle aria-label="Toggle underline">
                    <Underline className="h-4 w-4 mr-2" />
                    Underline
                  </Toggle>
                  <Toggle aria-label="Toggle code">
                    <Code2 className="h-4 w-4 mr-2" />
                    Code
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Outline Variant */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Outline Variant</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Toggle variant="outline" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle variant="outline" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle variant="outline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                  <Toggle variant="outline" aria-label="Toggle strike">
                    <Strikethrough className="h-4 w-4" />
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Toggle size="sm" aria-label="Toggle small">
                    <Bold className="h-3 w-3" />
                  </Toggle>
                  <Toggle size="default" aria-label="Toggle default">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle size="lg" aria-label="Toggle large">
                    <Bold className="h-5 w-5" />
                  </Toggle>
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
                <CardDescription>Format your text with the toolbar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-1 p-2 rounded-lg border bg-muted/50">
                    <Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle strike">
                      <Strikethrough className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle code">
                      <Code2 className="h-4 w-4" />
                    </Toggle>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Toggle aria-label="Toggle heading 1">
                      <Heading1 className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle heading 2">
                      <Heading2 className="h-4 w-4" />
                    </Toggle>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Toggle aria-label="Toggle align left">
                      <AlignLeft className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle align center">
                      <AlignCenter className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle align right">
                      <AlignRight className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle align justify">
                      <AlignJustify className="h-4 w-4" />
                    </Toggle>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Toggle aria-label="Toggle bullet list">
                      <List className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle numbered list">
                      <ListOrdered className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle quote">
                      <Quote className="h-4 w-4" />
                    </Toggle>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Toggle aria-label="Toggle highlight">
                      <Type className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle link">
                      <Link2 className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle image">
                      <Image className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle video">
                      <Video className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <div className="p-4 rounded-lg border min-h-32">
                    <p className="text-muted-foreground">
                      Start typing here...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* State Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">State Toggles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 max-w-md">
                  <div className="flex items-center justify-between">
                    <Label>Dark Mode</Label>
                    <div className="flex gap-2">
                      <Toggle aria-label="Light mode">
                        <Sun className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Dark mode">
                        <Moon className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Notifications</Label>
                    <div className="flex gap-2">
                      <Toggle pressed aria-label="Notifications on">
                        <Bell className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Notifications off">
                        <BellOff className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Sound</Label>
                    <div className="flex gap-2">
                      <Toggle pressed aria-label="Sound on">
                        <Volume2 className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Sound off">
                        <VolumeX className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Visibility</Label>
                    <div className="flex gap-2">
                      <Toggle pressed aria-label="Show">
                        <Eye className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Hide">
                        <EyeOff className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Microphone</Label>
                    <div className="flex gap-2">
                      <Toggle pressed aria-label="Mic on">
                        <Mic className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Mic off">
                        <MicOff className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Camera</Label>
                    <div className="flex gap-2">
                      <Toggle pressed aria-label="Camera on">
                        <Camera className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Camera off">
                        <CameraOff className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Connection Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Connection Toggles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Toggle pressed aria-label="Wi-Fi">
                        <Wifi className="h-4 w-4" />
                      </Toggle>
                      <span>Wi-Fi</span>
                    </div>
                    <Badge variant="default">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Toggle aria-label="Wi-Fi off">
                        <WifiOff className="h-4 w-4" />
                      </Toggle>
                      <span>Bluetooth</span>
                    </div>
                    <Badge variant="secondary">Off</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Toggle pressed aria-label="Location">
                        <Map className="h-4 w-4" />
                      </Toggle>
                      <span>Location</span>
                    </div>
                    <Badge variant="default">On</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Toggle pressed aria-label="VPN">
                        <Lock className="h-4 w-4" />
                      </Toggle>
                      <span>VPN</span>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Bookmark and Favorite Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Bookmark and Favorite Toggles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">Article Title</p>
                      <p className="text-sm text-muted-foreground">Save this article for later</p>
                    </div>
                    <Toggle aria-label="Bookmark">
                      <Bookmark className="h-5 w-5" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">Product Name</p>
                      <p className="text-sm text-muted-foreground">Add to your favorites</p>
                    </div>
                    <Toggle pressed aria-label="Favorite">
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">Tutorial</p>
                      <p className="text-sm text-muted-foreground">Mark as completed</p>
                    </div>
                    <Toggle pressed aria-label="Completed">
                      <Check className="h-5 w-5" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">Important Note</p>
                      <p className="text-sm text-muted-foreground">Pin to top</p>
                    </div>
                    <Toggle pressed aria-label="Pin">
                      <Pin className="h-5 w-5" />
                    </Toggle>
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
                  <div className="flex items-center justify-between">
                    <Label>View Mode</Label>
                    <div className="flex gap-1 p-1 rounded-lg border bg-muted">
                      <Toggle
                        pressed={viewMode === "grid"}
                        onPressedChange={() => setViewMode("grid")}
                        aria-label="Grid view"
                      >
                        <Grid3x3 className="h-4 w-4" />
                      </Toggle>
                      <Toggle
                        pressed={viewMode === "list"}
                        onPressedChange={() => setViewMode("list")}
                        aria-label="List view"
                      >
                        <ListIcon className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border min-h-32">
                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square rounded bg-muted" />
                        <div className="aspect-square rounded bg-muted" />
                        <div className="aspect-square rounded bg-muted" />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="h-8 rounded bg-muted" />
                        <div className="h-8 rounded bg-muted" />
                        <div className="h-8 rounded bg-muted" />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Filter and Sort Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Filter and Sort Toggles</h2>
            <Card>
              <CardHeader>
                <CardTitle>Task Filters</CardTitle>
                <CardDescription>Filter and sort your tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2">Filter by</Label>
                    <div className="flex flex-wrap gap-2">
                      <Toggle
                        pressed={filters.urgent}
                        onPressedChange={() => setFilters({ ...filters, urgent: !filters.urgent })}
                        aria-label="Filter urgent"
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Urgent
                      </Toggle>
                      <Toggle
                        pressed={filters.important}
                        onPressedChange={() => setFilters({ ...filters, important: !filters.important })}
                        aria-label="Filter important"
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Important
                      </Toggle>
                      <Toggle
                        pressed={filters.personal}
                        onPressedChange={() => setFilters({ ...filters, personal: !filters.personal })}
                        aria-label="Filter personal"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Personal
                      </Toggle>
                      <Toggle
                        pressed={filters.work}
                        onPressedChange={() => setFilters({ ...filters, work: !filters.work })}
                        aria-label="Filter work"
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        Work
                      </Toggle>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-2">Sort by</Label>
                    <div className="flex gap-2">
                      <Toggle aria-label="Sort ascending">
                        <SortAsc className="h-4 w-4 mr-2" />
                        Ascending
                      </Toggle>
                      <Toggle aria-label="Sort descending">
                        <SortDesc className="h-4 w-4 mr-2" />
                        Descending
                      </Toggle>
                      <Toggle aria-label="Custom sort">
                        <ArrowUpDown className="h-4 w-4 mr-2" />
                        Custom
                      </Toggle>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Media Controls */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Media Controls</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 max-w-md">
                  <div>
                    <Label className="mb-2">Playback Controls</Label>
                    <div className="flex items-center justify-center gap-2">
                      <Toggle pressed aria-label="Shuffle">
                        <Shuffle className="h-4 w-4" />
                      </Toggle>
                      <Toggle pressed aria-label="Repeat">
                        <Repeat className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Previous">
                        <SkipBack className="h-4 w-4" />
                      </Toggle>
                      <Toggle size="lg" pressed aria-label="Play">
                        <Play className="h-5 w-5 fill-current" />
                      </Toggle>
                      <Toggle aria-label="Next">
                        <SkipForward className="h-4 w-4" />
                      </Toggle>
                      <Toggle aria-label="Refresh">
                        <RefreshCw className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-2">More Options</Label>
                    <div className="flex items-center justify-center gap-2">
                      <Toggle variant="outline" aria-label="More horizontal">
                        <MoreHorizontal className="h-4 w-4" />
                      </Toggle>
                      <Toggle variant="outline" aria-label="More vertical">
                        <MoreVertical className="h-4 w-4" />
                      </Toggle>
                      <Toggle variant="outline" aria-label="Search">
                        <Search className="h-4 w-4" />
                      </Toggle>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* History Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">History Toggles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  <Toggle aria-label="Undo">
                    <Undo className="h-4 w-4 mr-2" />
                    Undo
                  </Toggle>
                  <Toggle aria-label="Redo">
                    <Redo className="h-4 w-4 mr-2" />
                    Redo
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Layout Toggles */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Layout Toggles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Label>Table Layout</Label>
                  <div className="flex flex-wrap gap-2">
                    <Toggle aria-label="Columns">
                      <Columns className="h-4 w-4 mr-2" />
                      Columns
                    </Toggle>
                    <Toggle aria-label="Rows">
                      <Rows className="h-4 w-4 mr-2" />
                      Rows
                    </Toggle>
                    <Toggle aria-label="Table">
                      <Table className="h-4 w-4 mr-2" />
                      Table
                    </Toggle>
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
