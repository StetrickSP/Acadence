import { Plus, PanelLeftClose } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
        className={cn(
          "fixed left-0 top-14 bottom-0 z-40",
          "w-80 bg-card border-r border-border",
          "flex flex-col",
          "transition-transform duration-300 ease-in-out",
          "shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="h-16 border-b border-border flex items-center justify-between px-4 py-2">
          <h2 className="text-base font-semibold text-foreground">Projects</h2>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Area with Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs defaultValue="my-projects" className="h-full flex flex-col">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 m-0 h-auto">
              <TabsTrigger
                value="my-projects"
                className="rounded-none border-b-2 data-active:border-accent"
              >
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="rounded-none border-b-2 data-active:border-accent"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="my-projects"
              className="flex-1 flex items-center justify-center text-sm text-muted-foreground"
            >
              No projects yet
            </TabsContent>

            <TabsContent
              value="shared"
              className="flex-1 flex items-center justify-center text-sm text-muted-foreground"
            >
              No shared projects
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <Button className="w-full" variant="default">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}
