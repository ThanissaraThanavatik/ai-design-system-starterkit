import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical"
  }
>(({ className, orientation = "horizontal", ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      data-orientation={orientation}
      className={cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    />
  )
})
ButtonGroup.displayName = "ButtonGroup"

const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical"
  }
>(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-border",
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        className
      )}
      {...props}
    />
  )
})
ButtonGroupSeparator.displayName = "ButtonGroupSeparator"

const ButtonGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      ref={ref}
      className={cn("text-sm text-muted-foreground px-2", className)}
      {...props}
    />
  )
})
ButtonGroupText.displayName = "ButtonGroupText"

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText }
