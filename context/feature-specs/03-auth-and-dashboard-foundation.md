# Authentication UI & Dashboard Foundation

Read `AGENTS.md`, `architecture.md`, `ui-context.md`, and `code-standards.md` before starting.

This feature creates the first complete user-facing experience.

The goal is to establish:

* authentication screens
* dashboard page framework
* reusable dashboard layout
* KPI card components

This feature is strictly frontend UI.

No authentication provider should be integrated yet.

No backend communication should exist.

Use mock data only.

---

## Objective

Create the foundational screens that users see when interacting with the system.

Build:

* Sign In page
* Sign Up page
* Forgot Password page
* Dashboard Layout
* KPI Card Component

These components will serve as the foundation for all future Admin, Instructor, and Student dashboards.

---

## Scope

### In Scope

* authentication screen UI
* reusable auth layout
* reusable dashboard layout
* KPI card component
* mock dashboard content
* responsive design
* dark theme compliance

### Out of Scope

* Clerk integration
* API integration
* backend authentication
* database functionality
* user management
* analytics functionality
* routing guards
* session handling

---

## Create Components

Create:

```txt
src/components/auth/auth-layout.tsx
src/components/auth/auth-card.tsx

src/components/dashboard/dashboard-layout.tsx
src/components/dashboard/kpi-card.tsx
```

Create pages:

```txt
src/pages/sign-in.tsx
src/pages/sign-up.tsx
src/pages/forgot-password.tsx
src/pages/dashboard.tsx
```

---

## Authentication Layout

File:

```txt
src/components/auth/auth-layout.tsx
```

### Purpose

Reusable wrapper for all authentication pages.

### Layout

Centered page layout.

```txt
+----------------------------------+
|                                  |
|          Auth Card               |
|                                  |
+----------------------------------+
```

Requirements:

* vertically centered
* horizontally centered
* full viewport height
* dark theme background

---

## Authentication Card

File:

```txt
src/components/auth/auth-card.tsx
```

Use shadcn Card.

Support:

* title
* description
* content area
* footer area

Must be reusable across:

* Sign In
* Sign Up
* Forgot Password

---

## Sign In Page

File:

```txt
src/pages/sign-in.tsx
```

### Fields

* Email
* Password

### Actions

Primary Button:

```txt
Sign In
```

Footer Link:

```txt
Create an account
```

Additional Link:

```txt
Forgot Password?
```

### Behavior

No authentication logic.

Buttons do not need functionality.

---

## Sign Up Page

File:

```txt
src/pages/sign-up.tsx
```

### Fields

* Full Name
* Email
* Password
* Confirm Password

### Actions

Primary Button:

```txt
Create Account
```

Footer Link:

```txt
Already have an account?
```

No submission logic.

---

## Forgot Password Page

File:

```txt
src/pages/forgot-password.tsx
```

### Fields

* Email

### Actions

Primary Button:

```txt
Send Reset Link
```

Footer Link:

```txt
Back to Sign In
```

No email functionality required.

---

## Dashboard Layout

File:

```txt
src/components/dashboard/dashboard-layout.tsx
```

### Purpose

Reusable dashboard page wrapper.

This layout will be reused by:

* Admin Dashboard
* Instructor Dashboard
* Student Dashboard
* Analytics Pages
* Reports Pages

### Layout

Must integrate:

* EditorShell from Feature 02
* Dashboard Content Area

```txt
+-------------------------------------+
| Navbar                              |
+-------------------------------------+
|                                     |
| Dashboard Content                   |
|                                     |
+-------------------------------------+
```

Requirements:

* responsive
* full width
* content padding
* max-width container

---

## KPI Card Component

File:

```txt
src/components/dashboard/kpi-card.tsx
```

### Purpose

Reusable metric card component.

### Props

```ts
interface KpiCardProps {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
}
```

### Layout

```txt
+---------------------+
| Title         Icon  |
|                     |
| Value               |
| Description         |
+---------------------+
```

Use shadcn Card.

---

## Dashboard Page

File:

```txt
src/pages/dashboard.tsx
```

### Purpose

Mock dashboard for demonstrating layout components.

### Content

Create four KPI cards.

Example metrics:

```txt
Students      1,248
Courses       42
Instructors   18
Alerts        12
```

Use Lucide icons.

Suggested:

```ts
Users
BookOpen
GraduationCap
AlertTriangle
```

No real data.

Hardcoded mock values only.

---

## Responsive Requirements

### Desktop

* four-column KPI grid

### Tablet

* two-column KPI grid

### Mobile

* single-column KPI grid

Authentication screens must remain centered on all screen sizes.

---

## Theme Requirements

Must follow:

```txt
ui-context.md
```

Requirements:

* dark surfaces
* dark inputs
* dark cards
* theme token colors only

Do not hardcode colors.

---

## Icons

Use Lucide React.

Required icons:

```ts
Users
BookOpen
GraduationCap
AlertTriangle
```

---

## Expected File Structure

```txt
src/
├── components/
│   ├── auth/
│   │   ├── auth-layout.tsx
│   │   └── auth-card.tsx
│   │
│   └── dashboard/
│       ├── dashboard-layout.tsx
│       └── kpi-card.tsx
│
├── pages/
│   ├── sign-in.tsx
│   ├── sign-up.tsx
│   ├── forgot-password.tsx
│   └── dashboard.tsx
```

---

## Constraints

Do NOT:

* install Clerk
* create backend APIs
* implement authentication
* create protected routes
* add database logic

Use mock data only.

---

## Validation

Verify:

### Authentication Screens

* Sign In renders
* Sign Up renders
* Forgot Password renders

### Dashboard

* Dashboard renders
* KPI cards render
* Layout integrates with EditorShell

### Responsiveness

* desktop layout works
* tablet layout works
* mobile layout works

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

1. Authentication screens exist.
2. Reusable Auth Layout exists.
3. Reusable Auth Card exists.
4. Dashboard Layout exists.
5. KPI Card component exists.
6. Mock Dashboard page exists.
7. Dashboard integrates with EditorShell.
8. All pages follow the dark theme.
9. No backend functionality exists.
10. Application builds successfully.
