import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { storeGetData } from './GetData';
import { Alert } from 'react-native';

const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'

export const handleRemoveProductFromCart = async (id) => {
    const token = await storeGetData('token');
    axios.post('http://192.168.2.29:8080/api/v1/cart/remove?',
    null,
    {
        headers:{
          'Authorization':`Bearer ${token}`
        },
        params:{
          product_id:id,
          quantity:1
        }
    })
    .then(response=>{
      console.log('Remove product from cart:',response.data)
      console.log('Token',token)
    })
    .catch(error=>{
      console.log('Remove product from cart: error:',error)
      console.log('Token',token)
    });
}
export const handleDecreaseQuantity=async(id,quantity,dispatch)=>{
    const token = await storeGetData('token');
    if(quantity<=1){
      Alert.alert(
        'Xác nhận',
        'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?',
        [
          {
            text:'Hủy',
            style:'cancel'
          },
          {
            text:'Xóa',
            onPress:()=>{
                dispatch({type:'REMOVE_ITEM',payload:id})
                handleRemoveProductFromCart(id)
            },
            style:'destructive'
          },
        ],
        {cancelable:false}
      )
    }
    else{
      dispatch({type:DECREASE_QUANTITY,payload:id})
      handleRemoveProductFromCart(id)
      console.log('Decrease quantity:',id)
    }
  }

export const handleUpdateProductFromCart = async (id) => {
    const token = await storeGetData('token');
    axios.post('http://192.168.2.29:8080/api/v1/cart/update',
    null,
    {
        headers:{
          'Authorization':`Bearer ${token}`
        },
        params:{
          product_id:id,
          quantity:1
        }
    })
    .then(response=>{
      console.log('Update product from cart:',response.data)
      console.log('Token',token)
    })
    .catch(error=>{
      console.log('Update product from cart: error:',error)
      console.log('Token',token)
    });
}

export const handleIncreaseQuantity=async(id,dispatch)=>{
    dispatch({type:INCREASE_QUANTITY,payload:id})
    handleUpdateProductFromCart(id)
}

export const fetchCartItems=async (dispatch)=>{
    const token=await storeGetData('token')
    axios.get('http://192.168.2.29:8080/api/v1/cart/get-cart-details',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then(response=>{
      console.log('Cart items:',response.data)
      dispatch(
        {
          type:'SET_CART_ITEMS',
          payload:response.data
        })
    })
    .catch(error=>{
      console.log('Get cart items error:',error)
      
    })
}

export const handleAddCart = async (id,size,color) => {
    const token = await storeGetData('token');
    axios.post('http://192.168.2.29:8080/api/v1/cart/add', 
    {
      product_id: id,
      quantity: 1,
      size: size,
      color: color
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Add to cart:', response.data);
    })
    .catch(error => {
      console.log('Add to cart error:', error.message );
    });
}
