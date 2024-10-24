import React,{useState} from 'react';
import Mentshirts from '../men';
import { Womentshirt } from './womentshirt';
import './men.css';

export const Women = () => {
  const [filteredtshirt, setFilteredtshirt] = useState(Mentshirts)
  const filterByDepartment = itemm => {
  setFilteredtshirt(
    Mentshirts.filter(itemx => itemx.category === itemm)
      )
    }
  const clearFilters = () => {
    setFilteredtshirt(Mentshirts)
  }

  return (
    <div className='menbox'>
      <div className='mencontent text-center'>
          <h1 >WOMEN'S CLOTHING</h1>
          <p>Define your activewear style with Athena Graphics women's fashion clothing. Everyday essentials include relaxed t-shirts,
           easy-to-wear sweatpants and laid-back hoodies to see you comfortably through off-duty weekends. SmarTee's form-fitting 
           sportswear for women is constructed from high-tech materials to keep you comfortable through your workout, ensuring that 
           SmarTee women's sportswear is both.<span className='d-none d-md-block'> Lightweight SmarTee track jackets, hooded sweatshirts and cosy coats will 
           keep you warm whatever the weather.fashion clothing with an athleisure edge, pair SmarTee track pants with a go-to pair of chunky trainers 
           and an oversized women's t-shirt with rolled-up sleeves.</span>
           </p> </div>

      <hr/>
      <div className='row justify-content-between ml-0 mr-0 buttons'>
      <div>

      <select
        onChange={e => filterByDepartment(e.target.value)}  className='selector'>
        
        <option value="" disabled selected >
        Catogeries 
        </option>

        
        <option key={'Hoodiee'}>Hoodiee</option>
        <option key={'T-shirt'}>T-shirt</option>
       
       
      </select>

      <select
        onChange={e => filterByDepartment(e.target.value)}  className='selector'>
        
        <option value="" disabled selected >
        Colours 
        </option>

        
        <option key={'Black'}>Black</option>
        <option key={'White'}>White</option>
       
       
      </select>
      
      <button onClick={clearFilters} className='ml-3'>Clear All filters</button>
      </div>
     

      </div>
      <hr/>

      <div className='totalproducts'>
          {filteredtshirt.length}<span> PRODUCTS</span>
      </div>

      
      <br />
      <br />

    <div className='row mapalign m-0 col-12 justify-content-around'>
      {filteredtshirt.map((tshirt)=>(
        <Womentshirt data={tshirt} key={tshirt.id} />
      ))}
    </div>

     

    </div>
  )
}
