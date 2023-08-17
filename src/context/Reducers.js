export const cartReducer=(state,action)=>{
  switch(action.type){
    case 'ADD_TO_CART':
      return {...state,cartItems:[...state.cartItems,{...action.payload,quant:1}]}
    case 'REMOVE_FROM_CART':
      return {...state,cartItems:state.cartItems.filter(crt=>crt.id !==action.payload.id)}
    case 'CHANGE_CART_QTY':
      return {...state,cartItems:state.cartItems.map(item=>(item.id===action.payload.id?{...item,quant:action.payload.quant}:item))}
    default:
      return state;
  }
}
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};