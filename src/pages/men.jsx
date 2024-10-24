import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Tshirt } from './tshirt';
import './men.css';

export const Men = () => {
  const [filteredTshirts, setFilteredTshirts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(''); 

  const fetchData = async () => {
    try {
      const categoriesResponse = await axios.get('http://localhost:3005/categories');
      const colorsResponse = await axios.get('http://localhost:3005/colors');
      const productsResponse = await axios.get('http://localhost:3005/getProducts');

      setCategories(categoriesResponse.data);
      setColors(colorsResponse.data);
      setFilteredTshirts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3005/getProducts', {
        params: {
          category: selectedCategory,
          color: selectedColor,
          brand: selectedBrand,
        },
      });
  
      if (Array.isArray(response.data.data)) {
        // Apply additional filtering based on selected category, color, and brand
        let filteredResult = response.data.data;
  
        if (selectedCategory) {
          filteredResult = filteredResult.filter((product) => product.category === selectedCategory);
        }
  
        if (selectedColor) {
          filteredResult = filteredResult.filter((product) => product.color === selectedColor);
        }
  
        if (selectedBrand) {
          filteredResult = filteredResult.filter((product) => product.brand === selectedBrand);
        }
  
        setFilteredTshirts(filteredResult);
      } else {
        console.error('API response data is not an array:', response.data.data);
      }
    } catch (error) {
      console.error('Error filtering products:', error);
    }
  };
  

  const clearFilters = async () => {
    try {
      setSelectedCategory('');
      setSelectedColor('');
      setSelectedBrand('');
      fetchData();
    } catch (error) {
      console.error('Error clearing filters:', error);
    }
  };

  useEffect(() => {
    fetchData();
    filterProducts();
  }, [selectedCategory, selectedColor, selectedBrand]); // Update the dependency array


  return (
    <div className='menbox'>
      <div className='mencontent text-center'>
        <h1>MEN'S CLOTHING</h1>
          <p className=''>Athena Graphics men's fashion clothing is designed to complement 
          and style your wardrobe with comfortable clothing. Innovative and 
          performance-driven materials are used in our clothing for men. 
          <span className='d-none d-md-block'>So, you can fully focus on improving your game without having to worry about your style and convenience.
            Let our t-shirts and jackets carry you from work. Lightweight SmarTee track jackets, hooded sweatshirts and cosy coats will 
           keep you warm whatever the weather.fashion clothing with an athleisure edge, pair SmarTee track pants with a go-to pair of chunky trainers 
           and an oversized women's t-shirt with rolled-up sleeves.</span></p>
      </div>
      <hr />
      <div className='row justify-content-between ml-0 mr-0 buttons'>
        <div>
          <select onChange={(e) => setSelectedCategory(e.target.value)} className='selector' value={selectedCategory}>
            <option value="" disabled>
              Categories
            </option>
            <option key={'Hoodies'}>Hoodies</option>
            <option key={'T-shirt'}>T-shirt</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <select onChange={(e) => setSelectedColor(e.target.value)} className='selector' value={selectedColor}>
            <option value="" disabled>
              Colors
            </option>
            <option key={'black'}>black</option>
            <option key={'white'}>white</option>
            {colors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
          <select onChange={(e) => setSelectedBrand(e.target.value)} className='selector' value={selectedBrand}>
          <option value="" disabled>
            Brands
          </option>
          <option key={'allen solly'}>allen solly</option>
          <option key={'max'}>max</option>
          {brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
          <button onClick={filterProducts} className='ml-3'>
            Apply Filters
          </button>
          <button onClick={clearFilters} className='ml-3'>
            Clear All filters
          </button>
        </div>
      </div>
      <div className='totalproducts'>
        {filteredTshirts.length}
        <span> PRODUCTS</span>
      </div>
      <br />
      <br />

      <div className='row mapalign m-0 col-12 justify-content-around'>
        {filteredTshirts.map((tshirt) => (
          <Tshirt data={tshirt} key={tshirt.id} imagePath={`http://localhost:3005/${tshirt.menimage}`} />
        ))}
      </div>

    </div>
  );
};
   
          
