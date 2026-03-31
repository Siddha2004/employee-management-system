
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

### Option 1: Docker Deployment (Recommended)
Run the entire application using Docker Compose:
```bash
docker-compose up --build
```

To run in background:
```bash
docker-compose up -d --build
```

To view logs:
```bash
docker-compose logs -f
```

To stop:
```bash
docker-compose down
```

### Option 2: Automated Start (Windows)
Run the start script to launch both servers automatically:
```bash
start.bat
```

### Option 3: Manual Start

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
   - Backend API: http://localhost:8081/api/employees
   - H2 Database Console: http://localhost:8081/h2-console

## Docker Deployment

### Prerequisites
- Docker (v20.10+)
- Docker Compose (v2.0+)

### Structure
The project includes Docker configuration for both services:
- `backend/Dockerfile` - Multi-stage build for Spring Boot application
- `frontend/Dockerfile` - Multi-stage build for React application
- `docker-compose.yml` - Orchestration for both services

### Docker Features
- **Multi-stage builds** - Optimized image sizes
- **Health checks** - Backend health monitoring
- **Environment variables** - Easy configuration
- **Service dependencies** - Frontend waits for backend

### Build Individual Images
```bash
# Backend
cd backend
docker build -t ems-backend:latest .

# Frontend
cd frontend
docker build -t ems-frontend:latest .
```

### Run Individual Containers
```bash
# Backend
docker run -p 8081:8081 ems-backend:latest

# Frontend
docker run -p 5175:5175 ems-frontend:latest
```

### Docker Commands Reference
```bash
# View running containers
docker-compose ps

# View service logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Execute command in running container
docker-compose exec backend /bin/sh

# Rebuild specific service
docker-compose up --build backend

# Remove all containers and volumes
docker-compose down -v
```

## API Documentation

The backend provides RESTful APIs for employee management. See `backend/README.md` for detailed API endpoints.
  