
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm dark:bg-teal-500 dark:hover:bg-teal-600",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        outline:
          "border border-teal-200 bg-white text-teal-800 hover:bg-teal-50 dark:border-teal-700 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-800/50",
        secondary:
          "bg-teal-800 text-white hover:bg-teal-900 shadow-sm dark:bg-teal-700 dark:hover:bg-teal-800",
        ghost: "hover:bg-teal-50 hover:text-teal-800 dark:hover:bg-teal-800 dark:hover:text-teal-200",
        link: "text-teal-600 underline-offset-4 hover:underline dark:text-teal-400",
        mint: "bg-teal-50 text-teal-600 hover:bg-teal-100 dark:bg-teal-800/50 dark:text-teal-200 dark:hover:bg-teal-800"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
