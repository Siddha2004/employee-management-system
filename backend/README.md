# Employee Management System - Backend

This is the Spring Boot backend for the Employee Management System.

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## Running the Application

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start on http://localhost:8080

## API Endpoints

- GET /api/employees - Get all employees
- GET /api/employees/{id} - Get employee by ID
- POST /api/employees - Create new employee
- PUT /api/employees/{id} - Update employee
- DELETE /api/employees/{id} - Delete employee

## Database

The application uses H2 in-memory database for development. You can access the H2 console at http://localhost:8080/h2-console

## CORS

CORS is configured to allow requests from the React frontend running on http://localhost:5173