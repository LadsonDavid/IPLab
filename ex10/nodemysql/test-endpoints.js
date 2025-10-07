// Test script to verify all endpoints are working
const http = require('http');

const baseUrl = 'http://localhost:3000';

// Helper function to make HTTP requests
function makeRequest(path, description) {
    return new Promise((resolve, reject) => {
        const req = http.get(baseUrl + path, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log(`✅ ${description}: ${res.statusCode}`);
                if (res.statusCode === 200) {
                    console.log(`   Response: ${data.substring(0, 100)}...`);
                }
                resolve({ statusCode: res.statusCode, data });
            });
        });
        
        req.on('error', (err) => {
            console.log(`❌ ${description}: ${err.message}`);
            reject(err);
        });
        
        req.setTimeout(5000, () => {
            console.log(`⏰ ${description}: Timeout`);
            req.destroy();
            reject(new Error('Timeout'));
        });
    });
}

// Test sequence
async function runTests() {
    console.log('🚀 Starting Node.js MySQL CRUD Application Tests\n');
    
    try {
        // Test database setup
        console.log('📊 Testing Database Setup...');
        await makeRequest('/createproduct', 'Create Database');
        await makeRequest('/connectproduct', 'Connect to Database');
        
        // Test table creation
        console.log('\n📋 Testing Table Creation...');
        await makeRequest('/createchocolates', 'Create Chocolates Table');
        await makeRequest('/createstat', 'Create Stationary Table');
        
        // Test data insertion
        console.log('\n➕ Testing Data Insertion...');
        await makeRequest('/chocolate1', 'Insert Chocolate');
        await makeRequest('/stationary1', 'Insert Stationary');
        
        // Test data retrieval
        console.log('\n📖 Testing Data Retrieval...');
        await makeRequest('/getchocolates', 'Get Chocolates');
        await makeRequest('/getstat', 'Get Stationary');
        
        // Test update operation
        console.log('\n✏️ Testing Update Operation...');
        await makeRequest('/updatechoco/1', 'Update Chocolate');
        
        // Test delete operation
        console.log('\n🗑️ Testing Delete Operation...');
        await makeRequest('/deletechoco/1', 'Delete Chocolate');
        
        console.log('\n🎉 All tests completed!');
        console.log('\n📝 Manual Testing Instructions:');
        console.log('1. Make sure MySQL server is running');
        console.log('2. Update password in conn.js if needed');
        console.log('3. Run: npm install');
        console.log('4. Run: npm start');
        console.log('5. Visit: http://localhost:3000');
        console.log('6. Click on each endpoint link to test manually');
        
    } catch (error) {
        console.log(`\n❌ Test failed: ${error.message}`);
        console.log('Make sure the server is running on port 3000');
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

module.exports = { makeRequest, runTests };
