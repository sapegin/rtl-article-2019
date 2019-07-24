// Cleanup after each test
import '@testing-library/react/cleanup-after-each';

// If you're using the fetch API
import fetch from 'node-fetch';
global.fetch = fetch;
