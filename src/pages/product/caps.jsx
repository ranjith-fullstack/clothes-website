import React,{useState} from 'react';
import '../men.css';
import Cap from './cap';
import Mentshirts from '../../men';



export const Caps = () => {
  const [filteredtshirt, setFilteredtshirt] = useState(Mentshirts)


  const filterByDepartment = itemm => {
  setFilteredtshirt(
    Mentshirts.filter(itemx => itemx.category === itemm)
      )
    }

   
     
  
  const clearFilters = () => {   
    setFilteredtshirt(
      Mentshirts.filter(itemx => itemx.category === 'Caps' )
        )
        
  }
  return (
    <div className='menbox'>
      <div className='mencontent text-center'>
          <h1 >Caps</h1>
          <p className='text-center'>A hat is a very personal and stylish option that pairs well with sunglasses.
           It also establishes a unique style statement. Find the right one that speaks of you 
           at Athena Graphics. We have many hats and caps that fit your head and attitude,
            depending on your preference.Lightweight SmarTee track jackets, hooded sweatshirts and cosy coats will 
           keep you warm whatever the weather.<span className='d-none d-md-block'> fashion clothing with an athleisure edge, pair SmarTee track pants with a go-to pair of chunky trainers 
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

        
        <option key={'Caps'}>Caps</option>
        <option key={'Mobile Case'}>Mobile Holders</option>
       
       
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
      {filteredtshirt.map((cap)=>(
        <Cap data={cap} key={cap.id} />
      ))}
    </div>
    

    </div>
  )
}
