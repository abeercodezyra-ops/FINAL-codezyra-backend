import express from 'express';
import { handleContactForm, handleNewsletterSubscription, healthCheck } from '../controllers/contactController.js';

const router = express.Router();

// Health check endpoint
router.get('/health', healthCheck);

// Contact form endpoint
router.post('/contact', handleContactForm);

// Newsletter subscription endpoint
router.post('/newsletter', handleNewsletterSubscription);

export default router;
