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


function App() {
  return (
    <div className='container'>
      <HashRouter>
        <MobileHeader />
        <Header />
        <ToastMessage time={8000}></ToastMessage>
        <Routes>
          <Route exact path="/" element={<ProductCatagory />} />
          <Route exact path="/cart" element={<ShopingCart />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </HashRouter>
      <FooterContent />
      <Footer />
    </div>
  );
}

export default App;


