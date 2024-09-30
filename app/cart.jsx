import { View, Text, Image, Alert } from 'react-native'
import React, { useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CartItem from '../components/CartItem'
import { FlatList } from 'react-native'

//useReducer
//containerStyles:'mx-2 mt-2'
// 1.Init state
const initState={
  'cartItems':[
    {
      id:1,
      url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
      proName:'Abstract Art',
      proPrice:100,
      quantity:4,
      size:'M',
      color:'Black',
    },
    {
      id:2,
      url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
      proName:'Abstract Art',
      proPrice:100,
      quantity:4,
      size:'M',
      color:'Black',
    },
    {
      id:3,
      url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
      proName:'Abstract Art',
      quantity:4,
      proPrice:100,
      size:'M',
      color:'Black',
    },
    {
      id:4,
      url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
      proName:'Abstract Art',
      quantity:4,
      proPrice:100,
      size:'M',
      color:'Black',
    },
    {
      id:5,
      url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
      proName:'Abstract Art',
      quantity:4,
      proPrice:100,
      size:'M',
      color:'Black',
    },
  ],
  totalPrice:2000
}

//2. Actions
const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'



//3. Reducer

const cartReducer=(state,action)=>{
  console.log("Action"+ action.cartItems)
  console.log("Prev state"+ state.cartItems)

  switch(action.type){
    case INCREASE_QUANTITY:
      return{
        ...state,
        cartItems:state.cartItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity+1}:item),
        totalPrice:state.totalPrice + state.cartItems.find(item=>item.id===action.payload).proPrice,
      }
    case DECREASE_QUANTITY:
      return{
        ...state,
        cartItems:state.cartItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity-1}:item),
        totalPrice:state.totalPrice - state.cartItems.find(item=>item.id===action.payload).proPrice,
      }

    case 'REMOVE_ITEM':
      return{
        ...state,
        cartItems:state.cartItems.filter(item=>item.id!==action.payload),
        totalPrice:state.totalPrice - state.cartItems.find(item=>item.id===action.payload).proPrice,
      }
    default:
      return state
  }

}

const Cart = () => {
const [state,dispatch]=useReducer(cartReducer,initState)

  const handleDecreaseQuantity=(id,quantity)=>{
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
            onPress:()=>dispatch({type:'REMOVE_ITEM',payload:id}),
            style:'destructive'
          },
        ],
        {cancelable:false}
      )
    }
    else{
      dispatch({type:DECREASE_QUANTITY,payload:id})
    }
  }


  return (
    <SafeAreaView className='relative h-full w-full'>
      <View className='flex flex-row w-full'>
        <TouchableOpacity
          onPress={() => router.back()}
          className='w-10 h-10 bg-[#F4F4F4] backdrop-blur-2xl rounded-s-full ml-2 '
        >
          <Image
            source={icons.ic_arrow_left}
            className="w-6 h-6  "
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Text className='flex-1 text-base font-bold text-black items-center'>Cart</Text>
      </View>
      
      <FlatList
        data={state.cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            url={item.url}
            proName={item.proName}
            quantity={item.quantity}
            proPrice={"$"+item.proPrice}
            size={item.size}
            color={item.color}
            containerStyles='mx-2 mt-3'
            onDecreaseQuantity={()=>handleDecreaseQuantity(item.id,item.quantity)}
            onIncreaseQuantity={()=>dispatch({type:INCREASE_QUANTITY,payload:item.id})}
          />
        )}
      />
      <View className='flex absolute w-full bottom-1 flex-row justify-end items-center border-t border-gray-400 py-2 px-3'>
        <Text className='font-bold text-base text-red-600 mr-4'>{state.totalPrice+"đ"}</Text>
        <TouchableOpacity>
          <Text className='text-white bg-black rounded-lg p-2 text-center'>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cart