'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  AlertTriangle,
  Check,
  Copy,
  CreditCard,
  Download,
  Mail,
  Plus,
  Settings,
  Share,
  Trash2,
  Upload,
  User,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function DialogPage() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetStep = () => {
    setStep(1)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Dialog</h1>
          <p className="text-lg text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>

        {/* Basic Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic dialog with title, description, and actions.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Dialog with Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Form</h2>
          <p className="text-muted-foreground mb-6">
            Dialog containing a complete form.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Account
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                  <DialogDescription>
                    Fill in the information below to create your account.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input id="confirm" type="password" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the terms and conditions
                    </Label>
                  </div>
                </form>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Create Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Confirmation Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Confirmation Dialog</h2>
          <p className="text-muted-foreground mb-6">
            Dialog for confirming destructive actions.
          </p>
          <div className="border rounded-lg p-6 bg-card flex gap-4">
            <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Item
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Delete Item
                  </DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive" onClick={() => setIsDeleteOpen(false)}>
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Reset Settings
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reset Settings</DialogTitle>
                  <DialogDescription>
                    This will reset all your preferences to their default values. Are you sure you want to continue?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>Reset</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Share Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Share Dialog</h2>
          <p className="text-muted-foreground mb-6">
            Dialog for sharing content with others.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://example.com/share/abc123"
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                  <p className="text-sm text-muted-foreground">Share via:</p>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Multi-step Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multi-step Dialog</h2>
          <p className="text-muted-foreground mb-6">
            Dialog with multiple steps/wizard flow.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog onOpenChange={(open) => !open && resetStep()}>
              <DialogTrigger asChild>
                <Button>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Start Setup
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle>
                      {step === 1 && 'Personal Information'}
                      {step === 2 && 'Payment Details'}
                      {step === 3 && 'Confirmation'}
                    </DialogTitle>
                    <Badge variant="secondary">Step {step} of 3</Badge>
                  </div>
                  <DialogDescription>
                    {step === 1 && 'Enter your personal information to get started.'}
                    {step === 2 && 'Add your payment method.'}
                    {step === 3 && 'Review and confirm your information.'}
                  </DialogDescription>
                </DialogHeader>

                {step === 1 && (
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input id="fullname" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-step">Email</Label>
                      <Input id="email-step" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input id="card" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 py-4">
                    <div className="rounded-lg border p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Name</span>
                        <span>John Doe</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Email</span>
                        <span>john@example.com</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Card</span>
                        <span>**** **** **** 4242</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="confirm-terms" />
                      <Label htmlFor="confirm-terms" className="text-sm font-normal">
                        I confirm all information is correct
                      </Label>
                    </div>
                  </div>
                )}

                <DialogFooter>
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button onClick={() => setStep(step + 1)}>Continue</Button>
                  ) : (
                    <DialogClose asChild>
                      <Button onClick={resetStep}>Complete</Button>
                    </DialogClose>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Scrollable Content</h2>
          <p className="text-muted-foreground mb-6">
            Dialog with scrollable content for long text.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Terms of Service</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-hidden flex flex-col">
                <DialogHeader>
                  <DialogTitle>Terms of Service</DialogTitle>
                  <DialogDescription>
                    Please read and accept our terms of service.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto py-4 pr-2">
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4 className="font-semibold text-foreground">1. Acceptance of Terms</h4>
                    <p>
                      By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this service, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                    <h4 className="font-semibold text-foreground">2. Description of Service</h4>
                    <p>
                      We provide users with access to a rich collection of resources, including various communications tools, forums, shopping services, personalized content and branded programming through its network of properties.
                    </p>
                    <h4 className="font-semibold text-foreground">3. User Conduct</h4>
                    <p>
                      You agree to use the service only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. You agree that you will not upload, post, transmit, or distribute content that is harmful, abusive, or otherwise objectionable.
                    </p>
                    <h4 className="font-semibold text-foreground">4. Privacy Policy</h4>
                    <p>
                      Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>
                    <h4 className="font-semibold text-foreground">5. Modifications to Service</h4>
                    <p>
                      We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the service with or without notice.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Decline</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>Accept</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Different Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Different Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Dialogs with different maximum widths.
          </p>
          <div className="border rounded-lg p-6 bg-card flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Small</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[325px]">
                <DialogHeader>
                  <DialogTitle>Small Dialog</DialogTitle>
                  <DialogDescription>
                    This is a small dialog with max-width of 325px.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Medium (Default)</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Medium Dialog</DialogTitle>
                  <DialogDescription>
                    This is the default dialog size with max-width of 512px (sm:max-w-lg).
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Large</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Large Dialog</DialogTitle>
                  <DialogDescription>
                    This is a large dialog with max-width of 700px.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Full Width</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[90vw]">
                <DialogHeader>
                  <DialogTitle>Full Width Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog takes up 90% of the viewport width.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* With Custom Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Custom Content</h2>
          <p className="text-muted-foreground mb-6">
            Dialogs with custom layouts and content.
          </p>
          <div className="border rounded-lg p-6 bg-card flex flex-wrap gap-4">
            {/* Profile Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="flex flex-col items-center text-center py-4">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <DialogTitle className="mb-1">John Doe</DialogTitle>
                  <DialogDescription>Senior Developer</DialogDescription>
                  <div className="flex gap-2 mt-4">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                </div>
                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span>john@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>Bangkok, Thailand</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Joined</span>
                    <span>January 2024</span>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Upload Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload File</DialogTitle>
                  <DialogDescription>
                    Drag and drop a file or click to browse.
                  </DialogDescription>
                </DialogHeader>
                <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your file here, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Upload</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Feedback Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Send Feedback</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Feedback</DialogTitle>
                  <DialogDescription>
                    We'd love to hear from you! Share your thoughts.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="improvement">Improvement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea placeholder="Tell us what you think..." rows={4} />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Without Close Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Without Close Button</h2>
          <p className="text-muted-foreground mb-6">
            Dialog without the default X close button.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Important Notice</DialogTitle>
                  <DialogDescription>
                    This dialog doesn't have the X button. Use the button below to close.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>I Understand</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
