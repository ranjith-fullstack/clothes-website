import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import promo1 from '../../images/videos/1.mp4';


export const Profile = () => {
  return (
    <div className='videobox lower'>  
    <div className='videocontent text-center '>
    <div className='text-white'>
            <div className="container">
                    <div className="row loginbg justify-content-center">
                        <form className="login d-flex flex-column overthetop ">
                            <h1>Login</h1>
                            <div className='text-center'>
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Password" />
                            </div>
                            <div>
                                <button className='overthetop'>Sign in</button>
                            </div>
                            <div className="row justify-content-around overthetop buttonwidthh">
                                <Link to="/Forgotpassword"  style={{textDecoration: 'none'}} ><p  style={{color:' white'}} >Forgot your password?</p></Link>  
                                <Link to="/Createaccount" style={{textDecoration: 'none'}}><p  style={{color:' white'}}>Create account</p></Link>
                            </div>
                        </form> 
                    </div>
                </div>         
    </div>
    </div>
    <video src={promo1} autoPlay muted loop />
</div>

  )
}
