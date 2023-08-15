export const cartReducer=(state,action)=>{
  switch(action.type){
    case 'ADD_TO_CART':
      return {...state,cartItems:[...state.cartItems,{...action.payload,quant:1}]}
    case 'REMOVE_FROM_CART':
      return {...state,cartItems:state.cartItems.filter(crt=>crt.id !==action.payload.id)}
    default:
      return state;
  }
}