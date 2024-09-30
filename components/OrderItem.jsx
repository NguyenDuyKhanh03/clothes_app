import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import {width} from "../utils/Scaling"

const OrderItem = ({url,proName,quantity,proPrice,size,color,onIncreaseQuantity,onDecreaseQuantity,containerStyles}) => {
  return (
    <View
        className={`flex flex-row p-2 bg-[#e6e6e6] rounded-lg h-24 ${containerStyles} `}
    >
        <Image
            source={{uri: url}}
            className='w-14 h-full rounded-md mr-3 justify-center'
            resizeMode='cover'
        />
        <View className='flex justify-between '>
            <View className='flex'>
                <Text className='text-base font-light text-[#27272780] h-5 items-center justify-start mr-4'>{proName}</Text>
                <View className='flex flex-row items-center'>
                    <Text className='text-base font-light text-[#27272780]'>{color +" / "}</Text>
                    <Text className='text-base font-light text-[#27272780]'>{size}</Text>
                </View>

            </View>
            <View className='flex flex-row justify-between'
                style={{width:width-100}}
            >
                <Text className='text-lg text-red-500'>{proPrice}</Text>
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
                    <Text className='text-sm font-bold text-black mr-2'>{quantity}</Text>
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
    </View>
  )
}

export default OrderItem