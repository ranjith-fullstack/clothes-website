import React,{useState,useContext} from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import  logo from '../images/banner/vlogo.png';
import { AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {GiHamburgerMenu} from 'react-icons/gi';
import { ShopContext } from "../context/shop-context";
import {SiCodesignal} from 'react-icons/si';

export const Navbar = () => {
  const [slidee, setslidee] = useState(false);
  const {  cartitemcount,whishlistcount } = useContext(ShopContext);
    const count = cartitemcount();
    const countt = () =>{
        if (count > 0){
           return (cartitemcount())
        }   
    }
  const whishcount = whishlistcount();
  const whishcountt = () =>{
      if (whishcount > 0){
         return (whishlistcount())
      }
    }
  function slideclick(){
    setslidee(slidee => !slidee);
  }
  let toggleresponce = slidee ? 'togglee':null;
  return (
    <>
    <div className='navbg row'>
        <div className='row'>
        <Link to='/'><img src={logo} alt='img' className='logo'/></Link>
          <div className='row'>
            <Link to='/' className='underline d-md-block d-none'><p>New</p></Link>
            <Link to='/Men' className='underline d-md-block d-none'><p>Men</p></Link>
            <Link to='/Women' className='underline d-md-block d-none'><p>Women</p></Link>
            <Link to='/Caps' className='underline d-md-block d-none'><p>Products</p></Link>
            <Link to='/Customizeform' className='underline d-md-block d-none'><p>customization <SiCodesignal/></p></Link>
          </div>   
        </div>
        <div className='row ml-auto'>       
        <div className='row '>
          <Link to='/Whishlist' className='underline underlinee'><p><AiOutlineHeart /> {whishcountt()}</p></Link>
          <Link to='/Cart' className='underline underlinee'><p><AiOutlineShoppingCart /> {countt()}</p></Link>
          <Link to='/Profile' className='underline underlinee'><p><CgProfile /></p></Link>
        </div> 
        <GiHamburgerMenu className='mt-2 d-sm-block d-md-none slidebutton ml-5' onClick={()=> slideclick() }/>
        </div>
    </div>
    <div className="sliderr">
            <ul id="togglee" className={`responsivenav d-sm-block d-md-none ${toggleresponce}`}>
                <li className="mt-4"><Link to="/" ><p>Home</p></Link></li>
                <li><Link to="/Men"><p>Men</p></Link></li>
                <li><Link to="/Women"><p>Women</p></Link></li>
                <li className="userbt "><Link to="/Profile"><p>Login In</p></Link></li>
                <li className="userbt "><Link to="/Customizeform"><p>Customization</p></Link></li>
            </ul>
        </div> 
    </>
  )
}
