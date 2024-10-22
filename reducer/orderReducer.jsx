const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'

export const orderReducer=(state,action)=>{
    switch(action.type){
      case INCREASE_QUANTITY:
        return{
          ...state,
          orderItems:state.orderItems.map(item=>item.productId===action.payload?{...item,quantity:item.quantity+1}:item),
          totalPrice:state.totalPrice + state.orderItems.find(item=>item.productId===action.payload).price,
        }
      case DECREASE_QUANTITY:
        return{
          ...state,
          orderItems:state.orderItems.map(item=>item.productId===action.payload?{...item,quantity:item.quantity-1}:item),
          totalPrice:parseFloat(state.totalPrice - state.orderItems.find(item=>item.productId===action.payload).price).toFixed(2),
        }
  
      case 'REMOVE_ITEM':
        return{
          ...state,
          orderItems:state.orderItems.filter(item=>item.productId!==action.payload),
          totalPrice:parseFloat(state.totalPrice - state.orderItems.find(item=>item.productId===action.payload).price).toFixed(2),
        }
      case 'SET_CART_ITEMS':
        const orderItems=action.payload
        const totalPrice=orderItems.reduce((total,item)=>total+item.price*item.quantity,0)
        return{
          ...state,
          orderItems:action.payload,
          totalPrice:totalPrice
        }
      default:
        return state
    }
  
  }