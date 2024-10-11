import { View, Text, Image, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CartItem from '../components/CartItem'
import { FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { handleUpdateProductFromCart } from '../services/CartService'
import { fetchCartItems,handleDecreaseQuantity, handleIncreaseQuantity} from '../services/CartService'  
import { cartReducer } from '../reducer/CartReducer'

const initState={
  'cartItems':[],
  totalPrice:0
}

//2. Actions
const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'


const Cart = () => {
  
  const [state,dispatch]=useReducer(cartReducer,initState)

  useEffect(()=>{
    fetchCartItems(dispatch)
  },[])


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
            keyExtractor={(item) => item.productId.toString()}
            renderItem={({ item }) => (
              <CartItem
                url={item.url}
                proName={item.productName}
                quantity={item.quantity}
                proPrice={"$"+item.price}
                size={item.size}
                color={item.color}
                containerStyles='mx-4 mt-3'
                onDecreaseQuantity={()=>handleDecreaseQuantity(item.productId,item.quantity,dispatch)}
                onIncreaseQuantity={()=>handleIncreaseQuantity(item.productId,dispatch)}
                  
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
