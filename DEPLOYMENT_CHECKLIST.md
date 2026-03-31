# Full-Stack Deployment Checklist

Follow this checklist to deploy the Employee Management System to Render (backend) and Vercel (frontend).

## Pre-Deployment Setup

- [ ] Create GitHub repository and push code
- [ ] Create Render account (https://render.com)
- [ ] Create Vercel account (https://vercel.com)
- [ ] Connect Render to GitHub
- [ ] Connect Vercel to GitHub

## Backend Deployment (Render)

### Preparation
- [ ] Review [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)
- [ ] Update `render.yaml` with your GitHub repository URL
- [ ] Ensure `backend/Dockerfile` exists and is correct
- [ ] Verify `pom.xml` Maven configuration
- [ ] Check Java version is 17

### Deployment Steps
- [ ] Push code to GitHub
- [ ] Log in to Render Dashboard
- [ ] Create new service or use Blueprint with `render.yaml`
- [ ] Configure environment variables:
  - [ ] `SPRING_DATASOURCE_URL`
  - [ ] `SPRING_JPA_DATABASE_PLATFORM`
  - [ ] `PORT`
- [ ] Trigger deployment
- [ ] Wait for build and deployment to complete (3-5 minutes)
- [ ] Copy backend URL (e.g., `https://ems-backend.onrender.com`)
- [ ] Test backend health endpoint: `https://ems-backend.onrender.com/actuator/health`

## Frontend Deployment (Vercel)

### Preparation
- [ ] Review [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
- [ ] Ensure `frontend/vercel.json` exists
- [ ] Check `frontend/.env.example` is present
- [ ] Verify `frontend/package.json` has correct build scripts
- [ ] Ensure `vite.config.ts` is properly configured

### Deployment Steps
- [ ] Push code to GitHub
- [ ] Log in to Vercel Dashboard
- [ ] Click "New Project" and import GitHub repository
- [ ] Select `frontend` as root directory
- [ ] Configure build settings:
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `dist`
  - [ ] Install command: `npm install`
- [ ] Add environment variables:
  - [ ] `VITE_API_URL`: `https://ems-backend.onrender.com/api` (use your Render URL)
- [ ] Deploy
- [ ] Wait for deployment to complete (1-2 minutes)
- [ ] Copy frontend URL (e.g., `https://ems-frontend.vercel.app`)

## Post-Deployment Configuration

### Backend - Update CORS
- [ ] Go to Render backend service dashboard
- [ ] Go to "Environment" tab
- [ ] Update `CORS_ALLOWED_ORIGINS` to: `https://ems-frontend.vercel.app` (use your Vercel URL)
- [ ] Save and wait for redeployment

### Frontend - Verify Environment Variables
- [ ] Go to Vercel project settings
- [ ] Verify `VITE_API_URL` is set correctly
- [ ] If not, update and redeploy

## Testing

### Backend Tests
- [ ] Test health endpoint: `curl https://ems-backend.onrender.com/actuator/health`
- [ ] Check backend logs in Render dashboard
- [ ] Verify API endpoints are accessible

### Frontend Tests
- [ ] Open frontend URL in browser
- [ ] Check browser console for errors (F12)
- [ ] Verify no CORS errors
- [ ] Test login functionality
- [ ] Test API calls (Dashboard, Employee List, etc.)
- [ ] Check Network tab for API requests

### Full Integration Tests
- [ ] [ ] Login with valid credentials
- [ ] [ ] Create new employee
- [ ] [ ] List all employees
- [ ] [ ] Update employee information
- [ ] [ ] Delete employee
- [ ] [ ] Submit leave request
- [ ] [ ] View leave requests

## Monitoring & Maintenance

### Ongoing Tasks
- [ ] Monitor Render backend logs weekly
- [ ] Monitor Vercel deployments weekly
- [ ] Check for build failures
- [ ] Review error logs in browser console
- [ ] Monitor application performance

### Database Backup (Important!)
- ⚠️ **Note**: Using H2 in-memory database - data is NOT persistent!
- [ ] Consider migrating to PostgreSQL for production
- [ ] Set up automated backups if using persistent database

### Scaling (Future)
- [ ] Upgrade Render plan if needed (free tier has limitations)
- [ ] Monitor Vercel analytics for traffic patterns
- [ ] Optimize images and assets if needed

## Troubleshooting

### Backend Issues
- [ ] Check Render logs for build errors
- [ ] Verify Maven dependencies are correct
- [ ] Confirm environment variables are set
- [ ] Test health endpoint

### Frontend Issues
- [ ] Check Vercel logs for build errors
- [ ] Verify API URL environment variable
- [ ] Check browser console for JavaScript errors
- [ ] Clear browser cache and reload

### API Connection Issues
- [ ] Verify CORS_ALLOWED_ORIGINS in backend
- [ ] Confirm API URL in frontend environment variables
- [ ] Check Network tab in browser for failed requests
- [ ] Test backend health endpoint directly

## Documentation Links

- [Render Deployment Guide](./RENDER_DEPLOYMENT.md)
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- [Docker Deployment Guide](./DOCKER_DEPLOYMENT.md)
- [Project README](./README.md)

## Support & Resources

- Render Documentation: https://render.com/docs
- Vercel Documentation: https://vercel.com/docs
- Spring Boot Docs: https://spring.io/projects/spring-boot
- React Docs: https://react.dev

---

**Deployment Date**: ___________
**Backend URL**: https://ems-backend.onrender.com
**Frontend URL**: https://ems-frontend.vercel.app
**Status**: 🟢 Live | 🟡 Testing | 🔴 Offline
