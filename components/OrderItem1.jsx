import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"

const OrderItem1 = ({ url, quantity, proPrice, onIncreaseQuantity, onDecreaseQuantity, containerStyles }) => {
    return (
        <View className={`${containerStyles} items-center`}>
            <Image
                source={{ uri: url }}
                className='w-20 h-20 mb-1'
                resizeMode='cover'
            />
            <Text className='text-xs text-red-500 mb-1'>{proPrice + "đ"}</Text>
            <View className='flex flex-row mb-2 items-center border border-gray-300 rounded-2xl'>
                    <TouchableOpacity
                        onPress={onDecreaseQuantity}
                        className='w-6 h-6  items-center justify-center'
                    >
                        <Image
                            source={icons.ic_minus}
                            className='w-3 h-3 '
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <Text className='text-base font-bold  text-black text-center w-10 border-r border-l border-gray-300'>{quantity}</Text>
                    <TouchableOpacity
                        onPress={onIncreaseQuantity}
                        className='w-6 h-6 items-center justify-center'
                    >
                        <Image
                            source={icons.ic_plus}
                            className='w-3 h-3 '
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default OrderItem1