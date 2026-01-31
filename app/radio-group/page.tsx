'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Check,
  Star,
  CreditCard,
  Banknote,
  Apple,
  Globe,
  Moon,
  Sun,
  Monitor,
  Send,
  Clock,
  Zap,
  Crown,
  Sparkles,
  Calendar,
} from 'lucide-react'

export default function RadioGroupShowcasePage() {
  const [notification, setNotification] = useState('all')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [rating, setRating] = useState('4')
  const [theme, setTheme] = useState('system')
  const [plan, setPlan] = useState('pro')
  const [deliverySpeed, setDeliverySpeed] = useState('standard')
  const [feedback, setFeedback] = useState('satisfied')
  const [frequency, setFrequency] = useState('monthly')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Radio Group</h1>
          <p className="text-lg text-muted-foreground">
            A set of checkable buttons where only one can be selected at a time.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Radio Group</h2>
          <p className="text-muted-foreground mb-6">
            Simple radio group for selecting a single option.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Notification Preference */}
            <div className="space-y-3">
              <Label>Notification Preference</Label>
              <RadioGroup value={notification} onValueChange={setNotification}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="font-normal cursor-pointer">
                    All notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mentions" id="mentions" />
                  <Label htmlFor="mentions" className="font-normal cursor-pointer">
                    Direct mentions and replies
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="font-normal cursor-pointer">
                    None
                  </Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">
                Selected: {notification}
              </p>
            </div>
          </div>
        </section>

        {/* With Descriptions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Descriptions</h2>
          <p className="text-muted-foreground mb-6">
            Radio items with additional descriptions for clarity.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Delivery Speed</Label>
              <RadioGroup value={deliverySpeed} onValueChange={setDeliverySpeed}>
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
                  <div className="flex-1">
                    <Label htmlFor="standard" className="font-medium cursor-pointer">
                      Standard Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Free delivery in 5-7 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="express" id="express" className="mt-0.5" />
                  <div className="flex-1">
                    <Label htmlFor="express" className="font-medium cursor-pointer">
                      Express Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      $9.99 - Delivery in 2-3 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="overnight" id="overnight" className="mt-0.5" />
                  <div className="flex-1">
                    <Label htmlFor="overnight" className="font-medium cursor-pointer">
                      Overnight Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      $19.99 - Delivery by tomorrow
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
          <p className="text-muted-foreground mb-6">
            Radio group for selecting payment methods with icons.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Select Payment Method</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Credit Card</p>
                      <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">PayPal</p>
                      <p className="text-xs text-muted-foreground">Pay with PayPal account</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary">
                  <RadioGroupItem value="apple" id="apple" />
                  <Label htmlFor="apple" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <Apple className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Apple Pay</p>
                      <p className="text-xs text-muted-foreground">Fast and secure checkout</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center gap-3 flex-1 cursor-pointer">
                    <Banknote className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-xs text-muted-foreground">Direct bank transfer</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Rating Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rating Selection</h2>
          <p className="text-muted-foreground mb-6">
            Star rating selection using radio group.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>How would you rate your experience?</Label>
              <RadioGroup value={rating} onValueChange={setRating}>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className="flex flex-col items-center gap-1">
                      <RadioGroupItem value={value.toString()} id={`star-${value}`} className="sr-only" />
                      <Label
                        htmlFor={`star-${value}`}
                        className={`cursor-pointer transition-colors ${
                          parseInt(rating) >= value
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      >
                        <Star className="h-8 w-8" />
                      </Label>
                      <span className="text-xs text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground text-center">
                {rating === '5' && 'Excellent!'}
                {rating === '4' && 'Very Good'}
                {rating === '3' && 'Good'}
                {rating === '2' && 'Fair'}
                {rating === '1' && 'Poor'}
              </p>
            </div>
          </div>
        </section>

        {/* Theme Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Theme Selection</h2>
          <p className="text-muted-foreground mb-6">
            Visual theme selection with icons and descriptions.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Select Theme</Label>
              <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <RadioGroupItem value="light" id="light" className="sr-only" />
                  <Label
                    htmlFor="light"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Sun className="h-6 w-6" />
                    <span className="font-medium">Light</span>
                  </Label>
                  {theme === 'light' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="relative">
                  <RadioGroupItem value="dark" id="dark" className="sr-only" />
                  <Label
                    htmlFor="dark"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Moon className="h-6 w-6" />
                    <span className="font-medium">Dark</span>
                  </Label>
                  {theme === 'dark' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="relative">
                  <RadioGroupItem value="system" id="system" className="sr-only" />
                  <Label
                    htmlFor="system"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Monitor className="h-6 w-6" />
                    <span className="font-medium">System</span>
                  </Label>
                  {theme === 'system' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground mb-6">
            Select a pricing plan with visual cards.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Choose Your Plan</Label>
              <RadioGroup value={plan} onValueChange={setPlan} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Free Plan */}
                <div className="relative">
                  <RadioGroupItem value="free" id="free" className="sr-only" />
                  <Label
                    htmlFor="free"
                    className="flex flex-col p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 h-full"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ 1 project</li>
                      <li>✓ Basic features</li>
                      <li>✓ Community support</li>
                    </ul>
                  </Label>
                </div>

                {/* Pro Plan */}
                <div className="relative">
                  <RadioGroupItem value="pro" id="pro" className="sr-only" />
                  <Label
                    htmlFor="pro"
                    className="flex flex-col p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 h-full"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      Popular
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Pro</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold">$29</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Unlimited projects</li>
                      <li>✓ Advanced features</li>
                      <li>✓ Priority support</li>
                    </ul>
                  </Label>
                </div>

                {/* Enterprise Plan */}
                <div className="relative">
                  <RadioGroupItem value="enterprise" id="enterprise" className="sr-only" />
                  <Label
                    htmlFor="enterprise"
                    className="flex flex-col p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 h-full"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">Enterprise</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold">$99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Everything in Pro</li>
                      <li>✓ Custom integrations</li>
                      <li>✓ Dedicated support</li>
                    </ul>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Feedback Options</h2>
          <p className="text-muted-foreground mb-6">
            Emoji-based feedback selection.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>How are you feeling about this update?</Label>
              <RadioGroup value={feedback} onValueChange={setFeedback}>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <RadioGroupItem value="very-happy" id="very-happy" className="sr-only" />
                    <Label
                      htmlFor="very-happy"
                      className={`cursor-pointer transition-transform hover:scale-110 ${
                        feedback === 'very-happy' ? 'scale-110' : ''
                      }`}
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 transition-colors has-[[data-state=checked]]:border-green-500 hover:bg-green-50">
                        <span className="text-3xl">😄</span>
                      </div>
                    </Label>
                    <span className="text-xs text-muted-foreground">Love it!</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RadioGroupItem value="happy" id="happy" className="sr-only" />
                    <Label
                      htmlFor="happy"
                      className={`cursor-pointer transition-transform hover:scale-110 ${
                        feedback === 'happy' ? 'scale-110' : ''
                      }`}
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 transition-colors has-[[data-state=checked]]:border-blue-500 hover:bg-blue-50">
                        <span className="text-3xl">🙂</span>
                      </div>
                    </Label>
                    <span className="text-xs text-muted-foreground">Good</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                    <Label
                      htmlFor="neutral"
                      className={`cursor-pointer transition-transform hover:scale-110 ${
                        feedback === 'neutral' ? 'scale-110' : ''
                      }`}
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 transition-colors has-[[data-state=checked]]:border-yellow-500 hover:bg-yellow-50">
                        <span className="text-3xl">😐</span>
                      </div>
                    </Label>
                    <span className="text-xs text-muted-foreground">Okay</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RadioGroupItem value="sad" id="sad" className="sr-only" />
                    <Label
                      htmlFor="sad"
                      className={`cursor-pointer transition-transform hover:scale-110 ${
                        feedback === 'sad' ? 'scale-110' : ''
                      }`}
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 transition-colors has-[[data-state=checked]]:border-orange-500 hover:bg-orange-50">
                        <span className="text-3xl">🙁</span>
                      </div>
                    </Label>
                    <span className="text-xs text-muted-foreground">Not great</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RadioGroupItem value="very-sad" id="very-sad" className="sr-only" />
                    <Label
                      htmlFor="very-sad"
                      className={`cursor-pointer transition-transform hover:scale-110 ${
                        feedback === 'very-sad' ? 'scale-110' : ''
                      }`}
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 transition-colors has-[[data-state=checked]]:border-red-500 hover:bg-red-50">
                        <span className="text-3xl">😞</span>
                      </div>
                    </Label>
                    <span className="text-xs text-muted-foreground">Hate it</span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Frequency Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequency Selection</h2>
          <p className="text-muted-foreground mb-6">
            Billing or delivery frequency options.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Choose Subscription Frequency</Label>
              <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="relative">
                  <RadioGroupItem value="weekly" id="weekly" className="sr-only" />
                  <Label
                    htmlFor="weekly"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div className="text-center">
                      <span className="font-medium block">Weekly</span>
                      <span className="text-xs text-muted-foreground">$10/week</span>
                    </div>
                  </Label>
                  {frequency === 'weekly' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="relative">
                  <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                  <Label
                    htmlFor="monthly"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div className="text-center">
                      <span className="font-medium block">Monthly</span>
                      <span className="text-xs text-muted-foreground">$29/month</span>
                    </div>
                  </Label>
                  {frequency === 'monthly' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="relative">
                  <RadioGroupItem value="quarterly" id="quarterly" className="sr-only" />
                  <Label
                    htmlFor="quarterly"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Send className="h-5 w-5 text-muted-foreground" />
                    <div className="text-center">
                      <span className="font-medium block">Quarterly</span>
                      <span className="text-xs text-muted-foreground">$79/quarter</span>
                    </div>
                  </Label>
                  {frequency === 'quarterly' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="relative">
                  <RadioGroupItem value="yearly" id="yearly" className="sr-only" />
                  <Label
                    htmlFor="yearly"
                    className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
                  >
                    <Sparkles className="h-5 w-5 text-primary" />
                    <div className="text-center">
                      <span className="font-medium block">Yearly</span>
                      <span className="text-xs text-muted-foreground">$249/year</span>
                    </div>
                  </Label>
                  {frequency === 'yearly' && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                  {frequency === 'yearly' && (
                    <div className="absolute -top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      Save 30%
                    </div>
                  )}
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Horizontal Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Horizontal Layout</h2>
          <p className="text-muted-foreground mb-6">
            Radio items arranged horizontally.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Font Size</Label>
              <RadioGroup defaultValue="medium" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small" className="font-normal cursor-pointer text-sm">
                    Small
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="font-normal cursor-pointer">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large" className="font-normal cursor-pointer text-lg">
                    Large
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label>Language</Label>
              <RadioGroup defaultValue="english" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="english" id="english" />
                  <Label htmlFor="english" className="font-normal cursor-pointer flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    English
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spanish" id="spanish" />
                  <Label htmlFor="spanish" className="font-normal cursor-pointer flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Español
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="french" id="french" />
                  <Label htmlFor="french" className="font-normal cursor-pointer flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Français
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
          <p className="text-muted-foreground mb-6">
            Radio items that cannot be selected.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-3">
              <Label>Shipping Method</Label>
              <RadioGroup defaultValue="standard">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="ship-standard" />
                  <Label htmlFor="ship-standard" className="font-normal cursor-pointer">
                    Standard Shipping (5-7 days)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 opacity-50">
                  <RadioGroupItem value="express" id="ship-express" disabled />
                  <Label htmlFor="ship-express" className="font-normal cursor-not-allowed">
                    Express Shipping (2-3 days) - Not available
                  </Label>
                </div>
                <div className="flex items-center space-x-2 opacity-50">
                  <RadioGroupItem value="overnight" id="ship-overnight" disabled />
                  <Label htmlFor="ship-overnight" className="font-normal cursor-not-allowed">
                    Overnight Shipping - Temporarily unavailable
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Form Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
          <p className="text-muted-foreground mb-6">
            Complete form with radio groups and submit button.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Survey</CardTitle>
              <CardDescription>
                Help us improve our service by answering a few questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>How did you hear about us?</Label>
                <RadioGroup defaultValue="other">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="social" id="social" />
                    <Label htmlFor="social" className="font-normal cursor-pointer">
                      Social Media
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend" className="font-normal cursor-pointer">
                      Friend or Colleague
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="search" id="search" />
                    <Label htmlFor="search" className="font-normal cursor-pointer">
                      Search Engine
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ad" id="ad" />
                    <Label htmlFor="ad" className="font-normal cursor-pointer">
                      Advertisement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="font-normal cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>How often do you use our product?</Label>
                <RadioGroup defaultValue="weekly">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily" className="font-normal cursor-pointer">
                      Daily
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="use-weekly" />
                    <Label htmlFor="use-weekly" className="font-normal cursor-pointer">
                      Weekly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="use-monthly" />
                    <Label htmlFor="use-monthly" className="font-normal cursor-pointer">
                      Monthly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rarely" id="rarely" />
                    <Label htmlFor="rarely" className="font-normal cursor-pointer">
                      Rarely
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-2">
                <Button type="submit">Submit Survey</Button>
                <Button type="button" variant="outline">
                  Skip
                </Button>
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
