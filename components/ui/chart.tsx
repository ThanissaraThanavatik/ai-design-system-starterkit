"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: Record<string, { label?: string; icon?: React.ComponentType; color?: string }>
  }
>(({ children, config, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex aspect-video justify-center text-xs", className)}
      {...props}
    >
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: any[]
    label?: string
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    labelKey?: string
    labelFormatter?: (value: any, name: string, prop: any) => string
  }
>(
  (
    {
      active,
      payload,
      label,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      labelKey,
      labelFormatter,
      ...props
    },
    ref
  ) => {
    const reducedPayload = payload?.map((item: any) => ({
      name: item.name,
      value: item.value,
      dataKey: item.dataKey,
      color: item.color,
      payload: item.payload,
    }))

    if (!active || !reducedPayload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
        {...props}
      >
        {!hideLabel && (
          <div className="flex items-center gap-2">
            {indicator === "dot" && (
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            )}
            {indicator === "line" && (
              <div className="h-0.5 w-2 flex-1 bg-muted-foreground" />
            )}
            {indicator === "dashed" && (
              <div className="h-0.5 w-2 flex-1 bg-muted-foreground [mask-image:linear-gradient(to_right,black,transparent)]" />
            )}
            <span className="font-mono text-muted-foreground">
              {labelFormatter
                ? labelFormatter(reducedPayload[0].value, reducedPayload[0].name, reducedPayload[0])
                : labelKey
                ? reducedPayload[0].payload[labelKey]
                : reducedPayload[0].name}
            </span>
          </div>
        )}
        <div className="grid gap-1.5">
          {reducedPayload.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {!hideIndicator && (
                  <div
                    className="h-2 w-2 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                <span className="font-medium text-muted-foreground">
                  {item.name}
                </span>
              </div>
              <span className="font-mono font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
