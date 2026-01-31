"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Moon,
  Sun,
  Mail,
  Lock,
  Wifi,
  Bluetooth,
  Volume2,
  Eye,
  Globe,
  Zap,
  Shield,
  Palette,
  User,
  Save,
} from "lucide-react"

export default function SwitchPage() {
  const [notifications, setNotifications] = useState(true)
  const [emails, setEmails] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [publicProfile, setPublicProfile] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)
  const [marketing, setMarketing] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Switch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A toggle switch component for binary choices.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Example</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Notifications</Label>
                    <Switch id="notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emails">Emails</Label>
                    <Switch id="emails" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch id="dark-mode" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-save">Auto Save</Label>
                    <Switch id="auto-save" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="notif-icon">Notifications</Label>
                    </div>
                    <Switch id="notif-icon" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-icon">Email</Label>
                    </div>
                    <Switch id="email-icon" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="light-icon">Light Mode</Label>
                    </div>
                    <Switch id="light-icon" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Moon className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="dark-icon">Dark Mode</Label>
                    </div>
                    <Switch id="dark-icon" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wifi className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="wifi-icon">Wi-Fi</Label>
                    </div>
                    <Switch id="wifi-icon" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bluetooth className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="bluetooth-icon">Bluetooth</Label>
                    </div>
                    <Switch id="bluetooth-icon" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sound-icon">Sound</Label>
                    </div>
                    <Switch id="sound-icon" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">With Labels and Descriptions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="public">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to everyone
                      </p>
                    </div>
                    <Switch id="public" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="activity">Activity Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Show when you're active
                      </p>
                    </div>
                    <Switch id="activity" defaultChecked />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="messages">Message Requests</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow message requests from everyone
                      </p>
                    </div>
                    <Switch id="messages" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Disabled State</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="flex items-center justify-between opacity-50">
                    <Label htmlFor="disabled-1">Feature unavailable</Label>
                    <Switch id="disabled-1" disabled />
                  </div>
                  <div className="flex items-center justify-between opacity-50">
                    <Label htmlFor="disabled-2">Premium feature</Label>
                    <Switch id="disabled-2" disabled defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enabled">Available feature</Label>
                    <Switch id="enabled" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Controlled Switches</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="controlled-notif">Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        {notifications ? "Enabled" : "Disabled"}
                      </p>
                    </div>
                    <Switch
                      id="controlled-notif"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="controlled-email">Email Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        {emails ? "On" : "Off"}
                      </p>
                    </div>
                    <Switch
                      id="controlled-email"
                      checked={emails}
                      onCheckedChange={setEmails}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="controlled-dark">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        {darkMode ? "Dark" : "Light"}
                      </p>
                    </div>
                    <Switch
                      id="controlled-dark"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="controlled-save">Auto Save</Label>
                      <p className="text-sm text-muted-foreground">
                        {autoSave ? "Every 30s" : "Manual only"}
                      </p>
                    </div>
                    <Switch
                      id="controlled-save"
                      checked={autoSave}
                      onCheckedChange={setAutoSave}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Settings Page Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Push Notifications
                  </h4>
                  <div className="space-y-4 pl-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-all">All Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive all push notifications</p>
                      </div>
                      <Switch id="push-all" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-mentions">Mentions</Label>
                        <p className="text-sm text-muted-foreground">When someone mentions you</p>
                      </div>
                      <Switch id="push-mentions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-direct">Direct Messages</Label>
                        <p className="text-sm text-muted-foreground">New direct messages</p>
                      </div>
                      <Switch id="push-direct" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Notifications
                  </h4>
                  <div className="space-y-4 pl-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-weekly">Weekly Digest</Label>
                        <p className="text-sm text-muted-foreground">Summary of activity</p>
                      </div>
                      <Switch id="email-weekly" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-product">Product Updates</Label>
                        <p className="text-sm text-muted-foreground">New features and updates</p>
                      </div>
                      <Switch id="email-product" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-marketing">Marketing</Label>
                        <p className="text-sm text-muted-foreground">Special offers and promotions</p>
                      </div>
                      <Switch id="email-marketing" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Control your privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="visibility">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">Anyone can view your profile</p>
                    </div>
                  </div>
                  <Switch id="visibility" checked={publicProfile} onCheckedChange={setPublicProfile} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="2fa">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                  </div>
                  <Switch id="2fa" checked={twoFactor} onCheckedChange={setTwoFactor} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="activity-status">Show Activity Status</Label>
                      <p className="text-sm text-muted-foreground">Let others see when you're active</p>
                    </div>
                  </div>
                  <Switch id="activity-status" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="private-account">Private Account</Label>
                      <p className="text-sm text-muted-foreground">Only followers can see your content</p>
                    </div>
                  </div>
                  <Switch id="private-account" />
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Appearance Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Moon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="dark-mode-toggle">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                  </div>
                  <Switch id="dark-mode-toggle" checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="custom-theme">Custom Theme</Label>
                      <p className="text-sm text-muted-foreground">Use custom color scheme</p>
                    </div>
                  </div>
                  <Switch id="custom-theme" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="animations">Animations</Label>
                      <p className="text-sm text-muted-foreground">Enable UI animations</p>
                    </div>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="compact-mode">Compact Mode</Label>
                      <p className="text-sm text-muted-foreground">Use more compact layout</p>
                    </div>
                  </div>
                  <Switch id="compact-mode" />
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" onClick={() => setNotifications(!notifications)}>
                    <Bell className="h-4 w-4 mr-2" />
                    Toggle Notifications ({notifications ? "On" : "Off"})
                  </Button>
                  <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    Toggle Theme ({darkMode ? "Dark" : "Light"})
                  </Button>
                  <Button variant="outline" onClick={() => setAutoSave(!autoSave)}>
                    <Save className="h-4 w-4 mr-2" />
                    Toggle Auto Save ({autoSave ? "On" : "Off"})
                  </Button>
                  <Button variant="outline" onClick={() => setTwoFactor(!twoFactor)}>
                    <Shield className="h-4 w-4 mr-2" />
                    Toggle 2FA ({twoFactor ? "On" : "Off"})
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Status Badges</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Wifi className="h-4 w-4" />
                      <span>Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Bluetooth className="h-4 w-4" />
                      <span>Bluetooth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Badge variant="outline">Off</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Lock className="h-4 w-4" />
                      <span>VPN</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Zap className="h-4 w-4" />
                      <span>Power Saver</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch />
                      <Badge variant="outline">Disabled</Badge>
                    </div>
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
