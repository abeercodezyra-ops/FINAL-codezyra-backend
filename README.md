# Codezyra Backend Server

Backend API server for Codezyra website with Nodemailer integration for contact form submissions.

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── email.js           # Email transporter configuration
│   ├── controllers/
│   │   └── contactController.js # Request handlers
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling middleware
│   ├── routes/
│   │   └── api.js             # API routes
│   ├── services/
│   │   └── emailService.js    # Email sending logic
│   └── server.js              # Main server file
├── .env                       # Environment variables (not in git)
├── .env.example              # Environment variables template
├── package.json
└── README.md
```

## 🚀 Features

- ✅ Contact form email handling with Nodemailer
- ✅ Professional HTML email templates
- ✅ Input validation
- ✅ Error handling
- ✅ CORS support
- ✅ Health check endpoint
- ✅ Request logging (development mode)

## 📋 Prerequisites

- Node.js >= 18
- Gmail account (or other SMTP service)

## 🔧 Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file and add your SMTP credentials (see Configuration section below)

## ⚙️ Configuration

### Gmail Setup (Recommended)

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Codezyra Backend"
   - Copy the 16-character password

3. **Update .env file**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
MAIL_FROM=Codezyra Contact Form <your-email@gmail.com>
MAIL_TO=codezyrapakistan@gmail.com
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment (development/production) | development |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:5173 |
| `SMTP_HOST` | SMTP server host | smtp.gmail.com |
| `SMTP_PORT` | SMTP server port | 587 |
| `SMTP_SECURE` | Use SSL/TLS | false |
| `SMTP_USER` | SMTP username/email | - |
| `SMTP_PASS` | SMTP password/app password | - |
| `MAIL_FROM` | Sender email address | - |
| `MAIL_TO` | Recipient email address | - |

## 🏃 Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT)

## 📡 API Endpoints

### GET /
Returns API information and available endpoints
```json
{
  "success": true,
  "message": "Codezyra Backend API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/api/health",
    "contact": "POST /api/contact"
  }
}
```

### GET /api/health
Health check endpoint
```json
{
  "status": "ok",
  "message": "Backend server is running",
  "timestamp": "2024-01-07T10:00:00.000Z"
}
```

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "budget": "$10k-$50k",
  "projectType": "Web App",
  "message": "I need a custom web application..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message here"
}
```

## 🧪 Testing

Test the contact form endpoint:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use App Passwords for Gmail (not your actual password)
- Keep SMTP credentials secure
- Enable 2-Step Verification on your email account
- Use environment-specific CORS origins in production

## 🐛 Troubleshooting

### Email not sending?

1. **Check SMTP credentials**: Verify `SMTP_USER` and `SMTP_PASS` in `.env`
2. **Gmail App Password**: Make sure you're using App Password, not regular password
3. **Check logs**: Look for error messages in the console
4. **Test SMTP connection**: The server verifies connection on startup

### CORS errors?

1. Update `CORS_ORIGIN` in `.env` to match your frontend URL
2. For development: `http://localhost:5173`
3. For production: Your actual domain

### Port already in use?

Change the `PORT` in `.env` file to a different port (e.g., 5001, 5002)

## 📝 License

Private - Codezyra

## 👥 Support

For issues or questions, contact: codezyrapakistan@gmail.com
