import express from 'express';
import { handleContactForm, healthCheck } from '../controllers/contactController.js';

const router = express.Router();

// Health check endpoint
router.get('/health', healthCheck);

// Contact form endpoint
router.post('/contact', handleContactForm);

export default router;
