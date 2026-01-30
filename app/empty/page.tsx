'use client'

import * as React from 'react'
import {
  Inbox,
  Search,
  FileText,
  ShoppingCart,
  Users,
  FolderOpen,
  Image,
  Calendar,
  Bell,
  MessageSquare,
  Heart,
  Bookmark,
  Star,
  CloudOff,
  WifiOff,
  AlertCircle,
  CheckCircle2,
  Package,
  CreditCard,
  Settings,
  Plus,
  Upload,
  RefreshCw,
  Home,
  ArrowLeft,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
  secondaryAction?: React.ReactNode
  className?: string
}

function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      {(action || secondaryAction) && (
        <div className="flex flex-col sm:flex-row gap-2">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  )
}

export default function EmptyPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Empty State</h1>
          <p className="text-lg text-muted-foreground">
            Empty states inform users that there is no content to display and guide them on what to do next.
          </p>
        </div>

        {/* Basic Empty State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic empty state with icon, title, and description.
          </p>
          <div className="border rounded-lg bg-card">
            <EmptyState
              icon={<Inbox className="h-10 w-10 text-muted-foreground" />}
              title="No messages"
              description="You don't have any messages yet. When you receive messages, they will appear here."
              action={<Button>Compose Message</Button>}
            />
          </div>
        </section>

        {/* No Search Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">No Search Results</h2>
          <p className="text-muted-foreground mb-6">
            When a search query returns no results.
          </p>
          <div className="border rounded-lg bg-card">
            <EmptyState
              icon={<Search className="h-10 w-10 text-muted-foreground" />}
              title="No results found"
              description="We couldn't find anything matching your search. Try different keywords or remove filters."
              action={<Button variant="outline">Clear Search</Button>}
            />
          </div>
        </section>

        {/* Empty Cart */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Empty Cart</h2>
          <p className="text-muted-foreground mb-6">
            E-commerce empty shopping cart state.
          </p>
          <div className="border rounded-lg bg-card">
            <EmptyState
              icon={<ShoppingCart className="h-10 w-10 text-muted-foreground" />}
              title="Your cart is empty"
              description="Looks like you haven't added any items to your cart yet. Start shopping to fill it up!"
              action={<Button>Start Shopping</Button>}
              secondaryAction={<Button variant="outline">View Wishlist</Button>}
            />
          </div>
        </section>

        {/* No Files */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">No Files</h2>
          <p className="text-muted-foreground mb-6">
            Empty folder or file storage state.
          </p>
          <div className="border rounded-lg bg-card">
            <EmptyState
              icon={<FolderOpen className="h-10 w-10 text-muted-foreground" />}
              title="No files here"
              description="This folder is empty. Upload files or create new documents to get started."
              action={
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Files
                </Button>
              }
              secondaryAction={
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New
                </Button>
              }
            />
          </div>
        </section>

        {/* Grid of Empty States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Empty States</h2>
          <p className="text-muted-foreground mb-6">
            Various empty state patterns for different scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* No Team Members */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Users className="h-8 w-8 text-muted-foreground" />}
                  title="No team members"
                  description="Invite people to collaborate with you on this project."
                  action={<Button size="sm">Invite Members</Button>}
                />
              </CardContent>
            </Card>

            {/* No Images */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Image className="h-8 w-8 text-muted-foreground" />}
                  title="No images"
                  description="Upload images to create your gallery."
                  action={<Button size="sm">Upload Images</Button>}
                />
              </CardContent>
            </Card>

            {/* No Events */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Calendar className="h-8 w-8 text-muted-foreground" />}
                  title="No upcoming events"
                  description="You have no scheduled events for today."
                  action={<Button size="sm">Create Event</Button>}
                />
              </CardContent>
            </Card>

            {/* No Notifications */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Bell className="h-8 w-8 text-muted-foreground" />}
                  title="No notifications"
                  description="You're all caught up! Check back later."
                />
              </CardContent>
            </Card>

            {/* No Comments */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<MessageSquare className="h-8 w-8 text-muted-foreground" />}
                  title="No comments yet"
                  description="Be the first to share your thoughts."
                  action={<Button size="sm">Add Comment</Button>}
                />
              </CardContent>
            </Card>

            {/* No Favorites */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Heart className="h-8 w-8 text-muted-foreground" />}
                  title="No favorites"
                  description="Items you favorite will appear here."
                />
              </CardContent>
            </Card>

            {/* No Bookmarks */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Bookmark className="h-8 w-8 text-muted-foreground" />}
                  title="No bookmarks"
                  description="Save articles for later reading."
                  action={<Button size="sm">Browse Articles</Button>}
                />
              </CardContent>
            </Card>

            {/* No Reviews */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Star className="h-8 w-8 text-muted-foreground" />}
                  title="No reviews yet"
                  description="Be the first to leave a review."
                  action={<Button size="sm">Write Review</Button>}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Error States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Error States</h2>
          <p className="text-muted-foreground mb-6">
            Empty states for error conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Offline */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<WifiOff className="h-8 w-8 text-muted-foreground" />}
                  title="You're offline"
                  description="Please check your internet connection and try again."
                  action={
                    <Button size="sm" variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retry
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            {/* Server Error */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<CloudOff className="h-8 w-8 text-muted-foreground" />}
                  title="Unable to load"
                  description="Something went wrong on our end. Please try again later."
                  action={
                    <Button size="sm" variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try Again
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            {/* 404 Not Found */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<AlertCircle className="h-8 w-8 text-muted-foreground" />}
                  title="Page not found"
                  description="The page you're looking for doesn't exist or has been moved."
                  action={
                    <Button size="sm">
                      <Home className="mr-2 h-4 w-4" />
                      Go Home
                    </Button>
                  }
                  secondaryAction={
                    <Button size="sm" variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Go Back
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            {/* Access Denied */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<AlertCircle className="h-8 w-8 text-destructive" />}
                  title="Access denied"
                  description="You don't have permission to view this content."
                  action={<Button size="sm">Request Access</Button>}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success/Completion States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Completion States</h2>
          <p className="text-muted-foreground mb-6">
            Empty states indicating successful completion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* All Done */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<CheckCircle2 className="h-8 w-8 text-green-500" />}
                  title="All done!"
                  description="You've completed all your tasks. Time to celebrate!"
                  action={<Button size="sm" variant="outline">View History</Button>}
                />
              </CardContent>
            </Card>

            {/* Order Completed */}
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Package className="h-8 w-8 text-green-500" />}
                  title="Order placed!"
                  description="Your order has been confirmed and will be shipped soon."
                  action={<Button size="sm">Track Order</Button>}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Onboarding/First-time User */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Onboarding States</h2>
          <p className="text-muted-foreground mb-6">
            Empty states for first-time users or new features.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 mb-6">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Welcome to Documents</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                Create, edit, and collaborate on documents with your team. Get started by creating your first document or importing existing files.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg">
                  <Plus className="mr-2 h-5 w-5" />
                  Create Document
                </Button>
                <Button size="lg" variant="outline">
                  <Upload className="mr-2 h-5 w-5" />
                  Import Files
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Free forever
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Unlimited documents
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* With Illustration Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Custom Illustration</h2>
          <p className="text-muted-foreground mb-6">
            Empty state with a larger illustration area.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="flex flex-col items-center justify-center p-12 text-center">
              {/* Placeholder for custom illustration */}
              <div className="w-64 h-48 rounded-lg bg-muted flex items-center justify-center mb-6">
                <div className="text-muted-foreground text-sm">
                  [Custom Illustration]
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Projects help you organize your work. Create your first project to get started.
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
        </section>

        {/* Minimal Empty State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Minimal</h2>
          <p className="text-muted-foreground mb-6">
            Simple, minimal empty state for compact spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="py-8">
                <div className="text-center">
                  <Inbox className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No messages</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-8">
                <div className="text-center">
                  <FileText className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No documents</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-8">
                <div className="text-center">
                  <CreditCard className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No transactions</p>
                </div>
              </CardContent>
            </Card>
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
