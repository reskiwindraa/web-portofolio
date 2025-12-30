import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Button from './components/ui/Button.jsx'
import Social from './components/Social.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-4 justify-center items-center'>
      <Navbar />
      <App />
      <Social />
      
    </div>

    <div>
      <Footer />

    </div>
  </StrictMode>,

//   
  

)
