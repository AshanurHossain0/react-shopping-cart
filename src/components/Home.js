import React from 'react'
import { CartState } from '../context/Context'
import Product from './Product'
import Filter from './Filter'
import './style.css'

const Home = () => {
  const {state:{products}}=CartState()
  return (
    <div className='home'>
      <Filter/>
      <div className='productContainer'>
        {
          products.map((product)=>{
            return <Product key={product.id} product={product}/>
          })
        }
      </div>
    </div>
  )
}

export default Home