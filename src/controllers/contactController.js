import { sendContactEmail } from '../services/emailService.js';

/**
 * Handle contact form submission
 * POST /api/contact
 */
export const handleContactForm = async (req, res) => {
    try {
        const { name, email, company, budget, projectType, message } = req.body || {};

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and message are required fields.'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Please provide a valid email address.'
            });
        }

        // Send email
        await sendContactEmail({
            name,
            email,
            company,
            budget,
            projectType,
            message
        });

        // Success response
        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);

        res.status(500).json({
            success: false,
            error: 'Failed to send message. Please try again later or contact us directly at codezyrapakistan@gmail.com'
        });
    }
};

/**
 * Health check endpoint
 * GET /api/health
 */
export const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Backend server is running',
        timestamp: new Date().toISOString()
    });
};
