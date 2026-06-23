import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen w-full",
      "bg-background",
      "flex items-center justify-center",
      "p-4"
    )}>
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  )
}
