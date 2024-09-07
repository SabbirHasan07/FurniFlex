import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite/dist/flowbite.min.css';  // Import Flowbite CSS
import 'flowbite';  // Import Flowbite JavaScript
import { AuthProvider } from './providers/AuthProvider.jsx';
import { CartProvider } from './providers/CartProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
        <Toaster/>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
