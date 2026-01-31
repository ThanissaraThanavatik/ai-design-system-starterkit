"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Send,
  MessageSquare,
  FileText,
  Code,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Info,
  Lightbulb,
  Mail,
  Edit3,
  Hash,
  Minus,
  Maximize2,
  Minimize2,
  Sparkles,
  ThumbsUp,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Image,
  Copy,
  Download,
  Save,
  Type,
  Italic,
} from "lucide-react"

export default function TextareaPage() {
  const [message, setMessage] = useState("")
  const [feedback, setFeedback] = useState("")
  const [code, setCode] = useState("")
  const [notes, setNotes] = useState("")
  const [comment, setComment] = useState("")
  const charCount = message.length
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Textarea</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Multi-line text input for longer content.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* Basic Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Example</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="message-1">Message</Label>
                    <Textarea id="message-1" placeholder="Type your message here..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-2">With default value</Label>
                    <Textarea id="message-2" defaultValue="This is a default value that appears in the textarea." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-3">Disabled</Label>
                    <Textarea id="message-3" placeholder="This textarea is disabled" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-4">Read-only</Label>
                    <Textarea id="message-4" defaultValue="You cannot edit this text" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Label and Description */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Label and Description</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="description">Product Description</Label>
                    <p className="text-sm text-muted-foreground">
                      Enter a detailed description of your product. Include key features and benefits.
                    </p>
                    <Textarea
                      id="description"
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Character Count */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Character Count</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="tweet">Tweet</Label>
                    <Textarea
                      id="tweet"
                      placeholder="What's happening?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={280}
                      className="min-h-24"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Share your thoughts with the world</span>
                      <span className={charCount > 250 ? "text-red-500 font-medium" : "text-muted-foreground"}>
                        {charCount}/280
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      maxLength={500}
                      className="min-h-24"
                    />
                    <p className="text-sm text-muted-foreground text-right">0/500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Word Count */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Word Count</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="essay">Essay</Label>
                    <Textarea
                      id="essay"
                      placeholder="Start writing your essay..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-48"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Minimum 250 words</span>
                      <Badge variant={wordCount >= 250 ? "default" : "secondary"}>
                        {wordCount} words
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Icon */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icon</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="message-with-icon">Send a message</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="message-with-icon"
                        placeholder="Type your message..."
                        className="pl-10 min-h-24"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment-with-icon">Leave a comment</Label>
                    <div className="relative">
                      <Edit3 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="comment-with-icon"
                        placeholder="Write your comment..."
                        className="pl-10 min-h-24"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code-with-icon">Code snippet</Label>
                    <div className="relative">
                      <Code className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="code-with-icon"
                        placeholder="Paste your code here..."
                        className="pl-10 min-h-32 font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Different Sizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Different Sizes</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="small">Small</Label>
                    <Textarea
                      id="small"
                      placeholder="Small textarea..."
                      className="min-h-16 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medium">Medium (default)</Label>
                    <Textarea
                      id="medium"
                      placeholder="Medium textarea..."
                      className="min-h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="large">Large</Label>
                    <Textarea
                      id="large"
                      placeholder="Large textarea..."
                      className="min-h-40 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="extra-large">Extra Large</Label>
                    <Textarea
                      id="extra-large"
                      placeholder="Extra large textarea for long-form content..."
                      className="min-h-56 text-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Resizable */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Resizable</h2>
            <Card>
              <CardHeader>
                <CardTitle>Resize Control</CardTitle>
                <CardDescription>
                  Use the resize handle in the bottom-right corner to resize
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="resize-both">Resize Both</Label>
                    <Textarea
                      id="resize-both"
                      placeholder="Drag from any corner..."
                      className="resize min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resize-vertical">Vertical Only</Label>
                    <Textarea
                      id="resize-vertical"
                      placeholder="Drag from bottom edge..."
                      className="resize-y min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resize-horizontal">Horizontal Only</Label>
                    <Textarea
                      id="resize-horizontal"
                      placeholder="Drag from right edge..."
                      className="resize-x min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resize-none">No Resize</Label>
                    <Textarea
                      id="resize-none"
                      placeholder="Fixed size textarea..."
                      className="resize-none min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Validation States */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Validation States</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="valid">Valid</Label>
                    <Textarea
                      id="valid"
                      defaultValue="This content is valid"
                      className="border-green-500 focus-visible:ring-green-500/20"
                    />
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      This field is valid
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="invalid">Invalid</Label>
                    <Textarea
                      id="invalid"
                      defaultValue="This content is too short"
                      className="border-red-500 focus-visible:ring-red-500/20"
                    />
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      Minimum 50 characters required
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="warning">Warning</Label>
                    <Textarea
                      id="warning"
                      defaultValue="This content might need review"
                      className="border-yellow-500 focus-visible:ring-yellow-500/20"
                    />
                    <p className="text-sm text-yellow-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      Please review before submitting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Helper Text */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Helper Text</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="helper-1">With description</Label>
                    <Textarea id="helper-1" placeholder="Enter your content..." className="min-h-24" />
                    <p className="text-sm text-muted-foreground">This text helps users understand what to enter.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="helper-2">With info message</Label>
                    <Textarea id="helper-2" placeholder="Enter your content..." className="min-h-24" />
                    <p className="text-sm text-blue-600 flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      Markdown formatting is supported
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="helper-3">With tip</Label>
                    <Textarea id="helper-3" placeholder="Enter your content..." className="min-h-24" />
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Lightbulb className="h-4 w-4" />
                      Tip: Be descriptive for better results
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="helper-4">With error</Label>
                    <Textarea id="helper-4" placeholder="Enter your content..." className="min-h-24 border-red-500" />
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      This field is required
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Interactive Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Interactive Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Message Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>Compose and send a message</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="send-message">Message</Label>
                    <Textarea
                      id="send-message"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-32"
                    />
                    <p className="text-sm text-muted-foreground">{charCount} characters</p>
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Feedback Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Feedback</CardTitle>
                  <CardDescription>Share your thoughts with us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-text">Your feedback</Label>
                    <Textarea
                      id="feedback-text"
                      placeholder="Tell us what you think..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="min-h-32"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Helpful
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Excellent
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Code Editor */}
              <Card>
                <CardHeader>
                  <CardTitle>Code Editor</CardTitle>
                  <CardDescription>Write or paste code snippets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code-editor">Code</Label>
                    <Textarea
                      id="code-editor"
                      placeholder="// Write your code here..."
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="min-h-40 font-mono text-sm bg-muted"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Notes</CardTitle>
                  <CardDescription>Jot down your thoughts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quick-notes">Notes</Label>
                    <Textarea
                      id="quick-notes"
                      placeholder="Start typing..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-40"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      Clear
                    </Button>
                    <Button size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* With Toolbar */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Toolbar</h2>
            <Card>
              <CardHeader>
                <CardTitle>Rich Text Editor</CardTitle>
                <CardDescription>Format your text with the toolbar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-1 p-2 rounded-lg border bg-muted/50">
                    <Button variant="ghost" size="icon-sm">
                      <Type className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <Underline className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <Image className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    placeholder="Start writing..."
                    className="min-h-48 border-t-0 rounded-t-none"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Placeholder Variants */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Placeholder Variants</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="placeholder-1">Simple placeholder</Label>
                    <Textarea
                      id="placeholder-1"
                      placeholder="Type here..."
                      className="min-h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="placeholder-2">Descriptive placeholder</Label>
                    <Textarea
                      id="placeholder-2"
                      placeholder="Enter your detailed description here. Include all relevant information."
                      className="min-h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="placeholder-3">Example placeholder</Label>
                    <Textarea
                      id="placeholder-3"
                      placeholder="Example: The quick brown fox jumps over the lazy dog."
                      className="min-h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="placeholder-4">Instruction placeholder</Label>
                    <Textarea
                      id="placeholder-4"
                      placeholder="1. Write your main point
2. Add supporting details
3. Conclude your thought"
                      className="min-h-24 font-mono text-sm"
                    />
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
