import React from 'react';
import './new.css';
import { Link } from "react-router-dom";

export const Banner = (props) => {
    const {link,productImage} = props.data;
  return (
    <>
        <div>
            <Link to={link}><img src={productImage} alt='img' className='bannerimg'/></Link>
        </div>
    </>
  )
}
