import React,{createContext,useReducer,useContext} from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer} from './Reducers';

const CartContext=createContext();
faker.seed(99);
const Context = ({children}) => {
    const products=[...Array(20)].map(()=>({
        id: faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        rating:faker.helpers.arrayElement([1,2,3,4,5])

    }))
    const initialState={
      products,
      cartItems:[]
    }
    const [state, dispatch] = useReducer(cartReducer,initialState);
    const [filterState, filterDispatch] = useReducer(filterReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    });
  return (
    <CartContext.Provider value={{state,dispatch, filterState,filterDispatch}}>{children}</CartContext.Provider>
  )
}

export default Context
export const CartState=()=>{
  return useContext(CartContext)
}