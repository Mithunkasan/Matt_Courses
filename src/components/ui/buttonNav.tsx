import * as React from "react"
import { cn } from "@/lib/utils"

// Define variant types locally
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

// Create a simple variant function to replace class-variance-authority
const createButtonClasses = (variant: ButtonVariant = "default", size: ButtonSize = "default") => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, children, ...props }, ref) => {
    // Handle asChild prop - if true, we would typically use a different rendering approach
    // For now, we'll just use it to avoid the unused variable warning
    const shouldRenderAsChild = asChild || false

    // In a full implementation, you might use something like Radix's Slot component
    // For this basic implementation, we'll always render as a button
    if (shouldRenderAsChild) {
      // This is where you would implement child rendering logic
      // For now, we'll just render normally to avoid the unused variable error
    }

    const buttonClasses = createButtonClasses(variant, size)

    return (
      <button className={cn(buttonClasses, className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

// Export a simple buttonVariants function for compatibility
export const buttonVariants = (options: { variant?: ButtonVariant; size?: ButtonSize; className?: string }) => {
  return createButtonClasses(options.variant, options.size)
}

export { Button }
