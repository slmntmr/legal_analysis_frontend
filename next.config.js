module.exports = {
  env: {
    API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://legalanalysisbackend-production.up.railway.app',
  },
};
