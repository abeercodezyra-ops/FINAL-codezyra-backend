/**
 * Connection Test Script
 * Tests backend-frontend connectivity
 */

// Test Backend Health Check
async function testBackendHealth() {
    console.log('\n🔍 Testing Backend Health Check...');
    try {
        const response = await fetch('http://localhost:5001/api/health');
        const data = await response.json();
        
        if (response.ok && data.status === 'ok') {
            console.log('✅ Backend is healthy!');
            console.log('   Status:', data.status);
            console.log('   Message:', data.message);
            console.log('   Timestamp:', data.timestamp);
            return true;
        } else {
            console.log('❌ Backend health check failed');
            return false;
        }
    } catch (error) {
        console.log('❌ Cannot connect to backend');
        console.log('   Error:', error.message);
        console.log('   Make sure backend is running: npm run dev');
        return false;
    }
}

// Test Contact Form Endpoint
async function testContactEndpoint() {
    console.log('\n🔍 Testing Contact Form Endpoint...');
    try {
        const testData = {
            name: 'Test User',
            email: 'test@example.com',
            company: 'Test Company',
            projectType: 'Web App',
            message: 'This is a test message from the connection test script.'
        };

        const response = await fetch('http://localhost:5001/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testData)
        });

        const data = await response.json();
        
        if (response.ok && data.success) {
            console.log('✅ Contact endpoint works!');
            console.log('   Response:', data.message);
            return true;
        } else {
            console.log('⚠️  Contact endpoint responded but with error:');
            console.log('   Error:', data.error);
            console.log('   This might mean SMTP is not configured yet.');
            return false;
        }
    } catch (error) {
        console.log('❌ Cannot connect to contact endpoint');
        console.log('   Error:', error.message);
        return false;
    }
}

// Test Backend Root
async function testBackendRoot() {
    console.log('\n🔍 Testing Backend Root Endpoint...');
    try {
        const response = await fetch('http://localhost:5001/');
        const data = await response.json();
        
        if (response.ok && data.success) {
            console.log('✅ Backend root is accessible!');
            console.log('   API:', data.message);
            console.log('   Version:', data.version);
            console.log('   Endpoints:', JSON.stringify(data.endpoints, null, 2));
            return true;
        } else {
            console.log('❌ Backend root check failed');
            return false;
        }
    } catch (error) {
        console.log('❌ Cannot connect to backend root');
        console.log('   Error:', error.message);
        return false;
    }
}

// Main test runner
async function runTests() {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🧪 BACKEND-FRONTEND CONNECTION TEST');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Testing backend at: http://localhost:5001');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const results = {
        root: false,
        health: false,
        contact: false
    };

    // Run tests
    results.root = await testBackendRoot();
    results.health = await testBackendHealth();
    results.contact = await testContactEndpoint();

    // Summary
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 TEST SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Root Endpoint:     ${results.root ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Health Check:      ${results.health ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Contact Endpoint:  ${results.contact ? '✅ PASS' : '⚠️  SMTP NOT CONFIGURED'}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const allPassed = results.root && results.health;
    
    if (allPassed) {
        console.log('\n🎉 Backend is properly configured and accessible!');
        if (!results.contact) {
            console.log('⚠️  Note: Contact endpoint needs SMTP configuration in .env file');
            console.log('   See: backend/SETUP_GUIDE.md for instructions');
        }
    } else {
        console.log('\n❌ Some tests failed. Make sure:');
        console.log('   1. Backend server is running (npm run dev in backend folder)');
        console.log('   2. Backend is running on port 5001');
        console.log('   3. No firewall is blocking the connection');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// Run the tests
runTests().catch(console.error);
