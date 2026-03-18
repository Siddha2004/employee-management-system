
  # Employee Management System

This is a full-stack Employee Management System with React frontend and Spring Boot backend. The original project is available at https://www.figma.com/design/O3pjlvqsBPGeItAg8oJNOF/Employee-Management-System.

## Project Structure

```
Employee Management System/
├── frontend/                   # React frontend application
│   ├── src/                    # React source code
│   ├── index.html             # Main HTML file
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.ts         # Vite configuration
│   └── ...
├── backend/                    # Spring Boot backend application
│   ├── src/                   # Java source code
│   ├── pom.xml                # Maven configuration
│   └── ...
└── README.md                  # This file
```

## Architecture

- **Frontend**: React with TypeScript, Vite, Tailwind CSS
- **Backend**: Spring Boot with JPA, H2 Database

## Running the Application

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at http://localhost:5173

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

## Quick Start

### Option 1: Automated Start (Windows)
Run the start script to launch both servers automatically:
```bash
start.bat
```

### Option 2: Manual Start

To run the full application manually:

1. **Start the backend** (in terminal 1):
   ```bash
   cd backend
   mvn spring-boot:run
   ```

2. **Start the frontend** (in terminal 2):
   ```bash
   cd frontend
   npm install  # (only needed first time)
   npm run dev
   ```

3. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8080/api/employees
   - H2 Database Console: http://localhost:8080/h2-console

## API Documentation

The backend provides RESTful APIs for employee management. See `backend/README.md` for detailed API endpoints.
  