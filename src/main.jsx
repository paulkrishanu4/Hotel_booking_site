import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { ScrollToTop } from './assets/Components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-8cypt26yqei56cgf.us.auth0.com"
    clientId="MbxlSAwxmMlj17aFvs4AONgzoW5A5muj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <ScrollToTop/>
     <App />
  </BrowserRouter>
  </Auth0Provider>
)
