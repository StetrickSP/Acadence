# Code Standards

## General

- Keep modules small, focused, and single-purpose.
- Fix root causes — do not layer temporary workarounds.
- Do not mix unrelated concerns inside a single component, route, or service.
- Prefer readability and maintainability over clever abstractions.
- Follow existing project patterns before introducing new ones.
- Write code that is predictable, testable, and easily reviewable.
- Favor explicit behavior over implicit magic.

---

## TypeScript

- Strict mode is required throughout the frontend project.
- Avoid `any` whenever possible.
- Use explicit interfaces, discriminated unions, or narrowly scoped types.
- Validate unknown external data before trusting it.
- Use shared types and schemas for API contracts whenever possible.
- Prefer typed hooks, typed API responses, and typed component props.
- Use enums or constant maps for roles, statuses, and fixed system values.

Example:

```ts
interface Student {
  id: string
  name: string
  gpa: number
}
```

Do not silence type errors without justification.

---

## React + Vite

### Component Rules

- Prefer functional components.
- Keep components presentation-focused when possible.
- Move business logic into hooks, services, or backend layers.
- Avoid deeply nested component trees.
- Split large components into reusable subcomponents.

### Hooks

- Use hooks for reusable UI behavior.
- Keep hooks deterministic and side-effect aware.
- Do not place business-critical backend logic inside hooks.

### State Management

Use:

- local component state for isolated UI state
- React Query / API state patterns for server data
- context only for cross-cutting concerns

Avoid unnecessary global state.

### Routing

- Keep routes shallow and predictable.
- Protect authenticated routes.
- Use role-based route guards where required.

---

## FastAPI

### API Handler Standards

Route handlers must:

- validate request input
- verify authentication
- enforce authorization
- delegate logic to services
- return predictable responses

Route handlers must NOT:

- contain analytics pipelines
- contain ML model logic
- directly implement database-heavy workflows

Keep handlers thin.

### Response Shape

Use consistent API responses.

Success example:

```json
{
  "success": true,
  "data": {}
}
```

Error example:

```json
{
  "success": false,
  "error": "Unauthorized"
}
```

Use proper HTTP status codes.

---

## Python Standards

- Use Python type hints throughout backend code.
- Prefer dataclasses or Pydantic schemas for structured data contracts.
- Keep functions focused and short.
- Avoid large god-services.
- Extract reusable workflows into utility modules or service layers.
- Prefer composition over inheritance unless inheritance clearly improves modeling.

Naming conventions:

| Context | Convention |
|----------|------------|
| files | `snake_case.py` |
| classes | `PascalCase` |
| functions | `snake_case()` |
| constants | `UPPER_SNAKE_CASE` |

---

## SQLAlchemy

### Models

Models own:

- schema definitions
- relationships
- constraints

Models must NOT own:

- analytics logic
- API formatting
- presentation logic

### Relationships

Always use explicit relationships.

Examples:

- Student ↔ Enrollment
- Enrollment ↔ Course
- Course ↔ Instructor
- Student ↔ Grade

Maintain referential integrity through foreign keys.

### Queries

Prefer:

- service-layer query orchestration
- reusable query helpers
- readable query composition

Avoid:

- raw SQL scattered across the codebase

Use raw SQL only when justified by performance or analytical requirements.

---

## Authentication and Authorization

Authentication source of truth:

**Clerk**

Frontend responsibilities:

- session handling
- auth UI
- auth state rendering

Backend responsibilities:

- token verification
- authorization
- protected route enforcement

Rules:

- Never trust frontend role claims.
- Always verify user identity server-side.
- Enforce permissions before mutations.
- Validate ownership before exposing protected resources.

---

## Styling

- Use TailwindCSS utility conventions.
- Use CSS custom property tokens from `ui-context.md`.
- No hardcoded hex colors.
- Follow the defined border-radius scale.
- Use reusable UI primitives from `components/ui/`.
- Keep styling consistent across dashboards, tables, forms, and charts.

Prefer semantic classes and composition over duplicated utility chains.

---

## Component Library Rules

Primary UI library:

**shadcn/ui**

Rules:

- Use CLI-generated components when available.
- Do not modify generated primitives unless necessary.
- Extend components through composition.
- Keep shared UI components generic.

Generated components location:

```txt
components/ui/
```

---

## API Routes

Rules:

- Validate and parse request input before logic executes.
- Enforce authentication before protected access.
- Enforce authorization before mutation.
- Return predictable response structures.
- Handle failures explicitly.
- Log meaningful backend errors.

Do not expose raw exception traces to clients.

---

## Data and Storage

### Database

SQLite stores:

- metadata
- ownership
- relationships
- academic records
- prediction outputs

### File Storage

File storage owns:

- CSV uploads
- JSON exports
- generated charts
- report artifacts
- analytics snapshots

Rules:

- Metadata belongs in the database.
- Large artifacts belong in file storage.
- Do not store large generated content directly in SQLite.

---

## Analytics Standards

Analytics code belongs exclusively in:

```txt
backend/analytics/
```

Use:

- Pandas
- statistical utilities
- reusable analysis pipelines

Rules:

- keep analytics deterministic
- isolate analytics from API handlers
- validate imported datasets
- document assumptions in analysis code

Analytics must be reproducible from stored data.

---

## Machine Learning Standards

ML code belongs exclusively in:

```txt
backend/ml/
```

Use:

- scikit-learn
- reusable preprocessing pipelines
- explicit model configuration

Rules:

- separate training from inference
- version saved model artifacts
- document prediction assumptions
- validate feature inputs before prediction

Prediction systems may assist academic decisions.

Prediction systems must NEVER automatically mutate official grades.

---

## File Processing Standards

CSV / JSON workflows belong in:

```txt
backend/file_processing/
```

Rules:

- validate file schemas
- handle malformed data gracefully
- provide import summaries
- support batch operations safely

Batch imports must support concurrency-safe execution.

---

## Testing

### Backend Testing

Use:

- pytest
- integration tests
- service tests
- API tests

Test:

- CRUD workflows
- auth enforcement
- analytics correctness
- prediction outputs
- validation failures

### Frontend Testing

Test:

- auth flows
- protected routes
- dashboard rendering
- forms
- API interactions

### Selenium

Use Selenium for:

- automated form testing
- workflow verification
- authenticated UI scenarios

---

## File Organization

### Frontend

```txt
frontend/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── shared/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── context/
│   └── types/
```

### Backend

```txt
backend/
├── api/
├── services/
├── models/
├── database/
├── analytics/
├── ml/
├── auth/
├── file_processing/
├── tests/
└── shared/
```

Folder ownership:

- `components/` — reusable UI
- `services/` — business logic
- `models/` — database schema
- `analytics/` — statistical workflows
- `ml/` — prediction systems
- `auth/` — Clerk verification and RBAC
- `tests/` — automated verification

---

## Documentation Rules

Update documentation whenever implementation changes:

- architecture changes
- storage changes
- auth changes
- UI conventions
- coding standards
- folder ownership

Do not allow implementation and documentation to drift out of sync.

---

## Build and Quality Gates

Before merging or advancing work:

Frontend:

```bash
npm run build
```

Backend:

```bash
pytest
```

Requirements:

- no failing builds
- no failing tests
- no violated architecture invariants
- documentation updated
- auth protections verified