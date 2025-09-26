// src/config.js
const config = {
  development: {
    API_URL: 'http://localhost:8000'  // for local development
  },
  production: {
    API_URL: 'https://bpmn-generator-ai.onrender.com'  // your Render backend
  }
};

// Use Render's environment or fallback to production
const env = process.env.NODE_ENV || 'production';
export default config[env];