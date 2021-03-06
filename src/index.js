import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev--ffafekb.us.auth0.com" clientId="NJZrGNULLtz6gJbMWYGpPvduy0pjPSyh" redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
