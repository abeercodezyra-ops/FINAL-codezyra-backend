# 🧪 Backend Connection Testing

## File: `test-connection.js`

### ✅ Purpose
This is a **testing utility** to verify that your backend server is working correctly. It tests:
1. ✅ Backend Root Endpoint (`/`)
2. ✅ Health Check Endpoint (`/api/health`)
3. ✅ Contact Form Endpoint (`/api/contact`)

---

## 🎯 Is This File Safe in Backend Folder?

**YES! ✅ Completely safe.** Here's why:

1. **Not Deployed to Vercel**
   - `vercel.json` only deploys `src/server.js`
   - This test file stays local
   - Won't affect production

2. **Development Tool Only**
   - Used for testing during development
   - Not part of the server code
   - Can be safely kept in backend folder

3. **Won't Interfere**
   - Doesn't run automatically
   - Only runs when you execute it
   - Separate from server process

---

## 🚀 How to Use

### Step 1: Start Backend Server
```bash
cd backend
npm run dev
```

### Step 2: Run Connection Test (in another terminal)
```bash
cd backend
npm run test-connection
```

**OR**

```bash
cd backend
node test-connection.js
```

---

## 📊 What It Tests

### 1. Root Endpoint Test
```
GET http://localhost:5001/
```
Checks if backend is accessible and returns API info.

### 2. Health Check Test
```
GET http://localhost:5001/api/health
```
Verifies backend health status.

### 3. Contact Form Test
```
POST http://localhost:5001/api/contact
```
Tests contact form submission (sends test email if SMTP is configured).

---

## ✅ Expected Output

### If Everything Works:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧪 BACKEND-FRONTEND CONNECTION TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 Testing Backend Root Endpoint...
✅ Backend root is accessible!

🔍 Testing Backend Health Check...
✅ Backend is healthy!

🔍 Testing Contact Form Endpoint...
✅ Contact endpoint works!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 TEST SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Root Endpoint:     ✅ PASS
Health Check:      ✅ PASS
Contact Endpoint:  ✅ PASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Backend is properly configured and accessible!
```

### If Backend is Not Running:
```
❌ Cannot connect to backend
   Error: fetch failed
   Make sure backend is running: npm run dev
```

### If SMTP Not Configured:
```
⚠️  Contact endpoint needs SMTP configuration in .env file
   See: backend/SETUP_GUIDE.md for instructions
```

---

## 🔧 Troubleshooting

### Problem: "Cannot connect to backend"
**Solution:**
```bash
# Make sure backend is running
cd backend
npm run dev
```

### Problem: "Contact endpoint failed"
**Solution:**
- Check `.env` file has SMTP credentials
- Verify Gmail App Password is correct
- Check SMTP_USER and SMTP_PASS are set

### Problem: "Port 5001 in use"
**Solution:**
- Stop other processes using port 5001
- Or change PORT in `.env` file

---

## 📁 File Structure

```
backend/
├── src/                    ← Actual backend code (deployed)
│   ├── server.js
│   ├── routes/
│   └── ...
│
├── test-connection.js      ← Testing utility (NOT deployed)
├── package.json
├── vercel.json            ← Only deploys src/
└── .env
```

---

## ⚙️ Vercel Deployment

**This file is NOT deployed to Vercel:**

```json
// vercel.json
{
  "builds": [
    { "src": "src/server.js" }  ← Only this is deployed
  ]
}
```

So `test-connection.js` stays local and won't affect production! ✅

---

## 🎯 Summary

| Aspect | Status |
|--------|--------|
| **Safe in backend folder?** | ✅ YES |
| **Will it interfere?** | ❌ NO |
| **Deployed to Vercel?** | ❌ NO |
| **Useful for testing?** | ✅ YES |
| **Backend connection OK?** | ✅ YES (if tests pass) |

---

## 💡 When to Run This Test

✅ **Run this when:**
- After setting up backend
- After changing .env configuration
- Before deploying to production
- To verify backend is working
- To troubleshoot connection issues

❌ **Don't need to run when:**
- Backend is already working
- During normal development
- In production (use health endpoint instead)

---

## 📞 Quick Commands

```bash
# Start backend
npm run dev

# Test connection (new terminal)
npm run test-connection

# Check specific endpoint manually
curl http://localhost:5001/api/health
```

---

**✅ Your backend is properly set up and this test file is safely placed!**

No issues with having `test-connection.js` in the backend folder. 🎉
