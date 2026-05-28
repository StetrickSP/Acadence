# University Course Performance Tracker & Grade Prediction System

## Overview

**Acadence** is a Python-based academic management, analytics, and prediction platform designed for universities, instructors, and students. The system manages student records, course enrollments, grades, and assignment data while supporting multiple grading schemes through object-oriented design. It processes academic data from CSV and JSON files, stores structured records in an SQLite database, performs statistical analysis using Pandas, generates visualization reports with MatPlotLib, and applies a simple machine learning model to predict student final performance and identify at-risk students. An frontend extension using ReactJS + Vite provides a modern web interface connected to the Python backend.

---

## Goals

1. Build a modular academic record management system using OOP principles, inheritance, abstract classes, and polymorphism.
2. Automate academic data processing through CSV/JSON import/export, database storage, and multi-threaded batch operations.
3. Provide actionable academic insights through statistical analytics, visual reporting, and grade prediction models.

---

## Core User Flow

1. User signs in securely through Clerk authentication.
2. Authentication determines user role (admin, instructor, or student).
3. User accesses role-specific dashboard and permitted system features.
4. Administrator or instructor creates courses, student records, and enrollment information.
5. Grade data (midterms, finals, assignments, attendance) is imported from CSV files or entered manually.
6. The system validates, processes, and stores academic records in the SQLite database.
7. Users access gradebooks using role-based permissions (admin, instructor, student).
8. The analytics engine computes GPA, rankings, pass/fail rates, and performance trends.
9. Visualization reports are generated for grade distributions, GPA trends, and course comparisons.
10. The prediction module analyzes historical performance data and predicts final grades.
11. The system flags at-risk students and generates alerts for instructors or administrators.
12. Reports are exported to JSON or displayed through the optional web frontend.
13. Selenium automation tests verify web-based data entry workflows.


---

## Features

### Clerk Authentication Integration

- Authentication and user management powered by Clerk.
- Secure sign-up, sign-in, and sign-out functionality.
- Role-based authentication support:
  - Administrator
  - Instructor
  - Student
- Protected routes and access-restricted pages in the frontend.
- Session management and persistent login handling.
- User profile management (name, email, role information).
- Integration between Clerk authentication and Python backend authorization logic.
- API request protection using authenticated user tokens.
- Support for secure frontend–backend communication in the ReactJS + Vite architecture.

### Object-Oriented Grade Management System

- Abstract `Person` class with derived `Student` and `Instructor` classes.
- `Course` class supporting enrollment management.
- `GradeBook` system using polymorphism for multiple grading models.
- Specialized grading schemes:
  - Weighted grading
  - Curved grading
  - Pass/Fail grading
- Role-based access control using decorators.

### File Import / Export Module

- Import academic data from CSV files:
  - Midterm grades
  - Final exam grades
  - Assignment records
  - Attendance data
- Export reports and summaries to JSON format.
- Batch processing of multiple files using multi-threading.
- Functional programming usage:
  - Lambda expressions for grade calculations
  - Map/filter operations for batch transformations.

### Database Management System

- SQLite database with normalized relational schema.
- Core tables:
  - Students
  - Instructors
  - Courses
  - Enrollments
  - Grades
  - Assignments
- CRUD operations for all major entities.
- Foreign key relationships for data integrity.
- Complex SQL queries for:
  - GPA calculation
  - Class rankings
  - Course statistics
  - At-risk student detection.

### Analytics Engine

- Pandas-powered academic analysis pipeline.
- Grade distribution analysis.
- GPA calculation and ranking generation.
- Pass/fail rate calculation.
- Correlation analysis:
  - Attendance vs. grades
  - Midterm vs. final performance
- Semester-over-semester trend analysis.

### Data Visualization Reports

- MatPlotLib-generated charts and graphs.
- Grade distribution histograms.
- GPA trend line visualizations.
- Course difficulty comparison charts.
- Box plots for performance spread analysis.
- Radar charts for multidimensional student performance analysis.

### Grade Prediction & Alert System

- Simple AI/ML prediction model using historical academic data.
- Predicts final grades using:
  - Midterm scores
  - Assignment completion rate
  - Attendance rate
- Early-warning system for identifying at-risk students.
- Performance recommendation alerts for instructors.

### Web Automation Testing

- Selenium-based automated testing framework.
- Automated form submission testing.
- Validation of web-based data entry workflows.
- End-to-end testing of frontend interaction.

### Bonus: Frontend & Client–Server Integration

- ReactJS + Vite frontend interface.
- API connection between frontend and Python backend.
- Interactive dashboards and data entry forms.
- User-friendly visualization and reporting interface.

---

## Scope

### In Scope

- Clerk authentication and role-based access management.
- Secure frontend authentication integrated with backend authorization.
- Python backend application using OOP architecture.
- Abstract classes, inheritance, polymorphism, and decorators.
- CSV/JSON data import/export.
- SQLite database integration and SQL query implementation.
- Pandas-based analytics and statistical analysis.
- MatPlotLib visualizations and reporting.
- Multi-threaded file processing.
- Basic machine learning prediction model.
- Selenium automated testing.
- ReactJS + Vite frontend integration.

### Out of Scope

- Enterprise-scale distributed database systems.
- Real-time cloud synchronization.
- Advanced deep learning or highly complex AI prediction systems.
- Production-level authentication frameworks (OAuth, SSO, etc.).
- Mobile application development.
- Large-scale deployment infrastructure (Docker/Kubernetes/cloud hosting).

---

## Success Criteria

1. The system successfully creates, manages, and stores student, instructor, course, enrollment, and grade records.
2. Users can import grade datasets from CSV files and export analytical reports to JSON format without data loss.
3. SQLite database operations maintain proper relational integrity and support advanced academic queries.
4. The analytics engine generates correct GPA calculations, rankings, correlations, and statistical summaries.
5. Visualization reports accurately display academic trends and performance distributions.
6. The prediction module produces reasonable final-grade predictions from historical academic inputs.
7. At-risk students are automatically identified and reported.
8. Multi-threaded batch processing handles multiple input files efficiently.
9. Selenium automation successfully validates data-entry workflows.
10. (Bonus) ReactJS frontend communicates successfully with the Python backend and presents system data interactively.
11. Users can securely authenticate, maintain sessions, and access only role-authorized features through Clerk integration.
12. Frontend authentication tokens are successfully validated by the backend for protected operations.