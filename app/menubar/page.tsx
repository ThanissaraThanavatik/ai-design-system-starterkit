"use client"

import * as React from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  FilePlus,
  FolderOpen,
  Save,
  Printer,
  Share2,
  Undo,
  Redo,
  Scissors,
  Copy,
  Clipboard,
  Trash2,
  ZoomIn,
  ZoomOut,
  Maximize,
  PanelLeftClose,
  PanelRightClose,
  LayoutGrid,
  Code,
  Terminal,
  Bug,
  Play,
  Square,
  RotateCcw,
  Settings,
  Keyboard,
  HelpCircle,
  Info,
  Globe,
  Sun,
  Moon,
  Monitor,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
} from "lucide-react"

export default function MenubarShowcase() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(true)
  const [showPanel, setShowPanel] = React.useState(false)
  const [theme, setTheme] = React.useState("system")
  const [fontSize, setFontSize] = React.useState("medium")
  const [textAlign, setTextAlign] = React.useState("left")

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Menubar</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A horizontal menu bar component typically used for application-level navigation.
            Features dropdown menus, submenus, keyboard shortcuts, checkbox items, and radio groups.
          </p>
        </div>

        {/* Default Menubar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Menubar</CardTitle>
            <CardDescription>A basic application menubar with common actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FilePlus className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save As...<MenubarShortcut>⇧⌘S</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Clipboard className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                    <MenubarShortcut>⌫</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ZoomIn className="mr-2 h-4 w-4" />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOut className="mr-2 h-4 w-4" />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Maximize className="mr-2 h-4 w-4" />
                    Full Screen
                    <MenubarShortcut>⌃⌘F</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Documentation
                  </MenubarItem>
                  <MenubarItem>
                    <Info className="mr-2 h-4 w-4" />
                    About
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Menubar with Checkbox Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Menubar with Checkbox Items</CardTitle>
            <CardDescription>Toggle options using checkbox menu items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Appearance</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                    <MenubarShortcut>⌘⇧S</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                  >
                    Activity Bar
                    <MenubarShortcut>⌘⇧A</MenubarShortcut>
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                    <MenubarShortcut>⌘J</MenubarShortcut>
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="text-sm text-muted-foreground p-4 border rounded-md bg-muted/30">
              <p>Current state:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Status Bar: {showStatusBar ? "Visible" : "Hidden"}</li>
                <li>Activity Bar: {showActivityBar ? "Visible" : "Hidden"}</li>
                <li>Panel: {showPanel ? "Visible" : "Hidden"}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Menubar with Radio Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Menubar with Radio Items</CardTitle>
            <CardDescription>Single selection using radio menu items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Theme</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                    <MenubarRadioItem value="light">
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      <Monitor className="mr-2 h-4 w-4" />
                      System
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarLabel>Font Size</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
                    <MenubarRadioItem value="small">Small</MenubarRadioItem>
                    <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="large">Large</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="text-sm text-muted-foreground p-4 border rounded-md bg-muted/30">
              <p>Selected options:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Theme: {theme}</li>
                <li>Font Size: {fontSize}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Menubar with Submenus */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Menubar with Submenus</CardTitle>
            <CardDescription>Nested menu structure with submenus</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FilePlus className="mr-2 h-4 w-4" />
                    New File
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileText className="mr-2 h-4 w-4" />
                      New From Template
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>React Component</MenubarItem>
                      <MenubarItem>TypeScript Module</MenubarItem>
                      <MenubarItem>CSS Stylesheet</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Browse Templates...</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <Globe className="mr-2 h-4 w-4" />
                        Share to Web
                      </MenubarItem>
                      <MenubarItem>Copy Link</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Export As</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>PDF</MenubarItem>
                          <MenubarItem>HTML</MenubarItem>
                          <MenubarItem>Markdown</MenubarItem>
                          <MenubarItem>Plain Text</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <LayoutGrid className="mr-2 h-4 w-4" />
                      Layout
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <PanelLeftClose className="mr-2 h-4 w-4" />
                        Left Sidebar
                      </MenubarItem>
                      <MenubarItem>
                        <PanelRightClose className="mr-2 h-4 w-4" />
                        Right Sidebar
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Split Horizontal</MenubarItem>
                      <MenubarItem>Split Vertical</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Code className="mr-2 h-4 w-4" />
                    Source Control
                  </MenubarItem>
                  <MenubarItem>
                    <Terminal className="mr-2 h-4 w-4" />
                    Terminal
                  </MenubarItem>
                  <MenubarItem>
                    <Bug className="mr-2 h-4 w-4" />
                    Debug Console
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* IDE-style Menubar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>IDE-style Menubar</CardTitle>
            <CardDescription>A comprehensive menubar like you'd find in an IDE</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar className="w-full justify-start">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FilePlus className="mr-2 h-4 w-4" />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Open Folder...
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>~/projects/my-app</MenubarItem>
                      <MenubarItem>~/projects/website</MenubarItem>
                      <MenubarItem>~/projects/api-server</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Clear Recent</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Save All<MenubarShortcut>⌥⌘S</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Close Editor<MenubarShortcut>⌘W</MenubarShortcut></MenubarItem>
                  <MenubarItem>Close Folder</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Clipboard className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find<MenubarShortcut>⌘F</MenubarShortcut></MenubarItem>
                  <MenubarItem>Replace<MenubarShortcut>⌥⌘F</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find in Files<MenubarShortcut>⇧⌘F</MenubarShortcut></MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Selection</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Select All<MenubarShortcut>⌘A</MenubarShortcut></MenubarItem>
                  <MenubarItem>Expand Selection<MenubarShortcut>⌃⇧⌘→</MenubarShortcut></MenubarItem>
                  <MenubarItem>Shrink Selection<MenubarShortcut>⌃⇧⌘←</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Copy Line Up<MenubarShortcut>⌥⇧↑</MenubarShortcut></MenubarItem>
                  <MenubarItem>Copy Line Down<MenubarShortcut>⌥⇧↓</MenubarShortcut></MenubarItem>
                  <MenubarItem>Move Line Up<MenubarShortcut>⌥↑</MenubarShortcut></MenubarItem>
                  <MenubarItem>Move Line Down<MenubarShortcut>⌥↓</MenubarShortcut></MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Command Palette<MenubarShortcut>⇧⌘P</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarCheckboxItem checked>Explorer</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Search</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Source Control</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Extensions</MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Terminal className="mr-2 h-4 w-4" />
                    Terminal
                    <MenubarShortcut>⌃`</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Run</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Play className="mr-2 h-4 w-4" />
                    Start Debugging
                    <MenubarShortcut>F5</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Run Without Debugging<MenubarShortcut>⌃F5</MenubarShortcut></MenubarItem>
                  <MenubarItem>
                    <Square className="mr-2 h-4 w-4" />
                    Stop Debugging
                    <MenubarShortcut>⇧F5</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Restart Debugging
                    <MenubarShortcut>⇧⌘F5</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <Bug className="mr-2 h-4 w-4" />
                      Debugging
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Toggle Breakpoint<MenubarShortcut>F9</MenubarShortcut></MenubarItem>
                      <MenubarItem>Step Over<MenubarShortcut>F10</MenubarShortcut></MenubarItem>
                      <MenubarItem>Step Into<MenubarShortcut>F11</MenubarShortcut></MenubarItem>
                      <MenubarItem>Step Out<MenubarShortcut>⇧F11</MenubarShortcut></MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Documentation
                  </MenubarItem>
                  <MenubarItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    Keyboard Shortcuts
                    <MenubarShortcut>⌘K ⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Check for Updates...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Info className="mr-2 h-4 w-4" />
                    About
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Text Editor Menubar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Text Editor Menubar</CardTitle>
            <CardDescription>Menubar for a rich text editor with formatting options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Bold className="mr-2 h-4 w-4" />
                    Bold
                    <MenubarShortcut>⌘B</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Italic className="mr-2 h-4 w-4" />
                    Italic
                    <MenubarShortcut>⌘I</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Underline className="mr-2 h-4 w-4" />
                    Underline
                    <MenubarShortcut>⌘U</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Heading</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Heading 1<MenubarShortcut>⌘⌥1</MenubarShortcut></MenubarItem>
                      <MenubarItem>Heading 2<MenubarShortcut>⌘⌥2</MenubarShortcut></MenubarItem>
                      <MenubarItem>Heading 3<MenubarShortcut>⌘⌥3</MenubarShortcut></MenubarItem>
                      <MenubarItem>Paragraph<MenubarShortcut>⌘⌥0</MenubarShortcut></MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Paragraph</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Text Alignment</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value={textAlign} onValueChange={setTextAlign}>
                    <MenubarRadioItem value="left">
                      <AlignLeft className="mr-2 h-4 w-4" />
                      Align Left
                    </MenubarRadioItem>
                    <MenubarRadioItem value="center">
                      <AlignCenter className="mr-2 h-4 w-4" />
                      Center
                    </MenubarRadioItem>
                    <MenubarRadioItem value="right">
                      <AlignRight className="mr-2 h-4 w-4" />
                      Align Right
                    </MenubarRadioItem>
                    <MenubarRadioItem value="justify">
                      <AlignJustify className="mr-2 h-4 w-4" />
                      Justify
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>
                    <List className="mr-2 h-4 w-4" />
                    Bullet List
                  </MenubarItem>
                  <MenubarItem>
                    <ListOrdered className="mr-2 h-4 w-4" />
                    Numbered List
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Insert</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Link<MenubarShortcut>⌘K</MenubarShortcut></MenubarItem>
                  <MenubarItem>Image</MenubarItem>
                  <MenubarItem>Table</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Horizontal Rule</MenubarItem>
                  <MenubarItem>Page Break</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Special Characters</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Em Dash —</MenubarItem>
                      <MenubarItem>En Dash –</MenubarItem>
                      <MenubarItem>Ellipsis …</MenubarItem>
                      <MenubarItem>Non-breaking Space</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="text-sm text-muted-foreground p-4 border rounded-md bg-muted/30">
              Text Alignment: {textAlign}
            </div>
          </CardContent>
        </Card>

        {/* Disabled Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disabled Menu Items</CardTitle>
            <CardDescription>Menu items can be disabled based on application state</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem disabled>
                    <Undo className="mr-2 h-4 w-4" />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    <Redo className="mr-2 h-4 w-4" />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Scissors className="mr-2 h-4 w-4" />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    <Clipboard className="mr-2 h-4 w-4" />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <p className="text-sm text-muted-foreground mt-4">
              Undo, Redo, and Paste are disabled (no history and clipboard is empty)
            </p>
          </CardContent>
        </Card>

        {/* Inset Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inset Menu Items</CardTitle>
            <CardDescription>Menu items with inset property for alignment</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Account</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel inset>Signed in as</MenubarLabel>
                  <MenubarItem inset>john@example.com</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </MenubarItem>
                  <MenubarItem inset>Profile</MenubarItem>
                  <MenubarItem inset>Billing</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive" inset>
                    Sign Out
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Group related actions together with separators</li>
                <li>Use keyboard shortcuts for frequently used actions</li>
                <li>Limit submenu nesting to 2-3 levels maximum</li>
                <li>Use icons sparingly and consistently</li>
                <li>Disable items when actions are not available</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Keyboard Navigation</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Use arrow keys to navigate between menu items</li>
                <li>Press Enter or Space to select an item</li>
                <li>Press Escape to close the menu</li>
                <li>Use left/right arrows to navigate submenus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Desktop applications with many actions</li>
                <li>IDEs and code editors</li>
                <li>Rich text editors and document processors</li>
                <li>Design tools and creative applications</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
