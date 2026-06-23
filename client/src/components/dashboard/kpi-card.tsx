import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KpiCardProps {
  title: string
  value: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function KpiCard({
  title,
  value,
  description,
  icon,
  className,
}: KpiCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="text-accent opacity-75">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold text-foreground">
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
