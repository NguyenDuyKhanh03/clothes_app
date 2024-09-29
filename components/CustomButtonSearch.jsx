import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButtonSearch = ({value,icon,containerStyles,textStyles, onChangeText}) => {
  return (
    <View className={`h-10 flex flex-row ${containerStyles}`}>
      <TouchableOpacity 
        activeOpacity={0.8}
        className='bg-[#e6e6e6] flex-1 justify-center pl-3'>
        <Text className={`text-base font-normal text-[#27272780]`}>{value}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        activeOpacity={0.8}
        className='w-11 h-10 bg-white justify-center items-center'>
        <Image
            source={icon}
            className='w-6 h-6'
            resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

export default CustomButtonSearch