import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import './styles.css'
import { App } from './sections/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)


