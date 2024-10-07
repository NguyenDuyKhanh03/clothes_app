import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { storeGetData } from './GetData';

export const handleRemoveProductFromCart = async (id) => {
    const token = await storeGetData('token');
    axios.post('http://192.168.2.29:8080/api/v1/cart/remove',
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

export const fetchCartItems=async ()=>{
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

export const handleAddCart = async (id) => {
    const token = await storeGetData('token');
    axios.post('http://192.168.2.29:8080/api/v1/cart/add', 
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        product_id: id,
        quantity: 1
      }
    })
    .then(response => {
      console.log('Add to cart:', response.data);
    })
    .catch(error => {
      console.log('Add to cart error:', error.response ? error.response.data : error.message);
    });
}
