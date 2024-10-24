import React,{useContext} from 'react';
import './cart.css';
import Mentshirts from '../men';
import { ShopContext } from "../context/shop-context";
import {CartItem} from './cartitem';
import { useNavigate } from 'react-router-dom';
import cartimg from '../images/10001.png'
import { Link } from 'react-router-dom';
import { Checkout } from './checkout';


export const Cart = () => {
  const {cartItems,getTotalCartAmount } = useContext(ShopContext);
    const total = getTotalCartAmount() ;
    const navigate = useNavigate();
  return (
    <div>
        <div className='cartbox  mb-5'>
        <div className='pt-4'>
           <h1 className=' text-center'>Cart</h1>
        </div>
         <div>
         <div className='cartitem'>
            {Mentshirts.map((product) =>{
                if (cartItems[product.id] !== 0 ){
                    return (        
                      <CartItem data={product} key={product.id} />
                    )
                }
            })}
        </div>  
         </div>
        </div>
        { total > 0 ?
          (<div className='text-center mb-5'>
            <h4>GRAND TOTAL : <span className='totalamount'>{total}</span></h4>
            <button className='btn btn-success mr-2' onClick={() => navigate('/Men')}>Continue Shopping</button>
            <Link to='/Checkout'><button  className='btn btn-secondary' >Checkout</button></Link>
          </div>)
        :(<div className='text-center ceter'>
            <div className='d-flex justify-content-center'>
                     <img src={cartimg} alt="" class="cartimg mb-3 mt-3 "/>   
            </div>
            <h1 className='text-center mt-3'>Your Cart is Empty</h1>
            <div>
               <Link to='/Men'><button className='shoppping'>Continue Shopping</button></Link>
          </div>
        </div> )}
    </div>
  )
}
