import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import { New } from './pages/new';
import { Men } from './pages/men';
import { Women } from './pages/women';
import { Wishlist } from './pages/wishlist';
import { Cart } from './pages/cart';
import { Profile } from '../src/pages/login/profile';
import React,{useState} from "react";
import { ShopContextProvider } from './context/shop-context';
import ScrollToTop from "./scrolltotop";
import { Forgotpassword } from "../src/pages/login/forgotpassword";
import { Createaccount } from "../src/pages/login/createaccount";
import { Customizeform } from "./pages/customizeform";
import {Caps} from './pages/product/caps';
import {Checkout} from './pages/checkout';
import { Productdetails } from "./pages/productdetails";
import { Dashboardd } from "./pages/dashboardd";
import QrCode from "./pages/QrCode";
import { Banner } from "./pages/banner";


function App() {
  return (
    <div>
    <ShopContextProvider>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<New />}/>
          <Route path="/Men"  element={<Men />}/>
          <Route path="/Women"  element={<Women />}/>
          <Route path="/Whishlist"  element={<Wishlist />}/>
          <Route path="/Cart"  element={<Cart />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Createaccount" element={<Createaccount />} />
          <Route path="/Customizeform" element={<Customizeform />} />
          <Route path="/Caps" element={<Caps />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Productsdetails/:id" element={<Productdetails/>} />
          <Route path="/dashboardd" element={<Dashboardd/>} />
          <Route path="/QrCode" element={<QrCode/>} />
          <Route path="/Banner" element={<Banner/>} />
       </Routes>
      <Footer/>   
      </BrowserRouter>
    </ShopContextProvider>
    
    </div>
  );
}

export default App;
