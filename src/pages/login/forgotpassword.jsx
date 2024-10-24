import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import promo1 from '../../images/videos/1.mp4';


export const Forgotpassword = () => {
  return (

    <div className='videobox'>
        
    <div className='videocontent text-center'>
    <div className='text-white '>
    <div className='profilebox'>     
    <div className="container  ">
        <div className="row loginbg justify-content-center">
            <form className="login d-flex flex-column p-5 text-center overthetop">
                <h1>Reset your password</h1>
                <p>We will send you an email to reset your password</p>
                <input type="text" placeholder="Email"/>
                <div>
                    <button>Submit</button>
                </div>
                <div className="row justify-content-center overthetop">
                    <Link to="/Profile" className="homelink"><p className="pl-3" style={{color: 'white'}}>Cancel</p></Link>
   
                </div>
            </form>
        </div>
    </div>

    </div>  
    </div>
    </div>
    <video src={promo1} autoPlay muted loop/>
</div>



   
  )
}
