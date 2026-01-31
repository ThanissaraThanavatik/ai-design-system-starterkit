'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Upload,
  Download,
  CheckCircle2,
  XCircle,
  Loader2,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  FolderOpen,
  HardDrive,
  Wifi,
  Battery,
  Clock,
  Zap,
  TrendingUp,
  Target,
  Award,
  Flame,
} from 'lucide-react'

export default function ProgressShowcasePage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [processing, setProcessing] = useState(false)
  const [processProgress, setProcessProgress] = useState(0)
  const [fillingProgress, setFillingProgress] = useState(0)

  // Simulate upload
  useEffect(() => {
    if (uploadProgress < 100 && uploadProgress > 0) {
      const timer = setTimeout(() => {
        setUploadProgress(Math.min(100, uploadProgress + Math.random() * 15))
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [uploadProgress])

  // Simulate download
  useEffect(() => {
    if (downloading && downloadProgress < 100) {
      const timer = setTimeout(() => {
        setDownloadProgress(Math.min(100, downloadProgress + Math.random() * 8))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [downloading, downloadProgress])

  // Simulate processing
  useEffect(() => {
    if (processing && processProgress < 100) {
      const timer = setTimeout(() => {
        setProcessProgress(Math.min(100, processProgress + Math.random() * 5))
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [processing, processProgress])

  // Animate filling progress on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setFillingProgress(75)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const startUpload = () => {
    setUploadProgress(Math.random() * 20 + 10)
  }

  const startDownload = () => {
    setDownloading(true)
    setDownloadProgress(0)
  }

  const startProcessing = () => {
    setProcessing(true)
    setProcessProgress(0)
  }

  const resetAll = () => {
    setUploadProgress(0)
    setDownloading(false)
    setDownloadProgress(0)
    setProcessing(false)
    setProcessProgress(0)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Progress</h1>
          <p className="text-lg text-muted-foreground">
            Displays progress indicators for loading, uploading, and processing states.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Progress</h2>
          <p className="text-muted-foreground mb-6">
            Simple progress indicators with different values.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>0%</span>
                <span>No Progress</span>
              </div>
              <Progress value={0} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>25%</span>
                <span>In Progress</span>
              </div>
              <Progress value={25} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>50%</span>
                <span>Half Way</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>75%</span>
                <span>Almost Done</span>
              </div>
              <Progress value={75} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>100%</span>
                <span>Complete</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Progress indicators in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Small (h-1)</p>
              <Progress value={60} className="h-1" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Default (h-2)</p>
              <Progress value={60} />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Medium (h-3)</p>
              <Progress value={60} className="h-3" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Large (h-4)</p>
              <Progress value={60} className="h-4" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Extra Large (h-6)</p>
              <Progress value={60} className="h-6" />
            </div>
          </div>
        </section>

        {/* With Labels */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Labels</h2>
          <p className="text-muted-foreground mb-6">
            Progress indicators with descriptive labels and percentages.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Document Upload</span>
                </div>
                <span className="text-sm text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Image Upload</span>
                </div>
                <span className="text-sm text-muted-foreground">72%</span>
              </div>
              <Progress value={72} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Video Upload</span>
                </div>
                <span className="text-sm text-muted-foreground">28%</span>
              </div>
              <Progress value={28} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Archive className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Archive Upload</span>
                </div>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </section>

        {/* Upload Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
          <p className="text-muted-foreground mb-6">
            Interactive file upload with progress tracking.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Upload File</p>
                    <p className="text-sm text-muted-foreground">
                      {uploadProgress > 0
                        ? `${uploadProgress.toFixed(0)}% complete`
                        : 'Click to start upload'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {uploadProgress === 100 ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : uploadProgress > 0 ? (
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  ) : null}
                </div>
              </div>

              <Progress value={uploadProgress} className="h-2" />

              <div className="flex gap-2">
                {uploadProgress === 0 ? (
                  <Button onClick={startUpload} size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Start Upload
                  </Button>
                ) : uploadProgress === 100 ? (
                  <Button onClick={() => setUploadProgress(0)} variant="outline" size="sm">
                    Upload Another
                  </Button>
                ) : (
                  <Button onClick={() => setUploadProgress(0)} variant="ghost" size="sm">
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Download Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">File Download</h2>
          <p className="text-muted-foreground mb-6">
            Download progress with file size and speed.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Download className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">project-files.zip</p>
                    <p className="text-sm text-muted-foreground">
                      {downloading
                        ? `${(downloadProgress * 2.5).toFixed(1)} MB of 250 MB`
                        : '250 MB • Ready to download'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {downloading ? (
                    <p className="text-sm font-medium">{downloadProgress.toFixed(0)}%</p>
                  ) : downloadProgress === 100 ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                  ) : null}
                </div>
              </div>

              <Progress value={downloadProgress} className="h-2" />

              {downloading && (
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>↓ {(Math.random() * 5 + 2).toFixed(1)} MB/s</span>
                  <span>{Math.ceil((100 - downloadProgress) / 10)}s remaining</span>
                </div>
              )}

              <div className="flex gap-2">
                {!downloading && downloadProgress === 0 ? (
                  <Button onClick={startDownload} size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                ) : downloadProgress === 100 ? (
                  <Button onClick={() => setDownloadProgress(0)} variant="outline" size="sm">
                    Download Again
                  </Button>
                ) : (
                  <Button onClick={() => { setDownloading(false); setDownloadProgress(0) }} variant="ghost" size="sm">
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Colored Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Colored Progress</h2>
          <p className="text-muted-foreground mb-6">
            Progress indicators with custom colors.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Primary (Default)</p>
              <Progress value={60} />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Blue</p>
              <Progress value={60} className="bg-blue-100 dark:bg-blue-900/30" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Green</p>
              <Progress value={60} className="bg-green-100 dark:bg-green-900/30" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Yellow</p>
              <Progress value={60} className="bg-yellow-100 dark:bg-yellow-900/30" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Red</p>
              <Progress value={60} className="bg-red-100 dark:bg-red-900/30" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Purple</p>
              <Progress value={60} className="bg-purple-100 dark:bg-purple-900/30" />
            </div>
          </div>
        </section>

        {/* Storage Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Storage Usage</h2>
          <p className="text-muted-foreground mb-6">
            Display storage or quota usage with progress indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HardDrive className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Storage Used</p>
                    <p className="text-sm text-muted-foreground">75 GB of 100 GB</p>
                  </div>
                </div>
                <span className="text-lg font-bold">75%</span>
              </div>
              <Progress value={75} className="h-3" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <FileText className="h-5 w-5 mx-auto mb-2 text-blue-500" />
                  <p className="text-sm font-medium">Documents</p>
                  <p className="text-xs text-muted-foreground">25 GB</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Image className="h-5 w-5 mx-auto mb-2 text-green-500" />
                  <p className="text-sm font-medium">Images</p>
                  <p className="text-xs text-muted-foreground">30 GB</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Video className="h-5 w-5 mx-auto mb-2 text-purple-500" />
                  <p className="text-sm font-medium">Videos</p>
                  <p className="text-xs text-muted-foreground">15 GB</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <FolderOpen className="h-5 w-5 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm font-medium">Other</p>
                  <p className="text-xs text-muted-foreground">5 GB</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Status Indicators</h2>
          <p className="text-muted-foreground mb-6">
            Progress bars with different status colors and icons.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            {/* Success */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Build Complete</span>
                </div>
                <span className="text-sm text-green-500">100%</span>
              </div>
              <Progress value={100} className="bg-green-100 dark:bg-green-900/30" />
            </div>

            {/* In Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span className="text-sm font-medium">Processing</span>
                </div>
                <span className="text-sm text-blue-500">60%</span>
              </div>
              <Progress value={60} className="bg-blue-100 dark:bg-blue-900/30" />
            </div>

            {/* Warning */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Almost Full</span>
                </div>
                <span className="text-sm text-yellow-500">85%</span>
              </div>
              <Progress value={85} className="bg-yellow-100 dark:bg-yellow-900/30" />
            </div>

            {/* Error */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Upload Failed</span>
                </div>
                <span className="text-sm text-red-500">Failed at 45%</span>
              </div>
              <Progress value={45} className="bg-red-100 dark:bg-red-900/30" />
            </div>
          </div>
        </section>

        {/* Goals & Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Goals & Achievements</h2>
          <p className="text-muted-foreground mb-6">
            Progress indicators for goals, targets, and achievements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Goal */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Monthly Sales Goal</CardTitle>
                  <Target className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">$75,000 / $100,000</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  $25,000 more to reach your goal
                </p>
              </CardContent>
            </Card>

            {/* Task Completion */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Task Completion</CardTitle>
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">18 / 24 tasks</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  6 tasks remaining this week
                </p>
              </CardContent>
            </Card>

            {/* XP Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Level Progress</CardTitle>
                  <Award className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Level 12 → 13</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  1,200 / 1,500 XP to next level
                </p>
              </CardContent>
            </Card>

            {/* Streak */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Daily Streak</CardTitle>
                  <Flame className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">21 / 30 days</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Keep it up! 9 more days to goal
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Battery & System Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">System Status</h2>
          <p className="text-muted-foreground mb-6">
            System and device status indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Battery */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Battery className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Battery</span>
                    <span className="text-sm text-muted-foreground">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>
            </div>

            {/* WiFi */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Signal Strength</span>
                    <span className="text-sm text-muted-foreground">Excellent</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </div>
            </div>

            {/* CPU Usage */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </div>

            {/* Memory */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <HardDrive className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Memory</span>
                    <span className="text-sm text-muted-foreground">6.4 / 16 GB</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Animated Progress</h2>
          <p className="text-muted-foreground mb-6">
            Progress bars that animate to their value on mount.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Loading Profile</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={fillingProgress} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Analyzing Data</span>
                <span className="text-sm text-muted-foreground">50%</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Compiling Assets</span>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>
        </section>

        {/* Multi-Step Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multi-Step Progress</h2>
          <p className="text-muted-foreground mb-6">
            Progress across multiple steps with individual indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-2xl font-bold">3 of 5 steps completed</p>
              </div>

              <div className="space-y-4">
                {/* Step 1 - Complete */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">Account Setup</span>
                    </div>
                    <span className="text-sm text-green-500">Complete</span>
                  </div>
                  <Progress value={100} className="bg-green-100 dark:bg-green-900/30" />
                </div>

                {/* Step 2 - Complete */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">Profile Information</span>
                    </div>
                    <span className="text-sm text-green-500">Complete</span>
                  </div>
                  <Progress value={100} className="bg-green-100 dark:bg-green-900/30" />
                </div>

                {/* Step 3 - Complete */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">Preferences</span>
                    </div>
                    <span className="text-sm text-green-500">Complete</span>
                  </div>
                  <Progress value={100} className="bg-green-100 dark:bg-green-900/30" />
                </div>

                {/* Step 4 - In Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">4</span>
                      </div>
                      <span className="text-sm font-medium">Payment Details</span>
                    </div>
                    <span className="text-sm text-blue-500">In Progress</span>
                  </div>
                  <Progress value={60} className="bg-blue-100 dark:bg-blue-900/30" />
                </div>

                {/* Step 5 - Pending */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs text-muted-foreground font-medium">5</span>
                      </div>
                      <span className="text-sm font-medium">Confirmation</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Pending</span>
                  </div>
                  <Progress value={0} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Progress Alternative */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground mb-6">
            Fully interactive processing example with controls.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Processing Task</CardTitle>
              <CardDescription>
                Watch the progress in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {processing ? (
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    ) : processProgress === 100 ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="text-sm font-medium">
                      {processing ? 'Processing...' : processProgress === 100 ? 'Complete!' : 'Ready to process'}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{processProgress.toFixed(0)}%</span>
                </div>
                <Progress value={processProgress} className="h-3" />
              </div>

              {processing && (
                <div className="text-center py-4">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Please wait while we process your request...
                  </div>
                </div>
              )}

              {processProgress === 100 && !processing && (
                <div className="text-center py-4">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Task completed successfully!</p>
                </div>
              )}

              <div className="flex gap-2">
                {!processing && processProgress === 0 && (
                  <Button onClick={startProcessing}>
                    <Zap className="mr-2 h-4 w-4" />
                    Start Processing
                  </Button>
                )}
                {processing && (
                  <Button onClick={() => setProcessing(false)} variant="outline">
                    Pause
                  </Button>
                )}
                {!processing && processProgress > 0 && processProgress < 100 && (
                  <Button onClick={startProcessing}>
                    Resume
                  </Button>
                )}
                {processProgress === 100 && (
                  <Button onClick={() => setProcessProgress(0)} variant="outline">
                    Reset
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
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
