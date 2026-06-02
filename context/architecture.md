# Architecture Context

## Stack

| Layer | Technology | Role |
|-------|-------|-------|
| Frontend Framework | React + Vite + TypeScript | Client application, dashboards, forms, visualization UI |
| UI | TailwindCSS + shadcn/ui + Lucide React | Design system, reusable components, styling, icons |
| Auth | Clerk | Authentication, session management, RBAC identity provider |
| Backend API | FastAPI | REST API, business logic, analytics orchestration |
| ORM | SQLAlchemy | Database models, relationships, query abstraction |
| Database | SQLite | Persistent academic data storage |
| Analytics | Pandas | Statistical analysis, GPA calculations, correlations |
| Visualization | MatPlotLib | Report generation and academic charts |
| Machine Learning | Scikit-learn | Grade prediction model and risk analysis |
| Automation Testing | Selenium + Pytest | Web UI automation and backend verification |
| Concurrency | Python Threading / concurrent.futures | Batch CSV processing and parallel imports |

---

## System Boundaries

- `frontend/` — React/Vite application. Owns UI rendering, dashboards, forms, authentication state, charts display, and API consumption.

- `backend/api/` — FastAPI routes and request handlers. Owns HTTP contracts, validation, authentication enforcement, and API orchestration.

- `backend/services/` — Business logic layer. Owns grade calculations, analytics workflows, prediction logic, reporting, and access control rules.

- `backend/models/` — SQLAlchemy database models and relational schema definitions.

- `backend/database/` — Database connection management, sessions, migrations, and persistence utilities.

- `backend/analytics/` — Pandas analysis pipelines, statistical calculations, ranking generation, correlation analysis.

- `backend/ml/` — Machine learning training, prediction services, at-risk detection logic.

- `backend/file_processing/` — CSV import/export, JSON reporting, batch processing workflows.

- `backend/auth/` — Clerk token verification, RBAC enforcement, permission helpers.

- `backend/tests/` — Unit tests, API tests, Selenium automation suites.

- `shared/` — Shared schemas, enums, constants, DTOs, and validation contracts used across backend modules.

---

## Storage Model

### Database (SQLite)

Stores structured academic and application metadata.

Core entities:

- Users
- Students
- Instructors
- Courses
- Enrollments
- Grades
- Assignments
- Attendance Records
- Grade Schemes
- Prediction Results
- Audit Logs

Relationships:

- A student can enroll in multiple courses.
- A course can contain multiple students.
- Courses may have one or more instructors.
- Grades belong to both students and courses.
- Prediction records reference historical academic data.

### File Storage

Stores non-relational or generated assets.

Used for:

- Uploaded CSV grade sheets
- Exported JSON reports
- Generated chart images
- Analytics snapshots
- ML training datasets
- Selenium screenshots and logs

Large generated artifacts must not be stored directly inside SQLite.

---

## Auth and Access Model

### Authentication

Every user authenticates through **Clerk**.

Frontend responsibilities:

- Sign up
- Sign in
- Session persistence
- Token acquisition

Backend responsibilities:

- Verify Clerk JWT/session tokens.
- Reject unauthenticated requests.
- Attach authenticated identity to request context.

---

### Authorization / Role Model

System roles:

- **Admin**
- **Instructor**
- **Student**

Role permissions:

#### Admin

Can:

- Create/manage users
- Create/manage courses
- Access all analytics
- View all predictions
- Manage system configuration
- Run batch imports

#### Instructor

Can:

- Manage assigned courses
- Enter and update grades
- View course analytics
- View prediction alerts for owned courses
- Export course reports

Cannot:

- Modify global system settings
- Access unrelated course data

#### Student

Can:

- View own grades
- View personal analytics
- View prediction outcomes for own performance
- Export personal reports

Cannot:

- Mutate academic records
- Access other students’ information

---

### Ownership Rules

Every resource must have explicit ownership.

Examples:

- Courses belong to instructors and administrators.
- Grades belong to a student + course pair.
- Prediction results inherit ownership from the associated student/course.
- Analytics endpoints must filter data by role visibility.

No endpoint may expose cross-user academic records without authorization validation.

---

## Invariants

1. API request handlers must remain thin and delegate business logic to services.

2. Authentication and authorization must execute before any protected mutation or sensitive query.

3. Academic calculations must be deterministic and reproducible from stored data.

4. Database writes must preserve referential integrity through SQLAlchemy relationships and foreign keys.

5. Long-running analytics, batch imports, and ML workflows must not block lightweight request handlers.

6. CSV, JSON, and external input data must be validated before persistence.

7. Frontend components must never directly access SQLite or analytics logic.

8. Prediction models may assist decision-making but must never overwrite authoritative academic records automatically.

9. Generated reports and visualization artifacts must be reproducible from database state.

10. Role-restricted data must never be leaked across Admin / Instructor / Student boundaries.