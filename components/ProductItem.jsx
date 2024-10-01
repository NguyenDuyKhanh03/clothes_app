import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const ProductItem = ({url,discountRate,name,price,isBestseller,containerStyles,onPress}) => {
  return (
    <View style={containerStyles} className={`rounded-lg bg-white  mx-2 my-2 ${containerStyles} `}>
        <Image
            source={{uri:url}}
            className=' rounded-t-lg w- h-[220px] '
            resizeMode='cover'
        />
        <View className='flex flex-row ml-2 mt-2 justify-center'>
            {discountRate && 
            <Text className='rounded-md border border-red-500 text-red-500 text-[8px] px-1 py-1'>{discountRate}</Text>}
            <Text   
                numberOfLines={1}
            className={`text-black text-[13px] ${discountRate?'flex-1':'flex-1'} ml-2`}>{name}</Text> 
        </View>

        {isBestseller && 
            <TouchableOpacity
                className='flex flex-row items-center mt-1'
                activeOpacity={1}
                onPress={onPress}
            >
                <Text className='text-red-500 text-xs font-medium ml-2'>Best Seller</Text>
                <Text className='text-red-500 text-xs font-normal ml-2'>Trong Á...</Text>
            </TouchableOpacity>
        }
        <Text className={`ml-2 mb-3 ${discountRate?'text-red-400':'text-black'} text-sm mt-1`}>{price}</Text>
    </View>
  )
}

export default ProductItem