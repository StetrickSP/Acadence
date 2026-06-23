# Editor Shell Foundation

Read `AGENTS.md`, `architecture.md`, `ui-context.md`, and `code-standards.md` before starting.

This feature creates the reusable application shell that will frame every screen in the system.

The shell consists of:

* top navigation bar
* floating project sidebar
* responsive layout container

This foundation will be reused by all future dashboard, analytics, gradebook, and administration screens.

Do NOT implement business functionality.

This feature is strictly UI infrastructure.

---

## Objective

Create the reusable editor shell components that establish the application's navigation structure.

Build:

* Editor Navbar
* Project Sidebar
* Layout Shell

The result should provide a reusable frame for future pages.

---

## Scope

### In Scope

* editor navbar
* project sidebar
* sidebar state management
* responsive shell layout
* reusable layout container
* shadcn Tabs integration
* Lucide icons

### Out of Scope

* authentication
* API integration
* Clerk integration
* database functionality
* project creation logic
* project persistence
* dashboard widgets
* analytics screens
* routing logic
* dialogs

---

## Create Components

Create:

```txt
src/components/editor/editor-navbar.tsx
```

```txt
src/components/editor/project-sidebar.tsx
```

```txt
src/components/editor/editor-shell.tsx
```

---

## Editor Navbar

File:

```txt
src/components/editor/editor-navbar.tsx
```

### Requirements

Fixed-height top navigation bar.

Layout:

```txt
+----------------------------------------+
| Left | Center              | Right     |
+----------------------------------------+
```

### Left Section

Contains sidebar toggle button.

Button behavior:

* opens sidebar when closed
* closes sidebar when open

Icons:

* `PanelLeftOpen`
* `PanelLeftClose`

from:

```ts
lucide-react
```

### Center Section

Reserved for future page titles.

For now:

* empty container
* centered alignment

### Right Section

Reserved for future:

* profile menu
* notifications
* settings

For now:

* empty container

### Styling

Must follow dark theme.

Requirements:

* fixed height
* dark surface
* subtle bottom border
* sticky top positioning
* full width

Use tokens from:

```txt
globals.css
```

Do not hardcode colors.

---

## Project Sidebar

File:

```txt
src/components/editor/project-sidebar.tsx
```

### Component Props

```ts
interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}
```

### Behavior

Sidebar must:

* slide in from left
* float above content
* not push page layout
* overlay editor area
* support open/close transitions

When closed:

* completely hidden

When open:

* visible above canvas

### Header

Contains:

* title: "Projects"
* close button

Close button icon:

```ts
PanelLeftClose
```

### Tabs

Use shadcn Tabs.

Create two tabs:

#### My Projects

Placeholder state:

```txt
No projects yet
```

#### Shared

Placeholder state:

```txt
No shared projects
```

No project functionality yet.

---

### Footer

Sticky bottom section.

Contains:

Full-width button:

```txt
New Project
```

Button icon:

```ts
Plus
```

No click behavior required.

---

### Styling

Requirements:

* dark surface
* border separator
* subtle shadow
* smooth slide animation
* fixed width
* full height

Must follow theme tokens.

Do not introduce custom colors.

---

## Editor Shell

File:

```txt
src/components/editor/editor-shell.tsx
```

### Purpose

Reusable application frame.

### Component Props

```ts
interface EditorShellProps {
  children: React.ReactNode
}
```

### Responsibilities

Manage:

* sidebar open state
* navbar integration
* sidebar integration
* content area rendering

### Layout

```txt
+--------------------------------------+
| Navbar                               |
+--------------------------------------+
|                                      |
| Main Content Area                    |
|                                      |
+--------------------------------------+
```

Sidebar floats above content.

Content should not shift when sidebar opens.

---

## State Management

Use local React state.

Example:

```ts
const [sidebarOpen, setSidebarOpen] = useState(false)
```

No Context API.

No global state.

No external state libraries.

---

## Accessibility

Sidebar:

* keyboard accessible
* close button focusable

Buttons:

* proper aria labels

Navigation:

* semantic HTML

---

## Responsive Behavior

Desktop:

* sidebar width approximately 320px

Tablet:

* sidebar overlays content

Mobile:

* sidebar overlays content

Navbar remains visible at all sizes.

---

## Icons

Use Lucide React.

Required icons:

```ts
PanelLeftOpen
PanelLeftClose
Plus
```

Do not create icon wrapper components.

Import directly.

---

## Expected File Structure

```txt
src/
├── components/
│   └── editor/
│       ├── editor-navbar.tsx
│       ├── project-sidebar.tsx
│       └── editor-shell.tsx
```

---

## Constraints

Do NOT modify:

```txt
components/ui/*
```

Use existing shadcn components.

Do not create custom Tabs implementation.

Do not introduce application-specific business logic.

Do not create routes.

Do not create dialogs.

---

## Validation

Verify:

### Navbar

* renders correctly
* toggle button works
* icons change correctly

### Sidebar

* opens and closes
* slides smoothly
* overlays content
* does not shift layout

### Tabs

* My Projects tab works
* Shared tab works

### Footer

* New Project button renders correctly

### Build

Run:

```bash
npm run build
```

Requirements:

* no TypeScript errors
* no lint errors
* no missing imports

---

## Completion Criteria

This feature is complete when:

1. Editor Navbar exists.
2. Project Sidebar exists.
3. Editor Shell exists.
4. Sidebar state management works.
5. Sidebar overlays content rather than pushing layout.
6. Tabs render correctly.
7. New Project button is present.
8. All components follow the dark theme.
9. No modifications were made to generated shadcn components.
10. Application builds successfully.
