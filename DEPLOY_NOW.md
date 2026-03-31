# Quick Start: Deploy to Render & Vercel

## 🚀 Summary

Your application is now ready for deployment!

### Files Created:
- ✅ `RENDER_DEPLOYMENT.md` - Complete backend deployment guide
- ✅ `VERCEL_DEPLOYMENT.md` - Complete frontend deployment guide  
- ✅ `DEPLOYMENT_CHECKLIST.md` - Step-by-step checklist
- ✅ `render.yaml` - Render deployment configuration
- ✅ `frontend/vercel.json` - Vercel configuration
- ✅ `frontend/.env.example` - Environment variable template
- ✅ `backend/src/main/resources/application-prod.properties` - Production config
- ✅ Updated API configuration to support environment variables

### Configuration Updates:
- ✅ Frontend API now uses `VITE_API_URL` environment variable
- ✅ Backend port configuration uses `PORT` environment variable
- ✅ CORS and database settings configured for production

---

## ⚡ 5-Minute Quick Deploy

### Step 1: Push to GitHub (2 mins)
```bash
git add .
git commit -m "Add Render and Vercel deployment config"
git push origin main
```

### Step 2: Deploy Backend to Render (2 mins)

1. Visit https://render.com/dashboard
2. Click **"New +"** → **"Blueprint"**
3. Connect GitHub and select your repo
4. Deploy!

**After deployment, copy your backend URL:**
```
https://ems-backend.onrender.com
```

### Step 3: Deploy Frontend to Vercel (1 min)

1. Visit https://vercel.com/dashboard
2. Click **"Add New"** → **"Project"**
3. Import Git repository
4. Select `frontend` as root directory
5. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://ems-backend.onrender.com/api`
6. Deploy!

**After deployment, copy your frontend URL:**
```
https://ems-frontend.vercel.app
```

### Step 4: Configure CORS (1 min)

Go back to Render:
1. Select backend service
2. Go to "Environment" tab
3. Update or add:
   ```
   CORS_ALLOWED_ORIGINS=https://ems-frontend.vercel.app
   ```
4. Save

---

## 📋 Detailed Guides

For complete step-by-step instructions, see:
- **Backend**: [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)
- **Frontend**: [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

---

## 🔗 Your Deployment URLs (Fill after deployment)

| Component | URL |
|-----------|-----|
| Backend (Render) | `https://ems-backend.onrender.com` |
| Frontend (Vercel) | `https://ems-frontend.vercel.app` |

---

## ✅ Testing Checklist

After deployment:

```
Backend Tests:
- [ ] Health check: GET https://ems-backend.onrender.com/actuator/health
- [ ] Check logs in Render dashboard

Frontend Tests:
- [ ] Open frontend URL in browser
- [ ] Check browser console (F12) - no errors?
- [ ] Try logging in
- [ ] Test employee CRUD operations

Integration Tests:
- [ ] Create an employee
- [ ] View employee list
- [ ] Update an employee
- [ ] Delete an employee
- [ ] Submit leave request
```

---

## 💡 Important Notes

### Database
⚠️ **Current Setup**: Uses H2 in-memory database
- Data is NOT persisted between app restarts
- Fine for development/testing
- For production: Migrate to PostgreSQL

### Free Tier Limitations
- **Render**: 0.5 GB RAM, auto-spins down after 15 mins of inactivity
- **Vercel**: Great for frontends, generous bandwidth
- Both free tiers are suitable for development!

### Environment Variables
- Backend: Set in Render dashboard
- Frontend: Set in Vercel dashboard
- `.env.example` shows what variables are available

---

## 🆘 Troubleshooting

**CORS Errors in Frontend?**
- Check `CORS_ALLOWED_ORIGINS` in Render backend environment

**API calls failing?**
- Verify `VITE_API_URL` in Vercel environment variables
- Check if backend is running (health check endpoint)

**Vercel says "Command failed"?**
- Check build logs in Vercel dashboard
- Run locally: `cd frontend && npm run build`

**Render says "Build failed"?**
- Check logs in Render dashboard
- Ensure `pom.xml` is valid
- Verify Java 17 is available

See detailed guides for more troubleshooting!

---

## 📚 Resources

- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Spring Boot Docker Guide](https://spring.io/guides/gs/spring-boot-docker/)
- [Vite Guide](https://vitejs.dev/)

---

## ✨ Next Steps

1. ✅ Review this guide
2. ✅ Push code to GitHub
3. ✅ Deploy backend to Render
4. ✅ Deploy frontend to Vercel
5. ✅ Configure CORS
6. ✅ Test application
7. ✅ Monitor deployments

Happy deploying! 🎉
