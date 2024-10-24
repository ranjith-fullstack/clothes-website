import React from 'react';
import Banners from '../banners';
import {Banner} from './banner';
import promo from '../images/banner/promo.mp4';
import './new.css';
import hodiees1 from '../images/banner/hoodie_banner.webp';
import hodiees2 from '../images/banner/school-leavers-hoodies-banner-3.jpg';



export const New = () => {
  return (
    <div>
      <div className='videobox'>
        
        <div className='videocontent text-center'>
         <div className='bgclr '>
            <h1><span className='highlited'>A</span>thena<span className='highlited'> G</span>raphics</h1>
            <p>The future of fashion is here..</p>
          </div>
        </div>
        <video src={promo} autoPlay muted loop/>
      </div>

      <div>
              <div class="caroselres mb-2">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={hodiees1} class="d-block w-100 hoddies" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={hodiees2} class="d-block w-100 hoddies" alt="..."/>
                      </div>
                    
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div>
      </div>
       
      {Banners.map((banner) => (
        <Banner data={banner} key ={banner.id} />
      ))}
    </div>
  )
}

