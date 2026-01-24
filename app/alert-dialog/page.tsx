'use client'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Trash2, LogOut, AlertTriangle, Save, Send } from 'lucide-react'

export default function AlertDialogPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Alert Dialog</h1>
          <p className="text-lg text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>

        {/* Default Alert Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            The default alert dialog with title, description, and action buttons.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Delete Confirmation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Delete Confirmation</h2>
          <p className="text-muted-foreground mb-6">
            Alert dialog for confirming destructive actions like deletion.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Item
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this item?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete the selected item. This action cannot
                    be undone and the item will be removed from your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Logout Confirmation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Logout Confirmation</h2>
          <p className="text-muted-foreground mb-6">
            Confirm before logging out the user.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be signed out of your account on this device. You can
                    sign back in at any time.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay signed in</AlertDialogCancel>
                  <AlertDialogAction>Log out</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Warning Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Warning Dialog</h2>
          <p className="text-muted-foreground mb-6">
            Alert dialog with a warning icon for important notices.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Show Warning
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
                  </div>
                  <AlertDialogDescription className="pt-2">
                    You have unsaved changes that will be lost if you leave this page.
                    Are you sure you want to continue?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go back</AlertDialogCancel>
                  <AlertDialogAction>Leave anyway</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Save Changes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Save Changes</h2>
          <p className="text-muted-foreground mb-6">
            Confirm before saving changes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Save your changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your changes will be saved and applied immediately. This will
                    update the current configuration for all users.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Save changes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Send Message */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Send Confirmation</h2>
          <p className="text-muted-foreground mb-6">
            Confirm before sending a message or email.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Send this message?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your message will be sent to all 128 recipients in this group.
                    This action cannot be undone once the message is delivered.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Review message</AlertDialogCancel>
                  <AlertDialogAction>Send now</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Custom Styled */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Styled</h2>
          <p className="text-muted-foreground mb-6">
            Alert dialog with custom styling and multiple actions.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Open Custom Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Share this document</AlertDialogTitle>
                  <AlertDialogDescription>
                    Anyone with the link can view this document. Choose how you want
                    to share it.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex flex-col gap-2 py-4">
                  <Button variant="outline" className="justify-start">
                    Copy link
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Share via email
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Share to workspace
                  </Button>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
