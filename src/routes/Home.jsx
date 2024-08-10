import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../appi/axio"
import { Link } from 'react-router-dom'


const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://dummyjson.com/products/search', {
        params: { q: query }
      });
      setResults(response.data.products); // Adjust if the response structure is different
    } catch (err) {
      setError('An error occurred while fetching the data.');
    }
    setLoading(false);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const [products, setProducts] = useState([])

 useEffect(() =>{
  axios("https://dummyjson.com/products")
  .then(response => setProducts(response.data.products))
  
 }, [])

  return (
    <>
    <div className='header'>
        <nav className='nav__wrapper'>
            <ul className='nav__list'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </div>

    <div className='wqsdw'>
      {
        products.map(product =>
          <div className='gfhfys' key={product.id}>
            <Link to={`/product/${product.id}`}><img className='ghgdhsfd' src={product.thumbnail} alt="" /></Link>
            <h2 className='ghdhgdbha'>{product.title}</h2>
            <p className='hfjeghsb'>{product.description}</p>
          </div>
        )
      }
      <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a phone..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((product) => (
          <li key={product.id}><img src={product.thumbnail} alt="" /></li>
        ))}
      </ul>
    </div>
    </div>

    
    
    </>

    

  )
}


export default Home