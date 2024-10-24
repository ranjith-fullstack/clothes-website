import React from 'react';
import { Link } from 'react-router-dom';
import  logo from '../images/banner/WhatsApp Image 2023-10-16 at 12.08.40_b762d58a.jpg';
import {BiLogoPlayStore} from 'react-icons/bi';
import {GrAppleAppStore,GrInstagram} from 'react-icons/gr';
import './navbar.css';




export const Footer = () => {
    const top = () => {
        window.scrollTo(0,0);
    };
  return (
    <div>
        <div className="fotter row align-items-center justify-content-center  ">
        <div className="responcefotter row  no-gutters w-100 justify-content-around ">
            <div style={{width:'250px'}}>
                <Link to="/" className="logohover"><img src={logo} alt="img" className="logoo"/><span className="martlogo">Athena Graphics</span></Link>
                <p><i className="fa-solid fa-location-dot mr-2 mt-4" style={{color:"#ffffff"}}></i> No: 58, <br/>secunderabad Street,<br/> Hyderabad, IND </p>
                <p><i className="fa-solid fa-phone mr-2" style={{color:"#ffffff"}}></i>6309268191</p>
                <p><i className="fa-regular fa-envelope mr-2" style={{color:"#ffffff"}}></i>athenagraphics738@gmail.com</p>
            </div>
            <div style={{width:'200px'}}>
                <h3>Help</h3>
                <p> 
                    <i className="fa-solid fa-chevron-right mr-2" style={{color:"#ffffff"}}></i><Link to="/Men">Men</Link><br/>
                    <i className="fa-solid fa-chevron-right mr-2" style={{color:"#ffffff"}}></i><Link to="/Women">Women</Link><br/>
                    <i className="fa-solid fa-chevron-right mr-2" style={{color:"#ffffff"}}></i><Link to="/Whishlist">Whishlist</Link><br/>
                    <i className="fa-solid fa-chevron-right mr-2" style={{color:"#ffffff"}}></i><Link to="/Cart">Cart</Link></p>
            </div>

            <div >
            <div style={{width:'400px'}} className='fotterresponsivee'>
              <h3 className='downloadapp '>DOWNLOAD THE APP</h3>
              
              <div className='fotterresponsive ' >
              <a href='https://play.google.com/' target='/blank' ><div className='mt-3 app'>
              <h1 className='mb-3 '><BiLogoPlayStore /> </h1>
              <h5 >Play Store</h5>
              </div></a>
              <a href='https://www.apple.com/app-store/' target='/blank'><div className='app'>
              <h1 className='m-3'><GrAppleAppStore /></h1>
              <h5>App Store</h5>
              </div></a>
              <a href='https://instagram.com/athena_graphics7?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='/blank' className='hoverrr'>
              <div className='app pt-1'>
              <h1 className='m-3 '><GrInstagram /></h1>
              <h5>Instagram</h5>
              </div></a>
              </div>
              </div>   
            </div>

           
           
            
            <div className="w-100">
                <hr className="hrtag" />
                 <p className="text-center"><i className="fa-regular fa-copyright mr-3" style={{color:"#ffffff"}}></i>Website designed by Vamseedhar & Ranjith kumar reddy</p>
            </div>
        </div>
    </div>
    <p class="gotopbtn" onClick={top}> <i class="fas fa-arrow-up"></i> </p>

    </div>
  )
}
