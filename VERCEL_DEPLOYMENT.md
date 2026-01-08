# 🚀 Vercel Deployment Guide - Backend

## ✅ Files Ready for Deployment

Your backend is now ready to deploy on Vercel!

---

## 📁 Required Files (Already Created)

1. ✅ `vercel.json` - Vercel configuration
2. ✅ `package.json` - Dependencies
3. ✅ `src/server.js` - Main server file
4. ✅ All source code in `src/` folder

---

## 🚀 Step-by-Step Deployment

### Step 1: Push to GitHub

```bash
cd backend
git init
git add .
git commit -m "Backend ready for Vercel deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Go to:** https://vercel.com
2. **Click:** "New Project"
3. **Import:** Your GitHub repository (backend folder)
4. **Root Directory:** Select `backend` folder
5. **Click:** "Deploy"

---

## ⚙️ Environment Variables (Vercel Dashboard)

After deployment, add these environment variables in Vercel Dashboard:

### Go to: Project Settings → Environment Variables

Add these:

```
PORT = 5001
NODE_ENV = production
CORS_ORIGIN = https://your-frontend-url.vercel.app

SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-gmail-app-password

MAIL_FROM = Codezyra Contact Form <your-email@gmail.com>
MAIL_TO = codezyrapakistan@gmail.com
```

**Important:** Replace with your actual values!

---

## 🔗 Update Frontend API URL

After backend deployment, you'll get a URL like:
```
https://your-backend-name.vercel.app
```

### Update Frontend Code:

**File:** `frontend/src/pages/Contact.jsx`

Change API endpoint from:
```javascript
fetch('/api/contact', ...)
```

To:
```javascript
fetch('https://your-backend-name.vercel.app/api/contact', ...)
```

**OR** create an environment variable in frontend:

**File:** `frontend/.env`
```
VITE_API_URL=https://your-backend-name.vercel.app
```

Then use:
```javascript
fetch(`${import.meta.env.VITE_API_URL}/api/contact`, ...)
```

---

## ✅ Verification Steps

1. **Check Backend Health:**
   ```
   https://your-backend-name.vercel.app/api/health
   ```
   Should return: `{"status":"ok","message":"Backend server is running"...}`

2. **Test Contact Form:**
   - Submit form on frontend
   - Check email delivery

---

## 🎯 Quick Deployment (Alternative)

If you don't want to use GitHub:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   cd backend
   vercel
   ```

4. Follow prompts and set environment variables when asked

---

## 📊 Deployment Structure

```
Vercel Deployment
├── Frontend: https://your-frontend.vercel.app
└── Backend: https://your-backend.vercel.app
    ├── GET  /
    ├── GET  /api/health
    └── POST /api/contact
```

---

## ⚠️ Important Notes

1. **CORS:** Make sure `CORS_ORIGIN` matches your frontend URL exactly
2. **Gmail:** Use App Password, not regular password
3. **Environment Variables:** Set all required variables in Vercel dashboard
4. **Port:** Vercel handles PORT automatically, but keep it in .env for compatibility

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution:** Update `CORS_ORIGIN` in Vercel environment variables to match frontend URL

### Issue: Email not sending
**Solution:** 
- Check Gmail App Password
- Verify SMTP credentials in Vercel environment variables
- Check Vercel function logs

### Issue: 404 Error
**Solution:** Make sure `vercel.json` is in backend root directory

---

## 📞 Your Backend Endpoints

After deployment, your API will be available at:

```
GET  https://your-backend.vercel.app/
GET  https://your-backend.vercel.app/api/health
POST https://your-backend.vercel.app/api/contact
```

---

## ✅ Deployment Checklist

- [ ] `vercel.json` created
- [ ] Push code to GitHub
- [ ] Create new project on Vercel
- [ ] Connect GitHub repository
- [ ] Set environment variables
- [ ] Deploy backend
- [ ] Get backend URL
- [ ] Update frontend with backend URL
- [ ] Test API endpoints
- [ ] Test contact form
- [ ] Verify email delivery

---

## 🎉 Success!

Once deployed, your backend will:
- ✅ Handle contact form submissions
- ✅ Send beautiful emails
- ✅ Work with your frontend on Vercel
- ✅ Scale automatically

---

**Need Help?** Check Vercel logs for any errors:
https://vercel.com/dashboard → Your Project → Functions

---

*Last updated: January 9, 2026*
