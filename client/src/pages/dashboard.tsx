import { Users, BookOpen, GraduationCap, AlertTriangle } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { KpiCard } from "@/components/dashboard/kpi-card"

export function Dashboard() {
  const kpis = [
    {
      title: "Students",
      value: "1,248",
      description: "Active students enrolled",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Courses",
      value: "42",
      description: "Active courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Instructors",
      value: "18",
      description: "Active instructors",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Alerts",
      value: "12",
      description: "Pending alerts",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  ]

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            description={kpi.description}
            icon={kpi.icon}
          />
        ))}
      </div>
    </DashboardLayout>
  )
}
