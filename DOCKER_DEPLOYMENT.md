# Docker Deployment Guide

This guide covers deploying the Employee Management System using Docker and Docker Compose.

## Prerequisites

1. **Docker Desktop** (includes Docker and Docker Compose)
   - Windows: https://www.docker.com/products/docker-desktop
   - Mac: https://www.docker.com/products/docker-desktop
   - Linux: Follow your distro's package manager

2. Verify installation:
   ```bash
   docker --version
   docker-compose --version
   ```

## Quick Start

### 1. Build and Run All Services
From the project root directory:

```bash
# Build images and start containers
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

The application will be available at:
- Frontend: http://localhost:5175
- Backend API: http://localhost:8081
- H2 Database: http://localhost:8081/h2-console

### 2. Stop Services
```bash
docker-compose down
```

## Detailed Instructions

### Building Images

#### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose build --no-cache
```

#### Option 2: Build Individually
```bash
# Backend
cd backend
docker build -t ems-backend:1.0 .

# Frontend
cd frontend
docker build -t ems-frontend:1.0 .
```

### Running Containers

#### Option 1: Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop all services
docker-compose down

# Remove volumes (clears database)
docker-compose down -v
```

#### Option 2: Individual Containers
```bash
# Backend
docker run -d -p 8081:8081 \
  -e SPRING_DATASOURCE_URL=jdbc:h2:mem:employeedb \
  --name ems-backend \
  ems-backend:1.0

# Frontend
docker run -d -p 5175:5175 \
  -e VITE_API_URL=http://localhost:8081/api \
  --name ems-frontend \
  ems-frontend:1.0
```

## Environment Variables

### Backend
- `SPRING_DATASOURCE_URL` - Database URL
- `SPRING_DATASOURCE_USERNAME` - DB username
- `SPRING_DATASOURCE_PASSWORD` - DB password
- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRATION` - JWT token expiration time

### Frontend
- `VITE_API_URL` - Backend API URL

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 8081
lsof -i :8081  # macOS/Linux
netstat -ano | findstr :8081  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change ports in docker-compose.yml
```

### Container Won't Start
```bash
# Check logs
docker-compose logs backend
docker-compose logs frontend

# Rebuild without cache
docker-compose build --no-cache
```

### Database Issues
```bash
# Clear everything and start fresh
docker-compose down -v
docker-compose up --build
```

## Production Deployment

### Best Practices

1. **Use named volumes for persistent data:**
   ```yaml
   volumes:
     db_data:
   ```

2. **Set secure environment variables:**
   - Use `.env` files (don't commit to git)
   - Use Docker secrets for production

3. **Use restart policies:**
   ```yaml
   restart_policy:
     condition: on-failure
     delay: 5s
     max_attempts: 3
   ```

4. **Health checks:**
   Already implemented in docker-compose.yml

5. **Resource limits:**
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '1'
         memory: 1G
   ```

### Cloud Deployment

#### Docker Hub
```bash
# Tag image
docker tag ems-backend:1.0 yourusername/ems-backend:1.0

# Push to Docker Hub
docker push yourusername/ems-backend:1.0
```

#### AWS ECS
```bash
# Create ECR repository
aws ecr create-repository --repository-name ems-backend

# Push image
docker tag ems-backend:1.0 <aws_account>.dkr.ecr.<region>.amazonaws.com/ems-backend:1.0
docker push <aws_account>.dkr.ecr.<region>.amazonaws.com/ems-backend:1.0
```

#### Azure Container Registry
```bash
# Push to Azure
docker tag ems-backend:1.0 yourregistry.azurecr.io/ems-backend:1.0
docker push yourregistry.azurecr.io/ems-backend:1.0
```

#### Kubernetes
Use the docker-compose.yml as reference to create Kubernetes manifests with `kompose`:
```bash
kompose convert -f docker-compose.yml
kubectl apply -f .
```

## Useful Commands

```bash
# List running containers
docker ps

# Enter container shell
docker-compose exec backend /bin/sh

# View container stats
docker stats

# Remove unused images/containers
docker system prune

# Remove all
docker system prune -a
```

## Support

For issues, check:
1. Docker Desktop logs
2. Container logs: `docker-compose logs`
3. Port availability
4. Firewall settings
