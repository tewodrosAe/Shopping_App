import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="599966240647-ng1027r6pp3vfa0cilnvtpupeq1notk6.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>;
  </React.StrictMode>
);