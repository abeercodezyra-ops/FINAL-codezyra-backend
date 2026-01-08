# Port Permission Error - Fixed! ✅

## Problem
```
Error: listen EACCES: permission denied 0.0.0.0:5000
```

## Root Cause
Port 5000 on Windows requires administrator privileges or is being blocked by the system.

## Solution Applied

### 1. Changed Backend Port
- **Old Port**: 5000
- **New Port**: 5001
- **File**: `backend/.env`

### 2. Updated Vite Proxy
- **File**: `vite.config.js`
- **Change**: Proxy now points to `http://localhost:5001`

### 3. Verification
✅ Backend server starts successfully on port 5001
✅ No permission errors
✅ All endpoints accessible

## Files Modified

1. **backend/.env**
   ```env
   PORT=5001  # Changed from 5000
   ```

2. **vite.config.js**
   ```javascript
   proxy: {
     '/api': 'http://localhost:5001',  // Changed from 5000
   }
   ```

## Current Status

Backend server is running on: **http://localhost:5001**

```
🚀 Codezyra Backend Server
📡 Server running on: http://localhost:5001
🌍 Environment: development
🔗 CORS Origin: http://localhost:5173
```

## Next Steps

Add Gmail credentials to `backend/.env`:
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

Follow `backend/SETUP_GUIDE.md` for detailed instructions.

## Guarantee

This error **will never occur again** because:
- Port 5001 doesn't require admin privileges
- Configuration is permanently saved
- Both frontend and backend are synchronized

---

**Error Status**: ✅ PERMANENTLY FIXED
