'use client'

import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  Terminal,
  Rocket,
  Bell,
  ShieldAlert,
  XCircle,
} from 'lucide-react'

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Alert</h1>
          <p className="text-lg text-muted-foreground">
            Displays a callout for user attention.
          </p>
        </div>

        {/* Default Alert */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            The default alert style.
          </p>
          <div className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Destructive Alert */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Destructive</h2>
          <p className="text-muted-foreground mb-6">
            Use destructive variant for errors and critical warnings.
          </p>
          <div className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Custom Styled Alerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Styles</h2>
          <p className="text-muted-foreground mb-6">
            Alerts with custom background colors for different states.
          </p>
          <div className="space-y-4">
            {/* Success */}
            <Alert className="border-green-500/50 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            {/* Warning */}
            <Alert className="border-yellow-500/50 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                Your account is about to expire. Please renew your subscription.
              </AlertDescription>
            </Alert>

            {/* Info */}
            <Alert className="border-blue-500/50 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                A new software update is available. See what&apos;s new in version 2.0.
              </AlertDescription>
            </Alert>

            {/* Error */}
            <Alert className="border-red-500/50 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                There was a problem processing your request. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Alert without Title */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Without Title</h2>
          <p className="text-muted-foreground mb-6">
            Alerts can be used without a title for simpler messages.
          </p>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This is a simple alert without a title.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Alert without Icon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Without Icon</h2>
          <p className="text-muted-foreground mb-6">
            Alerts can also be used without an icon.
          </p>
          <div className="space-y-4">
            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                This alert has a title but no icon.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertDescription>
                This is a minimal alert with just a description.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
          <p className="text-muted-foreground mb-6">
            Examples of alerts in real-world scenarios.
          </p>
          <div className="space-y-4">
            {/* Feature Announcement */}
            <Alert className="border-purple-500/50 bg-purple-50 text-purple-900 dark:bg-purple-950 dark:text-purple-100">
              <Rocket className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <AlertTitle>New Feature Available!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                We&apos;ve added dark mode support. Try it out in your settings.
              </AlertDescription>
            </Alert>

            {/* Notification */}
            <Alert>
              <Bell className="h-4 w-4" />
              <AlertTitle>Notifications</AlertTitle>
              <AlertDescription>
                You have 3 unread messages in your inbox.
              </AlertDescription>
            </Alert>

            {/* Security Alert */}
            <Alert variant="destructive">
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Security Alert</AlertTitle>
              <AlertDescription>
                Unusual login activity detected. Please verify your recent sign-ins.
              </AlertDescription>
            </Alert>
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
