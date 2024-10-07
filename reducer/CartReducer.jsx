const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'

export const cartReducer=(state,action)=>{
    switch(action.type){
      case INCREASE_QUANTITY:
        return{
          ...state,
          cartItems:state.cartItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity+1}:item),
          totalPrice:state.totalPrice + state.cartItems.find(item=>item.id===action.payload).price,
        }
      case DECREASE_QUANTITY:
        return{
          ...state,
          cartItems:state.cartItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity-1}:item),
          totalPrice:parseFloat(state.totalPrice - state.cartItems.find(item=>item.id===action.payload).price).toFixed(2),
        }
  
      case 'REMOVE_ITEM':
        return{
          ...state,
          cartItems:state.cartItems.filter(item=>item.id!==action.payload),
          totalPrice:parseFloat(state.totalPrice - state.cartItems.find(item=>item.id===action.payload).price).toFixed(2),
        }
      case 'SET_CART_ITEMS':
        const cartItems=action.payload
        const totalPrice=cartItems.reduce((total,item)=>total+item.price*item.quantity,0)
        return{
          ...state,
          cartItems:action.payload,
          totalPrice:totalPrice
        }
      default:
        return state
    }
  
  }