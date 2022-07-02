import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './scss/main.scss';
import { ProductDetails, ProductCatagory, ShopingCart } from './components/Pages';
import MobileHeader from './components/Header/MobileHeader';
import Footer_content from './components/Footer/Footer_content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <MobileHeader />
        <Header />
        {/* <main> */}
          <Routes>
            <Route exact path="/" element={<ProductCatagory />} />
            <Route exact path="/cart" element={<ShopingCart />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
          </Routes>
        {/* </main> */}
      </BrowserRouter>
      <Footer_content />
      <Footer/>
    </div>
  );
}

export default App;


