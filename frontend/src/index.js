import React from 'react';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';

import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/signUp';
import AboutPage from './landing_page/about/Aboutpage';
import Support from './landing_page/support/SupportPage';
import ProductPage from './landing_page/products/ProductPage';
import NotFound from './landing_page/NotFound';
import PricingPage from './landing_page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
   <Route path="/signup" element={<SignUp/>}></Route>
   <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
   <Route path="/pricing" element={<PricingPage/>}></Route>
   <Route path="/Support" element={<Support/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
</Routes>
 <Footer/>
</BrowserRouter>
);
