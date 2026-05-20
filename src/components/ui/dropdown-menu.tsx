"use client"
import * as React from "react"
import { createContext, useContext, useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

// Context for dropdown state
const DropdownContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
} | null>(null)

// Hook to use dropdown context
const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error("Dropdown components must be used within DropdownMenu")
  }
  return context
}

// Main dropdown component
const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, triggerRef }}>
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  )
}

// Trigger component
const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, asChild = false, ...props }, ref) => {
  const { isOpen, setIsOpen, triggerRef } = useDropdownContext()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    props.onClick?.(e)
  }

  // Handle asChild case
  if (asChild && React.isValidElement(children)) {
    const childProps = {
      ...props,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()
        setIsOpen(!isOpen)
        // Call original onClick if it exists
        if ((children as any).props?.onClick) {
          (children as any).props.onClick(e)
        }
      },
      "data-state": isOpen ? "open" : "closed",
    }

    return React.cloneElement(children as React.ReactElement<any>, {
      ...childProps,
      ref: (node: HTMLElement) => {
        // Handle both function and object refs
        if (triggerRef.current !== node) {
          triggerRef.current = node
        }

        // Handle the forwarded ref
        if (typeof ref === "function") {
          ref(node as HTMLButtonElement)
        } else if (ref) {
          (ref as any).current = node as HTMLButtonElement
        }

        // Handle the child's original ref
        const childRef = (children as any).ref
        if (childRef) {
          if (typeof childRef === "function") {
            childRef(node)
          } else {
            childRef.current = node
          }
        }
      },
    })
  }

  return (
    <button
      ref={(node) => {
        // Set both refs
        if (triggerRef.current !== node) {
          triggerRef.current = node
        }
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          (ref as any).current = node
        }
      }}
      className={cn("outline-none", className)}
      onClick={handleClick}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

// Content component
const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end"
    sideOffset?: number
  }
>(({ className, children, align = "center", sideOffset = 4, ...props }, ref) => {
  const { isOpen, setIsOpen, triggerRef } = useDropdownContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // Combine refs
  const combinedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      contentRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref],
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const content = contentRef.current
      const trigger = triggerRef.current

      if (content && trigger && !content.contains(target) && !trigger.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen, triggerRef])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    end: "right-0",
  }

  return (
    <div
      ref={combinedRef}
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-md animate-in fade-in-0 zoom-in-95",
        alignmentClasses[align],
        className,
      )}
      style={{ top: `calc(100% + ${sideOffset}px)` }}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

// Menu item component
const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean
    disabled?: boolean
  }
>(({ className, inset, children, onClick, disabled, ...props }, ref) => {
  const { setIsOpen } = useDropdownContext()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    onClick?.(e)
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onClick?.(e as any)
      setIsOpen(false)
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100",
        inset && "pl-8",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="menuitem"
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"

// Additional components for completeness
const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    role="presentation"
    {...props}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("-mx-1 my-1 h-px bg-gray-200", className)} role="separator" {...props} />
  ),
)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuShortcut = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return <span ref={ref} className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  },
)
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
}
