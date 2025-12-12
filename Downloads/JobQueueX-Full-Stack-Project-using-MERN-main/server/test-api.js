import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api';

// Test function to check the get-team endpoint
const testGetTeamEndpoint = async () => {
  try {
    // This would require authentication, but we can test the response
    const response = await axios.get(`${API_BASE_URL}/user/get-team`);
    console.log('Get team endpoint response:', response.data);
  } catch (error) {
    console.error('Error testing get-team endpoint:', error.response?.data || error.message);
  }
};

// Example of how to test login and then get team list
const testCompleteFlow = async () => {
  try {
    console.log('Testing login...');
    // Login first to get auth token
    const loginResponse = await axios.post(`${API_BASE_URL}/user/login`, {
      email: 'admin@taskify.com',
      password: 'admin123'
    });
    
    console.log('Login response:', loginResponse.data);
    
    const token = loginResponse.data.token; // Adjust based on actual response structure
    
    console.log('Testing get-team after login...');
    // Use the token to get team list
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Adjust based on actual auth method
    };
    
    const teamResponse = await axios.get(`${API_BASE_URL}/user/get-team`, { headers });
    console.log('Get team response:', teamResponse.data);
    
  } catch (error) {
    console.error('Error in complete flow:', error.response?.data || error.message);
  }
};

testGetTeamEndpoint();