import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
} = process.env;

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === 'true',
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false // Allow self-signed certificates
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ SMTP Configuration Error:', error.message);
        console.log('Please check your .env file and ensure SMTP credentials are correct.');
    } else {
        console.log('✅ SMTP Server is ready to send emails');
    }
});

export default transporter;
