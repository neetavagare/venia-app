import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes, } from 'react-router-dom';
import './scss/main.scss';
import { ProductDetails, ProductCatagory, ShopingCart } from './components/Pages';
import MobileHeader from './components/Header/MobileHeader';
import FooterContent from './components/Footer/FooterContent';
import Footer from './components/Footer/Footer';
import ToastMessage from './components/atoms/ToastMessage/ToastMessage';
import { HashRouter } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import Guestcheckout from './components/Pages/Checkout/GuestCheckout';
// import ShippingPage from './components/Pages/Checkout/ShippingPage';
// import PaymentPage from './components/Pages/Checkout/PaymentPage';


function App() {
  return (
     <div>
      <HashRouter>
        <MobileHeader />
        <Header />
        <ToastMessage time={2000}></ToastMessage>
        <Routes>
          <Route exact path="/category" element={<ProductCatagory />} />
          <Route exact path="/cart" element={<ShopingCart />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path='/checkout' element={<Guestcheckout/>}/>
          {/* <Route exact path='/shippingpage' element={<ShippingPage/>}/>
          <Route exact path='/paymentpage' element={<PaymentPage/>}/> */}
        </Routes>
      </HashRouter>
      <FooterContent />
      <Footer />
       </div>
  );
}

export default App;


