import React,{ useContext } from 'react';
import './productdetail.css'
import { ShopContext } from "../context/shop-context";
import Mentshirts from '../men';


export const Productdetails = (props) => {
  const {detailedpage,cartItems,addToCart,removeFromCart,updatequantity } = useContext(ShopContext);
  console.log(detailedpage)

  return (
    <div> {Mentshirts.map((product) =>{ 
              if (product.id === detailedpage.id){
                    return (
                      <div>
                        <div class = "card-wrapperr">
                            <div class = "carddd">
                              <div class = "product-imgss">
                                <div class = "img-displayy">
                                  <div class = "img-showcase">
                                    <img src = {product.menimage} alt = "detailimg"/>
                                  </div>
                             </div>
                          </div>
                              <div class = "product-contentt">
                                <h2 class = "product-titleee">{product.caption}</h2>
                                <div class = "product-ratinggg">
                                  <i class = "fas fa-star"></i>
                                  <i class = "fas fa-star"></i>
                                  <i class = "fas fa-star"></i>
                                  <i class = "fas fa-star"></i>
                                  <i class = "fas fa-star-half-alt"></i>
                                  <span>4.7(21)</span>
                                </div>
                                <div class = "product-priceee">
                                  <p class = "last-price">Old Price: Rs.<span>{product.price}/- </span></p>
                                  <p class = "new-price">New Price: Rs.<span>{product.saleprice}/- </span><span className='offersize'>(82% off)</span></p>
                                </div>
                                <div class = "product-detailll">
                                  <h2>about this item: </h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                                  <ul>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>{product.category}</span></li>
                                    <li>Shipping Area: <span>All over the world</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                  </ul>
                                </div>
                                <div>
                                <h4>Sizes :</h4>
                                  <div className='sizebutton'>
                                    <button className='btn btn-primary'>XS</button>
                                    <button className='btn btn-primary'>S</button>
                                    <button className='btn btn-primary'>M</button>
                                    <button className='btn btn-primary'>L</button>
                                    <button className='btn btn-primary'>XL</button>
                                  </div>
                                </div>
                                <div className='mt-3 productdetailbuttons'>
                                    <h4 className='pt-2 pb-2'>Quantity : </h4>
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                    <input value={cartItems[product.id]} onChange={(e) => updatequantity(Number(e.target.value),product.id)}/>
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                                <div class = "purchase-infooo">
                                  <button type = "button" class = "btn" onClick={() => addToCart(product.id)}>
                                    Add to Cart <i class = "fas fa-shopping-cart"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    )     
                }
            })}
    
    </div>
  )
}