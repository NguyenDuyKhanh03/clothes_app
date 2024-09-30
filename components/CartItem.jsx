import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"

const CartItem = ({url,proName,quantity,proPrice,size,color,onIncreaseQuantity,onDecreaseQuantity,containerStyles}) => {
  return (
    <TouchableOpacity
        className={`flex flex-row p-2   bg-[#e6e6e6] rounded-lg h-20 ${containerStyles} `}
        activeOpacity={1}
    >
        <Image
            source={{uri: url}}
            className='w-14 h-14 rounded-md mr-3 justify-center'
            resizeMode='contain'
        />
        <View className='flex-1 justify-center'>
            <View className='flex flex-1 h-5 flex-row justify-between items-center mb-3'>
                <Text className='text-base font-normal text-black mr-4'>{proName}</Text>
                <Text className='text-base font-bold text-black'>{proPrice}</Text>
            </View>
            <View className='flex flex-1 flex-row justify-between items-center'>
                <View className='flex flex-row mr-auto'>
                    <View className='flex flex-row justify-between items-center mr-4'>
                        <Text className='text-base font-bold text-[#27272780]'>Size - </Text>
                        <Text className='text-base font-bold text-black'>{size}</Text>
                    </View>
                    <View className='flex flex-row justify-between items-center'>
                        <Text className='text-base font-bold text-[#27272780]'>Color - </Text>
                        <Text className='text-base font-bold text-black'>{color}</Text>
                    </View>
                </View>
                <View className='flex flex-row'>
                    <TouchableOpacity
                        onPress={onDecreaseQuantity}
                        className='w-6 h-6 mr-2 items-center justify-center rounded-full bg-[#8E6CEF]'
                    >
                        <Image
                            source={icons.ic_minus}
                            className='w-3 h-3'
                            resizeMode='cover'
                        />
                    </TouchableOpacity>
                    <Text className='text-base font-bold text-black mr-2'>{""+quantity}</Text>
                    <TouchableOpacity
                        onPress={onIncreaseQuantity}
                        className='w-6 h-6 items-center justify-center rounded-full bg-[#8E6CEF]'
                    >
                        <Image
                            source={icons.ic_plus}
                            className='w-3 h-3'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CartItem