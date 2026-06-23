import type { ReactNode } from "react"
import { EditorShell } from "@/components/editor/editor-shell"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode
  title?: string
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <EditorShell>
      <div className={cn(
        "px-4 py-8 md:px-6 md:py-10",
        "max-w-7xl mx-auto"
      )}>
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          </div>
        )}
        {children}
      </div>
    </EditorShell>
  )
}
