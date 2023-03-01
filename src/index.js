import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { UserProviders } from './contexts/user-contexts/user-contexts.component';
import { PaymentDetailsContexts } from './contexts/payment-contexts/payment-contexts.component';
import { ProductProvider } from './contexts/product-contexts/product-contexts';
import { NavProvider } from './contexts/nav-contexts/nav-contents';
import { ImageProvider } from './contexts/image-contexts/image-contexts';
import { HeroProviders } from './contexts/heros-contexts/heros-contexts';
import { CartProvider } from './contexts/cart-contexts/cart-contexts';
import { MainDashBoardDetailsProvider } from './contexts/cart-card/cart-card.component';
import { CompareProvider } from './contexts/compare-contexts/compare-context.component';
import { WalletDetailsProvider } from './contexts/wallet-contects/wallet-context.component';
import { SearchValueProvider } from './contexts/search-contexts/search-contexts';
import { OpenReviewProvider } from './contexts/open-review/open-review.component';
import { MultiStepsProvider } from './contexts/multistep-contexts/multistep-contexts';
import { MultiPaymentProvider } from './contexts/MultiPayment/Multipayment.contexts';
import { PaymentVerificationProvider } from './contexts/paymentverification/paymentverification.contexts';
import { TotalPriceProvider } from './contexts/total-price/total-price-context';
import './index.scss'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProviders>
    <PaymentDetailsContexts>
   
      <NavProvider>
      <SearchValueProvider>
      <ProductProvider>
     
   
        <ImageProvider>
          <HeroProviders>
          <CartProvider>
          <MultiStepsProvider>
          <PaymentVerificationProvider>
          <CompareProvider>
          <TotalPriceProvider>
          
          <MainDashBoardDetailsProvider>
          
          <WalletDetailsProvider>
          <OpenReviewProvider>
        <MultiPaymentProvider>
           <App />
        </MultiPaymentProvider>
          
          
         
           
          
          </OpenReviewProvider>
          </WalletDetailsProvider> 
         
          </MainDashBoardDetailsProvider> 
          </TotalPriceProvider>
          </CompareProvider>
          </PaymentVerificationProvider>
          </MultiStepsProvider>
            </CartProvider>
          </HeroProviders>    
        </ImageProvider>
       
      </ProductProvider> 
      </SearchValueProvider>
    </NavProvider>
    </PaymentDetailsContexts>
    </UserProviders>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
