import React,{useContext} from 'react';
import './cart.css';
import { ShopContext } from "../context/shop-context";


export const WhishlistitemItem = (props) => {
    const {id,caption,saleprice,menimage} = props.data
    const {whishlistremove} = useContext(ShopContext);

  return (
    <div className='cartitembox m-2'>
        <div className='d-flex flex-row  pt-3'>
          <img src={menimage} alt='img' className='cartimg' />
            <div className='ml-3'>
                <h1>{caption}</h1>
                <b >Rs.{saleprice}</b> 
                <div>
                    <button  onClick={()=>whishlistremove(id)} className='removebtn'>Remove</button>
                </div>
            </div> 
        </div>
     </div>
  )
}
