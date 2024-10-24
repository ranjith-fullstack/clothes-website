import React, {useContext} from 'react';
import './cart.css';
import { ShopContext } from "../context/shop-context";


export const CartItem = (props) => {
    const {id,caption,saleprice,menimage} = props.data
    const {cartItems,addToCart,removeFromCart,updatequantity } = useContext(ShopContext);


  return (
    <div className='cartitembox m-2'>
        <div className='d-flex flex-row  pt-3'>
          <img src={menimage} alt='img' className='cartimg' />
            <div className='ml-3'>
                <h1>{caption}</h1>
                <b >Rs.{saleprice}</b>
                <div className='mt-3'>
                    <button onClick={() => addToCart(id)}>+</button>
                    <input value={cartItems[id]} onChange={(e) => updatequantity(Number(e.target.value),id)}/>
                    <button onClick={() => removeFromCart(id)}>-</button>
                </div>
            </div> 
        </div>
     </div>
  )
}
