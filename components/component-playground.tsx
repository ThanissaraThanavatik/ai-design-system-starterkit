'use client'

import { useState } from 'react'
import { Copy, Check, Code2, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

interface ComponentPlaygroundProps {
  title: string
  description?: string
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPlayground({
  title,
  description,
  children,
  code,
  className,
}: ComponentPlaygroundProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-2">
              <Code2 className="h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>

          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
        </div>

        <TabsContent value="preview" className="mt-4">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-wrap items-center gap-4">
              {children}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <div className="relative">
            <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
              <code className="text-sm font-mono">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
