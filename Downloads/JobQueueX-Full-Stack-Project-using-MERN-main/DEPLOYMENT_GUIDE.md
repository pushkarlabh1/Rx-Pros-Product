# Deployment Guide for Taskify MERN Application

## Overview
Your Taskify application consists of two parts:
1. Frontend (React/Vite app) - Deployed on Vercel
2. Backend (Node.js/Express API) - Needs to be deployed on a separate platform

## Deployment Steps

### 1. Deploy Backend (Server)
Deploy the `/server` folder to a platform like:
- Render (https://render.com)
- Railway (https://railway.app) 
- Heroku (https://heroku.com)
- DigitalOcean (https://digitalocean.com)

#### Example deployment to Render:
1. Create a new Web Service
2. Connect your GitHub repository
3. Select the `/server` directory
4. Set the runtime to Node
5. Add environment variables:
   - MONGODB_URI: your MongoDB connection string
   - JWT_SECRET: your JWT secret
   - PORT: 1000 (or let Render set it)

### 2. Update Frontend API Configuration
After deploying your backend, update the API URL in your frontend:

Update `/client/src/redux/slices/apiSlice.js`:
```javascript
// Replace with your deployed backend URL
const API_URL = "https://your-backend-url.onrender.com/api"; // or your actual backend URL

const baseQuery = fetchBaseQuery({ 
  baseUrl: API_URL,
  credentials: 'include' // Important for cookie-based auth
});
```

### 3. Deploy Frontend to Vercel
1. Push your updated code to GitHub
2. Connect your repository to Vercel
3. Set build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `/client`

### 4. Environment Variables for Production
For your deployed frontend, you may need to set environment variables in Vercel:
- REACT_APP_API_URL: your deployed backend URL

## Backend server.js for Deployment
If your backend doesn't have the proper configuration for deployment, make sure your `server/index.js` is properly configured with environment variables.

## Important Notes
- The frontend and backend must be deployed separately
- The backend URL must be accessible from the frontend
- CORS settings should allow your frontend domain
- Cookie-based authentication works across domains with proper CORS configuration
- Make sure your MongoDB connection string is secure and not exposed to the frontend

## Local Development
For local development, both servers run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Backend API: http://localhost:8080/api