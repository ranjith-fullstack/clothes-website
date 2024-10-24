import '../men.css';
import React, {useState, useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";



 const Cap = (props) => {
  const { addToCart, cartItems,whishlistadd,detailedpageadd} = useContext(ShopContext);
  const {id,caption,price,saleprice,menimage,category} = props.data
  const cartItemCount = cartItems[id];
  const [heart, setheart] = useState(false);


  function whilshlistt(id){  
    setheart(heart => !heart);  
    whishlistadd(id) 
  }

  let toggleresponce = heart ? <AiFillHeart className='heart'/>:<AiOutlineHeart className='heart'/>;


  const Capsitem = () => {
    if (category === ('Caps') || category === ('Mobile Holders')){
      return(
        <div className='tshirtbox '>
       <Link to={`/Productsdetails/${id}`} onClick={()=>detailedpageadd({id})}>
        <div className='crop'>
          <img src={menimage} alt='img' className='tshirtimage'/>
        </div>
        </Link>       
        <h4 className='caption'>{caption}</h4>
        <div className='d-flex'>
            <h1>Rs.{saleprice}</h1>
            <p className='price'>({price})</p><span className='offer ml-2'> 56% off</span>
        </div>
        <div className=' row justify-content-between ml-1 mr-1'>
             <button className=' mb-3 button' onClick={() => addToCart(id)}>
             ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
             <p className=' mb-3 ' onClick={()=>whilshlistt(id)}>{toggleresponce}</p>
        </div>   
    </div>
      )
    }
  }

  return (
    Capsitem()
  )
}
export default Cap;