"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Loader2,
  Download,
  Upload,
  Trash2,
  User,
  Mail,
  MessageSquare,
  Bell,
  ShoppingCart,
  CreditCard,
  Package,
  Star,
  Heart,
  Bookmark,
  Share2,
  Link as LinkIcon,
  Copy,
  RefreshCw,
  Send,
} from "lucide-react"

export default function SonnerPage() {
  // Basic examples
  const showSuccess = () => toast.success("Event created successfully!")
  const showError = () => toast.error("Event creation failed!")
  const showInfo = () => toast.info("New message received")
  const showWarning = () => toast.warning("Account is about to expire")

  // With action
  const showWithAction = () => {
    toast("Changes saved", {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  const showWithActions = () => {
    toast("File uploaded successfully", {
      action: {
        label: "View",
        onClick: () => console.log("View"),
      },
    })
  }

  // With promise
  const showPromise = () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve("Done!"), 2000))
    toast.promise(promise, {
      loading: "Loading...",
      success: "Done!",
      error: "Error!",
    })
  }

  const showUploadPromise = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "profile.jpg", size: "2.4 MB" })
      }, 2000)
    })
    toast.promise(promise, {
      loading: "Uploading file...",
      success: (data: any) => {
        return `${data.name} uploaded successfully`
      },
      error: "Upload failed",
    })
  }

  // Custom duration
  const showCustomDuration = () => {
    toast.success("This toast will close in 10 seconds", {
      duration: 10000,
    })
  }

  const showShortDuration = () => {
    toast.success("Quick notification", {
      duration: 1000,
    })
  }

  // With rich content
  const showRichContent = () => {
    toast(
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div className="flex-1">
          <p className="font-medium">New follower</p>
          <p className="text-sm text-muted-foreground">Jane Doe started following you</p>
        </div>
        <Button size="sm" variant="outline" className="h-8">
          Follow back
        </Button>
      </div>,
      {
        duration: 5000,
      }
    )
  }

  const showProductToast = () => {
    toast(
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <Package className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Product added to cart</p>
          <p className="text-sm text-muted-foreground">Wireless Headphones - $199</p>
          <div className="mt-2 flex gap-2">
            <Button size="sm" className="h-7">
              <ShoppingCart className="h-3 w-3 mr-1" />
              View Cart
            </Button>
            <Button size="sm" variant="outline" className="h-7">
              Checkout
            </Button>
          </div>
        </div>
      </div>,
      {
        duration: 6000,
      }
    )
  }

  // Form submission example
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const promise = new Promise((resolve) => setTimeout(() => resolve("Success!"), 2000))
    toast.promise(promise, {
      loading: "Submitting form...",
      success: "Form submitted successfully!",
      error: "Failed to submit form",
    })
  }

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://example.com")
    toast.success("Link copied to clipboard", {
      icon: <Copy className="h-4 w-4" />,
    })
  }

  // Subscription example
  const subscribeToNewsletter = () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve("Success!"), 1500))
    toast.promise(promise, {
      loading: <div className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Subscribing...</div>,
      success: "You're now subscribed to our newsletter!",
      error: "Failed to subscribe",
    })
  }

  // Delete confirmation
  const showDeleteConfirmation = () => {
    toast("Item deleted", {
      icon: <Trash2 className="h-4 w-4 text-red-500" />,
      action: {
        label: "Undo",
        onClick: () => toast.success("Item restored"),
      },
    })
  }

  // Multiple toasts
  const showMultiple = () => {
    toast.success("First notification")
    setTimeout(() => toast.info("Second notification"), 500)
    setTimeout(() => toast.warning("Third notification"), 1000)
  }

  // Rating toast
  const showRatingToast = () => {
    toast(
      <div className="flex flex-col gap-2">
        <p className="font-medium">Rate your experience</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => toast.success(`Thanks for rating us ${star} stars!`)}
              className="hover:scale-110 transition-transform"
            >
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Connection status
  const showConnectionStatus = () => {
    toast.success("Connected to server", {
      icon: <div className="h-2 w-2 rounded-full bg-green-500" />,
    })
  }

  // Message received
  const showMessageToast = () => {
    toast(
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-medium">New message from John</p>
          <p className="text-sm text-muted-foreground truncate max-w-[200px]">
            Hey! How are you doing today?
          </p>
        </div>
      </div>
    )
  }

  // Payment success
  const showPaymentSuccess = () => {
    toast(
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Payment successful!</p>
          <p className="text-sm text-muted-foreground">$299.00 charged to Visa ending in 4242</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          Paid
        </Badge>
      </div>,
      { duration: 5000 }
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sonner (Toast)</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Beautiful toast notifications with rich content and actions.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* Basic Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Examples</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showSuccess} variant="default">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Success
                  </Button>
                  <Button onClick={showError} variant="destructive">
                    <XCircle className="mr-2 h-4 w-4" />
                    Error
                  </Button>
                  <Button onClick={showInfo} variant="secondary">
                    <Info className="mr-2 h-4 w-4" />
                    Info
                  </Button>
                  <Button onClick={showWarning} className="bg-orange-500 hover:bg-orange-600">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Warning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Actions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Actions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showWithAction} variant="outline">
                    With Undo Action
                  </Button>
                  <Button onClick={showWithActions} variant="outline">
                    With View Action
                  </Button>
                  <Button onClick={showDeleteConfirmation} variant="outline">
                    Delete with Undo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Promise / Loading */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Promise / Loading State</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showPromise} variant="outline">
                    <Loader2 className="mr-2 h-4 w-4" />
                    Show Promise
                  </Button>
                  <Button onClick={showUploadPromise} variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Promise
                  </Button>
                  <Button onClick={handleFormSubmit} variant="outline">
                    <Send className="mr-2 h-4 w-4" />
                    Form Submit
                  </Button>
                  <Button onClick={subscribeToNewsletter} variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Custom Duration */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Custom Duration</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showCustomDuration} variant="outline">
                    10 Seconds
                  </Button>
                  <Button onClick={showShortDuration} variant="outline">
                    1 Second (Quick)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rich Content */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Rich Content</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showRichContent} variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    New Follower
                  </Button>
                  <Button onClick={showProductToast} variant="outline">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Added to Cart
                  </Button>
                  <Button onClick={showMessageToast} variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    New Message
                  </Button>
                  <Button onClick={showPaymentSuccess} variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Success
                  </Button>
                  <Button onClick={showRatingToast} variant="outline">
                    <Star className="mr-2 h-4 w-4" />
                    Rating Toast
                  </Button>
                  <Button onClick={showConnectionStatus} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Connection Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Real-world Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Real-world Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Copy Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Copy to Clipboard</CardTitle>
                  <CardDescription>Copy links or text with feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input value="https://example.com" readOnly />
                    <Button onClick={copyToClipboard} variant="outline">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>Subscribe to updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => { e.preventDefault(); subscribeToNewsletter() }} className="flex gap-2">
                    <Input type="email" placeholder="your@email.com" required />
                    <Button type="submit">
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Download File */}
              <Card>
                <CardHeader>
                  <CardTitle>File Download</CardTitle>
                  <CardDescription>Download files with progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      const promise = new Promise((resolve) => setTimeout(() => resolve("Downloaded!"), 2000))
                      toast.promise(promise, {
                        loading: "Downloading file...",
                        success: "File downloaded successfully!",
                        error: "Download failed",
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              {/* Share */}
              <Card>
                <CardHeader>
                  <CardTitle>Share Content</CardTitle>
                  <CardDescription>Share with friends</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      toast.success("Link shared successfully!", {
                        icon: <Share2 className="h-4 w-4" />,
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Link
                  </Button>
                </CardContent>
              </Card>

              {/* Bookmark */}
              <Card>
                <CardHeader>
                  <CardTitle>Save to Bookmarks</CardTitle>
                  <CardDescription>Quick save functionality</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      toast.success("Added to bookmarks!", {
                        icon: <Bookmark className="h-4 w-4" />,
                        action: {
                          label: "View",
                          onClick: () => {},
                        },
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Bookmark
                  </Button>
                </CardContent>
              </Card>

              {/* Like */}
              <Card>
                <CardHeader>
                  <CardTitle>Like Content</CardTitle>
                  <CardDescription>Quick like feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => {
                      toast.success("Added to favorites!", {
                        icon: <Heart className="h-4 w-4 fill-red-500 text-red-500" />,
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Favorites
                  </Button>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Multiple Notifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Multiple Notifications</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={showMultiple} variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Show Multiple
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Interactive Form Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Submit with toast feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" placeholder="Your message" required />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Form
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
