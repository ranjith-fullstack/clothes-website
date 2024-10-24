import React from 'react';
import { Link } from "react-router-dom";
import '../pages/custumizeform.css'
import promo1 from '../images/videos/1.mp4';
import './customizeform';


export const Customizeform = () => {
  return (
    <div>
       <div className='videobox'>
        <div className='videocontent text-center'>
        <div className='bgclr '>
        
        <div  className="row  flex-sm-column flex-md-row justify-content-between">
        <div className='fromresmargin'>
            <form className="loginn d-flex flex-column p-4  centerrr bulkwidthh overthetop" style={{marginTop:'90px'}}>
            <h1 style={{fontSize:'35px'}}>Customize your own <br/>T-shirt</h1>
                <input type="text" placeholder="Name" className='overthetop'/>
                <input type="text" placeholder="Address" className='overthetop'/>
                <input type="number" placeholder="Phone number" className='overthetop'/>
                <input type="text" placeholder="Email" className='overthetop'/>
                <p className='ml-4 mb-0 customdesign overthetop'>Add your custom design</p>
                <input type="file" placeholder="Email" className='file mb-0 text-white overthetop'/>
                <div className="text-center d-flex justify-content-between overthetop">
                    <button>Submit</button>
                    <Link to="/Men" className="homelink"><button className="pl-3" >Cancel</button></Link>
                </div>        
            </form>
        </div>
        <div className='loginn text-white d-flex flex-column justify-content-center overthetop bulkwidth  ml-4'>
            <div className='bulkwidthh'>
                <h4>For Bulk orders</h4>
                <input type="text" placeholder="Email" style={{width:'300px'}}/>
                <div>
                 <button>Submit</button>
   
                </div>
                <h4>or</h4>
                <h3><i className="fa-solid fa-phone mr-2" style={{color:"#ffffff"}}></i> - 6309268191</h3>
            </div>
        </div>
    </div>
        </div>
        </div>
        <video src={promo1} autoPlay muted loop className='  videoheightt'/>
    </div>

    </div>
  )
}
