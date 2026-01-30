'use client'

import * as React from 'react'
import {
  CalendarDays,
  MapPin,
  Link as LinkIcon,
  Mail,
  Phone,
  Building,
  Users,
  Star,
  GitFork,
  Eye,
  ExternalLink,
  Clock,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  CheckCircle2,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export default function HoverCardPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Hover Card</h1>
          <p className="text-lg text-muted-foreground">
            For sighted users to preview content available behind a link.
          </p>
        </div>

        {/* Basic Hover Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic hover card with simple content.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">@nextjs</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* User Profile Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Profile Preview</h2>
          <p className="text-muted-foreground mb-6">
            Hover over usernames to see profile previews.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-sm">
              This project was created by{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto py-0">@johndoe</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">John Doe</h4>
                        <p className="text-sm text-muted-foreground">@johndoe</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">Pro</Badge>
                          <Badge variant="outline" className="text-xs">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Verified
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm">
                      Full-stack developer passionate about building great user experiences. Open source enthusiast.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Bangkok, Thailand
                      </div>
                      <div className="flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" />
                        johndoe.dev
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="font-semibold">1,234</span>
                        <span className="text-muted-foreground ml-1">followers</span>
                      </div>
                      <div>
                        <span className="font-semibold">567</span>
                        <span className="text-muted-foreground ml-1">following</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Follow</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {' '}and maintained by{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto py-0">@janesmith</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Jane Smith</h4>
                        <p className="text-sm text-muted-foreground">@janesmith</p>
                        <Badge variant="secondary" className="text-xs">Core Team</Badge>
                      </div>
                    </div>
                    <p className="text-sm">
                      UI/UX Designer & Frontend Developer. Creating beautiful interfaces.
                    </p>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="font-semibold">2,456</span>
                        <span className="text-muted-foreground ml-1">followers</span>
                      </div>
                      <div>
                        <span className="font-semibold">189</span>
                        <span className="text-muted-foreground ml-1">following</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Follow</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              .
            </p>
          </div>
        </section>

        {/* Repository Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Repository Preview</h2>
          <p className="text-muted-foreground mb-6">
            GitHub-style repository hover cards.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 gap-1">
                    <Github className="h-4 w-4" />
                    shadcn/ui
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">shadcn/ui</h4>
                        <p className="text-xs text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>52.3k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        <span>2.8k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>412</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                      <Badge variant="outline" className="text-xs">MIT</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 gap-1">
                    <Github className="h-4 w-4" />
                    vercel/next.js
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>NX</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">vercel/next.js</h4>
                        <p className="text-xs text-muted-foreground">
                          The React Framework for the Web
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>118k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        <span>25.4k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>2.3k</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                      <Badge variant="outline" className="text-xs">MIT</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Link Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Link Preview</h2>
          <p className="text-muted-foreground mb-6">
            Preview links before clicking.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-sm">
              Check out our{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="#" className="text-primary underline underline-offset-4 inline-flex items-center gap-1">
                    documentation
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <div className="h-32 rounded-md bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <h4 className="text-sm font-semibold">Documentation</h4>
                    <p className="text-xs text-muted-foreground">
                      Comprehensive guides and API references to help you build with our platform.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <LinkIcon className="h-3 w-3" />
                      docs.example.com
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {' '}for more information.
            </p>
          </div>
        </section>

        {/* Product Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Product Preview</h2>
          <p className="text-muted-foreground mb-6">
            E-commerce product hover previews.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-wrap gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Wireless Headphones</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                      <span className="text-6xl">🎧</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold">Wireless Headphones Pro</h4>
                        <Badge>New</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Premium noise-cancelling wireless headphones with 30-hour battery life.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className={`h-3 w-3 ${i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">(128 reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">$299.99</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">$349.99</span>
                      </div>
                      <Badge variant="destructive" className="text-xs">-14%</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Smart Watch</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                      <span className="text-6xl">⌚</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold">Smart Watch Series X</h4>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Advanced health tracking with GPS, heart rate monitor, and 7-day battery.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className={`h-3 w-3 ${i <= 5 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">(256 reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$399.99</span>
                      <Badge variant="outline" className="text-xs text-green-600">In Stock</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Company/Organization Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Organization Preview</h2>
          <p className="text-muted-foreground mb-6">
            Company or organization information cards.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0 gap-2">
                  <Building className="h-4 w-4" />
                  Acme Corporation
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 rounded-md">
                      <AvatarFallback className="rounded-md bg-primary text-primary-foreground text-lg">AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">Acme Corporation</h4>
                      <p className="text-xs text-muted-foreground">Technology Company</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        <CheckCircle2 className="mr-1 h-3 w-3 text-blue-500" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm">
                    Building the future of technology. We create innovative solutions that empower businesses worldwide.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      1,000+ employees
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <LinkIcon className="h-4 w-4" />
                      acme.com
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" className="flex-1">Follow</Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Social Post Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Social Post Preview</h2>
          <p className="text-muted-foreground mb-6">
            Preview social media posts on hover.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-sm">
              Check out this{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="#" className="text-primary underline underline-offset-4">
                    trending post
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                        <AvatarFallback>TU</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">Tech Updates</h4>
                        <p className="text-xs text-muted-foreground">@techupdates · 2h</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      🚀 Just shipped a major update! New features include dark mode, better performance, and more customization options. Check it out!
                    </p>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-1 text-xs">
                        <MessageSquare className="h-4 w-4" />
                        <span>234</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Share2 className="h-4 w-4" />
                        <span>89</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Heart className="h-4 w-4" />
                        <span>1.2k</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Bookmark className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {' '}about the latest tech updates.
            </p>
          </div>
        </section>

        {/* Different Alignments */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Alignment Options</h2>
          <p className="text-muted-foreground mb-6">
            Hover cards can be aligned differently.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center gap-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Align Start</Button>
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <p className="text-sm">This card is aligned to the start.</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Align Center</Button>
                </HoverCardTrigger>
                <HoverCardContent align="center">
                  <p className="text-sm">This card is aligned to the center (default).</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Align End</Button>
                </HoverCardTrigger>
                <HoverCardContent align="end">
                  <p className="text-sm">This card is aligned to the end.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Contact Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Card</h2>
          <p className="text-muted-foreground mb-6">
            Quick contact information preview.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-sm">
              For inquiries, contact{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="px-0 h-auto py-0">support@example.com</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Contact Support</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        support@example.com
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        +1 (555) 123-4567
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        Mon-Fri, 9am-5pm EST
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href="#">
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="#">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1">Send Email</Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
          </div>
        </section>

        {/* Simple Text Hover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Simple Hover</h2>
          <p className="text-muted-foreground mb-6">
            Minimal hover cards for quick info.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <p className="text-sm">
              The term{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="border-b border-dashed border-muted-foreground cursor-help">
                    API
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <p className="text-sm">
                    <strong>Application Programming Interface</strong> - A set of rules that allows different software applications to communicate with each other.
                  </p>
                </HoverCardContent>
              </HoverCard>
              {' '}stands for Application Programming Interface. It's commonly used with{' '}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="border-b border-dashed border-muted-foreground cursor-help">
                    REST
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <p className="text-sm">
                    <strong>Representational State Transfer</strong> - An architectural style for designing networked applications using HTTP requests.
                  </p>
                </HoverCardContent>
              </HoverCard>
              {' '}architecture.
            </p>
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
