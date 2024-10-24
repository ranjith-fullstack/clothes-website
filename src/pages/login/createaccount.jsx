import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import promo1 from '../../images/videos/1.mp4';


export const Createaccount = () => {
  return (
    <div>
         <div className='videobox '>
        <div className='videocontent text-center '>
        <div className='text-white'>

        <div className="container  mt-5 mb-5 ">
        <div className="row loginbg justify-content-center ">
            <form className="login d-flex flex-column p-5 centerrr overthetop">
                <h1 style={{fontSize:'30px'}}>Create account</h1>
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name"/>
                <input type="number" placeholder="Phone number"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <div className="text-center">
                    <button>Create</button>
                    <Link to="/Profile" className="homelink"><p className="pl-3 pb-3" style={{color: 'white'}}>Cancel</p></Link>
                </div>
                
            </form>
        </div>
    </div>
        </div>
        </div>
        <video src={promo1} autoPlay muted loop className='extendvideo' />
    </div>


    </div>
  )
}
