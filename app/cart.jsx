import { View, Text, Image, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CartItem from '../components/CartItem'
import { FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { handleUpdateProductFromCart } from '../services/CartService'

//useReducer
//containerStyles:'mx-2 mt-2'
// 1.Init state
const initState={
  'cartItems':[],
  totalPrice:0
}

//2. Actions
const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'



//3. Reducer

const cartReducer=(state,action)=>{

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

const storeData= async (key) =>{
  try{
    const value = await AsyncStorage.getItem(key)
    if(value !== null){
      return value;
    }
  }catch(e){
    console.log('Error:',e)
  }

}






const Cart = () => {
  
  const [state,dispatch]=useReducer(cartReducer,initState)

  const handleRemoveProductFromCart = async (id,token) => {
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


  useEffect(()=>{
    const fetchCartItems=async ()=>{
      const token=await storeData('token')
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
    fetchCartItems()
  },[])


  const handleDecreaseQuantity=async(id,quantity)=>{
    const token = await storeData('token');
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
                handleRemoveProductFromCart(id,token)
            },
            style:'destructive'
          },
        ],
        {cancelable:false}
      )
    }
    else{
      dispatch({type:DECREASE_QUANTITY,payload:id})
      handleRemoveProductFromCart(id,token)
      console.log('Decrease quantity:',id)
    }
  }

  const handleIncreaseQuantity=async(id)=>{
    dispatch({type:INCREASE_QUANTITY,payload:id})
    handleUpdateProductFromCart(id)
  }


  return (
    <LinearGradient
      colors={['#00669991', '#E5EFF5']}
      locations={[0.36,1]}
    >

      <SafeAreaView className='relative h-full w-full bg-[#C4DCE6]'>
        <View className='flex flex-row w-full mt-2'>
          <TouchableOpacity
            onPress={() => router.back()}
            className='w-10 h-10 ml-4 items-center'
          >
            <Image
              source={icons.ic_arrow_left}
              className="w-6 h-6  "
              resizeMode='contain'
            />
          </TouchableOpacity>
          <Text className='flex-1 text-xl font-bold text-black items-center absolute left-48'>Cart</Text>
        </View>
        <View className='flex-1 bg-[#f5f5f5]'>

          <FlatList
            data={state.cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                url={item.url}
                proName={item.productName}
                quantity={item.quantity}
                proPrice={"$"+item.price}
                size={item.size}
                color={item.color}
                containerStyles='mx-4 mt-3'
                onDecreaseQuantity={()=>handleDecreaseQuantity(item.id,item.quantity)}
                onIncreaseQuantity={()=>handleIncreaseQuantity(item.id)}
                  
              />
            )}
          />
          <View className='flex absolute w-full bottom-1 flex-row justify-end items-center border-t border-gray-400 py-2 px-3 bg-white '>
            <Text className='font-bold text-base text-red-600 mr-4'>{state.totalPrice+"đ"}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>router.push('./checkout')}
            >
              <Text className='text-white bg-black rounded-lg p-2 text-center'>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Cart
