import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { UserProviders } from './contexts/user-contexts/user-contexts.component';
import { ProductProvider } from './contexts/product-contexts/product-contexts';
import { NavProvider } from './contexts/nav-contexts/nav-contents';
import { ImageProvider } from './contexts/image-contexts/image-contexts';
import { HeroProviders } from './contexts/heros-contexts/heros-contexts';
import { CartProvider } from './contexts/cart-contexts/cart-contexts';
import './index.scss'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProviders>

      <NavProvider>
      <ProductProvider>
        <ImageProvider>
          <HeroProviders>
            <CartProvider>
              <App />
            </CartProvider>
          </HeroProviders>    
        </ImageProvider>
      </ProductProvider> 
    </NavProvider>
    
    </UserProviders>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
