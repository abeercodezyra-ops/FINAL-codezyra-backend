# 🚀 Quick Setup Guide - Codezyra Backend

## Step 1: Gmail Configuration (5 minutes)

### A. Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Click on "2-Step Verification"
3. Follow the steps to enable it

### B. Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. In "Select app" dropdown: Choose "Mail"
3. In "Select device" dropdown: Choose "Other (Custom name)"
4. Type: "Codezyra Backend"
5. Click "Generate"
6. **Copy the 16-character password** (you'll need this in next step)

## Step 2: Configure Backend (.env file)

1. Open: `backend/.env`
2. Update these lines with your information:

```env
# Replace with your Gmail address
SMTP_USER=your-email@gmail.com

# Replace with the 16-character App Password from Step 1
SMTP_PASS=xxxx xxxx xxxx xxxx

# Update sender email (use same as SMTP_USER)
MAIL_FROM=Codezyra Contact Form <your-email@gmail.com>

# This is where contact form emails will be sent
MAIL_TO=codezyrapakistan@gmail.com
```

**Example:**
```env
SMTP_USER=john.doe@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
MAIL_FROM=Codezyra Contact Form <john.doe@gmail.com>
MAIL_TO=codezyrapakistan@gmail.com
```

## Step 3: Start Backend Server

Open terminal in backend folder and run:

```bash
cd backend
npm run dev
```

You should see:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Codezyra Backend Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server running on: http://localhost:5000
✅ SMTP Server is ready to send emails
```

## Step 4: Test Contact Form

1. Make sure frontend is running: `npm run dev` (in main project folder)
2. Open: http://localhost:5173/contact
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (MAIL_TO address)

## ✅ Success Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated
- [ ] `.env` file updated with credentials
- [ ] Backend server running without errors
- [ ] "SMTP Server is ready" message appears
- [ ] Contact form sends email successfully
- [ ] Email received at MAIL_TO address

## 🐛 Troubleshooting

### "SMTP Configuration Error"
- Check SMTP_USER and SMTP_PASS in .env
- Make sure you're using App Password, not regular password
- Remove any spaces from the App Password

### "Email not received"
- Check spam/junk folder
- Verify MAIL_TO address in .env
- Check backend console for errors

### "Port already in use"
- Change PORT in .env to 5001 or 5002
- Update vite.config.js proxy to match new port

## 📧 Email Template Preview

When someone submits the contact form, you'll receive a beautiful HTML email with:
- 🎨 Gradient design
- 📋 All form fields organized
- 📧 Reply-to functionality
- 🎯 Professional formatting

## 🎉 That's It!

Your backend is now fully configured and ready to handle contact form submissions!

For detailed documentation, see: `backend/README.md`
