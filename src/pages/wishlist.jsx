import React,{ useContext }  from 'react';
import { ShopContext } from "../context/shop-context";
import Mentshirts from '../men';
import './cart.css';
import {WhishlistitemItem} from './whishlistitem';
import { Link } from "react-router-dom";
import cartimg from '../images/10001.png'


export const Wishlist = () => {
  const {whishlist,whishlistcount} = useContext(ShopContext);
  const count = whishlistcount();
  const countt = () =>{
      if (count > 0){
         return (whishlistcount())
      }
      else {
        return (
        <div>
          <div className='text-center'>
          <div className='d-flex justify-content-center'>
                     <img src={cartimg} alt="" class="cartimg mb-3 mt-3 "/>   
            </div> 
            <h1 className='text-center mt-3'>Your Whishlist is Empty</h1>
              <div>
                  <Link to='/Men'><button className='shoppping'>Continue Shopping</button></Link>
              </div>
          </div>
        </div>
        )
      }  
  }
  return (
    <div>
      <div className='cartbox  mb-5'>
        <div className='pt-4'>
           <h1 className=' text-center'>Whishlist {countt()}</h1>
        </div>
         <div>
         <div className='cartitem'>
            {Mentshirts.map((product) =>{ 
              if (whishlist[product.id] !== 0 ){
                    return (<WhishlistitemItem data={product} key={product.id} />)     
                }
            })}
           
        </div>  
         </div>
        </div>
    </div>
  )
}
