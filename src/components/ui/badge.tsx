
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-app-button-green text-white hover:bg-app-button-green/80",
        secondary:
          "border-transparent bg-app-black text-white hover:bg-app-black/80",
        destructive:
          "border-transparent bg-app-red text-white hover:bg-app-red/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-100 text-green-800 hover:bg-green-200/80",
        warning: "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200/80",
        info: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200/80",
        mint: "border-transparent bg-app-mint text-app-button-green hover:bg-app-mint/80",
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
