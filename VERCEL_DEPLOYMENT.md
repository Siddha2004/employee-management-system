# Frontend Deployment Guide - Vercel

This guide covers deploying the React frontend to Vercel.

## Prerequisites

1. [Vercel Account](https://vercel.com/) (free tier available)
2. [Git](https://git-scm.com/) installed
3. GitHub repository with your code
4. Deployed backend on Render (see RENDER_DEPLOYMENT.md)

## Step 1: Prepare Environment Variables

A `vercel.json` file and `.env.example` have been created in the frontend directory.

1. In the `frontend` directory, check the `.env.example`:
   ```
   VITE_API_URL=https://your-render-backend-url/api
   ```

2. Update this with your actual Render backend URL:
   ```
   VITE_API_URL=https://ems-backend.onrender.com/api
   ```

## Step 2: Push Code to GitHub (if not already done)

```bash
git add .
git commit -m "Add Vercel deployment config"
git push origin main
```

## Step 3: Deploy on Vercel

### Option A: Using Vercel CLI (Quick)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from the project root:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project? → No (first time)
   - Project name → `employee-management-system` or your choice
   - Which scope? → Your Vercel account
   - Detected location of code → `./frontend`
   - Want to modify settings? → Yes
   - Build command → `npm run build` (should auto-detect)
   - Output directory → `dist`

4. Set environment variables when prompted or in the Vercel dashboard

### Option B: Using Vercel Web Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)

2. Click **"New Project"**

3. Click **"Import Git Repository"**

4. Connect your GitHub account and select your repository

5. Configure the project:
   - **Project Name**: `employee-management-system` (or your choice)
   - **Framework Preset**: Select **"Vite"** (or it may auto-detect)
   - **Root Directory**: Select **"frontend"**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Add Environment Variables:
   - Click **"Environment Variables"**
   - Add:
     - **Name**: `VITE_API_URL`
     - **Value**: `https://ems-backend.onrender.com/api` (replace with your actual backend URL)
   - Click **"Add"**

7. Click **"Deploy"**

8. Wait for deployment to complete (typically 1-2 minutes)

## Step 4: Get Your Frontend URL

Once deployed:

1. Go to your project dashboard on Vercel
2. Copy the deployment URL (e.g., `https://employee-management-system.vercel.app`)
3. This is your public frontend URL

## Step 5: Update Backend CORS Settings (Important!)

Update your Render backend's CORS settings:

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Select your backend service
3. Go to **"Environment"** tab
4. Update or add:
   ```
   CORS_ALLOWED_ORIGINS=https://employee-management-system.vercel.app
   ```
5. Click **"Save"** and wait for redeployment

## Monitoring and Logs

1. View deployment logs:
   - Go to your Vercel project dashboard
   - Click **"Deployments"** tab
   - Click on the latest deployment
   - View build and runtime logs

2. View real-time logs:
   - Click **"Overview"** tab
   - Access **"Runtime Logs"** section

3. View analytics:
   - Click **"Analytics"** tab to see page views and performance

## Automatic Deployments

By default, Vercel automatically:
- Deploys on every push to your main branch
- Creates preview deployments for pull requests
- Redeploys on any environment variable changes

To disable auto-deploy:
1. Go to project **"Settings"**
2. Go to **"Git"** section
3. Uncheck **"Deploy on push"**

## Environment Configuration per Environment

### Development
```
VITE_API_URL=http://localhost:8081/api
```

### Production
```
VITE_API_URL=https://ems-backend.onrender.com/api
```

Switch between these by creating a `.env.local` file locally:
```bash
# For local development, create .env.local
echo "VITE_API_URL=http://localhost:8081/api" > frontend/.env.local
```

Then Vercel will use the production URL from the dashboard.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally: `cd frontend && npm run build`
- Check for TypeScript errors: `npx tsc --noEmit`

### Blank Page or 404 Errors
- Check browser console for errors (F12)
- Verify `VITE_API_URL` environment variable is set correctly
- Ensure backend server is running and accessible

### API Calls Fail or Show CORS Errors
- Check browser Network tab for failed requests
- Verify backend `CORS_ALLOWED_ORIGINS` includes your Vercel URL
- Ensure backend is deployed and running on Render

### Environment Variables Not Loading
- Redeploy the application after adding/updating environment variables
- In Vercel dashboard, go to project settings and click **"Redeploy"**

## Performance Optimization

Vercel automatically:
- Minifies and optimizes your build
- Serves from CDN globally
- Caches assets with proper headers
- Implements edge caching

For custom caching options, see [Vercel Documentation](https://vercel.com/docs/concepts/edge-network/caching).

## Custom Domain (Optional)

1. Go to your Vercel project **"Settings"**
2. Go to **"Domains"** section
3. Add your custom domain
4. Update DNS records according to Vercel's instructions

## Next Steps

1. ✅ Backend deployed on Render
2. ✅ Frontend deployed on Vercel
3. Test the full-stack application:
   - Open frontend URL in browser
   - Verify API calls work
   - Test all features

## Support

For issues, check:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
