import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'
import 'atropos/css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <ParallaxProvider>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </ParallaxProvider>
    </>
   
    
  </React.StrictMode>,
)
