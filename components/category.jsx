import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Category = ({image,name,onPress, containerStyles}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      className={`flex flex-col items justify-center items-center gap-2 ${containerStyles} `}
    >
      <View className='w-14 h-14 rounded-full bg-[#F2F2F2] justify-center items-center'>
        <Image
          source={{uri:image}}
          className='w-12 h-12'
          resizeMode='contain'
        />
      </View>
      <Text className='text-xs font-normal text-[#272727]'>{name}</Text>
    </TouchableOpacity>
  )
}

export default Category