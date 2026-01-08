import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import { errorHandler, notFoundHandler, requestLogger } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const {
    PORT = 5000,
    CORS_ORIGIN = '*',
    NODE_ENV = 'development'
} = process.env;

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request logger (only in development)
if (NODE_ENV === 'development') {
    app.use(requestLogger);
}

// API Routes
app.use('/api', apiRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Codezyra Backend API',
        version: '1.0.0',
        endpoints: {
            health: '/api/health',
            contact: 'POST /api/contact'
        }
    });
});

// 404 Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 Codezyra Backend Server');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📡 Server running on: http://localhost:${PORT}`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`🔗 CORS Origin: ${CORS_ORIGIN}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📋 Available Endpoints:');
    console.log(`   GET  / - API Info`);
    console.log(`   GET  /api/health - Health Check`);
    console.log(`   POST /api/contact - Contact Form`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nSIGINT signal received: closing HTTP server');
    process.exit(0);
});
