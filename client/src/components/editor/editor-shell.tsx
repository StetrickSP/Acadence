import { useState } from "react"
import type { ReactNode } from "react"
import { EditorNavbar } from "./editor-navbar"
import { ProjectSidebar } from "./project-sidebar"

interface EditorShellProps {
  children: ReactNode
}

export function EditorShell({ children }: EditorShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <EditorNavbar sidebarOpen={sidebarOpen} onToggleSidebar={handleToggleSidebar} />

      {/* Sidebar */}
      <ProjectSidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content Area */}
      <main className="pt-14 min-h-screen">
        {children}
      </main>
    </div>
  )
}
