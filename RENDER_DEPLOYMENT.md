# Backend Deployment Guide - Render

This guide covers deploying the Spring Boot backend to Render.

## Prerequisites

1. [Render Account](https://render.com/) (free tier available)
2. [Git](https://git-scm.com/) installed
3. GitHub repository with your code

## Step 1: Push Code to GitHub

1. Initialize Git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

## Step 2: Create render.yaml

A `render.yaml` file has already been created in the root directory. This file defines your Render deployment configuration.

## Step 3: Deploy on Render

### Option A: Using render.yaml (Recommended)

1. Log in to [Render Dashboard](https://dashboard.render.com/)

2. Click **"New +"** → **"Blueprint"**

3. Connect your GitHub repository:
   - Click **"Connect Repository"**
   - Authorize Render to access your GitHub
   - Select your repository

4. Select the repository and click **"Deploy"**

5. Render will automatically:
   - Detect the `render.yaml` file
   - Build the Docker image
   - Deploy the backend service

### Option B: Manual Service Creation

1. Log in to [Render Dashboard](https://dashboard.render.com/)

2. Click **"New +"** → **"Web Service"**

3. Connect your GitHub repository

4. Fill in the configuration:
   - **Name**: `ems-backend` (or your preferred name)
   - **Region**: Choose a region close to your users
   - **Branch**: `main`
   - **Runtime**: `Docker`
   - **Build Command**: `./mvnw clean package`
   - **Start Command**: `java -jar target/*.jar`

5. Add environment variables:
   - `SPRING_DATASOURCE_URL`: `jdbc:h2:mem:employeedb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE`
   - `PORT`: `10000` (Render's default)
   - Any other configuration needed

6. Click **"Create Web Service"**

7. Wait for the deployment to complete (typically 3-5 minutes)

## Step 4: Get Your Backend URL

Once deployed:

1. Go to your service dashboard on Render
2. Copy the service URL (e.g., `https://ems-backend.onrender.com`)
3. Use this URL for frontend API calls

## Environment Variables

Configure these in the Render dashboard under **"Environment"**:

```
SPRING_DATASOURCE_URL=jdbc:h2:mem:employeedb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.H2Dialect
PORT=10000
CORS_ALLOWED_ORIGINS=https://your-vercel-frontend-url
```

## Monitoring and Logs

1. View logs in real-time:
   - Go to your service dashboard
   - Click **"Logs"** tab
   - Scroll to see recent logs

2. View metrics:
   - Click **"Metrics"** tab to see CPU and memory usage

3. Redeploy:
   - Push changes to GitHub
   - Render automatically redeploys on push (if auto-deploy is enabled)
   - Or manually click **"Redeploy"** in the dashboard

## Troubleshooting

### Build Fails
- Check logs: Look for MVP errors or missing dependencies
- Ensure `pom.xml` is configured correctly
- Verify Java version is 17

### Application Won't Start
- Check environment variables are set correctly
- Ensure the application properties are correct
- Check if port binding is correct

### CORS Issues
- Update `CORS_ALLOWED_ORIGINS` in environment variables
- Update the backend application properties

## Database Persistence

⚠️ **Important**: H2 in-memory database does NOT persist data between restarts!

For production with data persistence, consider:
1. **PostgreSQL on Render** - Add a PostgreSQL database to your blueprint
2. **External Database** - Use AWS RDS, Azure Database, or similar

Update your `application-prod.properties`:
```properties
spring.datasource.url=jdbc:postgresql://your-db-host:5432/postgres
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

## Cost Considerations

- **Free Tier**: One service, limited resources, but fine for development
- **Paid Plans**: Starting from $7/month for production use
- Check [Render Pricing](https://render.com/pricing) for details

## Next Steps

After backend deployment:
1. Copy the backend URL from Render dashboard
2. Update frontend configuration to use this URL
3. Deploy frontend to Vercel (see VERCEL_DEPLOYMENT.md)
4. Test the full-stack application

## Support

For issues, check:
- [Render Docs](https://render.com/docs)
- [Spring Boot Docker Deployment](https://spring.io/guides/gs/spring-boot-docker/)
