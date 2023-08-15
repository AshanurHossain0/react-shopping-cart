import React from 'react'
import { CartState } from '../context/Context'
import Product from './Product'

const Home = () => {
  const {state:{products}}=CartState()
  return (
    <div className='home'>
      {/* <Filters/> */}
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