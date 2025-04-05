
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-none dark:bg-teal-500 dark:hover:bg-teal-600 transform hover:translate-y-[-1px] active:translate-y-0",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-none dark:bg-red-600 dark:hover:bg-red-700 transform hover:translate-y-[-1px] active:translate-y-0",
        outline:
          "border-2 border-teal-200 bg-white/50 backdrop-blur-sm text-teal-800 hover:bg-teal-50 hover:text-teal-900 dark:border-teal-700/80 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-800/50 transform hover:translate-y-[-1px] active:translate-y-0",
        secondary:
          "bg-teal-800 text-white hover:bg-teal-900 shadow-sm hover:shadow-none dark:bg-teal-700 dark:hover:bg-teal-800 transform hover:translate-y-[-1px] active:translate-y-0",
        ghost: "hover:bg-teal-50 hover:text-teal-800 dark:hover:bg-teal-800/60 dark:hover:text-teal-200",
        link: "text-teal-600 underline-offset-4 hover:underline dark:text-teal-400 p-0 h-auto",
        mint: "bg-teal-50 text-teal-600 hover:bg-teal-100 shadow-sm hover:shadow-none dark:bg-teal-800/50 dark:text-teal-200 dark:hover:bg-teal-800/80 transform hover:translate-y-[-1px] active:translate-y-0"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        xl: "h-12 rounded-xl px-10 text-base",
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
