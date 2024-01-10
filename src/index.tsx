import App from 'App';
import { AuthUserContextProvider } from 'global_shared/contexts/AuthUserContext';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthUserContextProvider>
        <App />
      </AuthUserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
