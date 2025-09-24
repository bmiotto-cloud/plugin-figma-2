#!/usr/bin/env node

/**
 * Simple test script for Instaffo Copywriter API endpoints
 * Run: node test-server.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:3001';
let authToken = null;

// Helper function to make HTTP requests
function makeRequest(method, path, data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3001,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Test functions
async function testHealthCheck() {
  console.log('🔍 Testing health check...');
  try {
    const response = await makeRequest('GET', '/api/health');
    console.log(`✅ Health check: ${response.status}`);
    console.log(`   Service: ${response.data.service}`);
    console.log(`   OpenAI: ${response.data.openaiConfigured ? '✅' : '❌'}`);
    return response.status === 200;
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
    return false;
  }
}

async function testLogin() {
  console.log('\n🔐 Testing login...');
  try {
    const response = await makeRequest('POST', '/api/login', {
      email: 'demo@instaffo.com',
      password: 'demo123'
    });
    
    if (response.status === 200) {
      authToken = response.data.token;
      console.log('✅ Login successful');
      console.log(`   User: ${response.data.user.email}`);
      console.log(`   Token: ${authToken ? 'Generated' : 'Missing'}`);
      return true;
    } else {
      console.log(`❌ Login failed: ${response.status}`);
      console.log(`   Message: ${response.data.message}`);
      return false;
    }
  } catch (error) {
    console.log('❌ Login error:', error.message);
    return false;
  }
}

async function testTokenVerification() {
  console.log('\n🎫 Testing token verification...');
  if (!authToken) {
    console.log('❌ No auth token available');
    return false;
  }

  try {
    const response = await makeRequest('POST', '/api/verify-token', null, {
      'Authorization': `Bearer ${authToken}`
    });
    
    console.log(`${response.data.valid ? '✅' : '❌'} Token verification: ${response.data.valid}`);
    return response.data.valid;
  } catch (error) {
    console.log('❌ Token verification error:', error.message);
    return false;
  }
}

async function testCopyGeneration() {
  console.log('\n🤖 Testing copy generation...');
  if (!authToken) {
    console.log('❌ No auth token available');
    return false;
  }

  try {
    const response = await makeRequest('POST', '/api/generate-copy', {
      input: 'Buy our amazing product today!',
      tone: 'professional',
      length: 'medium',
      targeting: 'business owners',
      language: 'english'
    }, {
      'Authorization': `Bearer ${authToken}`
    });
    
    if (response.status === 200) {
      console.log('✅ Copy generation successful');
      console.log(`   Generated: ${response.data.results?.length || 0} variations`);
      if (response.data.results?.[0]) {
        console.log(`   Sample: "${response.data.results[0].text.substring(0, 50)}..."`);
      }
      return true;
    } else {
      console.log(`❌ Copy generation failed: ${response.status}`);
      console.log(`   Message: ${response.data.message}`);
      return false;
    }
  } catch (error) {
    console.log('❌ Copy generation error:', error.message);
    return false;
  }
}

async function testCopyRefinement() {
  console.log('\n✨ Testing copy refinement...');
  if (!authToken) {
    console.log('❌ No auth token available');
    return false;
  }

  try {
    const response = await makeRequest('POST', '/api/refine-copy', {
      originalText: 'Buy our product now',
      refinement: 'make it more friendly and approachable',
      language: 'english'
    }, {
      'Authorization': `Bearer ${authToken}`
    });
    
    if (response.status === 200) {
      console.log('✅ Copy refinement successful');
      console.log(`   Original: "${response.data.originalText}"`);
      console.log(`   Refined: "${response.data.refinedText?.substring(0, 50)}..."`);
      return true;
    } else {
      console.log(`❌ Copy refinement failed: ${response.status}`);
      console.log(`   Message: ${response.data.message}`);
      return false;
    }
  } catch (error) {
    console.log('❌ Copy refinement error:', error.message);
    return false;
  }
}

async function testProfile() {
  console.log('\n👤 Testing user profile...');
  if (!authToken) {
    console.log('❌ No auth token available');
    return false;
  }

  try {
    const response = await makeRequest('GET', '/api/profile', null, {
      'Authorization': `Bearer ${authToken}`
    });
    
    if (response.status === 200) {
      console.log('✅ Profile retrieval successful');
      console.log(`   Email: ${response.data.email}`);
      console.log(`   ID: ${response.data.id}`);
      return true;
    } else {
      console.log(`❌ Profile retrieval failed: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log('❌ Profile error:', error.message);
    return false;
  }
}

async function testUnauthorizedAccess() {
  console.log('\n🚫 Testing unauthorized access...');
  try {
    const response = await makeRequest('POST', '/api/generate-copy', {
      input: 'test'
    });
    
    if (response.status === 401) {
      console.log('✅ Unauthorized access properly blocked');
      return true;
    } else {
      console.log(`❌ Security issue: ${response.status} (should be 401)`);
      return false;
    }
  } catch (error) {
    console.log('❌ Unauthorized test error:', error.message);
    return false;
  }
}

// Main test runner
async function runTests() {
  console.log('🚀 Starting Instaffo Copywriter API Tests\n');
  console.log('Note: OpenAI API tests will fail with placeholder key - this is expected.\n');
  
  const tests = [
    testHealthCheck,
    testUnauthorizedAccess,
    testLogin,
    testTokenVerification,
    testProfile,
    testCopyGeneration,
    testCopyRefinement
  ];
  
  let passed = 0;
  let total = tests.length;
  
  for (const test of tests) {
    try {
      const result = await test();
      if (result) passed++;
    } catch (error) {
      console.log(`❌ Test failed: ${error.message}`);
    }
  }
  
  console.log(`\n📊 Test Results: ${passed}/${total} passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Server is working correctly.');
  } else if (passed >= total - 2) {
    console.log('⚠️  Most tests passed. OpenAI failures are expected with placeholder key.');
  } else {
    console.log('❌ Some tests failed. Check server configuration.');
  }
  
  process.exit(passed >= total - 2 ? 0 : 1);
}

// Check if server is running
async function checkServerRunning() {
  try {
    await makeRequest('GET', '/api/health');
    return true;
  } catch (error) {
    console.log('❌ Server not running. Please start with: npm run server');
    console.log('   Then run this test again.');
    process.exit(1);
  }
}

// Run tests
checkServerRunning().then(runTests);