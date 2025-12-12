// Test script for deployed API
// This script tests whether the backend API is accessible and working properly

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080/api';
console.log('Testing API at:', BACKEND_URL);

async function testAPI() {
  try {
    // Test 1: Test basic connectivity to the backend
    console.log('Testing backend connectivity...');
    const response = await fetch(`${BACKEND_URL}`);
    console.log('Backend connectivity test result:', response.status);
    
    // Test 2: Test the users endpoint specifically
    console.log('Testing /user/get-team endpoint...');
    const usersResponse = await fetch(`${BACKEND_URL}/user/get-team`, {
      method: 'GET',
      credentials: 'include', // Include cookies for authentication
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (usersResponse.ok) {
      const usersData = await usersResponse.json();
      console.log('Users endpoint test result:', usersData);
    } else {
      console.error('Users endpoint error:', usersResponse.status, await usersResponse.text());
    }
  } catch (error) {
    console.error('Error testing API:', error.message);
  }
}

testAPI();