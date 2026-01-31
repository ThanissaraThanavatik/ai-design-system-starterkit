'use client'

import * as React from 'react'
import { useState } from 'react'
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import {
  Shield,
  Smartphone,
  Mail,
  Lock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'

export default function InputOTPPage() {
  const [value, setValue] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleVerify = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      if (value === '123456') {
        setIsVerified(true)
        setHasError(false)
      } else {
        setHasError(true)
        setIsVerified(false)
      }
    }, 1500)
  }

  const handleResend = () => {
    setValue('')
    setHasError(false)
    setIsVerified(false)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Input OTP</h1>
          <p className="text-lg text-muted-foreground">
            Accessible one-time password input component with copy/paste support.
          </p>
        </div>

        {/* Basic 6-digit OTP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default (6 digits)</h2>
          <p className="text-muted-foreground mb-6">
            Basic 6-digit OTP input field.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-2">
              <Label>Enter verification code</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </section>

        {/* With Separator */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Separator</h2>
          <p className="text-muted-foreground mb-6">
            OTP input with separator between groups.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>6 digits with separator (3-3)</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-2">
              <Label>8 digits with separators (2-2-2-2)</Label>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </section>

        {/* Different Lengths */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Different Lengths</h2>
          <p className="text-muted-foreground mb-6">
            OTP inputs with various digit counts.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>4 digits</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-2">
              <Label>5 digits</Label>
              <InputOTP maxLength={5}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-2">
              <Label>8 digits</Label>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </section>

        {/* Pattern Validation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pattern Validation</h2>
          <p className="text-muted-foreground mb-6">
            OTP inputs with different allowed character patterns.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            <div className="space-y-2">
              <Label>Digits only</Label>
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground">Only numbers (0-9) allowed</p>
            </div>

            <div className="space-y-2">
              <Label>Digits and letters</Label>
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground">Numbers and letters allowed</p>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
          <p className="text-muted-foreground mb-6">
            OTP input in disabled state.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="space-y-2">
              <Label>Disabled OTP input</Label>
              <InputOTP maxLength={6} disabled>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </section>

        {/* With Verification Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Verification Flow</h2>
          <p className="text-muted-foreground mb-6">
            Complete verification flow with states. Try entering "123456" for success.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="max-w-sm mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Verify your phone</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We sent a code to +66 *** *** 1234
                </p>
              </div>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={value}
                  onChange={setValue}
                  disabled={isVerifying || isVerified}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className={cn(hasError && 'border-destructive')} />
                    <InputOTPSlot index={1} className={cn(hasError && 'border-destructive')} />
                    <InputOTPSlot index={2} className={cn(hasError && 'border-destructive')} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className={cn(hasError && 'border-destructive')} />
                    <InputOTPSlot index={4} className={cn(hasError && 'border-destructive')} />
                    <InputOTPSlot index={5} className={cn(hasError && 'border-destructive')} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {hasError && (
                <p className="text-sm text-destructive flex items-center justify-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  Invalid code. Please try again.
                </p>
              )}

              {isVerified && (
                <p className="text-sm text-green-600 flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified successfully!
                </p>
              )}

              <div className="space-y-3">
                <Button
                  onClick={handleVerify}
                  disabled={value.length !== 6 || isVerifying || isVerified}
                  className="w-full"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : isVerified ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Verified
                    </>
                  ) : (
                    'Verify Code'
                  )}
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleResend}
                  disabled={isVerifying}
                  className="w-full"
                >
                  Didn't receive code? Resend
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
          <p className="text-muted-foreground mb-6">
            OTP for email verification.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="max-w-sm mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Check your email</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter the code sent to john@example.com
                </p>
              </div>
              <div className="flex justify-center">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-xs text-muted-foreground">
                Code expires in 10:00
              </p>
            </div>
          </div>
        </section>

        {/* 2FA Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Two-Factor Authentication</h2>
          <p className="text-muted-foreground mb-6">
            OTP for 2FA/MFA setup.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="max-w-sm mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Two-factor authentication</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter the code from your authenticator app
                </p>
              </div>
              <div className="flex justify-center">
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button className="w-full">Verify</Button>
              <p className="text-xs text-muted-foreground">
                Open your authenticator app (Google Authenticator, Authy, etc.) to view your code.
              </p>
            </div>
          </div>
        </section>

        {/* PIN Entry */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">PIN Entry</h2>
          <p className="text-muted-foreground mb-6">
            Short PIN entry for quick authentication.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="max-w-xs mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Enter your PIN</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter your 4-digit security PIN
                </p>
              </div>
              <div className="flex justify-center">
                <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={1} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={2} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={3} className="w-12 h-12 text-lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button variant="link" className="text-sm">
                Forgot PIN?
              </Button>
            </div>
          </div>
        </section>

        {/* Controlled Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Controlled Input</h2>
          <p className="text-muted-foreground mb-6">
            OTP input with controlled value display.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <ControlledOTPExample />
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

function ControlledOTPExample() {
  const [controlledValue, setControlledValue] = useState('')

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Enter code</Label>
        <InputOTP
          maxLength={6}
          value={controlledValue}
          onChange={setControlledValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Current value:</span>
        <code className="px-2 py-1 bg-muted rounded text-sm">
          {controlledValue || '(empty)'}
        </code>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setControlledValue('123456')}
        >
          Set to 123456
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setControlledValue('')}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
