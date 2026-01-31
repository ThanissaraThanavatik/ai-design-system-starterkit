"use client"

import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, RefreshCw, Upload, Download, Search, Settings, CheckCircle2, UploadCloud, FileText, Image, Video } from "lucide-react"

export default function SpinnerPage() {
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const simulateLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Spinner</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Loading spinners for indicating pending operations.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          <section>
            <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-sm text-muted-foreground">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" />
                    <span className="text-sm text-muted-foreground">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-sm text-muted-foreground">Large</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="xl" />
                    <span className="text-sm text-muted-foreground">Extra Large</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">With Text</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 max-w-md">
                  <div className="flex items-center gap-3">
                    <Spinner size="sm" />
                    <span className="text-sm">Loading...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner size="md" />
                    <span className="text-sm">Please wait...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner size="lg" />
                    <span className="text-base font-medium">Processing your request...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner size="xl" />
                    <span className="text-lg font-medium">Loading data...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg border">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Loader Icon</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg border">
                    <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Refresh Icon</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg border">
                    <Upload className="h-6 w-6 animate-bounce text-primary" />
                    <span className="text-sm text-muted-foreground">Upload Icon</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg border">
                    <Download className="h-6 w-6 animate-bounce text-primary" />
                    <span className="text-sm text-muted-foreground">Download Icon</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Button Loading States</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading
                  </Button>
                  <Button variant="secondary" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </Button>
                  <Button variant="outline" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </Button>
                  <Button variant="ghost" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </Button>
                  <Button size="sm" disabled>
                    <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                    Small
                  </Button>
                  <Button size="lg" disabled>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Large Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Interactive Demo</h2>
            <Card>
              <CardHeader>
                <CardTitle>Simulate Loading</CardTitle>
                <CardDescription>Click the button to see the spinner in action</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button onClick={simulateLoading} disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Start Loading"
                    )}
                  </Button>
                  {loading && <Spinner size="md" />}
                </div>
                {loading && (
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Processing your request...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Upload Progress</h2>
            <Card>
              <CardHeader>
                <CardTitle>File Upload</CardTitle>
                <CardDescription>Simulating file upload with progress indicator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={simulateUpload} disabled={uploadProgress > 0 && uploadProgress < 100}>
                  {uploadProgress > 0 && uploadProgress < 100 ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading {uploadProgress}%
                    </>
                  ) : uploadProgress === 100 ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Upload Complete
                    </>
                  ) : (
                    <>
                      <UploadCloud className="mr-2 h-4 w-4" />
                      Upload File
                    </>
                  )}
                </Button>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: uploadProgress + "%" }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Uploading... {uploadProgress}%</p>
                  </div>
                )}
                {uploadProgress === 100 && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm">File uploaded successfully!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Real-world Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                  <CardDescription>Search input with loading state</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-10 py-2 rounded-md border bg-background"
                      disabled
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Spinner size="sm" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Submit</CardTitle>
                  <CardDescription>Form submission with loading state</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 rounded-md border bg-background"
                      disabled
                    />
                  </div>
                  <Button disabled className="w-full">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Table</CardTitle>
                  <CardDescription>Table loading state</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <Spinner size="sm" />
                        <span className="text-sm">Loading data...</span>
                      </div>
                      <Badge variant="secondary">Loading</Badge>
                    </div>
                    <div className="h-32 rounded-lg border flex items-center justify-center">
                      <div className="text-center">
                        <Spinner size="lg" />
                        <p className="mt-2 text-sm text-muted-foreground">Fetching records...</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Settings page with loading state</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Dark Mode</span>
                    </div>
                    <Spinner size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Notifications</span>
                    </div>
                    <Spinner size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Language</span>
                    </div>
                    <Spinner size="sm" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>File Upload Queue</CardTitle>
                  <CardDescription>Multiple files uploading</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg border">
                    <FileText className="h-8 w-8 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">document.pdf</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Spinner size="sm" />
                        <span className="text-xs text-muted-foreground">Uploading...</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg border">
                    <Image className="h-8 w-8 text-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">photo.jpg</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Spinner size="sm" />
                        <span className="text-xs text-muted-foreground">Uploading...</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg border">
                    <Video className="h-8 w-8 text-red-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">video.mp4</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Spinner size="sm" />
                        <span className="text-xs text-muted-foreground">Waiting...</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Action Loading</CardTitle>
                  <CardDescription>Various actions with loading states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving Changes
                  </Button>
                  <Button variant="outline" className="w-full" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message
                  </Button>
                  <Button variant="outline" className="w-full" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deleting Item
                  </Button>
                </CardContent>
              </Card>

            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Full Page Loading</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="h-64 rounded-lg border flex items-center justify-center">
                  <div className="text-center">
                    <Spinner size="xl" />
                    <p className="mt-4 text-muted-foreground">Loading application...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Alternative Loading Styles</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                    </div>
                    <span className="text-sm text-muted-foreground">Dots</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-1">
                      <div className="h-8 w-2 rounded-full bg-primary animate-pulse [animation-delay:-0.6s]" />
                      <div className="h-8 w-2 rounded-full bg-primary animate-pulse [animation-delay:-0.4s]" />
                      <div className="h-8 w-2 rounded-full bg-primary animate-pulse [animation-delay:-0.2s]" />
                      <div className="h-8 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-sm text-muted-foreground">Bars</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-primary/20 border-2 border-primary animate-pulse" />
                      <div className="h-4 w-4 rounded-full bg-primary/20 border-2 border-primary animate-pulse [animation-delay:0.15s]" />
                      <div className="h-4 w-4 rounded-full bg-primary/20 border-2 border-primary animate-pulse [animation-delay:0.3s]" />
                    </div>
                    <span className="text-sm text-muted-foreground">Rings</span>
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
