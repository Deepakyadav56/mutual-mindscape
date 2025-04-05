
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600",
        secondary:
          "border-transparent bg-teal-800 text-white hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-800",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        outline: "text-teal-800 dark:text-teal-100 border-teal-200 dark:border-teal-700",
        success: "border-transparent bg-green-100 text-green-800 hover:bg-green-200/80 dark:bg-green-800/30 dark:text-green-200 dark:hover:bg-green-800/40",
        warning: "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-200/80 dark:bg-orange-800/30 dark:text-orange-200 dark:hover:bg-orange-800/40",
        info: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200/80 dark:bg-blue-800/30 dark:text-blue-200 dark:hover:bg-blue-800/40",
        mint: "border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200/80 dark:bg-teal-800/30 dark:text-teal-200 dark:hover:bg-teal-800/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
