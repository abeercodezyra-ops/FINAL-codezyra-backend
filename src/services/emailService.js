import transporter from '../config/email.js';

/**
 * Send contact form email
 * @param {Object} data - Contact form data
 * @returns {Promise<Object>} - Email send result
 */
export const sendContactEmail = async (data) => {
    const { name, email, company, projectType, message } = data;

    const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
    const MAIL_TO = process.env.MAIL_TO || process.env.SMTP_USER;

    const mailOptions = {
        from: MAIL_FROM,
        to: MAIL_TO,
        subject: `🚀 New Contact Form Submission - ${name}`,
        replyTo: email,
        text: `
New Contact Form Submission from Codezyra Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🙎🏻 Name: ༄${name}࿐
✉️ Email: ${email}
🏬 Company: ${company || 'Not provided'}
👩🏻‍💻 Project Type: ${projectType || 'Not provided'}

💬 Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was sent from the Codezyra contact form.
Reply to this email to respond directly to ${name}.
        `.trim(),
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
            padding: 40px 20px;
        }
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
        }
        .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
            padding: 50px 40px;
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 60%);
        }
        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #0ea5e9, #10b981, #0ea5e9);
        }
        .header h1 {
            color: white;
            font-size: 36px;
            font-weight: 900;
            margin-bottom: 12px;
            text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
            letter-spacing: -0.5px;
        }
        .header p {
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-weight: 700;
            position: relative;
            z-index: 1;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .content {
            padding: 45px 40px;
        }
        .info-card {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            border-radius: 20px;
            padding: 0;
            margin-bottom: 28px;
            border: 2px solid #10b981;
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12);
            overflow: hidden;
        }
        .info-row {
            display: flex;
            align-items: center;
            padding: 24px 28px;
            border-bottom: 2px solid #f3f4f6;
            transition: background 0.2s;
        }
        .info-row:hover {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .icon {
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            line-height: 1;
            margin-right: 20px;
            flex-shrink: 0;
        }
        .icon span {
            display: block;
            line-height: 1;
        }
        .info-content {
            flex: 1;
        }
        .info-label {
            font-size: 11px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        .info-value {
            font-size: 17px;
            font-weight: 700;
            color: #111827;
            word-break: break-word;
        }
        .info-value a {
            color: #10b981;
            text-decoration: none;
            transition: color 0.2s;
            font-weight: 800;
        }
        .info-value a:hover {
            color: #059669;
            text-decoration: underline;
        }
        .message-card {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-radius: 20px;
            padding: 28px 30px;
            border: 2px solid #10b981;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.15);
        }
        .message-header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            padding-bottom: 14px;
            border-bottom: 2px solid rgba(16, 185, 129, 0.2);
        }
        .message-icon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            line-height: 1;
            margin-right: 14px;
        }
        .message-icon span {
            display: block;
            line-height: 1;
        }
        .message-label {
            font-size: 13px;
            font-weight: 800;
            color: #065f46;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .message-text {
            font-size: 16px;
            color: #064e3b;
            line-height: 1.8;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-weight: 500;
        }
        .footer {
            background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
            padding: 35px 40px;
            text-align: center;
            border-top: 2px solid #e5e7eb;
        }
        .footer p {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 10px;
            line-height: 1.6;
        }
        .footer .highlight {
            color: #10b981;
            font-weight: 700;
        }
        .footer strong {
            color: #111827;
        }
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 800;
            margin-top: 4px;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🚀 New Contact Inquiry</h1>
            <p>Codezyra Website Contact Form</p>
        </div>
        
        <div class="content">
            <div class="info-card">
                <div class="info-row">
                    <div class="icon"><span>👤</span></div>
                    <div class="info-content">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">${name}</div>
                    </div>
                </div>
                
                <div class="info-row">
                    <div class="icon"><span>📧</span></div>
                    <div class="info-content">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">
                            <a href="mailto:${email}">${email}</a>
                        </div>
                    </div>
                </div>
                
                ${company ? `
                <div class="info-row">
                    <div class="icon"><span>🏢</span></div>
                    <div class="info-content">
                        <div class="info-label">Company</div>
                        <div class="info-value">${company}</div>
                    </div>
                </div>
                ` : ''}
                
                ${projectType ? `
                <div class="info-row">
                    <div class="icon"><span>📱</span></div>
                    <div class="info-content">
                        <div class="info-label">Project Type</div>
                        <div class="info-value">
                            <span class="badge">${projectType}</span>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
            
            <div class="message-card">
                <div class="message-header">
                    <div class="message-icon"><span>💬</span></div>
                    <div class="message-label">Message</div>
                </div>
                <div class="message-text">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the <span class="highlight">Codezyra Contact Form</span></p>
            <p>Click reply to respond directly to <strong>${name}</strong></p>
            <p style="margin-top: 16px; font-size: 11px; color: #94a3b8;">
                © ${new Date().getFullYear()} Codezyra. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Email send error:', error);
        throw error;
    }
};
