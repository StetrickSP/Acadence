# UI Context

## Theme

Modern academic analytics dashboard.

The visual language combines:

- university administration software
- data analytics platforms
- technical productivity dashboards

Design principles:

- Dark-first interface.
- Professional, minimal, information-dense layouts.
- Strong readability for tables, charts, and datasets.
- Clear visual separation between data layers.
- High contrast for analytics, warnings, and performance indicators.

The system should feel like a hybrid of:

- Academic LMS dashboard
- Analytics platform
- Administrative control panel

Light mode may be supported later, but **dark mode is the primary design target**.

---

## Colors

All components must use CSS custom properties.

No hardcoded hex values inside components.

| Role | CSS Variable | Value |
|------|------|------|
| Page background | `--bg-base` | `#0B1120` |
| Surface | `--bg-surface` | `#111827` |
| Elevated Surface | `--bg-elevated` | `#1F2937` |
| Primary text | `--text-primary` | `#F9FAFB` |
| Secondary text | `--text-secondary` | `#D1D5DB` |
| Muted text | `--text-muted` | `#9CA3AF` |
| Primary accent | `--accent-primary` | `#3B82F6` |
| Secondary accent | `--accent-secondary` | `#8B5CF6` |
| Border | `--border-default` | `#374151` |
| Error | `--state-error` | `#EF4444` |
| Warning | `--state-warning` | `#F59E0B` |
| Success | `--state-success` | `#10B981` |
| Info | `--state-info` | `#06B6D4` |

---

## Typography

| Role | Font | Variable |
|------|------|------|
| UI text | Inter | `--font-sans` |
| Headings | Inter | `--font-heading` |
| Code / Mono | JetBrains Mono | `--font-mono` |

Typography rules:

### Headings

- H1 → page titles
- H2 → dashboard sections
- H3 → cards and subsections

### Body Text

Prioritize clarity and readability.

### Numeric Data

Use aligned numeric formatting for:

- GPA
- percentages
- rankings
- prediction scores
- statistical metrics

Prefer monospace rendering where appropriate.

---

## Border Radius

| Context | Class |
|------|------|
| Inline / small UI | `rounded-md` |
| Inputs / buttons | `rounded-lg` |
| Cards / panels | `rounded-xl` |
| Modals / overlays | `rounded-2xl` |

Use a consistent radius scale.

Do not introduce arbitrary radius values.

---

## Component Library

Use:

**shadcn/ui on top of TailwindCSS**

Components live in:

```txt
components/ui/
```

Use CLI-generated components whenever possible.

Avoid rebuilding existing primitives from scratch.

Primary component groups:

### Forms

- Input
- Select
- Checkbox
- Radio Group
- Textarea
- Form wrappers
- Validation messaging

### Navigation

- Navbar
- Sidebar
- Breadcrumbs
- Tabs

### Feedback

- Toasts
- Alerts
- Skeleton loaders
- Dialogs
- Confirmation modals

### Data Display

- Tables
- Cards
- Badges
- Tooltips
- Chart containers

---

## Layout Patterns

### App Layout

Primary layout:

```txt
+-----------------------------+
| Navbar                      |
+------+----------------------+
| Side | Main Dashboard Area  |
| bar  |                      |
|      |                      |
+------+----------------------+
```

---

### Sidebar

Persistent left sidebar.

Contains:

- Dashboard
- Students
- Courses
- Gradebook
- Analytics
- Predictions
- Reports
- Settings

Behavior:

- fixed width
- collapsible
- scroll-safe
- border separated

---

### Navbar

Top navigation bar.

Contains:

- page title
- breadcrumbs
- search
- notifications
- user profile
- Clerk auth controls

Use bottom border separation.

---

### Dashboard Pages

Use responsive card-grid layouts.

Examples:

- KPI cards
- charts
- ranking tables
- prediction summaries

Prefer a 12-column responsive grid system.

---

### Tables

Tables are a primary UI surface.

Used for:

- students
- courses
- enrollments
- grades
- predictions
- analytics summaries

Requirements:

- sortable
- searchable
- paginated
- responsive overflow handling

---

### Forms

Forms must support:

- validation feedback
- loading states
- disabled states
- error recovery

Long forms should use:

- grouped sections
- clear hierarchy
- labeled controls

---

### Modals

Centered overlays.

Requirements:

- backdrop blur
- keyboard dismissal
- escape close
- focus management

---

### Analytics Pages

Analytics layouts prioritize:

1. headline metrics
2. charts
3. comparison tables
4. drill-down datasets

Charts must remain readable in dark mode.

---

## Visualization Guidelines

Charts are first-class UI components.

Supported chart types:

- histograms
- line charts
- bar charts
- radar charts
- box plots
- correlation plots

Chart containers must include:

- title
- subtitle
- legend
- loading state
- empty state

Color mapping:

- GPA → `--accent-primary`
- success metrics → `--state-success`
- risk metrics → `--state-warning`
- failures → `--state-error`

---

## Icons

Use:

**Lucide React**

Guidelines:

Stroke-based icons only.

Standard sizes:

- inline → `h-4 w-4`
- buttons → `h-5 w-5`
- navigation → `h-5 w-5`
- metric cards → `h-6 w-6`

Examples:

- GraduationCap
- BookOpen
- Users
- LineChart
- AlertTriangle
- FileBarChart
- ShieldCheck
- Settings

---

## Authentication UI

Authentication is powered by **Clerk**.

Use Clerk UI components when practical.

Auth screens:

- Sign In
- Sign Up
- Profile Management
- Account Settings

Protected screens must:

- redirect unauthenticated users
- display auth loading states
- gracefully handle expired sessions

---

## Accessibility

Minimum requirements:

- keyboard navigable
- semantic HTML
- visible focus states
- sufficient contrast
- accessible labels
- accessible dialog behavior

Do not rely solely on color to communicate status.

---

## Motion and Interaction

Keep motion subtle.

Allowed:

- hover transitions
- opacity fades
- dropdown animations
- loading indicators

Avoid:

- excessive motion
- distracting animations
- heavy parallax effects

Performance and clarity take priority.