import React from 'react'
import { CartState } from '../context/Context'
import Product from './Product'
import Filter from './Filter'
import './style.css'

const Home = () => {

  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className='home'>
      <Filter/>
      <div className='productContainer'>
        {
          transformProducts().map((product)=>{
            return <Product key={product.id} product={product}/>
          })
        }
      </div>
    </div>
  )
}

export default Home