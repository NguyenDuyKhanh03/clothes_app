import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <SafeAreaView>
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

      <CartItem
        url='https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg'
        proName='Abstract Art'
        proPrice='$100'
        size='M'
        color='Black'
        containerStyles='mx-2 mt-2'
      />
      <CartItem
        url='https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg'
        proName='Abstract Art'
        proPrice='$100'
        size='M'
        color='Black'
        containerStyles='mx-2 mt-2'
      />
      <CartItem
        url='https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg'
        proName='Abstract Art'
        proPrice='$100'
        size='M'
        color='Black'
        containerStyles='mx-2 mt-2'
      />
    </SafeAreaView>
  )
}

export default Cart