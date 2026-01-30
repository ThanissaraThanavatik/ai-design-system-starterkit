'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  Copy,
  Scissors,
  Clipboard,
  Trash2,
  Share,
  Download,
  Edit,
  FolderPlus,
  FilePlus,
  RefreshCw,
  Star,
  Archive,
  Send,
  Mail,
  MessageSquare,
  Link,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  ChevronRight,
  Cloud,
  Github,
  Keyboard,
  User,
  CreditCard,
  Settings,
  Users,
  UserPlus,
  Plus,
  LifeBuoy,
  LogOut,
  Music,
  Image,
  Film,
  FileText,
  Code,
  MoreHorizontal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export default function ContextMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('name')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Context Menu</h1>
          <p className="text-lg text-muted-foreground">
            Displays a menu to the user — such as a set of actions or functions — triggered by right-click.
          </p>
        </div>

        {/* Basic Context Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Right-click on the area below to open the context menu.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                  <ContextMenuShortcut>⌘E</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* With Submenus */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Submenus</h2>
          <p className="text-muted-foreground mb-6">
            Context menu with nested submenus for hierarchical options.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <FilePlus className="mr-2 h-4 w-4" />
                  New File
                  <ContextMenuShortcut>⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <FolderPlus className="mr-2 h-4 w-4" />
                  New Folder
                  <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Link className="mr-2 h-4 w-4" />
                      Copy Link
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <MoreHorizontal className="mr-2 h-4 w-4" />
                        More
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <Cloud className="mr-2 h-4 w-4" />
                          Cloud
                        </ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Download className="mr-2 h-4 w-4" />
                    Export As
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      PDF
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Image className="mr-2 h-4 w-4" />
                      PNG
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Code className="mr-2 h-4 w-4" />
                      JSON
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  Add to Favorites
                </ContextMenuItem>
                <ContextMenuItem>
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* With Checkbox Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Checkbox Items</h2>
          <p className="text-muted-foreground mb-6">
            Toggle options using checkbox menu items.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Show Status Bar
                  <ContextMenuShortcut>⌘⇧S</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                >
                  Show Activity Bar
                  <ContextMenuShortcut>⌘⇧A</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Show Panel
                  <ContextMenuShortcut>⌘J</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={bookmarksChecked}
                  onCheckedChange={setBookmarksChecked}
                >
                  Show Bookmarks
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={urlsChecked}
                  onCheckedChange={setUrlsChecked}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
              </ContextMenuContent>
            </ContextMenu>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Status Bar: {showStatusBar ? 'Visible' : 'Hidden'}</p>
              <p>Activity Bar: {showActivityBar ? 'Visible' : 'Hidden'}</p>
              <p>Panel: {showPanel ? 'Visible' : 'Hidden'}</p>
            </div>
          </div>
        </section>

        {/* With Radio Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Radio Items</h2>
          <p className="text-muted-foreground mb-6">
            Single selection using radio menu items.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Mode</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
                  <ContextMenuRadioItem value="grid">
                    Grid View
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="list">
                    List View
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="compact">
                    Compact View
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
                <ContextMenuSeparator />
                <ContextMenuLabel>Sort By</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                  <ContextMenuRadioItem value="name">
                    Name
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="date">
                    Date Modified
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="size">
                    Size
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="type">
                    Type
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>View Mode: {viewMode}</p>
              <p>Sort By: {sortBy}</p>
            </div>
          </div>
        </section>

        {/* With Labels and Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Labels and Groups</h2>
          <p className="text-muted-foreground mb-6">
            Organize menu items with labels and visual grouping.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>My Account</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                  <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                  <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                  <ContextMenuShortcut>⌘,</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  Keyboard shortcuts
                  <ContextMenuShortcut>⌘K</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Team</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Team
                </ContextMenuItem>
                <ContextMenuItem>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Invite users
                </ContextMenuItem>
                <ContextMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  New Team
                  <ContextMenuShortcut>⌘T</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </ContextMenuItem>
                <ContextMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Support
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  API (Coming Soon)
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                  <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* File Manager Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File Manager Example</h2>
          <p className="text-muted-foreground mb-6">
            A practical file manager context menu example.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Documents', icon: FileText, type: 'folder' },
                { name: 'Images', icon: Image, type: 'folder' },
                { name: 'Music', icon: Music, type: 'folder' },
                { name: 'Videos', icon: Film, type: 'folder' },
                { name: 'report.pdf', icon: FileText, type: 'file' },
                { name: 'photo.png', icon: Image, type: 'file' },
              ].map((item) => (
                <ContextMenu key={item.name}>
                  <ContextMenuTrigger>
                    <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                      <item.icon className="h-10 w-10 text-muted-foreground mb-2" />
                      <span className="text-sm truncate w-full text-center">{item.name}</span>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-56">
                    <ContextMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Open
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Rename
                      <ContextMenuShortcut>F2</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Scissors className="mr-2 h-4 w-4" />
                      Cut
                      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>
                          <Link className="mr-2 h-4 w-4" />
                          Copy Link
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <Send className="mr-2 h-4 w-4" />
                          Send to...
                        </ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <Download className="mr-2 h-4 w-4" />
                        Compress
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>.zip</ContextMenuItem>
                        <ContextMenuItem>.tar.gz</ContextMenuItem>
                        <ContextMenuItem>.7z</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      Add to Favorites
                    </ContextMenuItem>
                    {item.type === 'file' && (
                      <>
                        <ContextMenuItem>
                          <Lock className="mr-2 h-4 w-4" />
                          Lock File
                        </ContextMenuItem>
                      </>
                    )}
                    <ContextMenuSeparator />
                    <ContextMenuItem variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                      <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </div>
        </section>

        {/* With Disabled Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Disabled Items</h2>
          <p className="text-muted-foreground mb-6">
            Some menu items can be disabled based on context.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Paste (Clipboard Empty)
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <Unlock className="mr-2 h-4 w-4" />
                  Unlock (No Permission)
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem disabled>
                  <Share className="mr-2 h-4 w-4" />
                  Share (Offline)
                </ContextMenuItem>
                <ContextMenuItem variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* Inset Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Inset Items</h2>
          <p className="text-muted-foreground mb-6">
            Items with inset padding for alignment with icons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Edit Profile
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Account Settings
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Preferences
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Notifications
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Privacy
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
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
